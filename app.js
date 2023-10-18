// Obtenemos los elementos del DOM
const btnGenerarRombo = document.getElementById("btnGenerarRombo");
const romboDiv = document.getElementById("tablaRombo");

// Añadimos el evento al botón
btnGenerarRombo.addEventListener("click", generarRomboOnClick);
// Función que se ejecuta al hacer click en el botón
function generarRomboOnClick() {
    const columnasColor = parseInt(prompt("Introduce el número de columnas de color"));
    romboDiv.innerHTML = "";
    generarRombo(columnasColor, romboDiv);
}
// Función que genera el rombo y lo añade al div
function generarRombo(numColumnas, romboDiv) {
    const tabla = crearTabla();
    const numFilas = Math.floor(numColumnas / 2) + 1;
    const mitad = Math.floor(numColumnas / 2);

    for (let i = 0; i < numFilas; i++) {
        const fila = crearFila(mitad, i);
        tabla.appendChild(fila);
    }

    for (let i = numFilas - 2; i >= 0; i--) {
        const fila = crearFila(mitad, i);
        tabla.appendChild(fila);
    }

    romboDiv.appendChild(tabla);
}
// Devuelve una tabla con los estilos
function crearTabla() {
    const tabla = document.createElement("table");
    tabla.style.width = "100%";
    tabla.style.margin = "0.5rem";
    tabla.style.padding = "0.5rem";
    return tabla;
}
// Devuelve una fila con las celdas correspondientes al color
function crearFila(mitad, i) {
    const fila = document.createElement("tr");

    for (let j = 0; j < mitad - i; j++) {
        fila.appendChild(crearCelda("white"));
    }

    for (let j = 0; j < 2 * i + 1; j++) {
        fila.appendChild(crearCelda("red"));
    }

    for (let j = 0; j < mitad - i; j++) {
        fila.appendChild(crearCelda("white"));
    }

    return fila;
}
// Devuelve una celda con el color correspondiente y los estilos
function crearCelda(color) {
    const celdaCustomizada = document.createElement("td");
    celdaCustomizada.style.backgroundColor = color;
    celdaCustomizada.style.width = "20px";
    celdaCustomizada.style.height = "20px";
    celdaCustomizada.style.border = "3px solid black";
    return celdaCustomizada;
}
