
let a = 5;

if ( a >= 10){//undefine , null , una asignacion
    console.log('A es mayor a 10');
}else{
    console.log('A es menor a 10\n');
}

console.log('Fin de programa');

const hoy = new Date();
console.log( hoy );

let dia = hoy.getDay();
console.log({ dia });

dia = ;
if (dia === 0){
    console.log('Domingo');
} else if(dia === 1 ){
    console.log('Lunes');

}else if (dia === 2 ){
    console.log('Martes');

} else if(dia === 3) {
    console.log('Miercoles');

}else if(dia === 4 ){
    console.log('Jueves');

}else if (dia === 5 ){
    console.log('Viernes');
    
} else if(dia === 6) {
    console.log('Sabado')

} else {
    console.log('Hay un error');
}






