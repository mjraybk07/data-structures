var BinarySearchTree = function(value) {

  this.left = null;
  this.right = null;
  this.value = value;

};


// i - number
// o -  none
// se - inserts a value as a new tree to the tree

BinarySearchTree.prototype.insert = function (value) {
  var newTree = new BinarySearchTree(value);

  // condition for greater than / RIGHT
  if ( newTree.value > this.value ) {

    // if right property is null
    //   set right to equal the insert value
    if ( this.right === null ) {
      this.right = newTree;
    } else {
      //  recursively call insert on right
      this.right.insert(value);
    }
  }

  // condition for less than / LEFT
  if ( newTree.value < this.value ) {

    if ( this.left === null ) {
      this.left = newTree;
    } else {
      this.left.insert(value);
    }
  }

};


// i - number
// o - boolean

// if value equals root value
//   return true

// if value is greater than root value
//   if value equals right value
//   return true
// else
// recursively call contains on the right

// if value is less than root
//   if value is left value
//     returnn true
// else
// recursively call contains on left
// else return false

BinarySearchTree.prototype.contains = function (value) {
  if ( value === this.value ) {
    return true;
  }
  if ( value > this.value ) {
    if ( this.right === null ) {
      return false;
    }
    if ( value === this.right.value ) {
      return true;
    }
    this.right.contains(value);
  }

  if ( value < this.value ) {
    if ( this.left === null ) {
      return false;
    }
    if ( value === this.left.value ) {
      return true;
    }
    this.left.contains(value);
  }
  return false;
};





// i - callback function
// o - none
// se - executes cb on every value in the tree

BinarySearchTree.prototype.depthFirstLog = function (cb) {
};




/*
 * Complexity: What is the time complexity of the above functions?
 */


// -- tests --
// var test = new BinarySearchTree(4);


// console.log(typeof test.contains);
