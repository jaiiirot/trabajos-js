const { Router } = require("express");
const router = Router();

const productos = [
  { id: 1, nombre: "Escuadra", precio: 323.45 },
  { id: 2, nombre: "Calculadora", precio: 234.56 },
  { id: 3, nombre: "Globo Terraqueo", precio: 45.67 },
  { id: 4, nombre: "Paleta Pintura", precio: 456.78 },
  { id: 5, nombre: "Reloj", precio: 67.89 },
  { id: 6, nombre: "Agenda", precio: 78.9 },
];

router.get("/", (req, res) => {
  res.send(productos);
});

router.get("/:id", (req, res) => {
  const producto = productos.find((p) => p.id === parseInt(req.params.id));
  if (!producto) {
    res.status(404).send("El producto no existe");
  }
  res.send(producto);
});

router.post("/save", (req, res) => {
  const producto = {
    id: productos.length + 1,
    nombre: req.body.nombre,
    precio: parseFloat(req.body.precio),
  };
  productos.push(producto);
  res.send(producto);
});

router.put("/update/:id", (req, res) => {
  const producto = productos.find((p) => p.id === parseInt(req.params.id));
  if (!producto) {
    res.status(404).send("El producto no existe");
  }
  producto.nombre = req.body.nombre;
  producto.precio = parseFloat(req.body.precio);
  res.send(producto);
});

router.delete("/delete/:id", (req, res) => {
  const producto = productos.find((p) => p.id === parseInt(req.params.id));
  if (!producto) {
    res.status(404).send("El producto no existe");
  }
  const index = productos.indexOf(producto);
  productos.splice(index, 1);
  res.send(producto);
});

module.exports = router;
