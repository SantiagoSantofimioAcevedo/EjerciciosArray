let ConDuplicados = [1, 2, 3, 4, 2, 3, 5, 6, 7, 1];

// Eliminar los elementos duplicados del array
let arraySinDuplicados = ConDuplicados.filter((elemento, indice) => ConDuplicados.indexOf(elemento) === indice);


console.log("Array sin elementos duplicados:");
console.log(arraySinDuplicados);