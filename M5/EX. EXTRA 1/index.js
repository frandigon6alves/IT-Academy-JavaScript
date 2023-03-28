const randomNumber = Math.floor(Math.random() * 500) + 1;

function guessNumber() {
    let userNumber = Number(document.getElementById("number").value)
    const distance = Math.abs(userNumber - randomNumber);

    if (userNumber === randomNumber) {
        document.getElementById('result').innerHTML = `¡Felicidades! Acertó. El número es ${randomNumber}.`;
    }
    if (distance > 0 && distance < 15) {
        if (userNumber > randomNumber) {
            document.getElementById('result').innerHTML = "Caliente, caliente: tu número es mayor";
        } else {
            document.getElementById('result').innerHTML = "Caliente, caliente: tu número es más pequeño";
        }
    }
    if (distance > 15 && distance < 50) {
        if (userNumber > randomNumber) {
            document.getElementById('result').innerHTML = "Tebi, Tebi: tu número es mayor.";
        } else {
            document.getElementById('result').innerHTML = "Tebi, Tebi: tu número es más pequeño";
        }
    }
    if (distance > 50 && distance < 500) {
        if (userNumber > randomNumber) {
            document.getElementById('result').innerHTML = "Fred, frío: tu número es mayor";
        } else {
            document.getElementById('result').innerHTML = "Fred, frío: tu número es más pequeño";
        }
    }
}
