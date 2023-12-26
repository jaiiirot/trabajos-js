const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2;

const realixarOperacion = (numero1, numero2, callback) => {
  console.log("¡Voy a realizar una operacion, no se cual, pero lo hare!");
  let resultado = callback(numero1, numero2);
  console.log(`El resultado es: ${resultado}`);
};

realixarOperacion(10, 5, sumar); //El resultado es 15
realixarOperacion(10, 5, restar); //El resultado es 5
realixarOperacion(10, 5, multiplicar); //El resultado es 50
realixarOperacion(10, 5, dividir); //El resultado es 2

/**
 * Analicemos, reaalizarOperacion recibe una funcion de callback y la ejecutta por dentro, peroooooo- ¡ No tiene idea de que funcion, solo
 * la ejecuta! Asi que hat¿y que tener siempre mucho cuidado de lo que pasamos por callback, ya que no caso de pasar una funcion que no sea
 * compatible con los valores que este trabajando la funcion, podriamos romper el codigo al cual le pasamos el callback.
 */
