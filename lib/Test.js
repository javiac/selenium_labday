/**
 * Test model
 * Created by javier on 8/05/16.
 */
function TestModel(test){
    var type = undefined;
    var description = "";
    var value = "";
    var label = "";
    var elemToWait = undefined; // Used only for custom tests
    var action = function(){}
    var delay = undefined;

    /**
     * Create a test model from user defined test. It can be a string or a object
     * @param test User defined test
     */
    var createTest = function(test){
        if(typeof test == "string"){
            // Get -wait param
            var waitKey = " -wait "
            var waitPos = test.indexOf(waitKey)
            if(waitPos!=-1){
                delay = parseInt(test.substring(waitPos+waitKey.length, test.length))
                test = test.substring(0, waitPos)
            }else{
                delay = undefined
            }

            // Match with command set
            var result = test.match(/(fill)\s(.+):\s?(.+)/)
            if(result == null){
                result = test.match(/(click)\s(.+)/)
            }

            if(result == null){
                result = test.match(/(delay)\s(\d+)/)
            }

            if(result == null){
                result = test.match(/(enter)\s(.+)/)
            }

            if(result == null){
                result = test.match(/(clickXpath)\s(.+)/)
            }

            if(result == null){
                result = test.match(/(doubleClick)\s(.+)/)
            }

            if(result == null){
                result = test.match(/(keyDown)\s(.+)/)
            }

            if(result == null){
                result = test.match(/(keyUp)\s(.+)/)
            }

            // Build model from result
            if(result){
                description = result[0];
                type = result[1];
                label = result[2];
                value = result[3];
            }else{
                console.log("Syntax error: " + test)
            }
        }
        // Custom test
        else{
            type = "custom";
            description = test.description;
            elemToWait = test.elemToWait;
            action = test.action;
            delay = test.delay;
        }

    }

    this.print = function(){
        console.log(description);
    }

    this.getType = function(){
        return type;
    }

    this.getDescription = function(){
        return description;
    }

    this.getValue = function(){
        return value;
    }

    this.getLabel = function(){
        return label;
    }

    this.getElemToWait = function(){
        return elemToWait;
    }

    this.makeAction = function(element, driver, callback){
        action(element, driver, callback)
    }

    this.getWait = function(){
        return delay
    }

    createTest(test);
}

module.exports = TestModel;


