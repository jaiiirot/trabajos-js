/*
- Realizar una clase “ProductManager” que gestione un conjunto de productos.
- Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.
- Cada producto que gestione debe contar con las propiedades:
    * title (nombre del producto)
    * description (descripción del producto)
    * price (precio)
    * thumbnail (ruta de imagen)
    * code (código identificador)
    * stock (número de piezas disponibles)

Aspectos a incluir
- Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
    * Validar que no se repita el campo “code” y que todos los campos sean obligatorios
    * Al agregarlo, debe crearse con un id autoincrementable
- Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento
- Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
    * En caso de no coincidir ningún id, mostrar en consola un error “Not found”

Formato del entregable
Archivo de Javascript listo para ejecutarse desde node.

*/

class ProductManager {
  #codigo = 0;
  constructor() {
    this.productos = [];
  }
  addProduct = ({ title, descripcion, price, thumbnail, stock }) => {
    if (typeof title !== "string" || title.length === 0)
      return console.log("titulo no es un string y campo obligatorio");
    if (typeof descripcion !== "string" || descripcion.length === 0)
      return console.log("descripcion no es un string y campo obligatorio");
    if (typeof thumbnail !== "string" || thumbnail.length === 0)
      return console.log("thumbnail no es una direccion y campo obligatorio");
    if (typeof price !== "number")
      return console.log("price no es un numero y campo obligatorio");
    if (typeof stock !== "number")
      return console.log("stock no es un numero y campo obligatorio");

    this.#codigo++;
    if (this.productos.length !== 0) {
      const existe = this.productos.some(
        (producto) => producto.code === this.#codigo
      );
      if (existe === true)
        return console.log(`Un producto ya tiene el codigo: ${code}`);
    }
    this.productos.push({
      title,
      descripcion,
      price,
      thumbnail,
      code: this.#codigo,
      stock,
    });
  };

  getProducts = () => {
    if (this.productos.length === 0) return console.log("No hay productos");
    console.log(this.productos);
  };

  getProductsById = (code) => {
    if (this.productos.length === 0) return console.log("No hay productos");
    let seEncontro = this.productos.filter((e) => e.code === code);
    seEncontro.length === 0
      ? console.log("Not found")
      : console.log(`El productos es: ${seEncontro[0].title}`);
  };
}

let producto1 = new ProductManager();

producto1.addProduct({
  title: 0,
  descripcion: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  stock: 25,
});
producto1.addProduct({
  title: "Short",
  descripcion: "",
  price: 200,
  thumbnail: "ruta 2",
  stock: 20,
});
producto1.addProduct({
  title: "Pantalon",
  descripcion: "descripcion del pant",
  price: "asd",
  thumbnail: "ruta 1",
  stock: 10,
});
producto1.addProduct({
  title: "Prueba",
  descripcion: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  stock: 25,
});
producto1.getProducts();
producto1.getProductsById(1);
producto1.getProductsById("abc123");
