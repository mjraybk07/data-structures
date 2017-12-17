var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function (value) {
  this.storage[this.count++] = value;
};

Stack.prototype.pop = function () {
  var popped = this.storage[this.count - 1];
  if ( this.size() ) {
    delete this.storage[this.count - 1];
    this.count--;
    return popped;
  }
};

Stack.prototype.size = function () {
  return this.count;
};

