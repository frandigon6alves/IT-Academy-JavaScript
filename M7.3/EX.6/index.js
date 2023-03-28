let numbers = [];
let number = parseInt(prompt("Ingrese un numero:"));

while (!isNaN(number)) {
  numbers.push(number);
  number = parseInt(prompt("Ingrese otro número (o déjelo en blanco para terminar):"));
}

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenSum += numbers[i];
  } else {
    oddSum += numbers[i];
  }
}

document.getElementById("numeros").innerHTML = numbers;
document.getElementById("result1").innerHTML =("Soma dos números pares: " + evenSum);
document.getElementById("result2").innerHTML =("Soma dos números ímpares: " + oddSum);
