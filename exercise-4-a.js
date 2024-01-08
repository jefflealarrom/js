function findArrayIndex(array, text) {
    return array.indexOf(text);
  }
  
  const exampleArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
  const searchText = 'Salamandra';
  
  const index = findArrayIndex(exampleArray, searchText);
  
  if (index !== -1) {
    console.log(`El texto "${searchText}" se encuentra en la posición ${index} del array.`);
  } else {
    console.log(`El texto "${searchText}" no se encuentra en el array.`);
  }
  