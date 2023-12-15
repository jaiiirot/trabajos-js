// comenazamos con la clase
class nombreDeMiClase {
  /*
  una clase  cuentq  con un constructor(funcion) constructor,
     este se ejecuta CADA VEZ QUE SE INSTANCIE UN OBJETO DE LA CLASE
*/

  constructor(parametroDeCreacion) {
    console.log("Nuevio objeto creado");
    this.variableInterna = 2;
    /*
    Cada instancia de la clase contara con variables internas, para poder declararlas y utilizarlas
       *   Necesitamos colocar un "this. " antes del nombre de la variable para que esta
           sea accesible desde cualquier parte de la clase
     */
  }

  static variableEstatica = 4;
  /*
  la palabra "static" es una variable que puede utilizarse SIN NECESITAR UNA INSTANCIA, ademas,
    todas sus * instancias pueden acceder a ella de igual manera. SI UNA INSTANCIA CAMBIA LA VARIABLE ESTATICA,
    todas las instancias se enteraran del cambio.
    */
  metodo1() {
    /*los metodos son funciones que solo puede utilizar una instancia de la clase*/
    console.log("metodo 1");
  }
  metodo2 = () => {
    console.log(
      `Soy una funcion flecha, puedo inscrustar variables ${this.variableInterna}, todo dentro de una clas. ¡Una locura!`
    );
  };
}

/*Una vez que terminé de definir mi clase, es hora de instanciar*/
/**
 * Usaremos el operador "new" El cual crea una instancia de la clase.
 */
let instancia = new nombreDeMiClase(); // se ejecutará el constructor diciendo "Nuevo objeto creado" (constructor)
/*Nota cómo ahora la instancia cuenta con las variables y métodos definidos en la clase previamente */
console.log(instancia.variableInterna);
instancia.metodo1();
instancia.metodo2();
/*Para usar la variable estática, no es necesaria la instancia, simplemente lo llamamos desde la clase */
nombreDeMiClase.variableEstatica;
/*La magia está en que, como la variable es un molde, se pueden crear múltiples instancias de ésta*/
let instancia_2 = new nombreDeMiClase(); // Se ejecutará el constructor diciendo "Nuevo objeto creado" (constructor)
let instancia_3 = new nombreDeMiClase(); // Se ejecutará el constructor diciendo "Nuevo objeto creado" (constructor)
/*¡Cada instancia será diferente de las otras en cuanto a sus variables y métodos (excepto los static) */
