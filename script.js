// Solicita al usuario que introduzca un número entero
const input = prompt("Por favor, introduce un número entero: ");
const number = parseInt(input);

// Función para generar la tabla de multiplicar
function generarTablaMultiplicar(numero) {
    const tabla = [];
    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        tabla.push(`${numero} * ${i} = ${resultado}`);
    }
    return tabla;
}

// Verifica si el número es válido
if (!isNaN(number)) {
    // Crea el encabezado
    document.write(`<h1 class="title">Tabla del ${number}</h1> `);

    // Genera la tabla de multiplicar y la muestra en pantalla como una lista
    const tablaMultiplicar = generarTablaMultiplicar(number);
    document.write("<ul>");
    tablaMultiplicar.forEach((mensaje) => {
        document.write(`<li>${mensaje}</li>`);
    });
    document.write("</ul>");
} else {
    // Muestra un mensaje de error si el usuario no ingresó un número válido
    document.write("<p>Por favor, ingrese un número entero válido.</p>");
}
