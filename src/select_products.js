/**
 * Created by javier on 5/06/16.
 */
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

// Login
driver.get("https://dev.visualfabriq.com")
driver.findElement(By.id('email')).sendKeys('test@test.com');
driver.findElement(By.id('password')).sendKeys('Test_1234');
driver.findElement(By.id('submit')).click();


// Enter in plan&track section
driver.wait(until.elementLocated({className: "plan-track"})).then(function(element){
    element.click();
})

// Add promotion
driver.wait(until.elementLocated({id:'btnPromotion'})).then(function(element){
    element.click();
})

// Enter in products&details tab
driver.wait(until.elementLocated({id: 'tabs'})).then(function(element){
    driver.sleep(2000)

    driver.findElement({'xpath':"(//div[@class='dropdownElement '])[2]"}).click()
    driver.findElement({'xpath':"//div[text()='Albert Heijn']"}).click()

    driver.sleep(5000)

    element.findElements({tagName:'li'}).then(function(elements){
        elements[1].click()
    })
})

// Click in add products
driver.wait(until.elementLocated({id: 'promotionTable1'})).then(function(){
    driver.sleep(2000);
    driver.findElement({id:"subDivReport2"}).then(function (element) {
        element.findElements(By.tagName('button')).then(function (elements) {
            elements[0].click();
        });
    })
})

// Click in add produts (easiest way using xpath)
//driver.sleep(5000);
//driver.findElement({xpath: "//*[text()='Add/Remove Products']"}).click();

// Add products
var buttonSelect = undefined;
driver.wait(until.elementLocated({className:'divListSearchPanel'})).then(function(oElement){
    driver.findElement(By.className('popUpCenter')).then(function (element2) {
        element2.findElement({tagName: 'button'}).then(function (element3) {
            buttonSelect = element3;
            var current = 0;
            for (var i = 0; i < 5; i++) {
                oElement.findElements({tagName: 'li'}).then(function (elements) {
                    elements[0].click();
                    buttonSelect.click();

                    current++;
                    if (current == 5) {
                        driver.executeScript("var buttons = $('button'); " +
                            "for(var i=0; i<buttons.length; i++){" +
                            "   if($(buttons[i]).html()=='SAVE'){" +
                            "       $(buttons[i]).click();" +
                            "   }" +
                            "}")
                    }
                })
            }
        })
    })
})

// Try to add product using xpath expressions
// Help:
// 1) xpath for searching by contained text'.//*[(text()="BECEL BAK EN BRAAD 200G 60X (8711200143047) (14304)")]'
// 2) Use ActionSequence to select multiple items:
//      driver.actions().keyDown(webdriver.Key.CONTROL).click(elem1).click(elem2).perform()




driver.sleep(10000).then(function(){console.log("end out")});