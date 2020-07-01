// function crearPersona(nombre, apellido){
//     return { nombre, apellido }
// }

const crearPersona = ( nombre, apellido ) => ({ nombre,apellido });

const persona = crearPersona( 'Edgar', 'Omar' );

console.log(persona);

const imprimeArgumentos2 = ( edad, ...args ) => { 
    // console.log({ edad, args });
    return args;
}

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Edgar', 'Hola');
console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona( 'Edgar', 'Sanchez' );
console.log({ nuevoApellido });

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    edad: 40,
    vivo: false,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],    
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}

imprimePropiedades( tony );