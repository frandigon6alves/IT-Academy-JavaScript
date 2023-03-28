function findOut() {
  let frase = document.getElementById("frase").value;
 
  if (frase === frase.toLowerCase()) {
    document.getElementById("result").innerHTML = "La frase está formada solo por minúsculas.";
  }
 
  else if (frase === frase.toUpperCase()) {
    document.getElementById("result").innerHTML = "La frase está formada solo por mayúsculas.";
  }
  else {
    document.getElementById("result").innerHTML = "La frase está formada por minúsculas y mayúsculas.";
  }
}