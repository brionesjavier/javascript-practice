 function saludar( nombre ){
     console.log( arguments );
     console.log( 'Hola ' + nombre );
 }


 const saludar2 =function( nombre ){
     console.log('Hola '+nombre);
 }


 const saludarFlecha = () =>{
     console.log( 'Hola Flecha' );
 }


 const saludarFlecha2 = (nombre) =>{
    console.log( 'Hola Flecha '+nombre );
}
//  let nombre = prompt('¿cuál es tu nombre?','sin nombre');
//  saludar( 'Fernando', 40, true, 'Costa Rica' );
//  saludar2( 'Tania ' );

//  saludarFlecha();
//  saludarFlecha2( 'Rodrigo' );


 //MAS DETALLES 

function sumar( a, b){
    return a + b;
}

// console.log( sumar( 1, 2) );

// const sumar2 = ( a, b) => { //forma larga cunado son varias lineas
//     return a + b;
// }

const sumar2 = ( a, b) => a + b;

console.log( sumar2( 2, 2));


function getAleatorio(){
    return Math.random();
}

console.log( getAleatorio() );

//ejercicio crear una funcion de flecha, que no tenga llaves {}

const getAleatorio2 = () => Math.random();
console.log( getAleatorio2() );