const MAX_SCHOLARSHIPS = 5
let scholarshipList = []

function checkScholarships() {
    if(scholarshipList.length >= MAX_SCHOLARSHIPS) {
        document.getElementById('result').innerHTML = `Se alcanzado el máximo de becado. <br> la lista de los afortunados son ${scholarshipList}`;
        return;
    }
    
    const username = document.getElementById("nombre").value;
    let isAdult = document.querySelector('input[name="age"]:checked').value == "Yes";
    let hasDegree = document.querySelector('input[name="degree"]:checked').value == "Yes";
    let isUnemployed = document.querySelector('input[name="unemployed"]:checked').value == "Yes";

    const yesScholarship = ((isAdult && hasDegree) || isUnemployed)

    if (yesScholarship) {
        document.getElementById('scholarshipList').innerHTML = ('Enhorabuena, tiene beca 🥳');
        scholarshipList.push(username)
    }
    if (!yesScholarship) {
        document.getElementById('scholarshipList').innerHTML = ('Lo sentimos... No tienes beca 🥲');
    }
}