let tablasDisponibles = 0; 
function hacerTablas(){
    let secuencia = 1;
    let tabla = Number(prompt('Ingresa la tabla a multiplicar'));
    console.log(`La tabla del ${tabla}, es:`)
    while(secuencia <= 10){
    resultado = secuencia * tabla;
    console.log(resultado);
    secuencia++;
}
}

function seguirAprendiendo(){
    do{
        let seguir = prompt('Desea seguir aprendiendo? responda si/no')
        if(seguir.toLocaleLowerCase() == "si"){
            hacerTablas();
        }
    else{
        alert('fue un placer aqprender juntos')
    }
    tablasDisponibles++;
}while(tablasDisponibles < 3)
}
hacerTablas();
seguirAprendiendo();