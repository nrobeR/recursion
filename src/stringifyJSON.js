// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (Array.isArray(obj)) {
    // return '[' + stringifyJSON(obj) + ']';
    var result = [];
    for(var i = 0; i<obj.length;i++){
      if (typeof obj[i] === 'function'|| typeof obj[i] === 'undefined') {
        continue;
      }
      result.push(stringifyJSON(obj[i]));
    }
    return '[' + result + ']';
  }
  if(obj && typeof(obj)==='object'){
    var result = [];
    for(var key in obj){
      if(typeof(key) === 'function' || typeof(obj[key]) === 'function'){
        continue;
      }
      if (typeof(key) === 'undefined' || typeof(obj[key]) === 'undefined') {
        continue;
      }
      result.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }
    return '{' + result + '}';
  }
  if (typeof obj === 'string'){
    return '"' + obj + '"';
  }
  return ''  + obj;
};
