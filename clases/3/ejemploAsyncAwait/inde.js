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
 * ASYNC / AWAIT
 *
 * Surge entoncesen JavaScript el sooporte para Async - Await, unas palabras reservadas que, trabajando juntas, permiten gestionar un entorno
 * asincrono, resolviendo las limitantes del .then y .catch
 *  -- Async: Se coloca al principio de una funcion, indicando que todo el cuerppo de esa funcion debera ejecutarse de manera asincrona
 *  -- Await: Servira (como indica su nombre) para esperar por el resultado de la promesa y extraer su resultado.
 *  -- Al ser operaciones que podrian salir bien, pero tambie mal es importante encerrar el cuerpo en un bloque try {} catch {}
 */

const funcionAsincrono = async () => {
  /**
   * Estamos iniciando un entorno completo asincrono, todo lo que este denrto de las llaves de la funcion se comportara no-bloqueante con el exterior.
   */
  try {
    // Encerramos la operacion a realizar en un bloque try, porque al ser una promesa, PODRIA NO CUMPLIRSE, asi que hay que estar prevenidos
    let resultado = await dividir(10, 5); // Ya no hay .then, ahora solo esperamos por el resultado de la promsesa.
    console.log(resultado);
  } catch (error) {
    // Si la promesa no se cumplio, entonces caera en el bloque catch, y podremos manejar el error.
    console.log(error);
  }
};

funcionAsincrono();
