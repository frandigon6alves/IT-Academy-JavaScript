function play() {
    const userChoice = Number(document.getElementById("numUser").value);
    const randomNum = Math.ceil(Math.random() * 3);   /*const numRandom = Math.floor(Math.random() * (4 - 1)) + 1 */

    const rock = 1;
    const paper = 2;
    const scissors = 3;

    const draw = userChoice === randomNum;
    const drawMessage = `¡Yo ${randomNum} y tu ${userChoice} es un empate!`;
    const userWins = userChoice===rock && randomNum=== scissors || userChoice===paper && randomNum === rock || userChoice=== scissors && randomNum===paper;
    const userWinsMessage = `¡Yo ${randomNum} y tu ${userChoice} has ganado!`;
    const randomNumWins = userChoice===scissors && randomNum===rock || userChoice===rock && randomNum === paper || userChoice===paper  && randomNum===scissors;
    const randomNumWinsMessage = `¡Yo ${randomNum} y tu ${userChoice} he ganado!`;
    const userChoiceWrong = userChoice < 1 || userChoice > 3;
    const userChoiceWrongMessage = "Ingrese un número del 1 al 3."

    if (userChoiceWrong) {
        document.getElementById("result").innerHTML = userChoiceWrongMessage;
        throw Error("El usuario ha entrado un numero erroneo")
    }
    if (draw) {
        document.getElementById("result").innerHTML = drawMessage;
    }
    if (userWins) {
        document.getElementById("result").innerHTML= userWinsMessage;
    }
    if (randomNumWins) {
        document.getElementById("result").innerHTML= randomNumWinsMessage;
    }    


}