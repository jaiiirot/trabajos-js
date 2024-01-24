/**para sacar el format auto save se entra a configuraciones  */
const express = require("express");
const app = express();

var fraseInitial = "Hola, como andas?";


/**Middlewares ? */
/**body es un json */
app.use(express.json());




/**Enpoints */
app.get("/ping", (req, res) => {
  res.send("<h1>Pong!</h1>");
});

app.get("/api/frase", (req, res) => {
  res.status(200).send({ frase: fraseInitial });
  // res.status(500).send({ error: "Hubo un error al procesar tu solicitud. volvelo a intentar mas tarde" });
});

// GET /api/palabras/1 (pos: 1) => 200 - como
// GET /api/palabras/2 (pos: 2) => 200 - andas?
// GET /api/palabras/3 (pos: 3) => 404 - no encontre ninguna palabra en la posicion 3
// GET /api/palabras/asdasdasdas (pos: asdasdas) => 400 - posicion no es un numero
// GET /api/palabras/asdasdasdasd (pos: asdasdasdasd) => 404 - no encontre ninguna palabra en la posicion asdasdasdasd
app.get("/api/palabras/:pos", (req, res) => {
  let pos = req.params.pos;
  if (parseInt(pos) < 0) {
    res.status(400).send({ error: "Posicion no existe" });
  }
  let fraseSplit = fraseInitial.split(" ");
  res.status(200).send({buscada: fraseSplit[pos]});
});

//
app.post("/api/palabras", (req, res) => {
  let body = req.body;
  console.log(body)
  fraseInitial = fraseInitial + " " + body.palabra;
  res.status(201).send({ frase: fraseInitial });
  // res.status(500).send({ frase: "Hubo un error al procesar tu solicitud. volvelo a intentar mas tarde" });
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
