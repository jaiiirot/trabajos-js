import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";

const app = express();

// Configuración del motor de vistas Handlebars para Express
// Establece el motor de vistas Handlebars
app.engine("handlebars", handlebars.engine());
// Establece el directorio de vistas en la carpeta "views"
app.set("views", __dirname + "/views");
// Establece el motor de vistas predeterminado como Handlebars
app.set("view engine", "handlebars");

// Configuración del manejo de archivos estáticos (por ejemplo, archivos CSS, imágenes) con Express
// Establece el directorio "public" como el lugar donde se sirven archivos estáticos
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  let testUser = {
    name: "Jairo",
    last_name: "Tumiri",
  };
  res.render("index", testUser);
});

const server = app.listen(3000, () => {
  console.log(`Server running on port https://localhost:3000`);
});
