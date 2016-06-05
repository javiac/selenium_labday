/**
 * Created by javier on 5/06/16.
 */
/**
 * Usage: node checklist.js
 */
var TestRunner = require('../lib/TestRunner')

/**
 * Example of custom test
 * @type {{description: string, elemToWait: {xpath: string}, action: loging.action}}
 */
/*var loging = {
 description: "Loging",
 elemToWait: {xpath:"//!*[@id='submit']"}, // Or {id: ..}, {tagName: ..}, {className: ..}
 action: function (oElement, driver, finish) {
 oElement.click();
 finish();
 }
 }*/

var tests = [
    "enter https://dev.visualfabriq.com",
    "fill Email: test@test.com",
    "fill Password: Test_1234",
    "clickXpath //*[@id='submit']",
    "click Plan & Track",
    "clickXpath //button[@id='btnPromotion']",
    "clickXpath (//div[@class='dropdownElement '])[2]",
    "click Albert Heijn -wait 5000",
    "click 2. Product & Details",
    "click Add/Remove Products -wait 10000",
    "keyDown CONTROL",
    "click BECEL BAK EN BRAAD 200G 60X (8711200143047) (14304)",
    "click CROMA BAK EN BRAAD 250G 60X (8711200172344) (14344)",
    "click UNOX ROOKWORST TRADITIONEEL BL1 275G 12X (8711200162147) (21621401)",
    "click LIPTON ICE TEA SPARKLING 0.2L 28X (8711200178643) (32314)",
    "keyUp CONTROL",
    "clickXpath (//i[@class='fa fa-angle-right'])[2]",
    "click SAVE -wait 5000",
    /* Fill here fields: "% Discount of NIV!" and "Logistic post FWB % *" */
    "delay 10000",

]

// TestRunner configuration
var config = {
    fil: 1,
    col: 1,
    windowSize:{
        width: 1366,
        height: 768
    }
}

var testRunner = new TestRunner();

testRunner.setConfig(config);

testRunner.setTests(tests)

testRunner.start()



