// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var findClass = function(node) {
debugger;
    
    var list = node.childNodes;
     if (list) {
      list.forEach(function(element){
        if (list.contains(className)) {
          result.push(node);
        }
      });
    }
    
    if (node.childNodes.length > 0) {
      findClass(node.childNodes);
    }
  }
  findClass(document.body);
  return result;
//get a list of all the nodes that have been loaded in DOM
//loop through through the list of nodes -recursion to find children
//pull elements with === (classname)
//declare a 
};
