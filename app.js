/*
    1.crear una tabla de multiplicar
    2.crear una piramide de colores
 */
function crearTablaDeMultiplicar(filas, columnas) {
    const tablaMultiplicarDiv = document.getElementById("tablaMultiplicar");

    tablaMultiplicarDiv.innerHTML = "";

    const tabla = document.createElement("table");
    tabla.style.width = "100%";
    tabla.style.margin = "1rem";
    tabla.style.padding = "1rem";

    for (let i = 1; i <= filas; i++) {
        const fila = document.createElement("tr");

        for (let j = 1; j <= columnas; j++) {
            const celda = document.createElement("td");
            celda.style.border = "2px solid black";
            celda.style.padding = "0.5rem";
            celda.style.textAlign = "center";

            const resultado = document.createTextNode(`${i * j}`);
            celda.appendChild(resultado);
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    tablaMultiplicarDiv.appendChild(tabla);
    return tabla;
}

const btnGenerarTablaMultiplicar = document.getElementById("btnGenerarTablaMultiplicar");

btnGenerarTablaMultiplicar.addEventListener("click", function () {
    const filas = parseInt(prompt("Introduce el número de filas"));
    const columnas = parseInt(prompt("Introduce el número de columnas"));

    crearTablaDeMultiplicar(filas, columnas);
});

const btnGenerarPiramide = document.getElementById("btnGenerarPiramide");

btnGenerarPiramide.addEventListener("click", function () {
    const columnasColor = parseInt(prompt("Introduce el número de columnas de color"));
    const piramideDiv = document.getElementById("tablaPiramide");

    piramideDiv.innerHTML = "";

    generarPiramide(columnasColor, piramideDiv);
});

function generarPiramide(numColumnas, piramideDiv) {
    const tabla = document.createElement("table");
    tabla.style.width = "100%";
    tabla.style.margin = "1rem";
    tabla.style.padding = "1rem";

    for (let i = numColumnas; i >= 1; i--) {
        const fila = document.createElement("tr");

        for (let j = 1; j <= numColumnas; j++) {
            const celda = document.createElement("td");
            celda.style.width = "20px";
            celda.style.height = "20px";
            celda.style.backgroundColor = "white";
            celda.style.border = "2px solid black";
            celda.style.padding = "0.5rem";

            if (j >= i && j <= numColumnas - i + 1) {
                celda.style.backgroundColor = "red";
            }

            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    piramideDiv.appendChild(tabla);
    return tabla;
}
