function fatorial(){

  const number = Number(document.getElementById("inputNumber").value);
  let result = number
  
  for(let i = number -1; i >= 1; i--){
    result = result * i;
  }
  
  /* for(let i = 1; i < number; i++) {
    result = result * i;
  }
  */

  document.getElementById("result").innerHTML = result;
}