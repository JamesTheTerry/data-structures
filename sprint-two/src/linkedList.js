var LinkedList = function() {
  var list = {}; //{value: "somevalue", pointer: {next object} } 
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // set obj = node(value);
    var obj = Node(value);
    
    // if empty, head and tail are null
    if (list.head === null && list.tail === null) {
      // point list.head to obj
      list.head = obj;
      // point list.tail to obj
      list.tail = obj;
    } else {
      // point current list.tail node.next to obj
      list.tail.next = obj;
      // point list.tail to obj
      list.tail = obj;
    }
  };

  list.removeHead = function() {
    if (list.head === null) {
      console.log('what are you doing man');
    } else {
      // store current head as output
      var output = list.head;
      // move list.head to output.next
      list.head = output.next;
      // delete output.next
      delete output.next;
      // return output.value
      return output.value;
    }
  };

  list.contains = function(target, node) {
    // set node to head if node is undefined
    node = node || list.head;
    
    // if value is target.value
      // return true
    // else if list.tail = node
      // return false
    // else
      // recurse to next node
      
    if (JSON.stringify(target) === JSON.stringify(node.value)) {
      return true;
    } else if (list.tail === node) {
      return false;
    } else {
      return list.contains(target, node.next);
    }
  };
  
  list.removeTail = function () {
    var traverser = list.head;
    
    if (list.head === list.tail) {
      var output = traverser.value;
      list.head = null;
      list.tail = null;
      list = {};
    } else {
      while (traverser.next && traverser.next !== list.tail) {
        traverser = traverser.next;
      }
      // traverser is the second to last node

      // store the old tail's value as the output
      // set the tail to traverser
      // null the new tail's (traverser's) next
      var output = list.tail.value;
      list.tail = traverser;
      traverser.next = null;
    }
    
    return output;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add is O(1)
 * remove is O(1)
 * contains is O(n)
 */
 
