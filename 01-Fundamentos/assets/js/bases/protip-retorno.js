
/* 
//  function crearPersonas(nombre, apellido){
//     return {
//         nombre: nombre,
//         apellido: apellido
//     }
//  }
 */
/* compacta
//  function crearPersonas(nombre, apellido){
//     return  { nombre,apellido }  
//  }
*/
const crearPersonas = (nombre, apellido) => ({ nombre, apellido});

const persona = crearPersonas( 'Fernado', 'Herrera');

console.log ( persona );

function imprimeArgumentos(){
    console.log( arguments );
}

const imprimeArgumentos2 = (edad,...args) =>  {//rest 
//     console.log( edad,args);
    return args;
}
/*
const argumentos = imprimeArgumentos2(10,true, false, 'Fernando','Hola');
console.log({ argumentos });
*/

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10,true, false, 'Fernando','Hola');

console.log({ casado, vivo, nombre, saludo });

const {apellido: nuevoApellido} = crearPersonas( 'Fernado', 'Herrera');
console.log({ nuevoApellido });

//destructuracion de argumentos

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    //edad: 40,
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
};

// const imprimePropiedades = ( personaje ) => {
//     console.log( personaje.nombre );
//     console.log( personaje.apellido );
//     console.log( personaje.codeName );
//     console.log( personaje.vivo );
//     console.log( personaje.edad );
//     console.log( personaje.trajes );
// }

const imprimePropiedades = ( { nombre, codeName, vivo, edad = 15, trajes } ) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades( tony );