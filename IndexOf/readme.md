INDEXOF:

-> EL metodo se utiliza para encontrar la posición de un carácter o una secuencia de caracteres en una string.

-> Devuelve el índice de la primera aparición de la substring especificada desde el principio de la string original.

-> IndeOf() pasa a través la string original en busca de la primera aparición de la substring y devuelve la posición donde se encontró.

EJEMPLO:

1 - Se utiliza el método indexOf() para buscar la posición de compareString dentro de myString y se asigna a la variable position.

2 - Se declara la variable word como una cadena vacía.

3 - Se verifica si la variable position es igual a -1, lo que significa que compareString no fue encontrada en myString y en HTML imprimirá un mensaje indicando que no hay palabra correspondiente.

4 - Si position no es igual a -1, entonces compareString fue encontrada en myString.

5 - Se utiliza el método substring() que tiene dos parámetros (la posición inicial que desea y la posición final), asi obtene la subcadena que comienza en la posición position y tiene una longitud igual a la longitud de compareString.

6 - Se actualizan los elementos HTML.