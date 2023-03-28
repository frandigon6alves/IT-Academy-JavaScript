const mayor = prompt('¿Cuantos años tienes?')
const diploma = prompt('¿Tienes un diploma universitario?')
const desempl= prompt('¿Estás desempleado?')

console.log(`El candidato tiene edad de ${mayor}, ${diploma} possui diploma universitário e ${desempl} está trabajando.`)

checkBecas()

function checkBecas() {
if ( mayor >= 18 && diploma === "Sí" || desempl === "Sí") {
    document.getElementById("result").innerHTML = "Enhorabuena! Tienes derecho a una beca."
}
else {
    document.getElementById("result").innerHTML = "Lo sentimos. No obtuviste una beca."
}
}