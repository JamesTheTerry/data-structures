

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  /// k is index number, while v is value
  // uses limitset to store v in this._storage;
  // debugger;
  // if (this._storage.get(index + x) !== undefined) {
  //   this.insert(k, v, x + 1);
  // } else {
  //   this._storage.set(index + x, [v, index + x]);
  // }
  var toPushToTree = {index: k, value: v};
  
  if (this._storage.get(index) !== undefined) {
    var toChange = this._storage.get(index);
    for (var i = 0; i < toChange.length; i++) {
      if (toChange[i] === k) {
        /// need to add some checks to see if there a duplicate index
        /// if collision 
          //then overwrite
        // else no collision 
          //then add another array. 
      }
    }
    toChange.push(toPushToTree);
    this._storage.set(index, toChange);
  } else {
    this._storage.set(index, [toPushToTree]);
  }
  
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // var output = this._storage.get (index);
  var node = this._storage.get (index);

  if (!node.length || node.length > 1) {
    for (let i of node) {
      if (i === k) {
        console.log ('i:' + i);
        return i;
      }
    }
  }
  return node[0].value;
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


