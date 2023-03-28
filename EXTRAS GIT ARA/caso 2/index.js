const numbers = [1, 2, 3, 4, 5];

function multiplyByTen(num) {
  return num * 10;
}

function myMap(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

const mappedArray = myMap(numbers, multiplyByTen);

console.log(mappedArray);
