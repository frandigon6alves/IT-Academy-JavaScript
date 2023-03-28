Muestra un string al revés:

En este programa el usuario debe introducir un string y, utilizando un bucle for, el programa debe mostrar el string al revés.

1 - En el HTML creamos un input para que el usuario introduzca el string que quiere mostrar al revés, un botón para ejecutar la función mostrarAlReves() y un div para mostrar el resultado.

2 - En el JavaScript creamos la función mostrarAlReves() que se ejecuta cuando el usuario hace clic en el botón.

3 - Dentro de la función, obtenemos el valor del input del usuario utilizando document.getElementById("input-string").value.

4 - Creamos una variable stringAlReves para almacenar el string al revés.

5 - Con un bucle for recorremos el string al revés. El bucle comienza en la última posición del string (input.length - 1) y termina en la primera posición (0).

6 - Dentro del bucle for, utilizase el operador += para ir concatenando cada caracter del string al revés a la variable stringAlReves.

7 - Finalmente, con el método document.getElementById() obtenemos el elemento HTML con el id "resultado".