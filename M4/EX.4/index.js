const mes = Number(prompt('Digite un mes'))

switch (mes) {
    case 1:
        document.getElementById("result").innerHTML = "El mes de Enero tiene 31 dias."
    break
    case 2: 
        document.getElementById("result").innerHTML = "El mes de Febrero tiene 28 dias." 
    break
    case 3:
        document.getElementById("result").innerHTML = "El mes de Marzo tiene 31 dias."
    break
    case 4:
        document.getElementById("result").innerHTML = "El mes de Abril tiene 30 dias."
    break
    case 5:
        document.getElementById("result").innerHTML = "El mes de Mayo tiene 31 dias."
    break
    case 6:
        document.getElementById("result").innerHTML = "El mes de Junio tiene 30 dias."
    break
    case 7:
        document.getElementById("result").innerHTML = "El mes de Julio tiene 31 dias."
    break
    case 8:
        document.getElementById("result").innerHTML = "El mes de Agosto tiene 31 dias."
    break
    case 9:
        document.getElementById("result").innerHTML = "El mes de Septiembre tiene 30 dias."
    break
    case 10:
        document.getElementById("result").innerHTML = "El mes de Octubre tiene 31 dias."
    break
    case 11:
        document.getElementById("result").innerHTML = "El mes de Noviembre tiene 30 dias."
    break
    case 12:
        document.getElementById("result").innerHTML = "El mes de Diciembre tiene 31 dias."
    break
    default:
        document.getElementById("result").innerHTML = "Ingrese un mes valido."
        break 

}