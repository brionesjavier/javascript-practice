import './style.css';
import { buscarHeroe } from './js/callback';

const heroeId = 'capi';

// el calback retorna ...
buscarHeroe(heroeId,( heroe )=>{
    console.log(heroe); 
});

console.log('Fin del Programa ');