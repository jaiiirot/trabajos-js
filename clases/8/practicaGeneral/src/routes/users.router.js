const { Router } = require("express");
const router = Router();

const usuarios = [
  { id: 1, user: "juan" },
  { id: 2, user: "pedro" },
  { id: 3, user: "maria" },
  { id: 4, user: "jose" },
];
/**creame una ruta de usuarios que me devuelva un json de usuarios */
router.get("/", (req, res) => {
  res.status(200).send(usuarios);
});
/**creame una ruta de usuarios que me devuelva un json de usuarios por id */
router.get("/:id", (req, res) => {
  const usuario = usuarios.find((p) => p.id === parseInt(req.params.id));
  if (!usuario) {
    res.status(404).send("El usuario no existe");
  }
  res.send(usuario);
});
/**creame una ruta de usuarios que me devuelva un json de usuarios por id */
router.post("/", (req, res) => {
  let body = req.body;
  const usuario = {
    id: usuarios.length + 1,
    user: body.user,
  };
  usuarios.push(usuario);
  res.send(usuario);
});

module.exports = router;
