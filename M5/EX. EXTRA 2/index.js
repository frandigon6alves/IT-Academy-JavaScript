drawL()

function drawL() {

  const height = parseInt(prompt("Introduce l'altura:"));
  const vertical = []
  const horizontal = []

  for(let i = 0; i < height; i++) {
    vertical.push("*");
  }
  
  for(let i = 0; i < height/2; i++) {
    horizontal.push("*");
  }

  document.getElementById('result').innerHTML = `${vertical.join('<br>')}  ${horizontal.join(' ')}`

}

/* 
document.getElementById('result').innerHTML = `
  * <br> 
  * <br> 
  * <br> 
  * * * `
  
  document.getElementById('result').innerHTML = ['*', '*', '*', '*'].join('<br>') + ' ' + ['*', '*'].join(' ')
 */