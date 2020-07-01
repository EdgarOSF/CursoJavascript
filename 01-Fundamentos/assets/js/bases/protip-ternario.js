const esMayor = ( a, b ) => ( a > b ) ? 'Es mayor' : 'Es menor';

const esMiembro = ( miembro ) => ( miembro ) ? 'Es miembro' : 'No es miembro';

const amigo = true;

const personajes = [
    'Tony',
    'Peter',
    amigo ? 'Thor' : 'Loky',
    esMayor( 10, 17 ),
];

console.log( esMayor(12, 13) );

console.log( esMiembro( false ) );

console.log( {personajes} );

