// Función para crear una tabla de multiplicar
function crearTablaDeMultiplicar(filas, columnas) {
    const tablaMultiplicarDiv = document.getElementById("tablaMultiplicar");
    tablaMultiplicarDiv.innerHTML = "";
    const tabla = crearTabla();

    for (let i = 1; i <= filas; i++) {
        const fila = crearFila();

        for (let j = 1; j <= columnas; j++) {
            const celda = crearCelda();
            celda.textContent = i * j;
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    tablaMultiplicarDiv.appendChild(tabla);
}

// Función para generar una pirámide de colores
function generarPiramide(numColumnas) {
    const piramideDiv = document.getElementById("tablaPiramide");
    piramideDiv.innerHTML = "";
    const tabla = crearTabla();
    const numFilas = Math.floor(numColumnas / 2) + 1; // El número de filas es la mitad de las columnas más 1 para que sea entero el número de filas
    let numBlancos = Math.floor((numColumnas - 1) / 2); // Numero de celdas blancas en la primera fila de la pirámide (la mitad de las columnas menos 1)
    let numRojos = 1; // Inicializamos el número de celdas rojas en 1 para la primera fila de la pirámide

    for (let i = 0; i < numFilas; i++) {
        const fila = crearFila();

        agregarCeldas(fila, numBlancos, "white");
        agregarCeldas(fila, numRojos, "red");
        agregarCeldas(fila, numBlancos, "white");

        numRojos += 2; // Aumentamos el número de celdas rojas en 2 para la siguiente fila de la pirámide
        numBlancos--; // Disminuimos el número de celdas blancas en 1 para la siguiente fila de la pirámide

        tabla.appendChild(fila);
    }

    piramideDiv.appendChild(tabla);
}

// Función para crear una tabla HTML con estilos CSS
function crearTabla() {
    const tabla = document.createElement("table");
    tabla.style.borderCollapse = "collapse";
    tabla.style.border = "1px solid black";
    tabla.style.margin = "0.5rem";
    tabla.style.padding = "0.5rem";
    tabla.style.width = "100%";
    return tabla;
}

// Función para crear una fila HTML
function crearFila() {
    return document.createElement("tr");
}

// Función para crear una celda HTML Con estilos CSS
function crearCelda() {
    const celda = document.createElement("td");
    celda.style.backgroundColor = "white";
    celda.style.width = "20px";
    celda.style.height = "20px";
    celda.style.border = "3px solid black";
    return celda;
}

// Función para agregar celdas a una fila con un color determinado
function agregarCeldas(fila, numCeldas, color) {
    for (let i = 0; i < numCeldas; i++) {
        const celda = crearCelda();
        celda.style.backgroundColor = color;
        fila.appendChild(celda);
    }
}
// Llamada a las funciones para crear la tabla de multiplicar y la pirámide
const btnGenerarTablaMultiplicar = document.getElementById("btnGenerarTablaMultiplicar");
const btnGenerarPiramide = document.getElementById("btnGenerarPiramide");

btnGenerarTablaMultiplicar.addEventListener("click", function () {
    const filas = parseInt(prompt("Introduce el número de filas"));
    const columnas = parseInt(prompt("Introduce el número de columnas"));

    crearTablaDeMultiplicar(filas, columnas);
});

btnGenerarPiramide.addEventListener("click", function () {
    const columnasColor = parseInt(prompt("Introduce el número de columnas de color para la pirámide"));
    generarPiramide(columnasColor);
});
