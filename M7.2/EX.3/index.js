function drawPyramid() {
  const inputNumber = (document.getElementById("inputNumber"));

  let n = parseInt(inputNumber.value);
  let pyramid = []

  for (let i = 1; i <= n; i++) { //Bucle para crear la primera mitad de la pirámide.
    let line = ''; // Inicializa una string para almacenar la línea actual
    for (let j = 1; j <= i; j++) { // Bucle para agregar asteriscos a la línea actual
      line += '* ';
    }
    pyramid.push(line); //Agrega la línea actual al array de la pirámide
  }

  for (let i = n - 1; i >= 1; i--) { // Bucle para crear la segunda mitad de la pirámide.
    let line = '';
    for (let j = 1; j <= i; j++) {
      line += '* ';
    }
    pyramid.push(line);
  }

  document.getElementById('result').innerHTML = pyramid.join("<br>")
}