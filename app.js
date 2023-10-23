// Funcion para encontrar un caracter en un texto
function encontrarCaracter() {
    const texto = prompt("Ingrese un texto");
    const caracter = prompt("Ingresa un carácter");
    const array = texto.split(caracter).length - 1;

    if (array >= 2 && array <= 4) {
        console.log("El carácter está repetido de 2 a 4 veces.");
    } else {
        console.log("El carácter no está repetido de 2 a 4 veces.");
    }
}
// Funcion para eliminar un caracter en una posicion especifica
function eliminarCaracter() {
    const texto = prompt("Ingrese un texto");
    const posicion = prompt("Ingrese la posición del carácter que desea eliminar");
    const array = texto.split("");
    array.splice(posicion, 1);
    console.log(array.join(""));
}
// Funcion que analiza el texto ingresado y muestra sus caracteristicas
function analizarTexto() {
    const texto = prompt("Ingrese un texto");
    const expresionRegular = /[aeiouAEIOUáéíóúÁÉÍÓÚ]/gi;
    const array = texto.match(expresionRegular);
    const vocalesTextoString = array.join(" ");

    document.write(`<p>Texto Ingresado: ${texto}</p>`);
    document.write(`<p>Texto en Mayúsculas: ${texto.toUpperCase()}</p>`);
    document.write(`<p>Texto en Minúsculas: ${texto.toLowerCase()}</p>`);
    document.write(`<p>Longitud Total del Texto: ${texto.length}</p>`);
    document.write(`<p>Número de Palabras del Texto: ${texto.split(" ").length}</p>`);
    document.write(`<p>Las Vocales que Contiene: ${vocalesTextoString}</p>`);
    document.write(`<p>El Número de Vocales del Texto: ${array.length}</p>`);
    document.write("<ul>");

    const palabras = texto.split(" ");
    for (let i = 0; i < palabras.length; i++) {
        document.write(`<li>${palabras[i]}</li>`);
    }

    document.write("</ul>");
}
// Funcion que calcula los minutos que faltan para la media noche a partir de una hora ingresada por el usuario en formato hh:mm:ss
function minutosMediaNoche() {
    const hora = prompt("Ingrese una hora en formato hh:mm:ss");
    const array = hora.split(":");
    const horas = parseInt(array[0]);
    const minutos = parseInt(array[1]);
    const segundos = parseInt(array[2]);
    // 1440 minutos = 24 horas
    const minutosFaltantes = 1440 - ((horas * 60) + minutos + (segundos / 60));
    console.log(`Faltan ${minutosFaltantes} minutos para la media noche.`);
}
