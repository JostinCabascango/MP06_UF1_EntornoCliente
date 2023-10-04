
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
function obtenerTiempo() {
    const horas = parseInt(prompt("Introduce las horas:"));
    const minutos = parseInt(prompt("Introduce los minutos:"));
    const segundos = parseInt(prompt("Introduce los segundos:"));
    const precio = calcularPrecio(horas, minutos, segundos);
    const mensaje = `El precio de la llamada telefonica es ${precio}  €`;
    const btnPrecio = document.getElementById("msgPrecio");
    btnPrecio.innerHTML = mensaje;


}
const btnPrecio = document.getElementById("btnPrecio");
btnPrecio.addEventListener("click", obtenerTiempo)
