// filtrar elementos de un array 
let personas = [
    { nombre: 'Pepote', edad: 25 },
    { nombre: 'Yusuf', edad: 17 },
    { nombre: 'Pablota', edad: 30 },
    { nombre: 'Riguito', edad: 20 },
    { nombre: 'Fernambuco', edad: 15 }
];

let mayores = personas.filter(personas => personas.edad>=18);

console.log("Personas Mayores de edad");
mayores.forEach(personas =>console.log(personas.nombre));

console.log("");
mayores.forEach(personas => console.log(`${personas.nombre} es mayor de edad.`));