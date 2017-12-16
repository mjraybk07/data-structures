var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);

  newQueue.storage = {};
  newQueue.start = 0;
  newQueue.end = 0;

  return newQueue;

};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.end++] = value;
};


queueMethods.dequeue = function () {
  var dequeued = this.storage[this.start];
  if ( this.size() ) {
    delete this.storage[this.start++];
    return dequeued;
  }
};


queueMethods.size = function () {
  return this.end - this.start;
};


