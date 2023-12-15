class Contador {
  constructor(nombre) {
    this.nombre = nombre;
    this.cuentaIndivual = 0;
  }
  static contadorGlobal = 0;

  getResponsable = () => this.nombre;
  getCuentaIndividual = () => this.cuentaIndivual;
  static getCuentaGlobal = () => Contador.contadorGlobal;

  contar = () => {
    this.cuentaIndivual++;
    Contador.contadorGlobal++;
  };
}

let contador1 = new Contador("José");
let contador2 = new Contador("Julian");

contador1.contar();

contador2.contar();
contador2.contar();

console.log(contador1.getResponsable());
console.log(contador1.getCuentaIndividual());

console.log(contador2.getResponsable());
console.log(contador2.getCuentaIndividual());

console.log(Contador.getCuentaGlobal());
