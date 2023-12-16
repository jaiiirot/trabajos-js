let productos = [
  {
    nombre: "Plato",
    precio: 50.0,
    stock: 12,
  },
  {
    nombre: "Tenedor",
    precio: 15.0,
    stock: 5,
  },
  {
    nombre: "Cuchara",
    precio: 10.0,
    stock: 0,
  },
];

let productoConStock = [];

//Sintaxis declarativa
for (let producto of productos) {
  if (producto.stock > 0) {
    productoConStock.push(producto);
  }
}
console.log(productoConStock);

//filter con funcion landa o anonima
let productosConStock = productos.filter((producto) => producto.stock > 0);
console.log(productosConStock);
