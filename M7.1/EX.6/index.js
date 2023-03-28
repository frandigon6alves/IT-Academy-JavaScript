function showTable() {
    let num = parseInt(document.getElementById("num").value);
    let result = "";
    let i = 1;
    
    for (i; i <= 10; i++) {
      result += num + " x " + i + " = " + num * i + "<br>";
    }
    
    document.getElementById("result").innerHTML = result;
  }