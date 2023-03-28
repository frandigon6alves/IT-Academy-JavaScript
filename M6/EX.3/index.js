const inTime = [] // el array vacio, para que se puede guardar la informacion

function addDate() { // entra aqui, porque han dado al primer boton

const hourDateNow = new Date() // el metodo para que automaticamente de de la fecha y la hora
inTime.push(hourDateNow) // metodo push nos sube en array la hora y fecha actual
console.log(inTime) // en la console comprobamos que funcione y realmente nos saca la hora y fecha

}

function searchNumber(number, arrayNumbers) {

    let result = -1
    for (let index = 0; index < arrayNumbers.length; index++) {
 
        if (arrayNumbers[index] === number) {
            result = index
        }
    }
    return result
}

function normalPhrase() { 
    let phrase = document.getElementById("id3").value //La función normalPhrase obtiene el valor de una frase insertada en un elemento HTML con id "id3".
    let normalized = ""; // la variable normalizada se inicializa con una string vacía
    let characters = "abcdefghijklmnopqrstuvwxyz"; // caracteres variables contiene todas las letras minúsculas del alfabeto.

    for (let i = 0; i < phrase.length; i++) { // El bucle for recorre cada carácter de la frase.
    let char = phrase[i].toLowerCase(); // Cada carácter se convierte a minúsculas a través de .toLowCase(), y se almacena en la variable char
          
        if (characters.includes(char)) {
            normalized += char; // Si char se incluye en el conjunto de caracteres de letras, se agrega a la cadena normalizada
            }
        }

    return normalized; // la función devuelve la frase normalizada, con solo letras minúsculas y sin ningún otro carácter.
}

function findChar(arrayChar, userChar) {
    const foundChar = []  // Crea un array vazio chamada foundChar

    for(let index =0; index < arrayChar.length; index++) {  // Laço for pasar por cada elemento de arrayChar
        let currentChar = arrayChar[index]; // Asigna el valor actual del elemento de array a una variable llamada currentChar
        if (currentChar.includes(userChar)) {  // Verifica se el valor de currentChar inclui el valor de userChar
            foundChar.push(currentChar)  // Se sí, agrega el valor de currentChar al final del array foundChar
        }
        console.log(foundChar)  // Imprime el contenido de foundChar en cada iteración del bucle
    }
}

function menu(id) { // cuando das al boton en html, que estan numerados
    if (id === 1) { // si es primero con numero 1, cumpe conla condicion de addDate()
        addDate()
    }
    if (id === 2) {
        
        const position = searchNumber(1, [9,52,1,47,85,8])
        console.log(position)
    }
    if (id === 3) {
       
        document.getElementById("result").innerHTML = normalPhrase()
        //result.textContent = normalPhrase()
    }

    if (id === 4) {
        findChar(
        [
            "Història universal",
            "Història d'Espanya",
            "Geografia",
            "Història de la llengua catalana",
            "Antropologia",
            "Anglès",
        ],
        "Història"
        );
    }    
}
