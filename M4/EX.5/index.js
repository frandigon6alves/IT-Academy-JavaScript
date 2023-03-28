const number1 = Number(prompt('Digite un numero'))
const number2 = Number(prompt('Digite un numero'))
const operator = prompt("Introduce un operador:")


switch (operator) {
    case '+':
      result = number1 + number2;
      document.getElementById("resultad").innerHTML = (number1 + " + " + number2 + " = " + result);
      break;

    case '-':
      result = number1 - number2;
      document.getElementById("resultad").innerHTML = (number1 + " - " + number2 + " = " + result);
      break;

    case '*':
      result = number1 * number2;
      document.getElementById("resultad").innerHTML = (number1 + " * " + number2 + " = " + result);
      break;

    case '/':
      result = number1 / number2;
      document.getElementById("resultad").innerHTML = (number1 + " / " + number2 + " = " + result);
      break;

    default:
        document.getElementById("resultad").innerHTML = ("Operación inválida!");
      break;
  }