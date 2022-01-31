
let a = 5;

if ( a >= 10){//undefine , null , una asignacion
//    console.log('A es mayor a 10');
}else{
//    console.log('A es menor a 10\n');
}

// console.log('Fin de programa');

const hoy = new Date();
// console.log( hoy );

let dia = hoy.getDay();
// console.log({ dia });

// dia = 7;
// if (dia === 0){
//     console.log('Domingo');
// } else if(dia === 1 ){
//     console.log('Lunes');

// }else if (dia === 2 ){
//     console.log('Martes');

// } else if(dia === 3) {
//     console.log('Miercoles');

// }else if(dia === 4 ){
//     console.log('Jueves');

// }else if (dia === 5 ){
//     console.log('Viernes');

// } else if(dia === 6) {
//     console.log('Sabado')

// } else {
//     console.log('Hay un error');
// }

//laboratorio 
//Sin usar if else o Switch, unicamente objetos ,arreglos

dia = 6;

//forma  arreglo
const arr = [   
                'Domingo',
                'Lunes', 
                'Martes', 
                'Miercoles', 
                'Jueves', 
                'Viernes', 
                'Sabado',
            ];

console.log('Forma con arreglo ',arr[dia]);
//forma  objetos
            const diasLetras = {
                0 : 'Domingo',
                1 : 'Lunes', 
                2 : 'Martes', 
                3 : 'Miercoles', 
                4 : 'Jueves', 
                5 : 'Viernes', 
                6 : 'Sabado',
            }

            console.log('Forma con objeto ',diasLetras[dia]);
