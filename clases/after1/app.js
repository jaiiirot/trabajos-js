const productManager = require("./manager");
const express = require("express");
const app = express();

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/", (req, res) => {
  // Entrada: req
  // Llamado a productManager
  // Salida: res
});

app.get("/products", (req, res) => {
  // Entrada: req
  //??

  // Llamado a productManager
  let productos = productManager.getAllProducts();

  // Salida: res
  res.send(productos);
});

app.get("/products/:id", (req, res) => {
  // Entrada: req
  //?? 

  // Llamado a productManager
  let producto = productManager.getProduct(":id");

  // Salida: res
  res.send(producto);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
