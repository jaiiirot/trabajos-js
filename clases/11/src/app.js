import express from "express";
import __dirname from "./utils.js";
import handlebars, { engine } from "express-handlebars";
import viewRoutes from "./routes/views.routes.js";
import { Server } from "socket.io";

const app = express();
const httpServer = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
const io = new Server(httpServer);

app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use("/", viewRoutes);

let messages = [];
io.on("connection", (socket) => {
  console.log("New user connected");
  socket.on("message", (data) => {
    messages.push(data);
    io.emit("messageLogs", messages);
  });
  socket.on("userNew", (data) => {
    let username = data;
    socket.broadcast.emit("connectionUser", username);
    socket.emit("messageLogs", messages);
    socket.on("disconnect", (data) => {
      socket.broadcast.emit("disconnectUser", username);
    });
  });
});
