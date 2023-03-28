Indica si la frase es palíndromo:

El usuario/a debe introducir una frase y el programa debe decir si la frase es un palíndromo.

1 - Primero, se define una función llamada palindrome() que no tiene argumentos.

2 - Con el método document.getElementById("string") buscamos en el documento HTML un atributo id igual a "string" y devuelve el contenido ingresado por el usuario en la pantalla.

3 - La variable frase se inicializa como una copia de la variable input, pero se le aplican una serie de transformaciones:

4 - El método trim() se utiliza para eliminar los espacios en blanco que puedan estar al principio o al final del texto.

5 - El método toLowerCase() se utiliza para convertir todas las letras del texto a minúsculas.

6 - La variable fraseInvertida se inicializa como una copia de la variable frase, pero se le aplican las siguientes transformaciones:

7 - Se utiliza la sintaxis de arrays [...frase] para convertir la cadena de texto frase en un array de caracteres. Se invierte el orden del array utilizando reverse(), y luego se une de nuevo en una cadena utilizando join('').

8 - La variable esPalindromo se inicializa como true si la variable frase es igual a la variable fraseInvertida. De lo contrario, se inicializa como false.

9 - Se utiliza un condicional if para verificar el valor de la variable esPalindromo. Si es true, se muestra un mensaje de alerta que indica que la frase es un palíndromo. Si es false, se muestra un mensaje de alerta que indica que la frase no es un palíndromo.