let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    edad: 40,
    vivo: false,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880',
        ubicacion: 'Malibu, California'
    }, 
    'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

console.log('Coors', personaje.coords);
console.log('Lat', personaje.lat);

console.log('No. Trajes', personaje.trajes.length);

const x = 'vivo';

console.log( 'Vivo', personaje[x] );
console.log('Ultima pelicula', personaje['ultima-pelicula']);