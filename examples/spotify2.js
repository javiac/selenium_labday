/**
 * Usage: node checklist.js
 */
var TestRunner = require('../lib/TestRunner')


var findFrames = {
 description: "Loging",
 elemToWait: {xpath:"//div[@id='main-nav']"},
 action: function (oElement, driver, finish) {
     driver.sleep(2000)
     driver.findElements({xpath: "//iframe"}).then(function(elements){
         console.log(elements)
     })
     finish();
 }
}

var link_play = {
    description: "click link-play",
    elemToWait: {xpath:"//a[@id='nav-link-play']"},
    action: function (oElement, driver, finish) {
        oElement.click();
        finish();
    }
}

var tests = [
    "enter https://www.spotify.com/es/",
    "click Accede -wait 10000",
    "fill Nombre de usuario: javiprr",
    "fill Contraseña: jj18aa09",
    "click Iniciar Sesión",
    findFrames,
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



