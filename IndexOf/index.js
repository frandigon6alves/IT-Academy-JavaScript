function findPosition() {
    const myString = document.getElementById("stringInput").value;
    const compareString = document.getElementById("substringInput").value;
    const position = myString.indexOf(compareString);
    let word = "";
  
    if (position === -1) {

        document.getElementById("positionOutput").textContent = `Posición de la substring: ${position}`;
        document.getElementById("wordOutput").textContent = `Sin palabra correspondiente.`;

    } else {
        
        word = myString.substring(position, position + compareString.length);

        document.getElementById("positionOutput").textContent = `Posición de la substring: ${position}`;
        document.getElementById("wordOutput").textContent = `Palabra correspondiente: ${word}`;

    }
  }