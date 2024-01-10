/**
 * Instalacion de https://momentjs.com/
 * para manejo de fechas
 *
 */

const moment = require("moment");
moment().format();
console.log(moment());
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(moment().format("dddd"));

/*Calcular la cantidad de dias que pasaron desde el cumpleaños hasta la actualidad */
console.log("====================================");
const cumple = moment("1985-12-31");
const hoy = moment();
console.log("la cantidad de dias que pasaron es: " + hoy.diff(cumple, "days"));
