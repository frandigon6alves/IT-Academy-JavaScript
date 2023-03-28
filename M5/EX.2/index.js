function calcIntervals() {
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)

    const numberList = []

    let result = 0

    for (let index = num1; index <= num2; index++) {

        result = result + index

        numberList.push(index)
    }
    document.getElementById('result').innerHTML = `${num1} y ${num2}: la suma de los valores es = ${numberList.join(' + ')} = ${result}`
}
