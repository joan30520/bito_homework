# 載入 selenium 相關模組
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
driver = webdriver.Chrome() #開啟chrome
driver.get('https://www.google.com') #裡面放你想打開的網頁的網址
search=driver.find_element("name", "q") #查找name為q的元素 driver.find_element 找到搜尋框的名稱再用 send_keys 搜尋想要的東西
search.send_keys("Joan wong")
search.send_keys(Keys.RETURN)

driver.close()