Muestra la sucesión de Fibonacci:

1 - La función fibonacci comienza inicializando las variables a y b en 0 y 1, respectivamente, y crea una matriz llamada result que contiene los primeros dos números de Fibonacci [0, 1].

2 - Luego, se inicia un bucle for para calcular el resto de la sucesión de Fibonacci. El bucle comienza en 2, ya que los primeros dos números de Fibonacci (0 y 1) ya están en la matriz result.

3 - Dentro del bucle for, se calcula la suma de a y b y se guarda en una variable llamada c.

4 - El valor de c se agrega a la matriz result utilizando el método push().

5 - Luego, se actualiza el valor de a para que sea igual a b y se actualiza el valor de b para que sea igual a c.

6 - Después de que el bucle for se completa, la función devuelve la matriz result.

7 - La función showFibonacci se utiliza para obtener el valor de num desde un elemento HTML con el ID "input" que llama a la función fibonacci y luego muestra el resultado en un elemento HTML con el ID "result".