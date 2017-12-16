var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.count = 0;

  return newStack;

};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.count++] = value;
};

stackMethods.pop = function (value) {
  var popped = this.storage[this.count - 1];
  if ( this.size() ) {
    delete this.storage[this.count - 1];
    this.count--;
    return popped;
  }
};

stackMethods.size = function () {
  return this.count;
};




