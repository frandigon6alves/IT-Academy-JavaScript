function isLeapYear()
{
    const leapYear = Number(document.getElementById("ly").value);
    
    if ((leapYear % 400 == 0) || (leapYear % 4 == 0) && (leapYear % 100 != 0)) {
    document.getElementById("result").innerHTML = `El año ${leapYear} es un año bisiesto.`
     } else {
        document.getElementById("result").innerHTML = `El año ${leapYear} no es un año bisiesto.`
    }
}

// El año divisible por 400 siempre es bisiesto
// El año debe ser divisible por 4 pero no puede ser divisible por 100
// Si el año no se ajusta a las reglas anteriores, devuelve falso