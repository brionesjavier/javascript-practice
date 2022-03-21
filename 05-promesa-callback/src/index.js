import './style.css';
import { buscarHeroe } from './js/callback';

const heroeId1 = 'capi';
const heroeId2 = 'iron';
const heroeId3 = 'spider';

// el calback retorna ...el primer argumento del callback es el error
/* el callback hell es  cuando se tienen que hacer muchos callback anidados
/* lo que hace el codigo sea mas dificil de entender y de donde es el error
*/
buscarHeroe(heroeId1,( err,heroe1 )=>{

    if ( err ) {return console.error( err );}
        buscarHeroe(heroeId2, (err, heroe2)=>{
            if ( err ) {return console.error( err );}
                buscarHeroe(heroeId3, (err, heroe3)=>{
                    if ( err ) {return console.error( err );}

                        console.log(`Enviando a ${ heroe1.nombre } , ${ heroe2.nombre } y ${ heroe3.nombre }a la mision`);

                })

        })
        
});

console.log('Fin del Programa ');