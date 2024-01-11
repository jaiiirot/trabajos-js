const fs = require("fs");

class ProductManager {
  static id = 0;

  constructor() {
    this.productos = [];
    this.path = "./productos.json";
  }

  addProduct = async (title, descripcion, price, thumbnail, code, stock) => {
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
      id: ProductManager.id++,
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
    if (this.productos.length === 0) return console.log("No hay Productos");
    return this.productos;
  };

  getProductsById = (ID) => {
    if (this.productos.length === 0) return console.log(this.productos);
    let prod = this.productos.find((e) => e.id == ID);
    prod.length === 0 ? console.log("Not found") : console.log(prod);
    return prod;
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

  getLimitProducts = (limit) => {
    const prods = this.productos.slice(0, limit);
    return prods;
  };
}

let prodManager = new ProductManager();

prodManager.addProduct(
  "iPhone 13 Pro",
  "Smartphone de última generación con tecnología avanzada.",
  1099.99,
  "https://example.com/iphone13pro.jpg",
  "IPH13P",
  50
);

prodManager.addProduct(
  "Samsung Galaxy S21",
  "Teléfono inteligente Android con pantalla de alta resolución.",
  899.99,
  "https://example.com/galaxys21.jpg",
  "SGS21",
  30
);

prodManager.addProduct(
  "Sony PlayStation 5",
  "Consola de videojuegos de nueva generación con potentes capacidades de juego.",
  499.99,
  "https://example.com/ps5.jpg",
  "PS5",
  20
);

prodManager.addProduct(
  "Nike Air Max 270",
  "Zapatillas deportivas con diseño elegante y tecnología de amortiguación.",
  149.99,
  "https://example.com/airmax270.jpg",
  "NAM270",
  40
);

prodManager.addProduct(
  "Coca-Cola",
  "Refresco carbonatado y refrescante de cola.",
  1.99,
  "https://example.com/cocacola.jpg",
  "CC01",
  100
);

prodManager.addProduct(
  "MacBook Air",
  "Laptop ligera y potente con sistema operativo macOS.",
  999.99,
  "https://example.com/macbookair.jpg",
  "MBAIR",
  15
);

prodManager.addProduct(
  "LEGO Star Wars Millennium Falcon",
  "Set de construcción LEGO con la famosa nave de Star Wars.",
  159.99,
  "https://example.com/legomillenniumfalcon.jpg",
  "LEGO001",
  25
);

prodManager.addProduct(
  "Fitbit Charge 5",
  "Banda inteligente de fitness con monitorización avanzada de la salud.",
  179.99,
  "https://example.com/fitbitcharge5.jpg",
  "FITC5",
  35
);

prodManager.addProduct(
  "Dyson V11 Absolute Vacuum Cleaner",
  "Aspiradora sin cable con potente succión y filtración avanzada.",
  599.99,
  "https://example.com/dysonv11.jpg",
  "DYSONV11",
  10
);

prodManager.addProduct(
  "Amazon Echo Dot",
  "Altavoz inteligente con asistente virtual Alexa integrado.",
  49.99,
  "https://example.com/echodot.jpg",
  "ECHODOT",
  50
);

module.exports = prodManager;
