//inicio del algoritmo
let dineroDisponible = 0;
let poco = 'algunos productos pero no todos';
let nada = 'nada, es muy poco';
let todo = 'lo que gustes';
console.log(dineroDisponible)
dineroDisponible = prompt('ingrese el monto de dinero disponible');
dineroDisponible = Number(dineroDisponible);

//condicional
function validarOpciones(){
    if(dineroDisponible <= 50 && dineroDisponible >10){
       alert(`Te alcanza para comprar ${poco}`)
    }
    else if(dineroDisponible <= 10){
        alert(`Te alcanza para ${nada}`)
    }
    else if(dineroDisponible > 50){
        alert(`No te alcanza para ${todo}`)
    }
    
}
validarOpciones();
do{
let agregarMas = prompt('querés agregar más plata? SI/NO');
let masPlata =  prompt('cuanto mas queres agregar');
dineroDisponible += masPlata;
validarOpciones();
} while (agregarMas !== "no")






