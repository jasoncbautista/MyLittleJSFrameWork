var root = this;

(function(){
    var J = function(){};
    root.J = J;
    root.J$= {
        Core: {}
    };

    console.log('root', root);

    root.J$.Running = {};
    root.J$.Running.Entities = {};

    // Watch values and update them
    


    // My own little jQuery, mootools
    root.JQ = function(){
    };

    
    J.map= function(list, callback){


        var newList = [];
        if(Array.isArray(list)){

            // Loop over array
            var len = list.length;
            for(var ii = 0; ii < len; ii++){
               newList.push( callback(list[ii]) );
            }
        } else{

            // Loop over hashMap:
            for (prop in list){
                if(Object.prototype.hasOwnProperty.call(list, xx){
                    newList.push( callback(xx) );
                }
            }

        }

        return newList;

    };


    // A simple null function, does nothing
    J.noop = function(){};

    // document.querySelectorAll("#templates")[0].innerHTML

})(root);
