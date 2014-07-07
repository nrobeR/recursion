
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var elements = [];
  var body = document.body;
  var func = function(node,classname){
  	if (node.classList && node.classList.contains(classname))
  		elements.push(node);
  	var childs = node.childNodes;
  	for(var i = 0; i < childs.length; i++){
  		if(childs[i].nodeType != 1) continue;
  		func(childs[i],classname);
  	}
  	return true;
  }

  func(body,className);

  return elements;
};
