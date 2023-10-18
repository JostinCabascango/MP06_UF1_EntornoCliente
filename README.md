# Sesión 10 - Ejercicio de Javascript - Rombo de Colores

En esta sesión, hemos desarrollado 1 ejercicio de JavaScript que se centran en la creación de una rombo de colores a partir de la piramide de la sesion 9.


1. **Rombo de Colores**: Permite crear un rombo de colores en la página web. El usuario debe ingresar el número de casillas de la linea central del rombo y la aplicación generará el rombo de colores.

## Cómo Utilizar la Aplicación

1. Abre el archivo `index.html` en tu navegador web.

2. Haz clic en el botón "Generar Rombo".

3. Se te solicitará ingresar el numero de casillas de la linea central.

4. La aplicación generará un rombo de colores y la mostrará en la página.

#### Descripción del Código

El código consta de varias partes:

- `btnGenerarRombo`: Esta es la referencia al botón “Generar Rombo” en el archivo HTML. Se añade un evento “click” a este botón para ejecutar la función cuando se haga clic en él.

- `generarRombo`: Esta función genera el rombo de colores. Toma como parámetros el número de columnas y una referencia al div donde se mostrará el rombo.

- `crearCelda`: Esta función crea una celda con un color específico y devuelve la celda personalizada.
