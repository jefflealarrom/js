// const alien = {
//     name: 'Wormuck',
//     race: 'Cucusumusu',
//     planet: 'Eden',
//     weight: '259kg'
// }

// for (const data in alien) {
//     if (Object.hasOwnProperty.call(alien, data)) {
//         const print = alien[data];
//         console.log(`${data}: ${print}`);
//     }
// }

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (const data in alien) {
    console.log(`${data}: ${alien[data]}`);
}