// Función para mostrar una alerta
function mostrarAlerta() {
    const mensaje = "¡Hiciste clic en el botón!";
    alert(mensaje);
}

// Función para mostrar un mensaje de resultado
function mostrarResultado(mensaje) {
    alert(mensaje);
}

// Función para mostrar un mensaje de error
function mostrarError(mensaje) {
    alert(mensaje);
}

// Función para mostrar una tabla de multiplicar
function mostrarTablaDeMultiplicar(numero) {
    let tablaHTML = `<h2>Tabla de multiplicar de ${numero}</h2>`;
    tablaHTML += "<table class='table'><thead><tr><th>Operación</th><th>Resultado</th></tr></thead><tbody>";

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        tablaHTML += `<tr><td>${numero} x ${i}</td><td>${resultado}</td></tr>`;
    }

    tablaHTML += "</tbody></table>";
    // Muestra la tabla en el elemento con el ID "tablaDeMultiplicar"
    document.getElementById("tablaDeMultiplicar").innerHTML = tablaHTML;
}

//-----------------------------------------------EJERCICIOS-------------------------------------------------------------

// EJERCICIO 1
const miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", mostrarAlerta);

// EJERCICIO 2
const miBoton2 = document.getElementById("btn");
miBoton2.addEventListener("mouseover", function () {
    const mensaje = "Haz clic en el botón";
    alert(mensaje);
});

// EJERCICIO 3
const botonEnviar = document.getElementById("botonEnviar");
botonEnviar.addEventListener("click", function () {
    const mensaje = document.getElementById("inputMensaje").value;
    if (mensaje) {
        alert(mensaje);
    } else {
        mostrarError("Por favor, ingresa un mensaje");
    }
});

// EJERCICIO 4
const btnResultado = document.getElementById("btnResultado");
const elementoInput = document.getElementById("elementoInput");
btnResultado.addEventListener("click", function () {
    const numero = parseInt(elementoInput.value);
    // Verifica si el número es válido
    if (Number.isInteger(numero)) {
        mostrarTablaDeMultiplicar(numero);
    } else {
        mostrarError("Por favor, ingresa un número válido");
    }
});
