import './style.css';
import { buscarHeroe } from './js/callback';

const heroeId = 'capi';

// el calback retorna ...
buscarHeroe(heroeId,( err,heroe )=>{

    if ( err ) {
        console.error( err );
    }else{
       console.info(heroe);  
    }
    
});

console.log('Fin del Programa ');