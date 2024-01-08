// Usa un bucle para recorrer el array de peliculas (`movies`) y añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`) y al array `badProducts` los que tengan menos.

const goodProducts = [];
const badProducts = [];
const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];

for (let i = 0; i < products.length; i++) {
const otherProduct = products[i];

if (otherProduct.sellCount > 20) {
    goodProducts.push(otherProduct);
} else {
    badProducts.push(otherProduct);
}
    
}
console.log('Productos con más de 20 ventas:', goodProducts);
console.log('Productos con 20 o menos ventas:', badProducts);