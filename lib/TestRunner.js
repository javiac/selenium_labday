var webdriver = require('selenium-webdriver')
var TestModel = require('./Test')

function TestRunner() {

    this.By = webdriver.By;
    this.until = webdriver.until;
    this.Key = webdriver.Key;

    var oConfig = undefined;

    /**
     * Array containing tests to run
     * @type {Array}
     */
    var testList = [];

    var thisHolder = this;

    /**
     * Object used to link actions
     * @type {undefined}
     */
    var actionSequence = undefined;

    /**
     * Perform tests recursively
     * n Current test
     * driver Driver object
     */
    this.performTest = function (n, driver) {
        if (n < testList.length) {
            var elemToWait = undefined;
            var type = testList[n].getType();
            var label = testList[n].getLabel();
            var delay = testList[n].getWait();

            console.log(testList[n].getDescription())

            if (type == "delay") {
                driver.sleep(parseInt(label));
                thisHolder.performTest(n + 1, driver);

            } else if (type == "enter") {
                driver.get(label);
                thisHolder.performTest(n + 1, driver);

            } else if(type == "keyDown") {
                actionSequence = driver.actions().keyDown(thisHolder.Key[label])
                thisHolder.performTest(n + 1, driver);

            } else if(type == "keyUp"){
                actionSequence.keyUp(thisHolder.Key[label]).perform().then(function(){
                    actionSequence = undefined;
                });
                thisHolder.performTest(n + 1, driver);

            } else {
                // Get locator of the element to wait for
                if (type == "click" || type == "doubleClick" || type == "fill") {
                    elemToWait = {xpath: '(.//*[(text()="' + label + '")] | .//*[@value="'+label+'"] | ' +
                    '//label[contains(text(), "'+ label +'")] | //a[contains(text(), "'+ label +'")])[1]'}
                } else if (type == "custom") {
                    elemToWait = testList[n].getElemToWait();
                } else if (type == 'clickXpath') {
                    elemToWait = {xpath: label}
                }

                // Wait for the element to appear in the screen
                var promise = driver.wait(thisHolder.until.elementLocated(elemToWait), 240000);

                // Perform action when found
                promise.then(function (element) {
                    if (type == "click" || type == "clickXpath") {
                        if(actionSequence){
                            actionSequence = actionSequence.click(element);
                        }else{
                            element.click();
                        }

                        if(delay) driver.sleep(delay) // Sleep before next test

                        thisHolder.performTest(n + 1, driver); // Perform next test

                    } else if (type == "fill") {
                        // Find closest input to the label
                        var input = driver.findElement({
                            xpath: "(//*[text()='" + label + "']/following-sibling::*[1]/descendant-or-self::input |" +
                            "//*[text()='" + label + "']/parent::*/following-sibling::*[1]/descendant-or-self::input |" +
                            "//*[text()='" + label + "']/parent::*/parent::*/following-sibling::*[1]/descendant-or-self::input |" +
                            "//label[contains(text(), '"+ label +"')])[1]"
                        });

                        input.sendKeys(testList[n].getValue()); // Fill the input

                        if(delay) driver.sleep(delay) // Sleep before next test

                        thisHolder.performTest(n + 1, driver);

                    } else if (type == "custom") {
                        testList[n].makeAction(element, driver, function () {
                            thisHolder.performTest(n + 1, driver);
                        });

                    } else if (type == "doubleClick") {
                        driver.actions().doubleClick(element)
                        if(delay) driver.sleep(delay) // Sleep before next test
                        thisHolder.performTest(n + 1, driver);
                    }
                })
            }
        }
    }


    this.start = function () {
        for (var i = 0; i < oConfig.fil; i++) {
            for (var j = 0; j < oConfig.col; j++) {
                (function (n) {
                    var flow = new webdriver.promise.ControlFlow()
                        .on('uncaughtException', function (e) {
                            console.log('uncaughtException in flow %d: %s', n, e);
                        });

                    var driver = new webdriver.Builder()
                        .forBrowser('firefox')
                        .setControlFlow(flow)
                        .build();

                    var windowWidth = oConfig.windowSize.width / (oConfig.col * 1.0);
                    var windowHeight = oConfig.windowSize.height / (oConfig.fil * 1.0);


                    driver.manage().window().setSize(windowWidth, windowHeight);
                    driver.manage().window().setPosition(windowWidth * j, windowHeight * i);

                    console.log("Perform tests: ")

                    thisHolder.performTest(0, driver)

                    driver.quit();
                })(j + i * oConfig.fil)
            }
        }
    }

    this.setConfig = function (config) {
        oConfig = config;
    }

    /**
     * Set test and put them into a Test model
     * @param list Array of test
     */
    this.setTests = function (list) {
        for (var i = 0; i < list.length; i++) {
            testList.push(new TestModel(list[i]))
        }
    }

    this.printTests = function () {
        for (var i = 0; i < testList.length; i++) {
            testList[i].print()
        }
    }
}

module.exports = TestRunner;