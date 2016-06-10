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
    //Connect to the web of Alsa
    //Fill origin input with Granada
    //Fill destination input with Cordoba
    //Click "Ida"
    //Going date 17/06/2016
    //Return date 24/06/2016
    //Click "Buscar el mejor precio"
    //Click price
    //Click "Continuar"
    //Click "Continuar"
    //Fill name
    //Fill last name
    //Fill Email
    //Fill Repeat Email
    //Click conditions
    //Click Paypal
    //Click "Pagar"

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


