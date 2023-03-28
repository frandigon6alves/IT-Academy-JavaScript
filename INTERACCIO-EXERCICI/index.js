/* console.log("Hola mundo!")

alert("Bem vindo")

const myName = prompt('Introduce tu nombre', 'Nombre')

console.log('Welcome' + myName)

const isOver18 = confirm('Eres mayor de edad?')

console.log('Eres mayor de edad: + isOver18') */

function saveUsername() {

    const username = document.getElementById('input-name').value
    console.log('Welcome ' + username)
    document.getElementById('welcome-message').innerHTML = 'Welcome ' + username

}