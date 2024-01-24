const express = require("express");
const app = express();

const routerUsers = require("./routes/users.router");
const routerProducts = require("./routes/products.router");

// MIDDLEWARES
app.use(express.json());
app.use("/static", express.static("public"));
//Mi middleware para ver que peticiones llegan
app.use((req, res, next) => {
  // esto es un logger - para ver que peticiones llegan
  console.log(`${Date.now()} - ${req.method} - ${req.url} - ${req.ip}`);
  next();
});

//ROUTES
app.use("/users", routerUsers);
app.use("/products", routerProducts);

// REGLAS
app.get("/", (req, res) => {
  res.send("pong");
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
