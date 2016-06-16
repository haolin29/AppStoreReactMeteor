#!/usr/bin/env python
#-*-coding:utf-8 -*-

from lxml.html import fromstring
import requests
import uniout
import re
from pymongo import MongoClient
import thread



# global variable
INDEX_URL = 'http://appstore.huawei.com/more/all/%d'


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

        l = []

        global INDEX_URL
        r = requests.get(
            url = INDEX_URL % page,
            headers = self.headers
        )
        tree = fromstring(r.content)

        divs = tree.xpath('//div[@class="list-game-app dotline-btn nofloat"]')

        # add app into the l
        for div in divs:
            info = {}
            info['preview_url'] = div.xpath('div[@class="game-info-ico"]/a/@href')[0]
            info['app_id'] = self.extract_data('.*?app/(.*?)$', info['preview_url'])
            info['icon_url'] = div.xpath('div[@class="game-info-ico"]/a/img/@lazyload')[0]
            info['app_name'] = div.xpath('div[@class="game-info  whole"]/h4[@class="title"]/a/text()')[0]
            info['short_intro'] = div.xpath(\
                'div[@class="game-info  whole"]/div[@class="game-info-dtail part"]/p[@class="content"]/text()')[0]
            info['download_url'] = self.extract_data('.*?\'(http://.*?)\'', \
                div.xpath('div[@class="game-info  whole"]/div[@class="app-btn"]/a/@onclick')[0])
            info['rate'] = self.extract_data('score_(.*?)$', div.xpath('div[@class="game-info  whole"]/h4[@class="title"]/span/@class')[0])
            info['download_times'] = self.extract_data('.*?([0-9]+).*?', div.xpath('div[@class="game-info  whole"]/div[@class="app-btn"]/span/text()')[0])

            # open a new thread to crawl detailed information
            # thread.start_new_thread(self.get_app_details, (info['preview_url'],))
            self.apps.insert_one(info)
            self.get_app_details(info['preview_url'])

            l.append(info)

        return l

    '''
    A method to crawl the details information of an app
    '''
    def get_app_details(self, url):
        r = requests.get(
            url = url,
            headers = self.headers
        )
        tree = fromstring(r.content)

        # get the detailed information from page
        app_id = tree.xpath('//input[@id="appId"]/@value')[0]
        category = tree.xpath('//input[@id="typeName"]/@value')[0]
        full_intro = tree.xpath('//div[@class="content"]/div[@id="app_strdesc"]/text()')
        app_img = tree.xpath('//div[@id="contentImages"]/ul/li/a/@href')

        # get the recommendation app
        recomm_div = tree.xpath('//div[@class="unit nofloat corner"]/div[@class="unit-main nofloat"]')[0]
        recomm_list = recomm_div.xpath('div[@class="app-sweatch  nofloat"]//div[@class="open-ico"]/a/@href')
        recomm_apps = []
        for link in recomm_list:
            recomm_apps.append(self.extract_data('.*?app/(.*?)$', link))

        info = {
            'app_id' : app_id,
            'category' : category,
            'full_intro' : full_intro,
            'app_img' : app_img,
            'recomm_apps' : recomm_apps
        }


        self.apps.update({ 'app_id' : app_id }, {'$set' : info})




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
    c.get_app_list(1)
    # c.get_app_details('http://appstore.huawei.com/app/C32569')
    # thread.start_new_thread(c.get_app_details, ('http://appstore.huawei.com/app/C32569', ))
