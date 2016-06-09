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

//Seleccionar search
var select_search = {
    description: "click select search",
    elemToWait: {xpath:"//a[@id='nav-search']"},
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
/*

var son = {
    description: "click cancion",
    /!*elemToWait: {xpath:"(//input[@class='form-control focus'])[1]"},*!/
    elemToWait: {xpath:"//html[@class='web']/descendant::input"},
    action: function (oElement, driver, finish) {
        oElement.sendKeys("Hello");
        finish();
    }
}
*/

//Tu canción
var song = {
    description: "click song",
    elemToWait: {xpath:"(//input[@class='form-control focus'])[1]"},
    action: function (oElement, driver, finish) {
        oElement.sendKeys("Adele Hello");
        finish();
    }
}

//Select cancion
var select_song = {
    description: "click select song",
    elemToWait: {xpath:"(//li[@class='selectable'])[1]"},
    action: function (oElement, driver, finish) {
        oElement.click();
        finish();
    }
}

//Tu musica
var your_music = {
    description: "click your music",
    elemToWait: {xpath:"//a[@id='nav-collection']"},
    action: function (oElement, driver, finish) {
        oElement.click();
        finish();
    }
}

var reproduce_song = {
    description: "click reproduce song",
    elemToWait: {xpath:"//div[@class='btn-play-text']"},
    action: function (oElement, driver, finish) {
        oElement.click();
        finish();
    }

}
var play_list = {
    description: "click create play list",
    elemToWait: {xpath:"(//div[@class='item-data'])[1]"},
    action: function (oElement, driver, finish) {
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
    select_search,
    "delay 5000",
    change_frame_search,
    "delay 5000",
    song,
    "delay 5000",
    select_song,
    "delay 5000",
    reproduce_song,
    "delay 5000",
    your_music,
    "delay 5000",
    change_frame_play_list,
    "click Nueva playlist",
    link_play,
    "delay 5000",
    "click Search -wait 2000",
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



