function calculate()
{
const numFirst = Number(document.getElementById("firstNum").value);
const numSecond = Number(document.getElementById("secondNum").value);

const sum = numFirst + numSecond;
const rest = numFirst - numSecond;
const mult = numFirst * numSecond;
const div = numFirst / numSecond;

document.getElementById("sumImp").innerHTML = ("La soma es: ") + sum;
document.getElementById("restImp").innerHTML = ("La resta es: ") + rest;
document.getElementById("multImp").innerHTML = ("La multiplicación es: ") + mult;
document.getElementById("splitImp").innerHTML = ("La divicion es: ") + div;

console.log("El usuario utilizó los siguientes datos: " + numFirst + " y " + numSecond)

const message = `Tus numeros son ${numFirst} y ${numFirst} y tienes los seguintes resultados: para soma ${sum}, para sustracción ${rest}, para multiplicación ${mult} y para división ${div}`
alert(message)

const nuevocalculo = prompt('¿Quieres hacer otro cálculo?')

}