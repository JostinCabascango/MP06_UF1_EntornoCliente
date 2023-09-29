// Función para encontrar el número más cercano en una lista de números
function encontrarNumeroMasCercano(listaNumeros, objetivo) {
    if (listaNumeros.length === 0) {
        return null;
    }

    let numeroMasCercano = listaNumeros[0];
    let diferenciaMasCercana = Math.abs(numeroMasCercano - objetivo);

    for (let i = 1; i < listaNumeros.length; i++) {
        const numeroActual = listaNumeros[i];
        const diferenciaActual = Math.abs(numeroActual - objetivo);

        if (diferenciaActual < diferenciaMasCercana) {
            numeroMasCercano = numeroActual;
            diferenciaMasCercana = diferenciaActual;
        }
    }

    return numeroMasCercano;
}

// Función para calcular el número más cercano a 100
function calcularNumeroMasCercano() {
    const numero1 = parseInt(prompt("Ingrese el primer número:"));
    const numero2 = parseInt(prompt("Ingrese el segundo número:"));
    const objetivo = 100;
    const listaNumeros = [numero1, numero2];
    const masCercano = encontrarNumeroMasCercano(listaNumeros, objetivo);
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.textContent = `El número más cercano a 100 es: ${masCercano}`;
}


// Función para calcular la hora después de sumar 1 segundo
function calcularHoraMasSegundo() {
    const hh = parseInt(prompt("Ingrese las horas (0-23):"));
    const mm = parseInt(prompt("Ingrese los minutos (0-59):"));
    const ss = parseInt(prompt("Ingrese los segundos (0-59):"));

    const resultadoElement = document.getElementById("resultado2");


    // Crear un objeto de fecha con los valores ingresados
    const fecha = new Date();
    fecha.setHours(hh);
    fecha.setMinutes(mm);
    fecha.setSeconds(ss);

    // Sumar un segundo
    fecha.setSeconds(fecha.getSeconds() + 1);

    // Obtener la nueva hora, minutos y segundos
    const nuevaHora = fecha.getHours();
    const nuevosMinutos = fecha.getMinutes();
    const nuevosSegundos = fecha.getSeconds();

    // Mostrar la nueva hora
    resultadoElement.textContent = `La hora después de sumar 1 segundo es: ${nuevaHora}:${nuevosMinutos}:${nuevosSegundos}`;
}

// Función para comprobar si una fecha ingresada es válida

function comprobarFechaIngresada() {
    const año = parseInt(prompt("Ingresa el año:"));
    const mes = parseInt(prompt("Ingresa el mes (1-12):"));
    const dia = parseInt(prompt("Ingresa el día (1-31):"));
    const resultadoElement = document.getElementById("resultado3");
    // Crear una fecha usando los valores ingresados
    const fecha = new Date(año, mes - 1, dia);
    if (fecha.getFullYear() === año && fecha.getMonth() === mes - 1 && fecha.getDate() === dia) {
        resultadoElement.textContent = "La fecha es válida.";

    } else {
        resultadoElement.textContent = "La fecha es inválida.";

    }

}

// Asociar las funciones a los botones
const ex1Button = document.getElementById("ex1");
const ex2Button = document.getElementById("ex2");
const ex3Button = document.getElementById("ex3");

ex1Button.addEventListener("click", calcularNumeroMasCercano);
ex2Button.addEventListener("click", calcularHoraMasSegundo);
ex3Button.addEventListener("click", comprobarFechaIngresada);

