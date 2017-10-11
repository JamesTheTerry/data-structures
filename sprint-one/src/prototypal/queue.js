var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstances = Object.create(queueMethods);
  someInstances.storage = {};
  someInstances.head = 0;
  someInstances.tail = 0;
  
  return someInstances;
};

var queueMethods = {
  enqueue: function(value) {
    // add the value at the tail
    this.storage[this.tail] = value;
    // increase tail by 1
    this.tail++;
  }, 
  dequeue: function(value) {
    // if size > 0
    if (this.size() > 0) {
      // store head location in var headLocation
      var headLocation = this.storage[this.head];
      // store headLocation as var output
      var output = headLocation;
      // delete headLocation
      delete headLocation;
      // increase head++
      this.head++;
      // return output
      return output;
    }
  },
  size: function(value) {
    return this.tail - this.head;
  }
};