function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text) {
        return i;
      }
    }
    return -1; 
  }
  
  function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
      array.splice(index, 1); // 
    }
    return array;
  }
  
  const exampleArray1 = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
  console.log(removeItem(exampleArray1, 'Mosquito')); // Elimina 'Mosquito'
  
  const exampleArray2 = ['Manzana', 'Pera', 'Uva', 'Piña'];
  console.log(removeItem(exampleArray2, 'Uva')); // Elimina 'Uva'
  
  const exampleArray3 = ['Rojo', 'Azul', 'Verde', 'Amarillo'];
  console.log(removeItem(exampleArray3, 'Azul')); // Elimina 'Azul'
  