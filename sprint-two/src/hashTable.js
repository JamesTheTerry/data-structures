var HashTable = function() {
  this._size = 0;
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
        this._size++;
      }
    }
    // save updated bucket to the hash table
    this._storage.set(index, bucket);
  } else {
    // else there is no collision, put the value & key at that hash bucket
    this._size++;
    this._storage.set(index, [toPushToHashArray]);
  }
  if (this._size > Math.floor (0.75 * this._limit)) {
    this.resize(Math.floor(this._limit * 2));
  }
  ///note: this console log is giving timey wimy closure loops :console.log('Post insert: ', this._storage.get(index)
};

HashTable.prototype.retrieve = function(k) {
  // find the slot in the bucket in the hash table
  var result = this.retrieveIndividualSlot(k, 'slot');

  // if it exists
  if (result) {
    // return the value at that key
    return result[1];
  }
};

HashTable.prototype.remove = function(k) {
  // retrieve the index from the hash table with the key
  var index = getIndexBelowMaxForKey(k, this._limit);
  // retrieve the bucket with key we want to remove
  var bucket = this.retrieveIndividualSlot(k, 'bucket');
  // retrieve the index in the bucket that we want to remove
  var bucketIndexForRemoval = this.retrieveIndividualSlot(k, 'index');

  // if the buket actually exists
  if (bucket) {
    // remove the key & value from the index
    bucket.splice(bucketIndexForRemoval, 1);
    // reduce size by 1
    this._size--;
    // save the bucket without the key value we removed
    this._storage.set (index, bucket);
  }
  if (this._size < Math.floor (0.25 * this._limit)) {
    this.resize(Math.floor(this._limit / 2));
  }
};

HashTable.prototype.retrieveIndividualSlot = function(k, returnType = 'slot') {
  // find the index for this key
  var index = getIndexBelowMaxForKey(k, this._limit);
  // retrieve the bucket from the hash table at this key/index
  var bucket = this._storage.get (index);

  // if there actually is a bucket
  if (bucket) {
    // go through everything in the bucket
    for (var i = 0; i < bucket.length; i++) {
      // if the key we're looking for is in the bucket
      if (bucket[i][0] === k && returnType === 'slot') {
        // return the slot linked to that key in the bucket
        return bucket[i];
      // if we are looking for the bucket and key matches the key in the bucket
      } else if (bucket[i][0] === k && returnType === 'bucket') {
        //return the bucket
        return bucket;
      // if we are looking for the index of the bucket for something we want to remove
      } else if (bucket[i][0] === k && returnType === 'index') {
        // return index value
        return i;
      }
    }
  }
};

HashTable.prototype.resize = function(newLimit) {
  var yeOldeBucket = this._storage;
  
  // min size of 8
  newLimit = Math.max(newLimit, 8);
  if (newLimit === this._limit) { return; }
  
  this._limit = newLimit;
  this._storage = new LimitedArray(newLimit);
  this._size = 0;

  yeOldeBucket.each(function(bucket) {
    if (!bucket) { return; }
    _.each(bucket, function(tuple) {
      this.insert(tuple[0], tuple[1]);
    }.bind(this));
  }.bind(this));
};


/*
 * Complexity: What is the time complexity of the above functions?
 harder to calclulate!!!!
  insert: avg O(1) worst case O(n)
  remove: avg O(1) worst cae O(n)
  retrieve: avg O(1) worst case O(n)
 */
