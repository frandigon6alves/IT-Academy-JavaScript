function generarCuadrado() {
  const char = document.getElementById("charInput").value;
  const size = document.getElementById("sizeInput").value;
  let output = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      output += char;
    }
    output += "<br>";
  }
  document.getElementById("result").innerHTML = output;
}