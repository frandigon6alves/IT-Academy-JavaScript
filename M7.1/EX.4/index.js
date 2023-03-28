function isNegative()
{
    const numb1 = Number(document.getElementById("numb1").value);
    const numb2 = Number(document.getElementById("numb2").value);

    if (numb1 >= 0 && numb2 < 0) {
        document.getElementById("result").innerHTML = "¡Uno de los valores es negativo!";
    }
    if (numb1 < 0 && numb2 >= 0) {
        document.getElementById("result").innerHTML = "¡Uno de los valores es negativo!";
    }
    if (numb1 < 0 && numb2 < 0) {
        document.getElementById("result").innerHTML = "¡Todos los valores son negativo!";
    }
    if (numb1 >= 0 && numb2 >= 0) {
        document.getElementById("result").innerHTML = "¡Todos los valores son positivos!";
    }

}