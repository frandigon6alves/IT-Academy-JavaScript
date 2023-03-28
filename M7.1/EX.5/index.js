function isPair(){
let arrayPair = []



for (let i = 100; i >= 0; i--) {
    if(i % 2 == 0) {
    arrayPair.push(i);
    }
}

let result = '';
for (let i = 0; i < arrayPair.length; i++) {
  result += arrayPair[i] + '<br>';
}

document.getElementById('result').innerHTML = result
}