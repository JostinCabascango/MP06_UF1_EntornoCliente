// Funcion que muestra la informacion de la fecha actual
function mostrarInfoFecha(){
    let fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth();
    let anio = fechaActual.getFullYear();
    let hora = fechaActual.getHours();
    let minutos = fechaActual.getMinutes();
    let segundos = fechaActual.getSeconds();

    let fechaFormateada = dia + " del " + mes + " de " + anio;
    let horaFormateada = hora + ":" + minutos + ":" + segundos;
    let fechaInicio = new Date(anio, 0, 1);
    let fechaFin = new Date(anio, 11, 31);
    let milisegundos = fechaActual - fechaInicio;
    let milisegundosFin = fechaFin - fechaActual;
    let milisegundosDia = 24 * 60 * 60 * 1000;
    let milisegundosSemana = 7 * milisegundosDia;
    let semanas = Math.floor(milisegundos / milisegundosSemana);
    let porcentajeDia = Math.floor((milisegundos % milisegundosDia) / milisegundosDia * 100).toFixed(2);
    let porcentajeDiaRestante = Math.floor((milisegundosFin % milisegundosDia) / milisegundosDia * 100).toFixed(2);
    let porcentajeHoras = Math.floor((milisegundos % milisegundosDia) / milisegundosDia * 100).toFixed(2);
    let porcentajeHorasRestantes = Math.floor((milisegundosFin % milisegundosDia) / milisegundosDia * 100).toFixed(2);

    console.log("Fecha actual -> hoy es " + fechaFormateada);
    console.log("Han pasado " + semanas + " semanas desde el inicio del año");
    console.log("El % de dias transcurridos desde el inicio del año es " + porcentajeDia + "%");
    console.log("El % de dias que quedan hasta el final del año es " + porcentajeDiaRestante + "%");
    console.log("Hora actual -> Ahora son las " + horaFormateada);
    console.log("El % del dia que ha pasado hasta el momento es " + porcentajeHoras + "%");
    console.log("Quedan un % de horas del dia por pasar -> " + porcentajeHorasRestantes + "%");

}
// Funcion que añade ceros a la izquierda de un codigo de barras hasta que tenga el numero de digitos indicado
function addLeftZeroPadding(code,num){
    // Convertimos el codigo de barras a string
    code = code.toString();
    // Calculamos cuantos ceros hay que añadir
    let numZeros = num - code.length;
    // Añadimos los ceros a la izquierda
    for(let i = 0; i < numZeros; i++){
        code = "0" + code;
    }
    // Devolvemos el codigo de barras con los ceros añadidos
    return code;

}
// Funcion que comprueba si un codigo de barras EAN-8 y EAN-13 es Correcto o Incorrecto
function checkDigitControl(code) {
    // Convertimos el codigo de barras a string
    code = code.toString();
    // Comprobamos si el codigo de barras es EAN-8 o EAN-13
    if (code.length !== 8 && code.length !== 13) {
        if (code.length < 8) {
            console.log("El codigo de barras se ha convertido a EAN-8 -> " + code)
            code = addLeftZeroPadding(code,8);
        } else if (code.length>8 && code.length<13){
            code = addLeftZeroPadding(code,13);
            console.log("El codigo de barras se ha convertido a EAN-13 -> " + code)
        }
    }
    // Inicializamos la variable que almacenara el resultado de la suma
    let sum = 0;
    // Recorremos el codigo de barras de izquierda a derecha excepto el ultimo digito
    for (let i = 0; i < code.length - 1; i++) {
        // Obtenemos el digito actual
        let digit = parseInt(code[i]);
        // Si el digito actual es par multiplicamos por 3
        if (i % 2 === 0) {
            digit *= 3;
        }
        // Sumamos el digito actual a la suma total
        sum += digit;
    }
    // Calculamos el siguiente multiplo de 10 superior a la suma total
    let nextTen = Math.ceil(sum / 10) * 10;
    // Calculamos la diferencia entre el siguiente multiplo de 10 y la suma total
    let diff = nextTen - sum;
    // Obtenemos el ultimo digito del codigo de barras
    let lastDigit = parseInt(code[code.length - 1]);
    // Comprobamos si el ultimo digito es igual a la diferencia calculada
    if (lastDigit === diff) {
        return true;
    } else {
        return false;
    }
}
// Ejemplos de prueba
function comprobarCodigoBarras(code) {
    if (checkDigitControl(code)) {
        console.log(`El codigo de barras ${code} es correcto`)
    } else {
        console.log(`El codigo de barras ${code} es incorrecto`)

    }
}
comprobarCodigoBarras(65839522); // Correcto
comprobarCodigoBarras(65839521); // Incorrecto
comprobarCodigoBarras(50293657794225); // Correcto
comprobarCodigoBarras(51293657794225); // Incorrecto
comprobarCodigoBarras(7501031311305); // Correcto
comprobarCodigoBarras(1234567) // Incorrecto -> Se convierte a EAN-8
