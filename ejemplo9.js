// Crear un array con objetos que tengan una propiedad en común
let productos = [
    { nombre: 'Camiseta', color: 'Rojo', talla: 'M' },
    { nombre: 'Pantalón', color: 'Azul', talla: 'L' },
    { nombre: 'Sudadera', color: 'Rojo', talla: 'S' },
    { nombre: 'Zapatos', color: 'Negro', talla: 'M' },
    { nombre: 'Bufanda', color: 'Azul', talla: 'Única' }
];

// Agrupar los elementos del array por el valor de la propiedad común (color)
let grupos = productos.reduce((acumulador, producto) => {
    let color = producto.color;
    if (!acumulador[color]) {
        acumulador[color] = [];
    }
    acumulador[color].push(producto);
    return acumulador;
}, {});

// Imprimir los grupos
console.log("Grupos de productos por color:");
console.log(grupos);