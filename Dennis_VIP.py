# -*- coding: utf-8 -*-
"""
Created on Sat May 21 19:41:40 2016

@author: dennis
"""
import json
import numpy as np

data = []
with open('/Users/dennis/Desktop/bigtiger/vip service prediction/user.json') as f:
    for line in f:
        data.append(json.loads(line)) 
        #把json转换成python对象 json,loads
        