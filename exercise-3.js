const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

function contarSonidosFavoritos(users) {
    const conteoSonidos = {};

    for (const user of users) {
        for (const sound in user.favoritesSounds) {
            conteoSonidos[sound] = (conteoSonidos[sound] || 0) + 1;
        }
    }

    return conteoSonidos;
}

const conteoSonidos = contarSonidosFavoritos(users);
console.log("Conteo de sonidos favoritos:", conteoSonidos);

// console.log(`Conteo de sonidos favoritos: ${conteoSonidos}`); imprime [object object]

// console.log(`Conteo de sonidos favoritos: ${JSON.stringify(conteoSonidos)}`); convierte el objeto en un string y el parce de string a objeto 


// let miString = 'hola';
// console.log(`miString: ${miString}`);

// let miSegundoString = miString;
// console.log(`miSegundoString: ${miSegundoString}`);

// miSegundoString = 'adios';
// console.log(`miString: ${miString}, miSegundoString: ${miSegundoString}`);


// let miObj = {mens: 'hola'};
// console.log(`miObj: ${miObj.mens}`);

// let miSegundoObjeto = JSON.parse(JSON.stringify(miObj));
// console.log(`miSegundoObjeto: ${miSegundoObjeto.mens}`);

// miSegundoObjeto.mens = 'adios';
// console.log(`miObj: ${miObj.mens}, miSegundoObjeto: ${miSegundoObjeto.mens}`);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (const iterator of object) {
    
// }
