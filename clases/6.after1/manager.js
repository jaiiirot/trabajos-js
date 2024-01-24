class ProductManager {
  id = 0;
  products = [];

  addProduct(description, price, stock) {
    this.products.push({ id: this.id, price, description, stock });
    this.id = this.id + 1;
  }
  getAllProducts() {
    return this.products;
  }
  getXProducts(amount) {
    return this.products.slice(0, amount);
  }
  getIdProduct(id) {
    return this.products.find((prod) => prod.id == id);
  }
}

function prueba() {
  console.log("hola");
}

let productManager = new ProductManager();
productManager.addProduct("Coca Cola", 100, 10);
productManager.addProduct("Pepsi", 100, 20);
productManager.addProduct("Manaos", 100, 30);
productManager.addProduct("Sprite", 100, 40);
productManager.addProduct("Fanta", 100, 50);
productManager.addProduct("Mirinda", 100, 60);
productManager.addProduct("7up", 100, 70);
productManager.addProduct("Crush", 100, 80);
productManager.addProduct("Quatro", 100, 90);
productManager.addProduct("Villavicencio", 100, 100);

module.exports = { prueba, productManager };
