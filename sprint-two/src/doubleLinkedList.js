var DoubleLinkedList = function() {
  var dList = {}; //{value: "somevalue", pointer: {next object} } 
  dList.head = null;
  dList.tail = null;
  
  dList.addToHead = function(value) {
    // set this new value as a linked list node
    var insertNode = DLNode(value);
    
    // set the insertNode's next to head
    // set the old head's prev to insertNode
    // set the head pointer to insertNode
    
    insertNode.next = dList.head;
    dList.head.prev = insertNode;
    dList.head = insertNode;
  };

  dList.addToTail = function(value) {
    // set obj = node(value);
    var obj = DLNode(value);
    
    // if empty, head and tail are null
    if (dList.head === null && dList.tail === null) {
      // point dList.head to obj
      dList.head = obj;
      // point dList.tail to obj
      dList.tail = obj;
    } else {
      // point current dList.tail node.next to obj
      dList.tail.next = obj;
      // point the new object.prev to current tail
      obj.prev = dList.tail;
      // point dList.tail to obj
      dList.tail = obj;
    }
  };

  dList.removeHead = function() {
    if (dList.head === null) {
      console.log('what are you doing man');
    } else {
      // store current head as output
      var output = dList.head;
      // move dList.head to output.next
      dList.head = output.next;
      // set the new head.prev to null unless it's already null in which case it's hunky dory
      if (dList.head) {
        dList.head.prev = null;
      }
      // delete output.next
      delete output.next;
      // return output.value
      return output.value;
    }
  };
  
  dList.removeTail = function() {
    // if there's nothing in here do nothing
    // else
      // store the tail as an outpur
      // set the tail pointer to output.prev
      // set new tail.next to null
      // delete outputs previous and next just cuz
      // return output's value
      
    if (!dList.tail) {
      console.log('empty list mannnnnnn');
    } else {
      var output = dList.tail;
      dList.tail = output.prev;
      dList.tail.next = null;
      delete output.prev;
      delete output.next;
      return output.value;
    }
  };

  dList.contains = function(target, node) {
    // set node to head if node is undefined
    node = node || dList.head;
    
    // if value is target.value
      // return true
    // else if dList.tail = node
      // return false
    // else
      // recurse to next node
      
    if (JSON.stringify(target) === JSON.stringify(node.value)) {
      return true;
    } else if (dList.tail === node) {
      return false;
    } else {
      return dList.contains(target, node.next);
    }
  };

  return dList;
};

var DLNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add is O(1)
 * remove is O(1)
 * contains is O(n)
 */
 
