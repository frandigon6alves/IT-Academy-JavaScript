function media()
{
    const nota1 = Number(document.getElementById("nota01").value);
    const nota2 = Number(document.getElementById("nota02").value);
    const nota3 = Number(document.getElementById("nota03").value);
   
    const media = (nota1 + nota2 + nota3)/3;
    
    document.getElementById("result").innerHTML = ("El promedio de los resultados es: ") + media;

    console.log("Las notas son: " + nota1 + ", " + nota2 + ", " + nota3)

    const message = `Tus notas son ${nota1}, ${nota2} y  ${nota3}`
    alert(message)

    const resp = prompt('Escriba sí si los valores son correctos, para calcular:')
    console.log("la respuesta fue: " +resp)

}