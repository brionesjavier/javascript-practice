
const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

console.warn('\nWhile\n');
// while( i < carros.length ){
//     console.log( carros[i] );
//     //i = i + 1;
//     i++;
// }

// undefined
//null
//false

while( carros[i] ){

    if( i === 1){
       // break;//sale del ciclo
       i++;
       continue;
    }
    console.log( carros[i] );
    i++;
}
console.warn('\nDo While\n');
let j = 0;

do {
    console.log( carros[j] );
    j++;

}while(carros[j]);