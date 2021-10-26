const getSumOfRows = (arr) => {
  let result = [];

  for(let row of arr) {
    let sum = 0;
    for(let col of row) {
      sum += col;
    }
    result.push(sum);
  }

  return result;
};

let foo = [[1,2,3], [3, 5, 7], [10, 33, 44]];

console.log(getSumOfRows(foo));