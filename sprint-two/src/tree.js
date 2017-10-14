var Tree = function(value) {
  var newTree = {};
  
  newTree.value = value;
  newTree.children = [];  // fix me - done
  newTree.parent = null;
  extend(newTree, treeMethods);
  
  return newTree;
};

// create Class for tree node creation
var Node = function (value) {
  //create empty object
  var node = {};
  
  //add variables to the object class
  node.value = value;
  node.children = [];
  node.parent = null;
  
  //extend methods from outside the class into the class
  extend(node, treeMethods);
  //return the Class Object
  return node;
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
  node.parent = this;
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

//recorsive method to remove a node
treeMethods.removeNode = function(target, current, previous) {
  // store the current node and previous node as we traverse to find the node
  current = current || this;
  previous = previous || this;
  
  // if we find the target node
    // remove the target/current node from previous' children array
    // go through the children and move them to the previous node
    // delete the current node
  // else if there are children in the current node
    // go through all of them recursively
  if (current.value === target) {
    previous.children.forEach(function(child, index) {
      if (child.value === current.value) {
        previous.children.splice(index, 1);
      }
    });
    current.children.forEach(function(child) {
      previous.children.push(child);
    });
    delete current;
  } else if (current.children.length > 0) {
    current.children.forEach(function(child) {
      treeMethods.removeNode(target, child, current);
    });
  }
};

// going to refactor removeNode into one that uses the parent property
treeMethods.removeFromParent = function() {

  ////////////////////////////////////
  // store current node in node
  // loop through the parent's children
    // remove the pointer to node
  // store node's children in the parents children
  // debugger;
  var node = this;
  var parent = this.parent;
  if (parent.children && parent.children.length > 0) {
    for (var i = 0; i < parent.children.length; i++) {
      if (node === parent.children[i]) { 
        parent.children.splice(i, 1);
      }
    }
    parent.children = parent.children.concat(node.children); 
    console.log (parent.children);
  }
};



treeMethods.traverse = function (callback, currentNode) {
  
  currentNode = currentNode || this;
  
  callback(currentNode);
  currentNode.children.forEach (function (child) {
    currentNode.traverse(callback, child);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild is O(1)
 * contains is O(n)
 * 
 */













