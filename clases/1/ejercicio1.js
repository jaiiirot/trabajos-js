class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }
  static especie = "Humano";
  saludar = () => {
    console.log(`Hola, soy ${this.nombre}`);
  };
  getEspecie = () => {
    console.log(`Mi especie es ${Persona.especie}`);
  };
}

/* instanciamos nuevas personas */
let persona1 = new Persona("José");
let persona2 = new Persona("Julian");

persona1.saludar();
persona2.getEspecie();
