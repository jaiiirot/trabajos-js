const express = require("express");
const app = express();
const port = 3000;

/* entro al metodo get para mostrar */
app.get("/", (req, res) => {
  res.send(`<h1>Hello World Jairo!</h1>`);
});

/**
 * request: lo que viene del cliente
 * response: lo que le voy a responder al cliente
 */

app.get("/usuario", (request, response) => {
  //codigo
  response.send({ id: 1, nombre: "Jairo", post: [] });
});

// app.post(recurso, () => {});

/*  */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
