const myArr = [1, 2, 3, 4, 5];

function multipleByTwo(num) {
  return num * 2;
}

function myMap(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

const result = myMap( myArr, multipleByTwo )

console.log(result);