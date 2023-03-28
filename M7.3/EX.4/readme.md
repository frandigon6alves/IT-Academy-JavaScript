1 - Se obtiene el valor del input que contiene el DNI a verificar.

2 - Se define una cadena de texto letras que contiene todas las letras posibles para el DNI en orden. Esto es necesario para calcular la letra correcta correspondiente a cada número.

3 - Se utiliza una expresión regular /^\d{8}[a-zA-Z]$/ para validar que el DNI tenga el formato correcto: ocho dígitos seguidos de una letra.

4 - Si el DNI tiene el formato correcto, se procede a calcular la letra correcta:
Se extraen los ocho dígitos del DNI con dni.substring(0, dni.length - 1).
Se obtiene el resto de dividir ese número por 23 con numero % 23.
Se obtiene la letra del DNI que se ha introducido con dni.charAt(dni.length - 1).toUpperCase().
Se busca la letra correcta en la cadena letras con letras.charAt(numero).
Se compara la letra introducida con la letra calculada. Si son iguales, se indica que la letra es correcta. Si son diferentes, se indica cuál debería ser la letra correcta.
Si el DNI no tiene el formato correcto, se indica que el formato no es válido en el elemento HTML con el id resultado.