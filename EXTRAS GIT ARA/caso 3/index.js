const cities = ['Barcelona', 'Paris', 'Roma', 'London', 'Berlin'];

function convertToUpperCase(city) {
  return city.toUpperCase();
}

function myMap(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i]));
  }
  return result;
}

const mappedArray = myMap(cities, convertToUpperCase);

console.log(mappedArray);
console.log(cities); 