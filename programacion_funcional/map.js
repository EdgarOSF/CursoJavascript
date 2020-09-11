const pedidos = [
    {principal: 'pizza', postre: 'helado'},
    {principal: 'enchiladas', postre: 'crepa'},
    {principal: 'tacos', postre: 'budin'},
    {principal: 'sushi', postre: 'pastel'},
];

const comidas = pedidos.map((platillo) => platillo.principal[0]);

console.log(comidas);