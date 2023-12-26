/*
Consigna

Realizar una clase de nombre “ProductManager”, el cual permitirá trabajar con múltiples productos. 
Éste debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia 
de archivos (basado en entregable 1).

Aspectos a incluir

La clase debe contar con una variable this.path, el cual se inicializará desde el constructor y
debe recibir la ruta a trabajar desde el momento de generar su instancia.

Debe guardar objetos con el siguiente formato:
  - id (se debe incrementar automáticamente, no enviarse desde el cuerpo)
  - title (nombre del producto)
  - description (descripción del producto)
  - price (precio)
  - thumbnail (ruta de imagen)
  - code (código identificador)
  - stock (número de piezas disponibles)

Aspectos a incluir

  - Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado,
    asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo).
  - Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los 
    productos en formato de arreglo.
  - Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar el
   producto con el id especificado y devolverlo en formato objeto


Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el 
campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID 
Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo.


 */
const fs = require("fs");

class ProductManager {
  static ID = 0;

  constructor() {
    this.productos = [];
    this.path = "./productos.json";
  }

  addProduct = async ({
    title,
    descripcion,
    price,
    thumbnail,
    code,
    stock,
  }) => {
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
    if (this.productos.length !== 0) {
      const existe = this.productos.some((producto) => producto.code === code);
      if (existe === true)
        return console.log(`Un producto ya tiene el code: ${code}`);
    }
    this.productos.push({
      id: ProductManager.ID++ + 1,
      title,
      descripcion,
      price,
      thumbnail,
      code,
      stock,
    });
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.productos, null, "\t")
    );
  };

  getProducts = () => {
    if (this.productos.length === 0) return console.log(this.productos);
    console.log(this.productos);
  };

  getProductsById = (ID) => {
    if (this.productos.length === 0) return console.log(this.productos);
    let prod = this.productos.filter((e) => e.id === ID);
    prod.length === 0 ? console.log("Not found") : console.log(prod);
  };

  updateProduct = async (ID, PRODUCT) => {
    const aux = this.productos.map((prod) => {
      if (prod.id === ID) {
        prod = { id: prod.id, ...PRODUCT };
        return prod;
      }
      return prod;
    });
    this.productos = aux;
    await fs.promises.writeFile(this.path, []);
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.productos, null, "\t")
    );
  };

  deleteProduct = async (ID) => {
    const aux = this.productos.filter((prod) => prod.id !== ID);
    this.productos = aux;
    await fs.promises.writeFile(this.path, []);
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.productos, null, "\t")
    );
  };
}

let producto1 = new ProductManager();

producto1.addProduct({
  title: "PRUEBA 1",
  descripcion: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc121",
  stock: 25,
});
producto1.addProduct({
  title: "PRUEBA 2",
  descripcion: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc122",
  stock: 25,
});
// producto1.getProductsById(2);
// producto1.getProductsById(3);
producto1.updateProduct(2, {
  title: "THIAGO",
  descripcion: "Este es un producto prueba2",
  price: 300,
  thumbnail: "Sin imagen",
  code: "abc124",
  stock: 25,
});
producto1.addProduct({
  title: "PRUEBA 3",
  descripcion: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc122",
  stock: 25,
});
producto1.deleteProduct(3);
producto1.addProduct({
  title: "PRUEBA 4",
  descripcion: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc125",
  stock: 25,
});
// producto1.getProductsById(2);
// producto1.deleteProduct(2);
// producto1.getProducts();
