// Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas.

const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];

totalSell = 0;

for (let i = 0; i < products.length; i++) {
totalSell += products[i].sellCount;   
}

const anotherSell = totalSell / products.length;

console.log(`el total de todas las ventas es de: ${totalSell} y la media de ventas es de ${ anotherSell}`);
