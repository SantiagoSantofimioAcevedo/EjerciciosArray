// Crear un array con diferentes tipos de elementos
let grupo= [1, 'dos', true, false, 5, 'hamburguesa', 8, true, 'nueve', 10];

// Elemento a buscar
let elementoABuscar = 'hamburguesa';

// Método 1: indexOf
let indice = grupo.indexOf(elementoABuscar);
if (indice !== -1) {
    console.log(`El elemento ${elementoABuscar} se encuentra en la posición ${indice}.`);
} else {
    console.log(`El elemento ${elementoABuscar} no se encuentra en el array.`);
}

// Método 2: findIndex
let indice2 = grupo.findIndex(elemento => elemento === elementoABuscar);
if (indice2 !== -1) {
    console.log(`El elemento ${elementoABuscar} se encuentra en la posición ${indice2}.`);
} else {
    console.log(`El elemento ${elementoABuscar} no se encuentra en el array.`);
}