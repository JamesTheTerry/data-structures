

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  /// k is index number, while v is value
  // uses limitset to store v in this._storage;
  this._storage.set(index, v);
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return output = this._storage.get (index);
  // uses limitedarray.get to retieve the value of index
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // this._storage.each ( (element, i, collection)=>{
  //   if (element === k) {
      
  //   }
  // });
  this._storage.set (index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


