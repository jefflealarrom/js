const products = [
    'Camiseta de Pokemon',
    'Pantalón coquinero',
    'Gorra de gansta',
    'Camiseta de Basket',
    'Cinrurón de Orión',
    'AC/DC Camiseta'
  ];

for (let i = 0; i < products.length; i++) {
    const pro = products[i];
    
    if (pro.includes('camisetas')) {
        console.log(pro);
    }
}