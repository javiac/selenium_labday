/**
 * Created by javier on 5/06/16.
 */
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get("https://dev.visualfabriq.com")
driver.findElement(By.id('email')).sendKeys('test@test.com');
driver.findElement(By.id('password')).sendKeys('Test_1234');
driver.findElement(By.id('submit')).click();
driver.sleep(10000);