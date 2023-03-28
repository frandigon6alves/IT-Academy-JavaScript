console.log("Datos del visitante")
alert("por favor, ingrese los siguientes datos")

const myName = prompt('Tu nombre')

const myLastName = prompt('Tu apellido')

const myage = prompt('Tu edade')

console.log(myName + " " + myLastName  + " con edade de " + myage  + " años.")

const message = `Tu nombre és ${myName} y tu apellido és ${myLastName} y tienes ${myage} años`
alert(message)

alert('Hola, ' + myName + ' ' + myLastName + ' con edade de ' + myage) 

document.getElementById('hola').innerHTML = 'Hola, ' + myName + " " + myLastName  + " con edade de " + myage  + " años."