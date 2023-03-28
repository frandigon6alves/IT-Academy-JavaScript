var maxAge = parseInt(prompt("¿Cuántas edades quieres entrar?"));
var ageArray = [];
saveAges()
calculeAge()

function saveAges() {

    for (var i = 0; i < maxAge; i++) {
    var age = parseInt(prompt("Introduzca la edad:"));
        while(age < 0 || age > 120) {
            age = parseInt(prompt("A idade deve estar entre 0 e 120. Insira novamente:"));
        }

    ageArray.push(age);

}
    return ageArray;
}

function calculeAge(){
var sum = 0;

    for (var i = 0; i < ageArray.length; i++) {
    sum += ageArray[i];
  }

var average = sum / ageArray.length;
printResult("La edad promedio es: " + average);

}

function printResult(value) {
    document.getElementById("result").innerHTML = value
}


