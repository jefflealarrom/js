// Crea una función llamada splitName que divida un nombre completo en nombre y apellido. Tengamos en cuenta que este string siempre va a tener solo un nombre y un apellido.

// De tal modo que si tenemos el texto "Abel Cabeza" obtendremos dos variables...una con el valor "Abel" y otra con el valor "Cabeza".

// En este ejercicio seria recomendable que investigueis las funciones .substring() y .findIndexOf()
 
function splitName(fullName) {
    const spaceIndex = fullName.indexOf(' ');
    const firstName = fullName.substring(0, spaceIndex);
    const lastName = fullName.substring(spaceIndex + 1);
    return { firstName, lastName };
}
const fullName = "Abel Cabeza";
const { firstName, lastName } = splitName(fullName);

console.log("Nombre: " + firstName);
console.log("Apellido: " + lastName);
