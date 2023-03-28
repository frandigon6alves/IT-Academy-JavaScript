function fibonacci(num) { 
    let a = 0, b = 1, result = [a, b];
    
    for (let i = 2; i < num; i++) {
      let c = a + b; 
      result.push(c);
      a = b; 
      b = c; 
    }
    
    return result;
  }
  
function showFibonacci() {
    let num = document.getElementById("input").value;

    document.getElementById("result").innerHTML = fibonacci(num);
  }