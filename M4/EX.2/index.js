console.log("Datos del visitante")
alert("¿Cuantos años tienes?")


const myage = prompt('Tu edade')

console.log("tienes edade de " + myage  + " años.")

checkCourse()

 function checkCourse() { 
    if(myage <= 5) {
        document.getElementById('menssage').innerHTML = "estudiante de preescolar.";
    } else if(myage >= 6 && myage <= 11) {
        document.getElementById('menssage').innerHTML = "estudiante de primario.";
    } else if(myage >= 12 && myage <= 15) {
        document.getElementById('menssage').innerHTML = "estudiante de ESO.";
    } else if(myage >= 16 && myage <= 17) {
        document.getElementById('menssage').innerHTML = "estudiante de Bachillerato.";
    } else {
        document.getElementById('menssage').innerHTML = "estudiante de FP o Universidad."; 
    }
 }