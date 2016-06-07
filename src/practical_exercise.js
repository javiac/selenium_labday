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
    "fill Email: coop@test.com",
    "fill Password: Coop_1234",
    "clickXpath //*[@id='submit']",
    "delay 10000"
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



