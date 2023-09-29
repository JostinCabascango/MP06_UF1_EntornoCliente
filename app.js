//Demanar un numero a l'usuari (dies)
//Convertir el numero de dies a anys, mesos i dies
//Els mesos son de 30 dies tots
/*
const resultado = document.getElementById("btn");
const dies = parseInt(prompt("Introduce el dia:"));
function calcularFecha(dies) {
    años = dies // 365
    meses = (dies % 365) // 30
    días = (dies % 365) % 30
    document.write(`El número de días introducido equivale a ${años} años, ${meses} meses y ${dias} días`);
}
resultado.addEventListener("click", calcularFecha(dies));
*/

//Demanar graus Celsius/fahrenheit a l'usuari.
//Demanar una temperatura
/*
const medida = prompt("Elige entre grados C/F:");
const temperatura = parseFloat(prompt("Introduce la temperatura"));
let celcius = 0;
let fahrenheit = 0;
if ((medida == "F") || (medida == "C")) {
    fahrenheit = temperatura * (90 / 50) + 32;
    celcius = (fahrenheit - 32) / (90 / 50);
    document.write(`<p>${temperatura}ºC Son ${fahrenheit} F'</p>`);
    document.write(`<p>${fahrenheit}ºF Son ${celcius} C'</p>`);


}
*/
//Demanar un Numero en base 10.
//Usant divisions, restes i bucles .... convertir el numero a hexadecimal,octal,binari.
//base x -> base 10

function convertirDecimalaHexadecimal(decimal) {

}
function convertirDecimalaOctal(decimal) {

}
function convertirDecimalaBinario(decimal) {

}
const decimal = 1002;
const hexa = convertirDecimalaHexadecimal(decimal);
const octal = convertirDecimalaOctal(decimal);
const binari = convertirDecimalaBinario(decimal);
document.write(`<p>${decimal} en Decimal:</p>`)
document.write(`<p>${hexa} en Hexadecimal</p>`);
document.write(`<p>${octal} en Octal</p>`);
document.write(`<p>${binari} en binario </p>`);