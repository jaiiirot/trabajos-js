class ProductManager {
  id = 0;
  products = [];

  addProduct(description, price, stock) {
    this.products.push({ id: this.id, price, description, stock });
    this.id = this.id + 1;
  }
  getProduct(id) {
    return this.products.find((product) => product.id === id);
  }
  getAllProducts() {
    return this.products;
  }
}

let productManager = new ProductManager();
productManager.addProduct("Coca Cola", 100, 10);
productManager.addProduct("Pepsi", 100, 20);
module.exports = productManager;
