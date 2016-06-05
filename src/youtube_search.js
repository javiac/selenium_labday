/**
 * Created by javier on 5/06/16.
 */
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.youtube.com');
driver.findElement(By.xpath('//input[@placeholder="Search"]')).sendKeys('epic cails compilation');
driver.findElement(By.className('yt-uix-button yt-uix-button-size-default yt-uix-button-default search-btn-component search-button')).click();
/*driver.sleep(5000);*/
driver.wait(until.elementLocated(By.linkText('Ultimate Fails Compilation 2014 || FailArmy Best Fails of the Year')))
driver.findElement(By.linkText('Ultimate Fails Compilation 2014 || FailArmy Best Fails of the Year')).click();
driver.sleep(10000);
console.log("hola")
driver.quit();