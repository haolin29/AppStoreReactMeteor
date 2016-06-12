#!/usr/bin/env python
#-*-coding:utf-8 -*-

from lxml.html import fromstring
import requests
import uniout
import re



# global variable
INDEX_URL = 'http://appstore.huawei.com/more/all/%d'


class Huawei_Crawler(object):

    def __init__(self):
        self.header = {
            'Cache-Control' : 'max-age=0',
            'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
            'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/601.6.17 (KHTML, like Gecko) Version/9.1.1 Safari/601.6.17'
        }

    def get_app_list(self, page):

        l = []

        global INDEX_URL
        r = requests.get(
            url = INDEX_URL % page,
            headers = self.header
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

            l.append(info)

        return l


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
    print c.get_app_list(1)
