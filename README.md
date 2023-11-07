# Sesión 15 - Ejercicios de JavaScript - Información de la Fecha Actual y Validación de Códigos de Barras

En esta sesión, hemos desarrollado dos ejercicios de JavaScript que abordan el manejo de fechas y la validación de códigos de barras. Los ejercicios son los siguientes:

- Una función que muestra información sobre la fecha actual, incluyendo detalles como la fecha, la hora, semanas transcurridas y porcentajes relacionados con la fecha.
- Una función que valida códigos de barras EAN-8 y EAN-13, convirtiéndolos al formato adecuado y verificando si son correctos o incorrectos.

## Funciones

1. **mostrarInfoFecha()**: Esta función muestra información detallada sobre la fecha y la hora actual. Calcula el día, el mes, el año, la hora y los minutos, además de proporcionar estadísticas relacionadas con la fecha, como el número de semanas transcurridas, el porcentaje de días transcurridos y el porcentaje de horas transcurridas del día.

2. **comprobarCodigoBarras(code)**: Esta función verifica si un código de barras dado es correcto o incorrecto. Si el código no tiene la longitud adecuada, se convierte al formato EAN-8 o EAN-13, según corresponda. Luego, se realiza una comprobación para determinar si el código es correcto o incorrecto.

## Cómo utilizar

1. Abre el archivo `index.html` en tu navegador web.
2. Haz clic en el botón "Mostrar Información de la Fecha" para iniciar el primer ejercicio.
3. La aplicación mostrará en la consola del navegador información detallada sobre la fecha y la hora actual, así como estadísticas relacionadas con la fecha.

4. Haz clic en el botón "Comprobar Código de Barras" para iniciar el segundo ejercicio.
5. La aplicación te pedirá que introduzcas un código de barras.
6. Después de proporcionar el código de barras, la aplicación mostrará en la consola del navegador si el código es correcto o incorrecto, y en caso necesario, lo convertirá al formato adecuado.