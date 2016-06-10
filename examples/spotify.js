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

//Select cancion
var select_song = {
    description: "click in song, select",
    elemToWait: {xpath:"/html/body/div[3]/div[1]/div[1]/ul[1]/li"},
    // elemToWait: {xpath:"(//li[@class='selectable'])[1]"},
    action: function (oElement, driver, finish) {
        oElement.click();
        driver.switchTo().defaultContent()
        finish();
    }
}

var select_song_1 = {
    description: "click in song, select",
    elemToWait: {xpath:"//a[@id='nav-browse']"},
    // elemToWait: {xpath:"(//li[@class='selectable'])[1]"},
    action: function (oElement, driver, finish) {
        oElement.click();
        driver.sleep(10000).then(function(){
            driver.findElements({xpath: "//iframe"}).then(function(elements){
                for(var i=0; i<elements.length; i++){
                    elements[i].getAttribute("id").then(function(id){
                        console.log(id)
                        if(i==2)
                            driver.switchTo().frame(id);
                    })
                }
                finish();
            })

        })
    }
}



var tests = [
    "enter https://www.spotify.com/es/",
    "click Accede -wait 10000",
    "fill Nombre de usuario: Labday2016",
    "fill Contraseña: labday2016",
    "click Iniciar Sesión",
    "click Reproductor web",
    "delay 5000",
    "click Search",
    "delay 5000",
    change_frame_search,
    "delay 5000",
    song,
    "delay 5000",
    select_song,
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



