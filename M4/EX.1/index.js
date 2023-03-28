console.log("Datos del visitante")
alert("por favor, ingrese los siguientes datos")

const myName = prompt('Tu nombre')

const myLastName = prompt('Tu apellido')

const myage = prompt('Tu edade')

console.log(myName + " " + myLastName  + " con edade de " + myage  + " años.")

document.getElementById('hola').innerHTML = 'Hola, ' + myName + " " + myLastName  + " con edade de " + myage  + " años."

    if(myage < 18) {
        alert(`Hola, ${myName}  ${myLastName}, tienes ${myage} años y eres menor de edad.`);
        document.getElementById('hola').innerHTML = 'Hola, ' + myName + " " + myLastName  + " con edade de " + myage  + " años. Eres menor de edad.";
    } else {
        alert(`Hola, ${myName}  ${myLastName}, tienes ${myage} años y eres mayor de edad.`);
        document.getElementById('hola').innerHTML = 'Hola, ' + myName + " " + myLastName  + " con edade de " + myage  + " años. Eres mayor de edad.";
    }
