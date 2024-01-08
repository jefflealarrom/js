const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
];

for (const dolls of toys) {
    if (dolls.name.includes('gato')) {
        const i = toys.indexOf(dolls);
        toys.splice(i)
    }
    
}

console.log(toys);