//Agregar y eliminar elementos de un array

let personajes = [];
personajes.push("Spider-Man"); //push
console.log(personajes);
personajes[personajes.length]="Iron-Man";//length
personajes.unshift("Hulk");//unshift



// Remover elementos
console.log(personajes.pop());
// Eliminar por su indice
console.log(personajes.at(1));
// mostrar los cambios
console.log(personajes);