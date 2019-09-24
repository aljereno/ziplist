const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];
function ziplist(data1, data2) {
  const newArr = [];
  let i = 0;
  while (i < data1.length) {
    newArr.push(data1[i]);
    newArr.push(data2[i]);
    i++;
  }
  return newArr;
}

function zipListTheSimpleWay(data1, data2) {
  return _.flatten(_.zip(data1, data2));
}

console.log(ziplist(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));
