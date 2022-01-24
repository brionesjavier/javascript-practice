
// console.log('Hola mundo'); //comentario

let a = 10, // declaracion de varias variables
    b = 20, 
    c = 30,
    d = 'hola ', 
    e = 'superman',
    x = a + b;

const saludo = d + e;
console.log( a );//impriendo una variable
console.warn( x );//imprimiendo como advertencia
console.error( x );//imprimiendo como error


//formas de imprimir mas de un archivo
console.log('a', a);
console.log({a});
console.log('b',b);
console.log({b});
console.log('c',c);
console.log({c});

//imprimiendo variables como una tabla
console.table({a, b, c, d, e, x});




