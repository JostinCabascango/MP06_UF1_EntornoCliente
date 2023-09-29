// Función 1: Utilizando Math.pow
function calcularPotenciaConMathPow(base, exponente) {
    return Math.pow(base, exponente);
}

// Función 2: Utilizando un bucle
function calcularPotenciaConBucle(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}

// Función que encapsula el primer ejercicio
function ejercicio1() {
    // Pedir los números al usuario
    const base = parseFloat(prompt("Ingrese la base:"));
    const exponente = parseInt(prompt("Ingrese el exponente:"));

    // Medir el tiempo de ejecución de la función con Math.pow
    console.time("Math.pow");
    const resultadoMathPow = calcularPotenciaConMathPow(base, exponente);
    console.timeEnd("Math.pow");

    // Medir el tiempo de ejecución de la función con un bucle
    console.time("Bucle");
    const resultadoBucle = calcularPotenciaConBucle(base, exponente);
    console.timeEnd("Bucle");

    console.log(`Resultado con Math.pow: ${resultadoMathPow}`);
    console.log(`Resultado con Bucle: ${resultadoBucle}`);
}

//---------------------------------------------------------------------------------------
// Función para calcular el número medio de un arreglo de números
function calcularNumeroMedio(numeros) {
    const numerosOrdenados = numeros.sort((a, b) => a - b); // Ordenar el arreglo de números en orden ascendente
    return numerosOrdenados[1];
}

// Función para calcular la media de un arreglo de números

function calcularMedia(numeros) {
    if (numeros.length === 0) {
        return 0;
    }

    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma / numeros.length;

}

// Función para encontrar el número mayor en un arreglo de números

function encontrarNumeroMayor(numeros) {
    numeros.sort(function (a, b) {
        return a - b
    });
    return numeros[numeros.length - 1];

}

// Función para encontrar el número menor en un arreglo de números

function encontrarNumeroMenor(numeros) {
    numeros.sort(function (a, b) {
        return a - b
    });
    return numeros[0];

}

// Función que encapsula el segundo ejercicio
function ejercicio2() {
    const numero1 = parseInt(prompt("Ingrese el primer número:"));
    const numero2 = parseInt(prompt("Ingrese el segundo número:"));
    const numero3 = parseInt(prompt("Ingrese el tercer número:"));
    const numeros = [numero1, numero2, numero3];
    console.log(`Número Medio: ${calcularNumeroMedio(numeros)}`);
    console.log(`Media: ${calcularMedia(numeros)}`);
    console.log(`Número Mayor: ${encontrarNumeroMayor(numeros)}`);
    console.log(`Número Menor: ${encontrarNumeroMenor(numeros)}`);
}

// Ejecuta el primer ejercicio
ejercicio1();
// Agrega un evento de clic al botón para ejecutar el segundo ejercicio
let calcularBtn = document.getElementById("calcularBtn");
calcularBtn.addEventListener("click", ejercicio2);
