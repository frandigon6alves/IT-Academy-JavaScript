drawTriangue()

function drawTriangue() {
  let n = parseInt(prompt("Introduce un numero:"));
  const triangle = [];
  for (let i = n - 1; i >= 0; i--) {
    let asterisco = "";
    for (let j = 0; j <= i; j++) {
      asterisco += "*";
    }
    triangle.push(asterisco);
  }
  
  document.getElementById('result').innerHTML = triangle.join("<br>")
}