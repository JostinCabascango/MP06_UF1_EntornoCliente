const input = prompt("Introduce un número entero: ");
const number = parseInt(input);

// Verifica si el número es válido
if (!isNaN(number)) {
    // Crea el encabezado
    document.write(`<h1 class="title">Tabla del ${number}</h1> `)
    //Genera y muestra la tabla de multiplicar del 1 al 10
    document.write("<ul>")
    for (var i = 1; i <= 10; ++i) {
        let result = number * i;
        let msg = `${number} * ${i} = ${result}`;
        document.write(`<li>${msg}</li>`);
    }
    document.write("</ul>")

} else {
    // Muestra un mensaje de error si el usuario no ingresó un número válido
    document.write("<p>Por favor, ingrese un número entero válido.</p>");
}
