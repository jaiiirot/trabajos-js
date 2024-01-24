import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.routes.js";
import { Server } from "socket.io";

const app = express();
const httpServer = app.listen(8080, () => {
  console.log("Server http://localhost:8080");
});
//CONFIGURACION SOCKET.IO
const socketServer = new Server(httpServer);

//MIDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

//CONFIGURATION HANDLEBARS
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

//RUTAS
app.use("/", viewsRouter);

/**Instalacion socket.io
 * npm install socket.io
 */

const mensajes = [];
socketServer.on("connection", (socket) => {
  console.log("Usuario conectado");

  socket.on("message", (data) => {
    mensajes.push({ socketId: socket.id, data: data });
    socketServer.emit("message", data);
    socketServer.emit("messages", mensajes);
  });

  socket.emit("messages", mensajes);
  /**SOCKETS ACTIONS */
  // socket.emit(
  //   "evento_para_socket_individual",
  //   "Este mensaje solo lo recibe el socket actual"
  // );
  // socket.broadcast.emit(
  //   "evento_para_todos_menos_el_sockets_actual",
  //   "Se conecto un otro usuario"
  // );
  // socketServer.emit("evento_para_todos", "Este mensaje lo reciben todos");
});
