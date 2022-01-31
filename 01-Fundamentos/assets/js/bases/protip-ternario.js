
const elMayor = ( a, b) => a>b ? a : b;

const tieneMenbresia = ( mienbro )=> ( mienbro ) ? '2 dólares' : ' 10 dólares';


console.log( elMayor( 20, 14 ) );
console.log( tieneMenbresia( true ) );

const amigo = true;

const amigosArr =[
    'Peter',
    'Tony',
    'Dr.Strsmge',
    amigo ? 'Thor' : 'Loki',
    //(()=>'Nick Fury')(), // funcion anonima autoenfocada
    elMayor( 10,15 ),
];

console.log( amigosArr );

const nota = 65; // A+ A B+
const grado =   nota >= 95 ? 'A+':
                nota >= 90 ? 'A' :
                nota >= 85 ? 'B+':
                nota >= 80 ? 'B' :
                nota >= 75 ? 'C+':
                nota >= 70 ? 'C' : 'F';

console.log({ nota, grado });



