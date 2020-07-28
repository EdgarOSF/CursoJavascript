let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];
let puntosJugador = 0,
    puntosComputadora = 0;
const btnPedir = document.querySelector('#btnPedir');
const marcadorJugador = document.querySelectorAll('small');
const divJugadorCartas = document.querySelector('.jugador-cartas');

const crearDeck = () => {

    for( let i = 2 ; i <= 10 ; i++ ){
        for( let tipo of tipos ) {
             deck.push( i + tipo );
        }
    }

    for( let tipo of tipos) {
        for( let esp of especiales){
            deck.push( esp + tipo );
        }
    }

    
    deck = _.shuffle( deck );
    console.log(deck);
    return deck;
}

crearDeck();

// esta funcion me permite tomar una carta del deck

const pedirCarta = () => {

    if ( deck.length === 0 ){
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();   

    return carta
}

const valorCarta = ( carta ) => {

    const valor = carta.substring( 0, carta.length-1 );
    return ( isNaN(valor) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;  
}

btnPedir.addEventListener('click', () => {
    
    const pedir = pedirCarta();
    const imagen = document.createElement('img');
    
    puntosJugador += valorCarta( pedir );

    marcadorJugador[0].innerText = puntosJugador;

    imagen.src = `assets/cartas/${pedir}.png`;
    imagen.classList.add('carta');

    divJugadorCartas.append(imagen);

    if ( puntosJugador > 21 ){
        console.warn('Lo siento, perdiste.');
        btnPedir.disabled = true;
    } else if ( puntosJugador === 21 ){
        console.log('21, ganaste.');
        btnPedir.disabled = true;
    }

});