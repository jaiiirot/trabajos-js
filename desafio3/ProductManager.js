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
producto1.addProduct({
  title: "PRUEBA 3",
  descripcion: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
});
producto1.addProduct({
  title: "PRUEBA 4",
  descripcion: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc124",
  stock: 25,
});

/**
 * FORMA DE EPORTAR POR MODULOS
 */

module.exports = new ProductManager();
