function media()
{
    const nota1 = Number(document.getElementById("nota01").value);
    const nota2 = Number(document.getElementById("nota02").value);
    const nota3 = Number(document.getElementById("nota03").value);
   
    const media = (nota1 + nota2 + nota3)/3;

    console.log("Las notas son: " + nota1 + ", " + nota2 + ", " + nota3)
    const message = `Tus notas son ${nota1}, ${nota2} y  ${nota3}`
    alert(message)
    
    document.getElementById("result").innerHTML = ("El promedio de los resultados es: ") + media;

    if (media < 5) {
        document.getElementById("result1").innerHTML = document.getElementById("result1").innerHTML = "No has superado el curso. Tienes que recuperar."
    } else if (media >= 5 && media <= 7) {
        document.getElementById("result1").innerHTML = document.getElementById("result1").innerHTML = "¡Enhorabuena! Has aprobado, pero deberías seguir practicando."
    }
    else {
        document.getElementById("result1").innerHTML = document.getElementById("result1").innerHTML = "¡Enhorabuena! ¡Has superado el curso! ¡Pasa ya al siguiente nivel!"
    }

}