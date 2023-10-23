function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function pedirNumeroAlUsuario() {
    return parseInt(prompt("Adivina el número entre 1 y 100"));
}

function adivinarNumero() {
    const numAleatorio = generarNumeroAleatorio(1, 100);
    console.log("Número aleatorio a adivinar:", numAleatorio);
    let numeroIntentos = 0;
    let victoria = false;

    while (!victoria) {
        let numUsuario = pedirNumeroAlUsuario();
        numeroIntentos++;

        if (numUsuario === 0) {
            console.log("Game over");
            break;
        }

        if (isNaN(numUsuario)) {
            console.log("Número no válido. Inténtalo de nuevo.");
            continue;
        }

        if (numUsuario === numAleatorio) {
            victoria = true;
            console.log(`¡Conseguido en ${numeroIntentos} intentos!`);
        } else if (numUsuario < numAleatorio) {
            console.log(`El número introducido es menor a ${numAleatorio}`);
        } else {
            console.log(`El número introducido es mayor a ${numAleatorio}`);
        }
    }
}

adivinarNumero();
