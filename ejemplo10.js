// Crear un array con elementos de diferentes tipos
let diferentes = ['nombre', 25, true, { ciudad: 'Armenia' }];

// Convertir el array en un objeto
let objeto = diferentes.reduce((acc, curr, index) => {
    acc[index] = curr;
    return acc;
}, {});

// Imprimir el objeto resultante
console.log("Objeto resultante:");
console.log(objeto);