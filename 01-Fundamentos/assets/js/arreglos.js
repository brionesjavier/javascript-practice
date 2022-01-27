
//forma de hacer un arreglo

// const arr = new Array(10);
// const arr = [];//arreglo vacio
// console.log(arr);

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
//  console.log( {videoJuegos} );

//  console.log( videoJuegos[0] );

let arreglosCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1},
    ['x','megaman','zero','Dr. Light',['Dr.Willy', 'Woodman']]


];
console.log(arreglosCosas);

/* ejercicio conseguir el ultimo valor del arreglo Dr. Light, woofman*/ 
console.log(arreglosCosas[7][4][1]);

//otras forma de conseguir el valor
let ultimo =arreglosCosas[7];

console.log(ultimo[3]);
