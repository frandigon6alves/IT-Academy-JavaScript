Demana a l'usuari/ària un número entre 0 i 99 i mostra'l escrit en lletres (pots fer-ho en català o castellà).

Exemple: 56 (cinquanta-sis) o 56 (cincuenta y seis)
---
Peça ao usuário um número entre 0 e 99 e mostre-o escrito em letras (você pode fazê-lo em catalão ou espanhol). Exemplo: 56 (cinquenta e seis) ou 56 (cinquenta e seis)

---
1)En la primera parte del ejercicio lo que creamos es un objeto que incluye la key(que es el numero escrito) y luego el value que es el mismo numero en formato string. En este array solo ponemos los numeros clave, es decir que no van en combinacion de un "y" tal como se muestra a continuacion

const translation = {
    1: "uno", 2: "dos", 3: "tres", 4: "cuatro", 5: "cinco", 6: "seis", 7: "siete", 8: "ocho", 9: "nueve",
    10: "diez", 11: "once", 12: "doce", 13: "trece", 14: "catorce", 15: "quince", 16: "dieciseis", 17: "diecisiete", 18: "dieciocho", 19: "diecinueve",
    20: "veinte", 30: "treinta", 40: "cuarenta", 50: "cincuenta", 60: "sesenta", 70: "setenta", 80: "ochenta", 90: "noventa"
}

2) una vez creado este objeto, creamos la funcion para poder ejecutar el codigo que traduzca el numero a letras, lo primero por tanto es esto

function numberTranslator ()  {

3) el siguiente paso es declarar la constante num(numero) donde se almacenará el valor del numero que escribamos en el HTML

    const num = document.getElementById("num-input").value

4)declaramos otra variable, en este caso "numberInDictionry" y lo ponemos con el  let dado que 
tendremos que reasignarlo a otros valores. Le decimos que NumberInDictionary sea igual al objeto que hemos creado(translation)y que mediante el array se almacena alli el numero que escribamos

let numberInDictionary = translation[num];

si el ejercicio terminase aqui y solo se contemplasen los casos escritos en el objeto lo siguiente seria:

   document.getElementById("result-message").innerHTML = numberInDictionary

   de forma que al escribir un numero en la casilla de input, apareceria el mensaje del numero traducido en letras que esta dentro del objeto. No obstante tenemos que contemplar los casos que no estan dentro del objeto, por lo tanto vamos a crear una condicion con el if:

  if (!numberInDictionary) {

 literal es: si el numero que has escrito en la casilla del input en el html no está dentro del objeto ,hazme lo siguiente

     const num1 = num[0] + "0"
        const num2 = num[1]
        numberInDictionary = translation[num1] + " y " + translation[num2]

    }

    declaramos la constante num1(la primera parte del numero compuesto) es igual a num(el numero que escribimos en la casilla de input) junto con el array( los simbolos []) y dentro de estos simbolos indicamos el numero 0 porque es la primera posicion del numero, y añadimos en string el 0 para que el programa entienda que estamos escribiendo un 20, o 30, o 40 etc..
    y luego declaramos la constante num2 que es la segunda parte del numero que escribimos y le decimos que es igual a num( el que escribimos en la casilla del input)con el array en la posicion 1 que es lo mismo que decir en la ultima posicion del numero para que el programa reconozca que si por ejemplo escribimos 22, cuente como num1 20 y como num2 , el 2

    al final le decimos

       numberInDictionary = translation[num1] + " y " + translation[num2]

       es decir: quiero que muestre el string del num1 concatenado con una "y" , con el strinf del num2


    finalmente lo imprimimos por html

    document.getElementById("result-message").innerHTML = numberInDictionary
}

el numberInDictionary variará se cumpla o no la condicion