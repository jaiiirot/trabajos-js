import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/socket", (req, res) => {
  res.render("socket", { task: "Tarea 1", style: "socket.css" });
});
export default router;
