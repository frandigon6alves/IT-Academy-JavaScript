function oddEven()
{
    const numb = Number(document.getElementById("numb").value);

    if (numb % 2 == 0) {
        document.getElementById("result").innerHTML = "¡Es par!";
    }
    else {
        document.getElementById("result").innerHTML = "¡Es impar!";
    }
}

/*document.getElementById("result").innerHTML = oldEven ? `${numb} es pas.` : `{numb} es impar.` */