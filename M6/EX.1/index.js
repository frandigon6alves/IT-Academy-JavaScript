
function suma()
{
    const numFirst = Number(document.getElementById("firstNum").value);
    const numSecond = Number(document.getElementById("secondNum").value);

    const sum = numFirst + numSecond;
    printResult("La soma es: " + sum);
}

function rest()
{
    const numFirst = Number(document.getElementById("firstNum").value);
    const numSecond = Number(document.getElementById("secondNum").value);

    const rest = numFirst - numSecond;
    printResult("La resta es: " + rest);
}

function mult()
{
    const numFirst = Number(document.getElementById("firstNum").value);
    const numSecond = Number(document.getElementById("secondNum").value);

    const mult = numFirst * numSecond;
    printResult("La resta es: " + mult);
}

function div()
{
    const numFirst = Number(document.getElementById("firstNum").value);
    const numSecond = Number(document.getElementById("secondNum").value);

    const div = numFirst / numSecond;
    printResult("La divicion es: " + div);
}

function printResult(value) {
    
    document.getElementById("result").innerHTML = value;
    
}