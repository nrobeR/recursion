// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  var result = [];
  if(typeof(obj)==='string') return obj;
  else if(typeof(obj)==='number') return obj.toString();
  else if(obj === undefined) return 'null';
  else{
  	for(var key in obj){
  		var keystring = '"' + key + '":';
  		var valuestring = stringifyJSON(obj[key]);
  		result.push(keystring + valuestring);
  	}
  	return "{" + result.join(",") + "}";
  }
};
