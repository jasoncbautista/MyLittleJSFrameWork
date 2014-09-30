var root = this;

(function(){
    var J = function(){};
    root.J = J;
    root.J$= {
        Core: {}
    };


    root.J$.Running = {};
    root.J$.Running.Entities = {};

    // Watch values and update them
    
    // My own little jQuery, mootools
    root.JQ = function(){
    };

    /**
    * Simple map function. Loops over a list and applies a callback, generates
    * a new array based on that list. 
    *
    * @param {object} an array or map
    * @param {function} a callback to apply to each object
    * @return {array} a list with all the new values
    **/
    J.map= function(list, callback){
        var newList = [];

        if(Array.isArray(list)){
            var len = list.length;

            // Loop over array
            for(var ii = 0; ii < len; ii++){
               newList.push( callback(list[ii]) );
            }
        } else{

            // Loop over hashMap:
            for (prop in list){
                
                if(Object.prototype.hasOwnProperty.call(list, prop)){

                    // value, key
                    newList.push( callback(list[prop], prop) );
                }
            }
        }

        return newList;
    };

    // UID for Model ==>  url route  / path callback fxns, hash url

    // A simple null function, does nothing
    J.noop = function(){};

    console.log('root', root);
    // document.querySelectorAll("#templates")[0].innerHTML

    
    /*
        ModelX.set("name", "D");

        tempalteX.render({
            "name", ModelX
        });

        TemplateMaster  -> manages subs
        // Rerender everything around it

    */

})(root);
