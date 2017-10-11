var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  
  someInstance.storage = {};
  someInstance.head = 0;
  someInstance.tail = 0;
  
  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;
  
  return someInstance;

};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  // add value to tail location on storage
  this.storage[this.tail] = value;
  //increase tail value;
  this.tail++;
};


queueMethods.dequeue = function () {
  if (this.size() > 0) {
    var headLocation = this.storage[this.head];
    var output = headLocation;
    delete headLocation;
    this.head++;
    return output;
  }
};

queueMethods.size = function () {
  return this.tail - this.head;
};



