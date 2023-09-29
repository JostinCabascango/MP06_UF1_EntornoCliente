# Sesión 3 - Ejercicios de JavaScript

Contiene varios archivos relacionados con ejercicios de programación en JavaScript y una implementación de la secuencia de Fibonacci.

## Contenido del repositorio

El repositorio incluye los siguientes archivos principales:

1. `ejercicios.js`
2. `index.html`
3. `fibonacci.js`
4. `fibonacci.html`

A continuación, se detalla la función y el contenido de cada uno de estos archivos.

## `ejercicios.js`

### Descripción

El archivo `ejercicios.js` contiene dos conjuntos de funciones relacionadas con el cálculo de potencias y estadísticas de números.

#### Funciones de cálculo de potencia

- `calcularPotenciaConMathPow`: Calcula la potencia de un número utilizando `Math.pow`.

- `calcularPotenciaConBucle`: Calcula la potencia de un número utilizando un bucle.

- `calcularPotenciaEjercicio`: Encapsula el primer ejercicio, solicitando la entrada del usuario y midiendo el tiempo de ejecución de ambas funciones de cálculo de potencia. Luego, muestra los resultados en la consola.

#### Funciones de estadísticas

- `calcularNumeroMedio`: Calcula el número medio de un arreglo de números.

- `calcularMedia`: Calcula la media (promedio) de un arreglo de números.

- `encontrarNumeroMayor`: Encuentra el número mayor en un arreglo de números.

- `encontrarNumeroMenor`: Encuentra el número menor en un arreglo de números.

- `calcularEstadisticas`: Encapsula el segundo ejercicio, solicitando al usuario tres números y mostrando los resultados de las estadísticas en la consola.

#### Ejecución inicial y evento de clic

El código ejecuta inicialmente el primer ejercicio llamando a `calcularPotenciaEjercicio()`. Luego, agrega un evento de clic a un botón con el ID "calcularBtn" para que cuando el usuario haga clic en el botón, se ejecute `calcularEstadisticas()` y se realice el segundo conjunto de cálculos.

## `index.html`

### Descripción

El archivo `index.html` es una página web que utiliza el código contenido en `ejercicios.js`. Proporciona una interfaz simple para interactuar con los ejercicios y ver los resultados en el navegador.

## `fibonacci.js`

### Descripción

El archivo `fibonacci.js` contiene una implementación de la secuencia de Fibonacci en JavaScript. La secuencia de Fibonacci es una serie numérica en la que cada número es la suma de los dos números anteriores (comenzando por 0 y 1).

## `fibonacci.html`

### Descripción

El archivo `fibonacci.html` es una página web que utiliza el código contenido en `fibonacci.js`. Proporciona una interfaz simple para calcular y mostrar los números de la secuencia de Fibonacci en el navegador.
