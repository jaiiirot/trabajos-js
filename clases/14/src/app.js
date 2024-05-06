import express from "express";
import mongoose from "mongoose";
import routerUser from "./routes/users  .routes.js";

const app = express();

mongoose.connect("mongodb://localhost:27017/test");
// mongoose.connect("mongodb://user@password;localhost:27017/test");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", routerUser);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
