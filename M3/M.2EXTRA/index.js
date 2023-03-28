valor()

function valor() {
    const LITERS = 12;
    const wallWidth = Number(document.getElementById('width').value);
    const wallHeight = Number(document.getElementById('height').value);
    const wallHands = Number(document.getElementById('hands').value);
    const multWh = (wallWidth * wallHeight);
    const result = (multWh * LITERS * wallHands);

    document.getElementById('menssage').innerHTML = `Son ${result} litros por parede, aplicacion en ${wallHands} manos`;
    console.log(`Necessitem ${result} litros por parede, aplicacion en ${wallHands} manos`)
}