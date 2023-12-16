// Tengo productos y quiero saber cuales tienen stock
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
for (let producto of productos) {
  if (producto.stock > 0) {
    productoConStock.push(producto);
  }
}
console.log(productoConStock);

// Tengo publicaciones y quiero buscar aquellas que tengan más de 20 likes
let publicaciones = [
  {
    tweet: "Hola, soy un tweet",
    likes: 12,
    autor: "Carlos",
  },
  {
    tweet: "me gusta la manzana",
    likes: 23,
    autor: "Juan",
  },
  {
    tweet: "me los perritos",
    likes: 42,
    autor: "Maria",
  },
];

let publicacionesConLikes = [];
for (let publicacion of publicaciones) {
  if (publicacion.likes > 20) {
    publicacionesConLikes.push(publicacion);
  }
}
console.log(publicacionesConLikes);

// Tengo usuarios y quiero buscar aquellos que sean mayores de 18 años

const usuarios = [
  {
    nombre: "Carlos",
    edad: 15,
  },
  {
    nombre: "Juan",
    edad: 25,
  },
  {
    nombre: "Maria",
    edad: 19,
  },
];
let usuariosMayores = [];
for (let usuario of usuarios) {
  if (usuario.edad > 18) {
    usuariosMayores.push(usuario);
  }
}
console.log(usuariosMayores);
