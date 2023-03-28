function playNumb() {
var userChoice = Number(document.getElementById("choice").value);
const randomNum = Math.floor(Math.random() * 10);

    if ( randomNum != userChoice) {
        document.getElementById("result").innerHTML = `Perdiste! El número es " ${randomNum}.`
    }
    if (randomNum == userChoice) {
        document.getElementById("result").innerHTML =  `Enhorabona, el número es ${randomNum}. Adivinaste!`
    }
}