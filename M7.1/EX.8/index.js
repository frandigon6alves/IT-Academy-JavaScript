function convertir() {
  const celsius = document.getElementById("tempInput").value;
  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("result").innerHTML = celsius + " °C = " + fahrenheit + " °F";
}