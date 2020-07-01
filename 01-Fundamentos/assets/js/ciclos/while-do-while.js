const heroes = [
    'Batman',
    'Superman',
    'Flash',
    'Linterna Verde'
];

console.warn('For normal')
for( let i = 0 ; i < heroes.length ; i++ ) {
    console.log(heroes[i]);
}

console.warn('For in');
for( let i in heroes ) {
    console.log(heroes[i]);
}

console.warn('For of');
for( let i of heroes){
    console.log(i);
}