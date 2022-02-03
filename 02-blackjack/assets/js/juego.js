
const miModulo = (()=>{ // patron modulo
    'use strict'

    let deck = [];
    const   tipos =['C','D','H','S'],
            especiales =['A','J','Q','K'];

    let puntosJugadores = [];
    //   Referencias del HTML

    const   btnPedir = document.querySelector("#btnPedir"),
            btnDetener = document.querySelector("#btnDetener"),
            btnNuevo = document.querySelector("#btnNuevo");

    const   divCartasJugadores = document.querySelectorAll('.divCartas'),//arreglo
            puntosHTML  = document.querySelectorAll("small");

    // Esta funcion inicializa el juego
    const inicializarJuego = ( numJugadores = 2) =>{
        deck = crearDeck();
        puntosJugadores = [];
        for(let i = 0; i < numJugadores; i++ ){
            puntosJugadores.push(0);
        }

        puntosHTML.forEach( elem => elem.innerText = 0);//  reseteando puntos html
        divCartasJugadores.forEach( elem => elem.innerHTML = '');//  reseteando cartas jugadores 
        
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    
   
    }


    // Esta funcion crea una nueva baraja 
    const crearDeck = () => {
        deck = [];

        for(let i = 2; i <= 10; i++){
            for(let tipo of tipos){
                deck.push( i + tipo );
            }
        }
        for( let tipo of tipos ){
            for( let especial of especiales ){
                deck.push( especial + tipo );
            }
        }
        return _.shuffle( deck );//shuffle se le pasa un arreglo y devuelve un arreglo desordenado
    }

    
    //Esta funcion toma una carta y la elimina de la baraja

    const pedirCarta = () =>{

        if( deck.length === 0 ){
            throw 'No hay Cartas en el deck';
        }    
        return deck.pop(); 
    }



    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1 );
        return ( isNaN( valor ) ) ? //isNNaN  devuelve un true si no es un numero
                ( valor === 'A' ) ? 11 : 10
                : valor *1;
    }
    
// Turno: 0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = (carta, turno ) => {

        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta( carta );
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];

    }
    const crearCarta = (carta, turno) => {
        //<img class="carta" src="assets/cartas/5C.png" ></img>
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add( 'carta' );
        divCartasJugadores[turno].append( imgCarta );

    }

    const determinarGanador = () =>{

        const [ puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            if (puntosComputadora === puntosMinimos){
                alert('Nadie gana :(');
            } else if ( puntosMinimos > 21) {
                alert('Computadora gana');
            } else if (puntosComputadora > 21 ){
                alert('Jugador gana');
            } else {
                alert('Computadora gana');
            }
        }, 100);

    }
// turno de la computadora
    const turnoComnputadora = ( puntosMinimos ) =>{
        let puntosComputadora = 0;
    
        do{
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1 );
            crearCarta( carta, puntosJugadores.length - 1 );
        

        }while(( puntosComputadora < puntosMinimos ) && (puntosMinimos <= 21 ) );

       determinarGanador();

    }

    //eventos

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos( carta,0);
   
        crearCarta( carta, 0 );

       
        if ( puntosJugador > 21){
            console.warn('Lo siento mucho, pediste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComnputadora( puntosJugador );

        }else if ( puntosJugador === 21 ){
            console.warn('Genial!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComnputadora( puntosJugador );
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;

        turnoComnputadora( puntosJugadores[0] );
    });

    btnNuevo.addEventListener ('click',() =>{

        inicializarJuego();

    });
    
    return  {

        nuevoJuego: inicializarJuego,
        

    };
})();