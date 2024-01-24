const { prueba, productManager } = require("./manager");
const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/", (req, res) => {
  res.send(prueba());
});

app.get("/products?limit", (req, res) => {
  // Entrada: req
  let productos = req.query.limit
    ? productManager.getXProducts(req.query.limit)
    : productManager.getAllProducts();
  // Salida: res
  res.send(productos);
});

app.get("/products/:id", (req, res) => {
  let id = req.params.id;
  let producto = productManager.getIdProduct(parseInt(id));
  if (producto == undefined || producto == null) {
    res.send("No existe el producto");
  }
  res.send(producto);
});

app.get("/products?limit", (req, res) => {
  let producto = productManager.getXProduct(":id");
  res.send(producto);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
