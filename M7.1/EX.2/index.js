function calculateGrades() {
    const allGrade = parseInt(document.getElementById("numNotas").value);
    let gradeList = [];
    let grade

    for (grade = 0; grade < allGrade; grade++) {
        gradeList[grade] = parseFloat(prompt("Informe la nota " + (grade + 1) + ":"));
    }
    let soma = 0;
    for (grade = 0; grade < allGrade; grade++) {
      soma += gradeList[grade];
    }
    let media = soma / allGrade;
    let message;
    if (media < 5) {
        message = "La nota média de la clase está suspensa. Los estudiantes tienen que despejar sus dudas y trabajar más duro.";
    } else if (media < 7) {
        message = "La nota media de la clase es buena, pero los alumnos tienen que mejorar el trabajo.";
    } else {
        message = "¡Felicidades! La calificación promedio de la clase corresponde al esfuerzo real.";
    }
    document.getElementById("result").innerHTML = message;
}