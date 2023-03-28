function palindrome() {
  const input = document.getElementById("string").value;
  const frase = input.trim().toLowerCase();
  const fraseInvertida = [...frase].reverse().join('');
  const esPalindromo = frase === fraseInvertida;

  if (esPalindromo) {
    alert('La frase es un palíndromo');
  } else {
    alert('La frase no es un palíndromo');
  }
}