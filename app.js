/*
 * Pedir un numero con un prompt al usuario
 * Convertir el numero de dias -> años,meses,dias
 * Cada mes tiene 30 dias , 1 año tiene 365 dias.
 */
function calcularAniosMesesDias(dias) {
    //Calcular años
    const anios = Math.floor(dias / 365);
    //Calcular días restantes después de los años
    const diasRestantes = dias % 365;
    //Calcular meses completos
    const meses = Math.floor(diasRestantes / 30);
    // Calcular días restantes después de los meses
    const diasRestandesFinal = diasRestantes % 30;
    return `Años: ${anios}, Meses: ${meses}, Días: ${diasRestandesFinal}`;
}
const calcularButton = document.getElementById("calcularBtn");
const resultadoTxt = document.getElementById("resultado");
calcularButton.addEventListener("click", function () {
    const dias = parseInt(prompt("Ingresa un número de días:"));
    if (!isNaN(dias)) {
        const result = calcularAniosMesesDias(dias);
        resultadoTxt.innerHTML = result;
    } else {
        resultadoTxt.innerHTML = "Introduce un numero valido";
    }
});
/*
 * Pedir Grados Celsius/fahrenheit al usuario.
 * Pedir la temperatura
 * Convertir la temperatura en grados Fahrenheit a grados celsius y mostrar ambos resultados.
 */

// Función para convertir grados Celsius a Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 90) / 50 + 32;
}

// Función para convertir grados Fahrenheit a Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / (90 / 50);
}
const conversorBtn = document.getElementById("conversorBtn");
const msg = document.getElementById("resultadoTemperatura");
conversorBtn.addEventListener("click", function () {
    // Preguntar al usuario por el sistema de temperatura
    const sistemaTemperatura = prompt(
        "¿Deseas ingresar la temperatura en grados Celsius o Fahrenheit?"
    );
    // Preguntar al usuario por la temperatura
    const temperatura = parseFloat(prompt("Ingresa la temperatura:"));

    if (!temperatura) {
        msg.innerText = "No has introducido ninguna temperatura";
    } else {
        if (sistemaTemperatura.toLowerCase() === "c") {
            let celciusResultado = celsiusToFahrenheit(temperatura);
            msg.innerText = `La temperatura es ${celciusResultado} °F`;
        } else if (sistemaTemperatura.toLowerCase() === "f") {
            let fahrenheitResultado = fahrenheitToCelsius(temperatura);
            msg.innerText = `La temperatura es ${fahrenheitResultado} °C`;
        } else {
            msg.innerText = "El Sistema no existe";
        }
    }
});

/*
  Convertir un número en base 10 (decimal) a su representación en base hexadecimal, octal y binaria
  utilizando bucles, divisiones y restas.
*/

/*
  De decimal a hexadecimal:
     - Utiliza un bucle para realizar divisiones sucesivas del número decimal por 16.
     - En cada iteración, guarda el residuo de la división en una variable.
     - Actualiza el número decimal dividiéndolo por 16.
     - Repite el proceso hasta que el número decimal sea igual a 0.
     - El resultado final será la representación hexadecimal de los residuos, pero en orden inverso.
*/
function decimalToHexadecimal(decimal) {
    const hexadecimales = ["A", "B", "C", "D", "E", "F"]; // Representa los hexadecimales mayores a 9
    let numeroDecimal = parseInt(decimal);
    let hexadecimal = "";
    if (numeroDecimal == 0) { return 0; }
    while (numeroDecimal > 0) {
        let modulo = numeroDecimal % 16;
        if (modulo > 9) {
            const letraHexadecimal = hexadecimales[modulo - 10] // Obtenemos la letra correspondiente del arraglo 
            hexadecimal = letraHexadecimal + hexadecimal;
        }
        else {
            hexadecimal = hexadecimal + modulo;
        }
        numeroDecimal = Math.floor(numeroDecimal / 16);
    }
    return hexadecimal;

}
/*
  De decimal a octal:
     - Utiliza un bucle para realizar divisiones sucesivas del número decimal por 8.
     - En cada iteración, guarda el residuo de la división en una variable.
     - Actualiza el número decimal dividiéndolo por 8.
     - Repite el proceso hasta que el número decimal sea igual a 0.
     - El resultado final será la representación octal de los residuos, pero en orden inverso.
     */
function decimalToOctal(decimal) {
    let numeroDecimal = parseInt(decimal);
    let octal = "";
    if (numeroDecimal == 0) { return 0; }

    while (numeroDecimal > 0) {
        let modulo = numeroDecimal % 8;
        octal = modulo + octal;
        numeroDecimal = Math.floor(numeroDecimal / 8);
    }

    return octal;
}
/*
  De decimal a binario:
     - Utiliza un bucle para realizar divisiones sucesivas del número decimal por 2.
     - En cada iteración, guarda el residuo de la división (0 o 1) en una variable.
     - Actualiza el número decimal dividiéndolo por 2.
     - Repite el proceso hasta que el número decimal sea igual a 0.
     - El resultado final será la representación binaria de los residuos, pero en orden inverso
       (de derecha a izquierda). Debes invertir esta cadena para obtener la representación binaria correcta.
       */
function decimalToBinary(decimal) {
    let numeroDecimal = parseInt(decimal);
    let binario = "";
    if (numeroDecimal == 0) { return 0; }
    while (numeroDecimal > 0) {
        let modulo = numeroDecimal % 2;
        binario = modulo + binario;
        numeroDecimal = Math.floor(numeroDecimal / 2);
    }
    return binario;
}
function convertirBases() {
    const numeroDecimal = 10;
    const hexa = decimalToHexadecimal(numeroDecimal);
    const octal = decimalToOctal(numeroDecimal);
    const binario = decimalToBinary(numeroDecimal);
    document.getElementById("valorDecimal").textContent = `${numeroDecimal} en Decimal:`;
    document.getElementById("resultHexadecimal").textContent = `${hexa} en Hexadecimal`;
    document.getElementById("resultOctal").textContent = `${octal} en Octal`;
    document.getElementById("resultBinario").textContent = `${binario} en binario`;
}
const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convertirBases);
