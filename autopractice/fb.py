from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
import time
options = webdriver.ChromeOptions()  #關閉FB通知
prefs = {
    'profile.default_content_setting_values':
        {
            'notifications': 2
        }
}
options.add_experimental_option('prefs', prefs)
options.add_argument("disable-infobars")  

driver = webdriver.Chrome(options=options) #driver檔案跟 python檔案要在同個資料夾中

driver.get("https://www.facebook.com/")


email = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.NAME, "email"))
)

password = WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.NAME, "pass"))
)
login=driver.find_element(By.NAME,"login" )
email.clear()
password.clear()
email.send_keys("") #輸入帳號
password.send_keys("") #輸入密碼
login.click()

time.sleep(5)
driver.quit()
