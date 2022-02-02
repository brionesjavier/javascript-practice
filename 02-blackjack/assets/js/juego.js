/**patron modulo
 * Este tipo de patron ayuda aque el codigo no sea facilmente manipulables desde el DOM 
 *(()=>{})(); 
 *  
*/

(()=>{ //



    /**
     * 2C = Two of Clubs    (Tréboles) 
     * 2D = Two of Diamonds (Diamantes)
     * 2H = Two of Hearts   (Corazones)
     * 2S = Two of Spades   (Espadas)
     */
    let deck = [];
    const tipos =['C','D','H','S'];
    const especiales =['A','J','Q','K'];
    let puntosJugador = 0,
        puntosComputadora = 0;

    //   Referencias del HTML

    const btnPedir = document.querySelector("#btnPedir");
    const btnDetener = document.querySelector("#btnDetener");
    const btnNuevo = document.querySelector("#btnNuevo");

    const divCartasJugador = document.querySelector('#jugador-cartas');
    const divCartasComputadora = document.querySelector('#computadora-cartas');
    const puntosHTML  = document.querySelectorAll("small");

    // Esta funcion crea una nueva baraja 
    const crearDeck = () => {

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

        //console.log( deck );
        deck = _.shuffle( deck );
        //console.log( deck );
        return deck;

    }

    crearDeck();

    //Esta funcion toma una carta y la elimina de la baraja

    const pedirCarta = () =>{

        if( deck.length === 0 ){
            throw 'No hay Cartas en el deck';
        }

        const carta = deck.pop();    
    //      console.log( deck );
          //console.log( carta );
        return carta;
    }


    //  deck = [];//test sin cartas
    //  pedirCarta();

    const valorCarta = ( carta ) => {
        const valor = carta.substring(0,carta.length -1);
        return ( isNaN( valor )) ? 
            ( valor === 'A' ) ? 11 : 10
        : puntos = valor *1;


    }
    // turno de la computadora

    const turnoComnputadora = ( puntosMinimos ) =>{

        do{
            const carta = pedirCarta();

            puntosComputadora = puntosComputadora + valorCarta( carta );
            puntosHTML[1].innerHTML = puntosComputadora;


            //<img class="carta" src="assets/cartas/5C.png" ></img>
            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${ carta }.png`;
            imgCarta.classList.add( 'carta' );
            divCartasComputadora.append( imgCarta );
            if( puntosMinimos > 21){
                break;
            }

        }while(( puntosComputadora < puntosMinimos ) && (puntosMinimos <= 21 ) );

        setTimeout(() => {
            if (puntosComputadora === puntosJugador){
                alert('Nadie gana :(');
            }else if( puntosMinimos > 21) {
                alert('Computadora gana');
            }else if (puntosComputadora > 21 ){
                alert('Jugador gana');
            }else{
                alert('Computadora gana');
            }
        }, 10);

        //ganador();

    }

    const ganador =() =>{

        if(( puntosComputadora === puntosJugador)){
            alert('Es empate!');
        }else if(( puntosComputadora > puntosJugador && puntosComputadora <= 21 ) ){
                alert('Gana Computadora!');
        }else if(puntosJugador >21){
            alert('Gana Computadora!');
        }else{
            alert('Jugador gana!');
        }

    }

    //eventos

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta( carta );
        puntosHTML[0].innerHTML = puntosJugador;
        //  insertando carta en html
            //<img class="carta" src="assets/cartas/5C.png" ></img>
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        //insertando la clase al objeto html  
        imgCarta.classList.add( 'carta' );
        divCartasJugador.append( imgCarta );
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
        turnoComnputadora( puntosJugador );
    });

    btnNuevo.addEventListener ('click',() =>{
        console.clear();
    //  vaciando baraja y creando nueva baraja desordenada
        deck =[];
        deck = crearDeck();
    //  habilitando botones
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    //  reseteando puntos jugador
        puntosJugador = 0,
        puntosComputadora = 0;
    //  reseteando puntos html
        puntosHTML[0].innerText = 0; 
        puntosHTML[1].innerText = 0; 
    //  reseteando cartas jugador y computadora
        divCartasJugador.innerHTML = ''; 
        divCartasComputadora.innerHTML = ''; 
    
    });
})();