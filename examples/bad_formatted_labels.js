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
    "fill Destino: Cordoba -wait 2000",
    "click Ida",
    "fill Ida: 17/06/2016",
    "click Vuelta",
    "fill Vuelta: 24/06/2016",
    "click Busca el mejor precio -wait 5000",
    "clickXpath //*[@id='outwardJourney0-0']/div",
    "click Continuar -wait 2000",
    "click Continuar",
    "fill Nombre: Loli",
    "fill Apellidos: Puerta Puerta",
    "fill Número de documento: 76421162M",
    "fill Email: loli@gmail.com",
    "fill Repetir email: loli@gmail.com",
    "delay 2000",
    "clickXpath (//*[@class='simula-checkbox'])[4]",
    "delay 5000",
    "clickXpath (//*[@class='simula-radio'])[11]",
    "delay 5000",
    "click Pagar",
    "delay 50000"
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



