function decimalTo(decimal, base) {
    let hexadecimal = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    let numeroDecimal = parseInt(decimal);
    let resultado = "";
    if (numeroDecimal == 0) { return 0; }
    while (numeroDecimal > 0) {
        let modulo = numeroDecimal % base;
        resultado = hexadecimal[modulo] + resultado;
        numeroDecimal = Math.floor(numeroDecimal / base);
    }
    return resultado;
}
function convertirBases() {
    const numeroDecimal = prompt("Introduce un numero en base 10: ");
    const hexa = decimalTo(numeroDecimal, 16);
    const octal = decimalTo(numeroDecimal, 8);
    const binario = decimalTo(numeroDecimal, 2);
    document.getElementById("valorDecimal").textContent = `${numeroDecimal} en Decimal:`;
    document.getElementById("resultHexadecimal").textContent = `${hexa} en Hexadecimal`;
    document.getElementById("resultOctal").textContent = `${octal} en Octal`;
    document.getElementById("resultBinario").textContent = `${binario} en binario`;
}
const convertButton = document.getElementById("convertButton");
convertButton.addEventListener("click", convertirBases);