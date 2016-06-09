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
    "enter https://www.alsa.es",
    "click Origen -wait 2000",
    "fill Origen: Granada",
    "click Destino -wait 5000",
    "fill Destino: Cordoba",
    "click Ida",
    "fill Ida: 10/06/2016",
    "click Vuelta",
    "fill Vuelta: 17/06/2016",
    "click Busca el mejor precio",
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



