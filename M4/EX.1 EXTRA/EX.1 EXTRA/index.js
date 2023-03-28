function isMultiple() {

    const num_1 = Number(document.getElementById("first").value)
    const num_2 = Number(document.getElementById("second").value)

    if (num_2 < 2 || num_2 > 7) {
        document.getElementById("result").innerHTML = "El divisor debe estar entre 2 y 7!";
        throw Error('El divisor debe estar entre 2 y 7')
    }

   if (num_1 % num_2 === 0) {
    document.getElementById("result").innerHTML = `${num_2} es multiple de ${num_1}.`;
   } else {
    document.getElementById("result").innerHTML = `${num_2} no es multiple de ${num_1}.`;
   }
}