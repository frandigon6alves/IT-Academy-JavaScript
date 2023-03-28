function valor()
{
    const num = Number(document.getElementById("number").value);

    const doble = num * 2;
    const triple = num * 3;
    
    document.getElementById("doble").innerHTML = ("El doble del valor es: ") + doble;
    document.getElementById("triple").innerHTML = ("El triple del valor es: ") + triple;

    console.log("el valor añadido es: " + num)
    console.log("el doble es: " + doble)
    console.log("el triple es: " + triple)

    alert( 'el doble de ' + num + ' es ' + doble + ', e el triple de ' + num + ', es ' + triple) 



}

