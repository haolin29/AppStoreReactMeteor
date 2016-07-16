#!/usr/bin/env python
#-*-coding:utf-8 -*-

from lxml.html import fromstring
import requests
import uniout
import re
from pymongo import MongoClient
from threading import Thread
import sys

# global variable
INDEX_URL = 'http://appstore.huawei.com/more/all/%d'
APP_PAGE_URL = 'http://appstore.huawei.com/app/%s'


class Huawei_Crawler(object):

    def __init__(self):
        client = MongoClient('mongodb://127.0.0.1:3001/meteor')
        db = client.meteor
        self.apps = db.apps

        self.headers = {
            'Cache-Control' : 'max-age=0',
            'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/601.6.17 (KHTML, like Gecko) Version/9.1.1 Safari/601.6.17'
        }

    def get_app_list(self, page):

        # l = []

        global INDEX_URL
        r = requests.get(
            url = INDEX_URL % page,
            headers = self.headers
        )
        tree = fromstring(r.content)

        divs = tree.xpath('//div[@class="list-game-app dotline-btn nofloat"]')

        # thread list
        threads = []

        # add app into the l
        for div in divs:
            app_id = self.extract_data('.*?app/(.*?)$', div.xpath('div[@class="game-info-ico"]/a/@href')[0])

            threads.append(Thread(target = self.get_app_by_id, args = (app_id,)))

            # l.append(info)

        # return l
        for thread in threads:
            thread.start()

        for thread in threads:
            thread.join()


    def get_app_by_id(self, app_id):
        global APP_PAGE_URL

        app_page_url = APP_PAGE_URL % app_id
        r = requests.get(
            url = app_page_url,
            headers = self.headers
        )
        tree = fromstring(r.content)

        # Check whether the app in db
        if self.apps.find({'app_id' : app_id}).count():
            return

        # Check whether the app exist
        if tree.xpath('//div[@class="txt-404"]'):
            return

        info = {}
        icon_url = tree.xpath('//div[@class="app-info flt"]/ul/li/img/@lazyload')[0]

        app_name = tree.xpath('//div[@class="app-info flt"]/ul/li/p/span[@class="title"]/text()')[0]

        download_times = int(self.extract_data('.*?([0-9]+).*?', \
                tree.xpath('//div[@class="app-info flt"]/ul/li/p/span[@class="grey sub"]/text()')[0]))

        rate = int(self.extract_data('score_(.*?)$', \
                tree.xpath('//div[@class="app-info flt"]/ul/li[last()]/p[last()]/span/@class')[0]))

        download_url = self.extract_data('.*?\'(http://.*?)\'', \
                tree.xpath('//div[@class="app-function nofloat"]/a[last()]/@onclick')[0].replace('\n', ''))

        category_l = tree.xpath('//input[@id="typeName"]/@value')
        category = category_l[0] if category_l else '其他'

        full_intro = tree.xpath('//div[@class="content"]/div[@id="app_strdesc"]/text()')
        app_img = tree.xpath('//div[@id="contentImages"]/ul/li/a/@href')

        # get the recommendation app
        recomm_div = tree.xpath('//div[@class="unit nofloat corner"]/div[@class="unit-main nofloat"]')
        recomm_apps = []
        if recomm_div:
            recomm_list = recomm_div[0].xpath('div[@class="app-sweatch  nofloat"]//div[@class="open-ico"]/a/@href')
            for link in recomm_list:
                recomm_apps.append(self.extract_data('.*?app/(.*?)$', link))

        # threads list
        threads = []
        for app_recomm_id in recomm_apps:
            threads.append(Thread(target = self.get_app_by_id, args = (app_recomm_id,)))

        info['app_name'] = app_name
        info['icon_url'] = icon_url
        info['download_times'] = int(download_times)
        info['rate'] = int(rate)
        info['download_url'] = download_url
        info['category'] = category
        info['full_intro'] = full_intro
        info['recomm_apps'] = recomm_apps
        info['app_id'] = app_id
        info['app_img'] = app_img

        print app_name

        self.apps.insert_one(info)


    '''
    A method to extract target data by regex
    '''
    def extract_data(self, pattern, data):
        p = re.compile(pattern)
        m = p.match(data)
        if m:
            return m.group(1)
        else:
            return data

if __name__ == '__main__':
    c = Huawei_Crawler()

    if len(sys.argv) == 1:
        for i in xrange(1, 42):
            print '------------------------' + str(i) + '--------------------------'
            c.get_app_list(i)
    elif len(sys.argv) == 2:
        c.get_app_by_id(sys.argv[1])
    # c.get_app_details('http://appstore.huawei.com/app/C32569')
    # thread.start_new_thread(c.get_app_details, ('http://appstore.huawei.com/app/C32569', ))
    # c.get_app_by_id('C10068705')
