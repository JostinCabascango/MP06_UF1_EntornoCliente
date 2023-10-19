// Función que solicita un nombre de archivo y devuelve su extensión
function obtenerExtension() {
    const nombreArchivo = prompt("Introduce el nombre de tu archivo");
    const partes = nombreArchivo.split(".");
    const extension = partes[partes.length - 1];
    console.log(extension);
}

// Función que solicita un texto y comprueba si tiene el mismo número de 'a' y 'b'
function compararCaracteres() {
    const texto = prompt("Introduce un texto");
    const numA = contarCaracter(texto, 'a');
    const numB = contarCaracter(texto, 'b');

    if (numA === numB) {
        console.log("El texto tiene el mismo número de 'a' que de 'b'.");
    } else {
        console.log("El texto no tiene el mismo número de 'a' que de 'b.");
    }
}

// Función para contar las veces que aparece un caracter en un texto
function contarCaracter(texto, caracter) {
    return texto.split(caracter).length - 1; // Se resta 1 porque el split crea un array con un elemento más que el número de veces que aparece el caracter
}

// Función que compara la longitud de dos cadenas de texto
function compararLongitud() {
    const cadena1 = prompt("Ingresa un texto");
    const cadena2 = prompt("Ingresa un segundo texto");

    if (cadena1.length === cadena2.length) {
        console.log("Las cadenas tienen la misma longitud.");
    } else {
        console.log("Las cadenas no tienen la misma longitud.");
    }
}