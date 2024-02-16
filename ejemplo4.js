// Ordenar un Array 
const aleatorio = [9,5,3,8,10,12,56,1,5];
console.log(aleatorio);
// orden ascendente 

aleatorio.sort(function(a, b){return a - b});
console.log("Array ordenado de forma ascendente")
console.log(aleatorio);

// orden descendente 

aleatorio.sort(function(a, b){return b - a});
console.log("Array ordenado de forma descendente")
console.log(aleatorio);