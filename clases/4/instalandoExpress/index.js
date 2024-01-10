/*Probando Express */
/**
 * Express es un framework web rápido, minimalista y flexible para Node.js que se utiliza para crear aplicaciones web y APIs.
 * @module express
 */
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Probando Express</h1>");
});

app.listen(port, () => {
  console.log("Servidor escuchando en el puerto " + port);
});

app.get("/productos", (req, res) => {
  res.send("<h1>Probando Express</h1>");
});

//Explicame el codigo escrito
// 1. Importamos express
// 2. Creamos una instancia de express
// 3. Definimos un puerto
// 4. Definimos una ruta y una respuesta
// 5. Iniciamos el servidor
// 6. Definimos otra ruta y otra respuesta
