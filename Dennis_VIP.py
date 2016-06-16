# -*- coding: utf-8 -*-
"""
Created on Sat May 21 19:41:40 2016

@author: dennis
"""
import json
import numpy as np
import pandas as pd
        
appfile_set = set()
uid_set = set()
app_set = set()
acttime_set = set()
cateid_set = set()
#设置好各个feature的set
data = []
with open('/Users/dennis/Desktop/bigtiger/vip service prediction/user.json') as f:
    for line in f:
        data.append(json.loads(line)) 
        #把json转换成python对象 json,loads
        N = len(data) #number of data
        for 
