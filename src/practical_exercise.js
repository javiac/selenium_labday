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

//Reproductor web
var link_play = {
    description: "click link-play",
    elemToWait: {xpath:"//a[@id='nav-link-play']"},
    action: function (oElement, driver, finish) {
        oElement.click();
        finish();
    }
}

//Buscar
var change_frame_search = {
    description: "changing frame to search",
    /*elemToWait: {xpath:"(//input[@class='form-control focus'])[1]"},*/
    elemToWait: {id:"nav-search"},
    action: function (oElement, driver, finish) {
        driver.switchTo().frame('suggest');
        finish();
    }
}

//Tu canción
var song = {
    description: "click song",
    elemToWait: {xpath:"(//input[@class='form-control focus'])[1]"},
    action: function (oElement, driver, finish) {
        oElement.sendKeys("Hello");
        finish();
    }
}

// elemToWait: {xpath:"//div[@class='results']"},
//Select cancion
var select_song = {
    description: "click in song, select",
    elemToWait: {xpath:"/html/body/div[3]/div[1]/div[1]/ul[1]/li"},
    // elemToWait: {xpath:"(//li[@class='selectable'])[1]"},
    action: function (oElement, driver, finish) {
        oElement.click();
        finish();
        driver.switchTo().defaultContent()

    }
}

//Seleccionar search
var select_children = {
    description: "select children",
    elemToWait: {xpath:"((//div[@class='front'])/iframe)[2]"},
    // elemToWait: {xpath:"//*[@id="album-tracks"]/table/tbody/tr"},
    action: function (oElement, driver, finish) {
        var oID = oElement.getId();
        console.log(oID);
        oElement.click();
        finish();
    }
}

var change_frame_play_list = {
    description: "changing frame create play list",
    elemToWait: {xpath:"(//div[@class='item-data'])[1]"},
    // elemToWait: {id:"nav-search"},
    action: function (oElement, driver, finish) {
        driver.switchTo().frame('suggest');
        console.log(driver.length);
        finish();
    }
}


var tests = [
    "enter https://www.spotify.com/es/",
    "click Accede -wait 10000",
    "fill Nombre de usuario: lolipuertapuerta",
    "fill Contraseña: loliymanolo30",
    "click Iniciar Sesión",
    link_play,
    "delay 5000",
    "click Search",
    "delay 5000",
    change_frame_search,
    "delay 5000",
    song,
    "delay 5000",
    select_song,
    "delay 5000",
    select_children,
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



