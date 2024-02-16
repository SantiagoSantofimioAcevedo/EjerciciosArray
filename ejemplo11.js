class Producto {
    constructor(nombre, descripcion, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(nombre, descripcion, precio, cantidad, categoria) {
        let nuevoProducto = new Producto(nombre, descripcion, precio, cantidad, categoria);
        this.productos.push(nuevoProducto);
    }

    listarProductos() {
        console.log("Listado de productos:");
        this.productos.forEach(producto => console.log(producto));
    }

    buscarProductoPorNombre(nombre) {
        let productoEncontrado = this.productos.find(producto => producto.nombre === nombre);
        if (productoEncontrado) {
            console.log("Información del producto encontrado:");
            console.log(productoEncontrado);
        } else {
            console.log("No se encontró ningún producto con ese nombre.");
        }
    }

    eliminarProducto(nombre) {
        this.productos = this.productos.filter(producto => producto.nombre !== nombre);
        console.log(`Producto "${nombre}" eliminado del inventario.`);
    }

    actualizarCantidad(nombre, nuevaCantidad) {
        let producto = this.productos.find(producto => producto.nombre === nombre);
        if (producto) {
            producto.cantidad = nuevaCantidad;
            console.log(`Cantidad de "${nombre}" actualizada a ${nuevaCantidad}.`);
        } else {
            console.log("No se encontró ningún producto con ese nombre.");
        }
    }
}

// Ejemplo de uso:
let inventario = new Inventario();

// Agregar productos
inventario.agregarProducto("Camisa", "Camisa de algodón", 20.99, 50, "Ropa");
inventario.agregarProducto("Pantalón", "Pantalón vaquero", 29.99, 30, "Ropa");

// Listar productos
inventario.listarProductos();

// Buscar producto por nombre
inventario.buscarProductoPorNombre("Camisa");

// Eliminar producto
inventario.eliminarProducto("Pantalón");
inventario.listarProductos();

// Actualizar cantidad en stock
inventario.actualizarCantidad("Camisa", 40);
inventario.listarProductos();