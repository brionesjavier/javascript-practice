import './style.css';
//renombrando funcion con asS
import { buscarHeroe as buscarHeroeCallbackS } from './js/callback';
import { buscarHeroe }from'./js/promesas';

const heroeId1 = 'capi';
const heroeId2 = 'iron';
const heroeId3 = 'spider';

/******************************callback**************************************** */
// el calback retorna ...el primer argumento del callback es el error
/* el callback hell es  cuando se tienen que hacer muchos callback anidados
/* lo que hace el codigo sea mas dificil de entender y de donde es el error
*/
// buscarHeroeCallbackS(heroeId1,( err,heroe1 )=>{

//     if ( err ) {return console.error( err );}
//     buscarHeroeCallbackS(heroeId2, (err, heroe2)=>{
//             if ( err ) {return console.error( err );}
//                         console.log('callback');
//                         console.log(`Enviando a ${ heroe1.nombre }  y ${ heroe2.nombre }a la mision`);
                
//         })  
// });

/*********************************promises************************************* */
// buscarHeroe( heroeId1).then(heroe1 =>{

//     buscarHeroe(heroeId2).then(heroe2 =>{
//         console.log('promises');
//         console.log(`Enviando a ${ heroe1.nombre }  y ${ heroe2.nombre }a la mision`);

//     });
// });

//desestruturacion de un arreglo [objeto1,objeto2,objetoX,...] como argumento de una funcion
Promise.all([buscarHeroe(heroeId1),buscarHeroe(heroeId2),buscarHeroe(heroeId3)]).then(([heroe1,heroe2,heroe3] )=>{
    console.log(`Enviando a ${ heroe1.nombre }, ${heroe2.nombre} y ${ heroe3.nombre} a la mision`);
    //console.log(heroes);

})

console.log('Fin del Programa ');