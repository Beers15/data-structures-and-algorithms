const breadthFirst = (tree) => {
  //using the default js array as a queue
  let q = [];
  let result = [];

  if(!tree.root) return [];
  q.push(tree.root);

  while(q.length > 0) {
    let parent = q.shift();
    result.push(parent.value);

    if(parent.left) q.push(parent.left);
    if(parent.right) q.push(parent.right);
  }

  return result;
};

module.exports = breadthFirst;
