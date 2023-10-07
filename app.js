// Función para calcular el cambio de una compra en una tienda
function calcularCambio(precioProducto, dineroPagado) {
    const billetes = [500, 200, 100, 50, 20, 10, 5];
    const monedas = [2, 1, 0.5, 0.2, 0.1, 0.05];
    let cambio = dineroPagado - precioProducto;
    let resultado = [];
    for (let i = 0; i < billetes.length; i++) {
        let cantidad = Math.floor(cambio / billetes[i]);
        cambio = cambio - (cantidad * billetes[i]);
        resultado.push(cantidad);
    }
    for (let i = 0; i < monedas.length; i++) {
        let cantidad = Math.floor(cambio / monedas[i]);
        cambio = cambio - (cantidad * monedas[i]);
        resultado.push(cantidad);
    }
    return resultado;
}

// Función para mostrar el cambio en el HTML
function mostrarCambio(cambio) {
    let billetes = [500, 200, 100, 50, 20, 10, 5];
    let monedas = [2, 1, 0.5, 0.2, 0.1, 0.05];
    let resultado = "";
    for (let i = 0; i < billetes.length; i++) {
        if (cambio[i] > 0) {
            resultado += `<li>${cambio[i]} billetes de ${billetes[i]}€</li>`;
        }
    }
    for (let i = 0; i < monedas.length; i++) {
        if (cambio[i + billetes.length] > 0) {
            resultado += `<li>${cambio[i + billetes.length]} monedas de ${monedas[i]}€</li>`;
        }
    }
    return resultado;
}

// Función para crear una tabla con DOM (Document Object Model)
function crearTablaDOM(filas, columnas) {
    let tabla = document.createElement("table");
    for (let i = 0; i < filas; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < columnas; j++) {
            let contenido = document.createTextNode(`fila ${i + 1} columna ${j + 1}`)
            let celda = document.createElement("td");
            celda.appendChild(contenido);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);
    }
    return tabla;
}

// Evento para el botón de calcular el cambio de una compra
const mostrarMsg = document.getElementById("msgCambio");
const boton = document.getElementById("btnCambio");
boton.addEventListener("click", function () {
    const precioProducto = parseFloat(prompt("Introduce el precio del producto"));
    const dineroPagado = parseFloat(prompt("Introduce el dinero pagado"));
    const cambio = calcularCambio(precioProducto, dineroPagado);
    mostrarMsg.innerHTML = mostrarCambio(cambio);
});
// Evento para el botón de crear tabla Con DOM (Document Object Model)

const mostrarTabla = document.getElementById("tablaDOM");
const botonTabla = document.getElementById("btnTabla");
botonTabla.addEventListener("click", function () {
    mostrarTabla.innerHTML = "";
    const filas = parseInt(prompt("Introduce el número de filas"));
    const columnas = parseInt(prompt("Introduce el número de columnas"));
    mostrarTabla.appendChild(crearTablaDOM(filas, columnas));
});