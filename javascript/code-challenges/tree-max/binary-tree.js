class BinaryTree {
  constructor() {
    this.root = null;
    this.values = [];
    this.max = -Infinity;
  }

  treeMax() {
    if(!this.root) throw new Error('There cannot be a maximum value of an empty binary tree.');

    this.treeMaxHelper(this.root);

    return this.max;
  }

  treeMaxHelper(current) {
    if(current.value > this.max) {
      this.max = current.value;
    }

    if(current.left) {
      this.treeMaxHelper(current.left);
    }

    if(current.right) {
      this.treeMaxHelper(current.right);
    }
  }

  getInOrder() {
    //clear lingering traversal values
    this.values = [];

    this.inOrderHelper(this.root);
    return this.values;
  }

  inOrderHelper(current) {
    if(current.left) {
      this.inOrderHelper(current.left);
    }

    this.values.push(current.value);

    if(current.right) {
      this.inOrderHelper(current.right);
    }
  }

  getPreOrder() {
    //clear lingering traversal values
    this.values = [];

    this.preOrderHelper(this.root);
    return this.values;
  }

  preOrderHelper(current) {
    this.values.push(current.value);

    if(current.left) {
      this.preOrderHelper(current.left);
    }

    if(current.right) {
      this.preOrderHelper(current.right);
    }
  }

  getPostOrder() {
    //clear lingering traversal values
    this.values = [];

    this.postOrderHelper(this.root);
    return this.values;
  }

  postOrderHelper(current) {
    if(current.left) {
      this.postOrderHelper(current.left);
    }

    if(current.right) {
      this.postOrderHelper(current.right);
    }

    this.values.push(current.value);
  }
}

module.exports = BinaryTree;
