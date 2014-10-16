
// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  // your code here

  var result = [];
  var node = node || document.body;
  var hasChild = node.childNodes;
  // check if node has childnodes -
  // if it does,

  if (node.classList.length > 0) {
    for (var i = 0; i < node.classList.length; i++) {
      if (node.classList[i] === className) {
        result.push(node);
      }
    }
  }
  if (hasChild.length > 0) {
    for (var j = 0; j < hasChild.length; j++) {
      if (hasChild[j].nodeType === 1) {
        result = result.concat(getElementsByClassName(className, hasChild[j]));
      }
    }
  }
  return result;
};
