import random
from threading import Thread
from time import sleep

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


class SeleniumWorkerProcess(Thread):
    def run(self) -> None:
        ...


class SeleniumWorker:
    def __init__(
        self,
        proxy: str,
        keyword: str,
        user_agent: str | None,
        screen_width=1920,
        screen_height=1080,
    ):
        chrome_options = webdriver.ChromeOptions()
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument(f"--window-size={screen_width},{screen_height}")
        if user_agent is not None:
            chrome_options.add_argument(f"user-agent={user_agent}")
        chrome_options.add_argument(f"--proxy-server={proxy}")
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.implicitly_wait(10)

        self.keyword = keyword

    def execute_job(self):
        self.driver.get("https://google.com")

        search_box: WebElement = WebDriverWait(self.driver, 30).until(
            EC.presence_of_element_located((By.XPATH, '//input[@name="q"]'))
        )
        search_box.click()

        typing_multiplier = random.randint(20, 120)
        for word in self.keyword:
            search_box.send_keys(word)
            sleep(random.randint(2, 10) / typing_multiplier)
        sleep(random.randint(1, 5))

        search_box.send_keys(Keys.ENTER)

        results_main: WebElement = WebDriverWait(self.driver, 30).until(
            EC.presence_of_all_elements_located((By.XPATH, '//div[@id="main"]//div[@data-header-feature="0"]/div/a'))
        )

        print(results_main)
        # TODO: Implement visit logic
