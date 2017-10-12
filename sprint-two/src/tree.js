var Tree = function(value) {
  var newTree = {};
  
  newTree.value = value;
  newTree.children = [];  // fix me - done
  
  extend(newTree, treeMethods);
  
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // var node = Node(value)
  var node = Node(value);
  // push node to this.children
  this.children.push(node);
};

treeMethods.contains = function(target, node, foundVal) {
  // node || root of tree (newTree)
    //if target === value || foundVal
      //return true
  //else if no children 
    //return false
  // foreach childe
    //return recursive to contains
  //arrays results;
  //code
  //look through if there a true , return true

  node = node || this;
  foundVal = foundVal || false;
  if (target === node.value || !!foundVal) {
    foundVal = true;
    return true;
  } else if (node.children.length === 0) {
    return false;
  } else {
    node.children.forEach(function (child) {
      foundVal = treeMethods.contains(target, child, foundVal);
    });
  }
  return foundVal;
};


// create Class for tree node creation
var Node = function (value) {
  var node = {};
  
  node.value = value;
  node.children = [];
  
  extend(node, treeMethods);
  
  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild is O(1)
 * contains is O(n)
 * 
 */













