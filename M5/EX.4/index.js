const randomNum = Math.floor(Math.random() * 10);
const maxTries = 5;
let tries = 1;

function playNumb() {
    let userChoice = Number(document.getElementById("choice").value);
    if(userChoice === randomNum) {
        document.getElementById("result").innerHTML =  `Enhorabona, el número es ${randomNum}. Adivinaste!`;
    } else {
        document.getElementById("result").innerHTML = `Tienes ${maxTries -tries} chances.`;
        tries++;
        if(tries > maxTries) {
            document.getElementById("result").innerHTML = `Perdiste! El número es ${randomNum}.`;
        }
    }
}