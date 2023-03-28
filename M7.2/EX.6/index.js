function isPrime() {
  const NUM = document.getElementById("numInput").value;
  let prime = true;

  if (NUM <= 1) {
    prime = false;
  }
  if (NUM > 1){
  
    for(let i = 2; i < NUM; i++) { //Si el número es mayor que 1, se comprueba si es divisible por algún número entre 2 y num-1
      if (NUM % i === 0) {
        prime = false;
        i = NUM // o break
      }
    }
  }

    let resultText;

    if (prime)
    {
      resultText = "Exatamente, o número " + NUM + " é primo!";
    }
    else
    {
      resultText = "O número " + NUM + " não é primo.";
    }
    
    document.getElementById("result").innerHTML = resultText;

}