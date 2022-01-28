let personaje ={
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity war' //si se quiere colocar el nombre con guion se tiene que colocar con "" o '' aunque no es recomendable

};
console.log( personaje );
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);//otra Forma de llamar un atributo del objeto
console.log('Edad', personaje.edad);

console.log('Coords', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('No. Trajes', personaje.trajes.length );
console.log('Último traje', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo', personaje[x] );

console.log('última película',personaje["ultima-pelicula"]);// no se puede llamar por medio del punto por tener un guion 

// mas detalle 

personaje.edad = null; // no elimina el atributo asignandolo null
delete personaje.edad 
console.log( 'eliminada la edad',personaje );

personaje.casado = true;

const entriesPares =Object.entries( personaje );
console.log( "entriesPares",entriesPares );
// nota asinar como constante no bloquea las propiedades del objeto para ser eliminado

Object.freeze( personaje );// evita que se pueda modificar el objeto

personaje.dinero = 100000;
personaje.casado = false;

personaje.direccion.ubicacion = 'Costa Rica';
console.log('Modificacion direcion', personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
console.log('propiedades', propiedades );

const valores = Object.values( personaje );
console.log('valores ', valores );