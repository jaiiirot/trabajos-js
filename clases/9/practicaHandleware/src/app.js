import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";

const app = express();

//HANDLEBARS
/**documentacion de express-handlebars
 * https://www.npmjs.com/package/express-handlebars
 */
//TRabajar con los datos de los formularios
app.use(express.urlencoded({ extended: true }));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

//MIDDLEWARE
app.use(express.static(__dirname + "/public"));
app.use(express.json());

//ROUTES
app.use("/", viewsRouter);

//REGLAS

const server = app.listen(8080, () =>
  console.log("servidor http://localhost:8080")
);
