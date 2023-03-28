const youWorld= prompt('¿Cuántas palabras desea introducir?')

const arrayWorld = []

for (let index = 0; index < youWorld; index++) {
    const world = prompt ('Enter a world')
    arrayWorld[index] = world
}
alert(arrayWorld)
document.getElementById("result").innerHTML = `ingresaste ${youWorld} palabras que son: ${arrayWorld}.`