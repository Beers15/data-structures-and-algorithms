const HashMap = require('./hashMap');

const treeIntersection = (bt1, bt2) => {
  let result = new Set();
  let values = new HashMap(1024);

  grabValuesAndCheckDupes(bt1, result, values);
  grabValuesAndCheckDupes(bt2, result, values);

  return result;
};

const grabValuesAndCheckDupes = (bt, resultSet, values) => {
  //array used to ensure dupes in a single tree are counted as dupes between both trees
  let temp = [];

  preOrderTraversal(bt, resultSet, values, temp);
};

const preOrderTraversal = (current, resultSet, values, temp) => {
  if(!current) return;

  if(values.contains(current.value.toString()) && !temp.includes(current.value)) {
    if(!resultSet.has(current.value)) {
      resultSet.add(current.value);
    }
  }

  if(!temp.includes(current.value)) {
    values.add(current.value.toString(), true);
  }

  temp.push(current.value);

  if(current.left) {
    preOrderTraversal(current.left, resultSet, values, temp);
  }

  if(current.right) {
    preOrderTraversal(current.right, resultSet, values, temp);
  }
};


module.exports = treeIntersection;
