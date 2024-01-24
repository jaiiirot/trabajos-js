import express from "express";
const router = express.Router();

const users = [
  {
    id: 1,
    nombre: "Jhon",
    apellido: "Tumiri",
    edad: 23,
    correo: "jhon.jairo.tumiri@gmail.com",
    telefono: 1141430021,
    role: "admin",
  },
  {
    id: 2,
    nombre: "Ana",
    apellido: "González",
    edad: 30,
    correo: "ana.gonzalez@example.com",
    telefono: 1122334455,
    role: "user",
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "Martínez",
    edad: 28,
    correo: "carlos.martinez@example.com",
    telefono: 9988776655,
    role: "user",
  },
  {
    id: 4,
    nombre: "Laura",
    apellido: "Pérez",
    edad: 25,
    correo: "laura.perez@example.com",
    telefono: 6655443322,
    role: "user",
  },
  {
    id: 5,
    nombre: "Miguel",
    apellido: "Sánchez",
    edad: 32,
    correo: "miguel.sanchez@example.com",
    telefono: 5544332211,
    role: "admin",
  },
];

const food = [
  { name: "Pizza", price: 1000 },
  { name: "Hamburguesa", price: 500 },
  { name: "Papas fritas", price: 300 },
  { name: "Hot dog", price: 200 },
  { name: "Tacos", price: 100 },
];

router.get("/", (req, res) => {
  const indice = Math.floor(Math.random() * users.length);
  res.render("index", {
    user: users[indice],
    style: "index.css",
    isAdmin: users[indice].role === "admin",
    food,
  });
});

router.get("/register", (req, res) => {
  console.log(users);
  res.render("register", {
    style: "register.css",
  });
});

router.post("/user", (req, res) => {
  const { nombre, apellido, email, password } = req.body;
  users.push({ nombre, apellido, email, password });
  res.render("register", {
    style: "register.css",
    registroExitoso: true,
  });
});

export default router;
