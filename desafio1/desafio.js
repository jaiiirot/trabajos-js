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
  constructor() {
    this.productos = [];
  }

  addProduct = (title, descripcion, price, thumbnail, code, stock) => {
    if (typeof price !== "number") return console.log("price no es un numero");
    if (typeof stock !== "number") return console.log("stock no es un numero");
    if (this.productos.length !== 0) {
      const existe = this.productos.some((producto) => producto.code === code);
      if (existe === true)
        return console.log(`Un producto ya tiene el codigo: ${code}`);
    }
    this.productos.push({
      title,
      descripcion,
      price,
      thumbnail,
      code,
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

producto1.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
producto1.addProduct(
  "Short",
  "descripcion del short",
  200,
  "ruta 2",
  "abc123",
  20
);
producto1.addProduct(
  "Pantalon",
  "descripcion del pant",
  100,
  "ruta 1",
  "vad213",
  10
);
producto1.getProducts();
producto1.getProductsById(8);
producto1.getProductsById("abc123");
