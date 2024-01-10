const fs = require("fs");

function crearLog() {
  let datatime = new Date().toLocaleDateString("es-AR", {
    day: "2-digit",
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });
  let log = datatime + " - " + arguments[0] + "\n";

  fs.promises
    .appendFile("log.txt", log)
    .then(() => {
      console.log("Escribir en el archivo");
    })
    .catch((err) => {
      console.log("Error al escribir en el archivo");
    });
}

crearLog("se registro un nuevo usuario");
crearLog("se registro Juan");
