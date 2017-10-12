var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function(value) {
  if (this.size() > 0) {
    var headLocation = this.storage[this.head];
    var output = headLocation;
    delete headLocation;
    this.head++;

    return output;
  }
};

Queue.prototype.size = function(value) {
  return this.tail - this.head;
};


