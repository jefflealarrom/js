const movies = [
    { name: "Your Name", durationInMinutes: 130 },
    { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
    { name: "Origen", durationInMinutes: 165 },
    { name: "El señor de los anillos", durationInMinutes: 967 },
    { name: "Solo en casa", durationInMinutes: 214 },
    { name: "El jardin de las palabras", durationInMinutes: 40 }
];

const peliculasPequenas = [];
const peliculasMedianas = [];
const peliculasGrandes = [];

for (let i = 0; i < movies.length; i++) {
    const peliculas = movies[i];

    if (peliculas.durationInMinutes < 100) {
        peliculasPequenas.push(peliculas);
    } else if (peliculas.durationInMinutes >= 100 && peliculas.durationInMinutes < 200) {
        peliculasMedianas.push(peliculas);
    } else {
        peliculasGrandes.push(peliculas);
    }
}
// console.log(`Peliculas Pequeñas ${peliculasPequenas} Peliculas Medianas ${peliculasMedianas} Peliculas Grandes ${peliculasGrandes}`);

// console.log(`Peliculas Pequeñas ${peliculasPequenas}`);
// console.log(`Peliculas Medianas ${peliculasMedianas}`);
// console.log(`Peliculas Grandes ${peliculasGrandes}`);

console.log("Peliculas pequeñas: ", peliculasPequenas);
console.log("peliculas medians: ", peliculasMedianas);
console.log("peliculas grandes: ", peliculasGrandes);