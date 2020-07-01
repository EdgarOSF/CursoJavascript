const dia = 1; // 0: domingo... 1: lunes...
const horaActual = 11;

let horaApertura;
let mensaje; // Esta abierto, Esta cerrado, hor abrimos a las xx

horaApertura = ( [0,6].includes( dia ) ) ? 9 : 11;

mensaje = ( horaActual >= horaApertura ) ? 'Esta Abierto' : `Esta cerrado, hoy abrimos a las ${ horaApertura}`;

// if ( horaActual >= horaApertura ) {
//     mensaje = 'Esta Abierto';

// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${ horaApertura}`;
// }

console.log({horaApertura, mensaje});