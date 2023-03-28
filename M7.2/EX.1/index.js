drawTriangue()

function drawTriangue() {

  const lines = parseInt(prompt("Introduce un numero:"));
  const triangle = []
  
  for(let i = 0; i < lines; i++) {
    let asterisco = "";
    for(let a = 0; a <= i; a++) {
      asterisco +="*";
    }
    triangle.push(asterisco);
  }
  

  document.getElementById('result').innerHTML = triangle.join("<br>")
}