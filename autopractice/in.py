from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

path="C:/Users/JoanWong/Desktop/driver/ChromeDriver.exe"

driver =webdriver.Chrome(path)

driver.get("https://www.dcard.tw/f")
search=driver.find_element("name", "query")
search.clear() #避免搜尋欄位有預設的文字要先清空
search.send_keys("比特幣")

search.send_keys(Keys.RETURN) #按下enter鍵
 
element = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, "sc-d16474f3-1"))
) #等他最多10秒鐘直到某個東西出現為止
link=driver.find_element(By.LINK_TEXT,"你覺得幣圈下一次牛市是多久？")
link.click()
driver.back()
driver.back()
time.sleep(5)
driver.quit()