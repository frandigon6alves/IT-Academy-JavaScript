function calculateFigure() {
    const figure = Number(document.getElementById("numfigure").value);
    let area;

    if (figure === 1) {
        let side = parseFloat(prompt("introduce la medida del lado:"));
        area = side * side;
        document.getElementById('result').innerHTML = `el area del cuadrado es: ${area}.`
    }

    if (figure === 2) {
        let base = parseFloat(prompt("introduce la medida de la base:"));
        let altura = parseFloat(prompt("introduce la medida de la altura:"));
        area = base * altura /2;
        document.getElementById('result').innerHTML = `el area del triángulo es: ${area}.`
    }

    if (figure === 3) {
        let base = parseFloat(prompt("introduce la medida de la base:"));
        let altura = parseFloat(prompt("introduce la medida de la altura:"));
        area = base * altura;
        document.getElementById('result').innerHTML = `el area del rectángulo es: ${area}.`
    }

    if (figure === 4) {
        let radio = parseFloat(prompt("Introducir la medida del radio:"));
        area = Math.PI * radio**2;
        document.getElementById('result').innerHTML = `el area del circulo es: ${area}.`
    }
}