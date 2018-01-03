

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  // if bucket is undefined, add new bucket and tuple
  if ( bucket === undefined ) {
    bucket = [ [k, v] ];
    this._storage.set(index, bucket);

  } else {

    // loop through the bucket
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];

      // check if given key is present in bucket
      if ( tuple[0] === k) {
        // if true, reassign key value to the new value
        tuple[1] = v;
      }
    }

  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  // check if given key is present in bucket
  for ( var i = 0; i < bucket.length; i ++ ) {
    var tuple = bucket[i];

    // if true, return the key value
    if ( tuple[0] === k ) {
      return tuple[1];
    }
  }

  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


