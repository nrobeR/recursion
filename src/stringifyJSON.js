// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var result = [];
  if(typeof(obj)==='string') return '"' + obj + '"';
  else if(typeof(obj)==='number' || typeof(obj)=== 'boolean' || obj === null)
    return '' + obj + '';
  else if(typeof obj === 'object' && 'length' in obj){
    for(var i = 0; i < obj.length; i++){
      var element = stringifyJSON(obj[i]);
      if(element === undefined) continue;
      result.push(element);
    }
    return "[" + result.join(",") + "]";
  }
  else if(typeof obj === 'object'){
  	for(var key in obj){
      var valuestring = stringifyJSON(obj[key])
      if(valuestring === undefined)
        continue;
  		var keystring = '"' + key + '":';
  		result.push(keystring + valuestring);
  	}
  	return "{" + result.join(",") + "}";
  }
  else
    return;
};
