
//pasa
let a = 10;
let b = a;

console.log({a ,b });
a = 30;
console.log({ a, b });

let juan = { nombre: 'Juan'}
let ana = {...juan};

console.log ({ juan , ana });

ana.nombre= 'Ana';

console.log ({ juan , ana });


const cambiaNombre = ({ ...persona }) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log ({ peter , tony });

// arreglos
console.log('\n');
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();//devuelve un nuevo arreglo
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];//operador spread para rompe el valor por referencia
console.timeEnd('spread');


otrasFrutas.push( 'Mango' );

console.table({ frutas, otrasFrutas });

