// En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.


const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]

function countLetterA(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }
    return count;
}

let totalA = 0;
for (let i = 0; i < animals.length; i++) {
    totalA += countLetterA(animals[i]);
}

console.log(`Total de letras 'a': ${totalA}`);