import express from "express";
import { engine } from "express-handlebars";
import mongoose from "mongoose";
import __dirname from "./utils.js";

import routesProds from "./routes/products.routes.js";

const app = express();

//View engine
app.engine("hbs", engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

//Public folder
app.use(express.static(`${__dirname}/public`));

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Router productos
app.use("/products", routesProds);

//Home del sitio
app.get("/", (req, res) => {
  res.redirect("/home");
});
app.get("/home", (req, res) => {
  res.render("home");
});

app.get("/ping", (req, res) => {
  res.send("pong!" + __dirname);
});

//Pagina error 404
app.use((req, res, next) => {
  res.render("404");
});

//Conexión a la base de datos
mongoose.connect("mongodb://localhost:27017/tiendita");
app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
