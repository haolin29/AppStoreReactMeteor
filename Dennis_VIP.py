# -*- coding: utf-8 -*-
"""
Created on Sat May 21 19:41:40 2016

@author: dennis
"""
import json
import numpy as np
import pandas as pd
from pandas import DataFrame, Series
        
path = '/Users/dennis/Desktop/bigtiger/vip service prediction/user.json'#设定路径 
records = [json.loads(line) for line in open(path)] #用for in 把数据导入， json.loads把json变成python字典

frame = DataFrame(records)
N= frame.isnull().values.sum()#查看有无空值



