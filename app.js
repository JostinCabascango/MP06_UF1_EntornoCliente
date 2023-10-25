// Funcion que calcula los años que comienzan en miercoles
function obtenerAniosQueComienzanEnMiercoles(){
    const primerAnio=parseInt(prompt("Ingrese el primer año"))
    const segundoAnio=parseInt(prompt("Ingrese el segundo año"))
    for (let i = primerAnio; i <= segundoAnio; i++) {
        let fecha=new Date(i,0,1)
        if(fecha.getDay()===3){
            //Mostrar la fecha en formato de cadena
            console.log(fecha.toDateString());
        }
    }
}
// Funcion que determina si una palabra es pentavocalica o no (contiene las 5 vocales)
function esPentavocalica(){
    const palabra=prompt("Introduce una palabra");
    const vocales=[/[aàáAÀÁ]/gi,/[eèéEÈÉ]/gi,/[iìíIÌÍ]/gi,/[oòóOÒÓ]/gi,/[uùúUÙÚ]/gi];
    let contador=0;
    for (let i = 0; i < vocales.length; i++) {
        if(palabra.match(vocales[i])){
            contador++;
        }
    }
    if(contador===5){
        console.log("Es Pentavocalica");
    }
    else{
        console.log("No es Pentavocalica");
    }

}