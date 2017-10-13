

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // hash the key
  var index = getIndexBelowMaxForKey(k, this._limit);
  // store key and value that needs to be inserted in var
  var toPushToHashArray = [k, v];

  // if there is something at this bucket at the index, then go through collision processing
  if (this._storage.get(index) !== undefined) {
    // retrieve the buckets
    var bucket = this._storage.get(index);
    
    // go through each item in bucket
    for (var i = 0; i < bucket.length; i++) {
      // if the key is in the bucket
        // overwrite at that spot
      // otherwise: put it at the end of the bucket array
      if (bucket[i][0] === k) {
        bucket[i] = toPushToHashArray;
      } else if (i === bucket.length - 1) {
        bucket.push(toPushToHashArray);
      }
    }
    // save updated bucket to the hash table
    this._storage.set(index, bucket);
  } else {
    // else there is no collision, put the value & key at that hash bucket
    this._storage.set(index, [toPushToHashArray]);
  }
  ///note: this console log is giving timey wimy closure loops :console.log('Post insert: ', this._storage.get(index)
};

HashTable.prototype.retrieve = function(k) {
  // find the slot in the bucket in the hash table
  var result = this.retrieveIndividualSlot(k);
  
  // if it exists
  if (result) {
    // return the value at that key
    return result[1];
  }
};

HashTable.prototype.remove = function(k) {
  // retrieve the index from the hash table with the key 
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  // store the retrieved bucket into 'slot'
  var bucket = this._storage.get(index);
  
  
  // splice the bucket to remove the desired slot
  // store the modified bucket back into the hash table
  this._storage.set (index, undefined);
};

HashTable.prototype.retrieveIndividualSlot = function (k, slotOrBucket = 'slot') {
  // find the index for this key
  var index = getIndexBelowMaxForKey(k, this._limit);
  // retrieve the bucket from the hash table at this key/index
  var bucket = this._storage.get (index);
  
  // if there actually is a bucket
  if (bucket) {
    // go through everything in the bucket
    for (var i = 0; i < bucket.length; i++) {
      // if the key we're looking for is in the bucket
      if (bucket[i][0] === k && slotOrBucket === 'slot') {
        // return the slot linked to that key in the bucket
        return bucket[i];
      // if we are looking for the bucket and key matches the key in the bucket
      } else if (bucket[i] === k && slotOrBucket === 'bucket') {
        //return the bucket
        return bucket;
      }
    } 
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */


