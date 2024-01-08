// Elimina el último elemento del array y muestra el primero y el último por consola.

const RickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

const lastElement = RickAndMortyCharacters.splice(5, 1); //tembien podria ser .slice(-1, 1) diferencia entre slice y splice
console.log(RickAndMortyCharacters);

// const lastElement = RickAndMortyCharacters.pop();
// console.log(RickAndMortyCharacters);