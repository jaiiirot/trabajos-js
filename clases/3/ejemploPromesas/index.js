/**
 *  PROMESAS
 *
 * Al prometerse algo, es una promesa en estado pendiente (pending), no sabemos cuando se resolvera esa promesa.
 * Si embargo, cuando llega el momento, se nos notifica si la promesa se cunmplio (Fulfilled, tambien lo encontramos como Resolved)
 * o tal vez, a pesar del tiempo, al final nos notifiquen que la promesa no pudo cumplirse, se rechazo(Rejected).
 *
 *
 *                              ----> P1 Fulfiled (Cumplida)
 * PROMESAS EN JAVASCRIPT   P1  |
 *                              ----> P1 Rejected (Rechazada)
 *
 *      -- Ejecutamos la funcion que acabamos de crear para que se ejecute la promesa.
 *      -- Utilizaremos el operador .then para recibir el caso en el que la promesa Si se haya cumplido
 *      -- Utilizaremos el operador .catch para recibir el caso en el que la promesa No se haya cumplido
 *
 *                      ----> RESOLVED(.then())
 *   PENDING (Promesa) |
 *                     ----> REJECTED(.catch())
 */

const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    //Nota que al crear una promesa, esta recibe un callback con dos parametros, resolve y reject
    if (divisor === 0) {
      reject("No se puede dividir por cero");
      /**
       * Rechazamos la operacion porque no es posible trabajar con una division por cero, no puedo cumplirle al usuario la promesa
       * que le hice sobre dividir sus numeros.
       */
    } else {
      resolve(dividendo / divisor);
      /**
       * si los valores son validos, entonces si puedo cumpolir la promesa que hice al usuario de dividir sus numeros,
       *  por lo tanto utilizaremos el valor
       */
    }
  });
};

/**
 * ---------------------------------------------------------------------------------------------------------------------------------------
 *      -- Ejecutamos la funcion que acabamos de crear para que se ejecute la promesa.
 *      -- Utilizaremos el operador .then para recibir el caso en el que la promesa Si se haya cumplido
 *      -- Utilizaremos el operador .catch para recibir el caso en el que la promesa No se haya cumplido
 *
 *                      ----> RESOLVED(.then())
 *   PENDING (Promesa) |
 *                     ----> REJECTED(.catch())
 */
dividir(10, 5)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

dividir(10, 0)
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

/**--------------------------------------------------------------------------------------------------------------------------------------------
 * Encadenamiento de promesas
 * Siempre que coloquemos un return dentro de un .then, podremos encadenar otra promesa, y asi sucesivamente
 */
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then((result) => {
    // (**)
    console.log(result); // 1
    return result * 2;
  })
  .then((result) => {
    // (***)
    console.log(result); //2
    return result * 2;
  })
  .then((result) => {
    console.log(result); //4
    return result * 2;
  });

/**
 * 1) La promesa inicial se resuelve en 1 segundo (*)
 * 2) Entonces se llama el controlador .then (**)
 * 3) El valor que devuelve se pasa a la siguiente funcion .then (***)
 */
