from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# A very simple test. You would want to break this down into smaller tests in 
# a real test file.
def test_app():
  host = 'http://localhost:3000'
  driver = webdriver.Chrome()

  driver.get(host)
  assert driver.title == 'Selenium + Next.js'

  # This will fail if the element cannot be found
  driver.find_element(By.XPATH, '//h1[text()="Welcome to My Site"]')

  # Find a link, assert that it links to the correct page, and click it
  to_expandable_content = driver.find_element(By.LINK_TEXT, 'To Expandable Content Page')
  assert to_expandable_content.get_attribute('href') == host + '/with-expandable-content'
  to_expandable_content.click()

  # On the new page, click some buttons and verify that the text changes
  # appropriately. Use an explicit wait to ensure buttons have loaded.
  wait = WebDriverWait(driver, 2)
  wait.until(EC.presence_of_element_located((By.XPATH, '//button')))
  open_content_buttons = driver.find_elements(By.XPATH, '//button')
  open_content_buttons[0].click()
  assert open_content_buttons[0].text == 'Show less'

  open_content_buttons[1].click()
  assert open_content_buttons[1].text == 'Show less'

  open_content_buttons[2].click()
  assert open_content_buttons[2].text == 'Show less'

  # Navigate home
  back_to_home = driver.find_element(By.LINK_TEXT, 'Back to Home')
  assert back_to_home.get_attribute('href') == host + '/'
  back_to_home.click()

  # Navigate to /with-loading-indicator
  to_loading_indicator = driver.find_element(By.LINK_TEXT, 'To Loading Indicator Page')
  assert to_loading_indicator.get_attribute('href') == host + '/with-loading-indicator'
  to_loading_indicator.click()

  # Wait for the page to "load"
  wait = WebDriverWait(driver, 10)
  wait.until(EC.presence_of_element_located((By.XPATH, '//p[text()="Loaded successfully!"]')))

  driver.quit()
