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
    puntosCompùtadora = 0;

//   Referencias del HTML

const btnPedir = document.querySelector("#btnPedir");
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

//Esta funcion me permite tomar una carta

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

    // const valor = valorCarta( pedirCarta() );
    // console.log({ valor });

    //eventos

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        console.log( carta );

        puntosJugador = puntosJugador + valorCarta( carta );
        console.log( puntosJugador );
        puntosHTML[0].innerHTML = puntosJugador;

    });