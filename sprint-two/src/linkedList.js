var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if ( list.head === null && list.tail === null ) {
      list.head = Node(value);
      list.tail = Node(value);
    } else if ( list.head.next === null ) {
      list.tail = Node(value);
      list.head.next = Node(value);
    }
    list.tail = Node(value);
  };

  list.removeHead = function() {
    var oldHead = list.head;
    var newHead = list.head.next;
    delete list.head;
    list.head = newHead;
    return oldHead.value;

  };

  list.contains = function(target) {
    var node = list.head;

    while ( node ) {
      if ( node.value === target ) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

 addToTail =>  O(1) Constant Time
 removeHead => O(1) Constant Time
 contains =>   O(n) Linear Time

 */
