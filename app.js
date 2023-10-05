// Función para calcular el precio de la llamada telefónica
function calcularPrecio(horas, minutos, segundos) {
    const precioEstablecimiento = 10; // Precio fijo de establecimiento en céntimos
    const PrecioPorMinuto = 5; // Precio por minuto en céntimos
    const tiempoTotalSegundos = (horas * 3600) + (minutos * 60) + segundos;
    // Calcular el Precio total de la llamada en céntimos
    const precioTotalCentimos = precioEstablecimiento + (tiempoTotalSegundos / 60) * PrecioPorMinuto;
    // Convertir el Precio total de céntimos a euros (1 euro = 100 céntimos)
    const precioTotalEuros = precioTotalCentimos / 100;
    return precioTotalEuros;

}
// Función para obtener la duración de la llamada desde el usuario y mostrar el resultado
function obtenerTiempo() {
    const horas = parseInt(prompt("Introduce las horas:"));
    const minutos = parseInt(prompt("Introduce los minutos:"));
    const segundos = parseInt(prompt("Introduce los segundos:"));
    const precio = calcularPrecio(horas, minutos, segundos);
    const mensaje = `El precio de la llamada telefonica es ${precio.toFixed(2)} €`;
    const msgPrecio = document.getElementById("msgPrecio");
    msgPrecio.innerHTML = mensaje;


}
// Función para obtener el color desde el usuario y mostrar el resultado en formato hexadecimal
function obtenerColor() {
    const rojo = parseInt(prompt("Introduce el valor de rojo (0-255):"));
    const verde = parseInt(prompt("Introduce el valor de verde (0-255):"));
    const azul = parseInt(prompt("Introduce el valor de azul (0-255):"));
    // Convertir cada componente a su representación hexadecimal
    const rojoHex = decimalAHexadecimal(rojo);
    const verdeHex = decimalAHexadecimal(verde);
    const azulHex = decimalAHexadecimal(azul);
    // Crear el formato RGB hexadecimal (#RRGGBB)
    const colorHex = "#" + rojoHex + verdeHex + azulHex;
    const mensaje = `En Hexadecimal es: ${colorHex}`;
    const msgRGB = document.getElementById("msgRGB");
    msgRGB.innerHTML = mensaje;


}
// Función para convertir un número decimal a hexadecimal
function decimalAHexadecimal(decimal) {
    return decimal.toString(16);
}
// Obtener los elementos de los botones
const btnPrecio = document.getElementById("btnPrecio");
btnPrecio.addEventListener("click", obtenerTiempo)

const btnRGB = document.getElementById("btnRGB");
btnRGB.addEventListener("click", obtenerColor)