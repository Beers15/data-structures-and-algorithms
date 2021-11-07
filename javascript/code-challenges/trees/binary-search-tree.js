const BinaryTree = require('./binary-tree');
const Node = require('./node');

class BinarySearchTree extends BinaryTree {
  add(val) {
    if(this.root === null) {
      this.root = new Node(val);
      return;
    }
    let curr = this.root;

    do {
      if(val > curr.value) {
        if(!curr.right) {
          curr.right = new Node(val);
          break;
        }
        curr = curr.right;
      } else {
        if(!curr.left) {
          curr.left = new Node(val);
          break;
        }
        curr = curr.left;
      }
    } while(curr);
  }

  contains(val) {
    let curr = this.root;

    while(curr) {
      if(curr.value === val) return true;

      if(val > curr.value) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }

    return false;
  }
}

module.exports = BinarySearchTree;
