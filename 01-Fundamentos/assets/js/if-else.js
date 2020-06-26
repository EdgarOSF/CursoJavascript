const fecha = new Date();

dia = fecha.getDay();

const diasObj = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
};

const dias = [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado' ];

console.log( 'Hoy es ' + dias[dia] );

console.log( diasObj[dia] );