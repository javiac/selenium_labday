/**
 * Created by javier on 5/06/16.
 */
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

// 1. Get https://dev.visualfabriq.com
// 2. Fill email with test@test.com
// 3. Fill password with Test_1234
// 4. Click Login
// 5. Sleep for 10 seconds