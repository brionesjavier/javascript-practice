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
 //let nombre = prompt('¿cuál es tu nombre?','sin nombre');
 saludar( 'Fernando', 40, true, 'Costa Rica' );
 saludar2( 'Tania ' );

 saludarFlecha();
 saludarFlecha2( 'Rodrigo' );