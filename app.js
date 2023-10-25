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
