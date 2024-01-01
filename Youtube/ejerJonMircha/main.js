console.clear()
/*
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

// const contador = (dab) =>{
//     let i = 0
//     for (const valor of dab) {
//         i++
//     }
//     return i
// }

// const contador = (dab = "") => (!dab)
// ?console.warn("la cadena esta vacia")
// :console.log(`la cantidad de caracteres es ${dab.length}`);

// contador("HOLA MUNDO")




/* ==================================================================================================== */
/*
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".*/


// const recortar = (string, numero) => {
//     let dou = "";
//     for (const valor of string) {
//         if (dou.length < numero) {
//             dou = dou + valor
//         }
//     }
//     return dou
// }

// const recortar = (string, numero) => {
//     let dou = string.split("");
//     let dav = "";
//     for (le t i = 0; i < numero; i++) {
//         dav = dav + dou[i]
//     }
//     return dav
// }

// const recortar = (string, numero) =>
// (!string || !numero)
// ? console.warn("la cadena esta vacia")
// : console.log(string.slice(0,numero));

// recortar("Hola Mundo", 4)










/* ==================================================================================================== */

/*
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/


// const devolver = (string,caracter) =>
//     (!string || !caracter)
//     ? console.warn("La cadena esta vacia")
//     : console.log(string.split(caracter))

// devolver('hola que tal', ' ')











/* ==================================================================================================== */

/*
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

// const repetir = (string,repetire) => {
//   let dav = "";

//   for (let i = 0; i < repetire; i++) {
//       dav = dav + " " + string
//   }

//   return dav
// }

//  const repetir = (string,repetire) =>
//     (!string || !repetire)
//     ?console.warn("La cadena esta vacia")
//     :console.log(string.repeat(repetire))


// repetir('Hola Mundo', 4)








/* ==================================================================================================== */

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

// const reversa = (string = "") =>{
//   if (!string) {
//     return console.warn("La cadena de texto esta vacia")
//   }else{
//     let arr = string.split("").reverse();
//     let str = "";
//     for (const valor of arr) {
//       str = str + valor
//     }
//     return console.log(str)
//   }

// }


/* const reversa = (string = "") =>
  (!string)
  ? console.warn("La cadena de texto esta vacia")
  : console.log(string.split("").reverse().join(""));

reversa("Thiago")
reversa("Hola Mundo") */








/* ==================================================================================================== */

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */


// const countString = (string = "", key = "") =>{
//   if(!string)return console.warn("el string esta vacio")
//   if(!key)return console.warn("el key esta vacio")
//   // let arr = string.split(" ")
//   // arr = arr.filter(a => a === key)
//   let a = 0;
//   for (const valor of string.split(" ")) {
//     if (valor === key) a++
//   }
//   return console.log(`La palabra ${key.toUpperCase()} se encontro ${a}`)
// }


// countString("hola mundo adios mundo", "mundo")








/* ==================================================================================================== */

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

/* const palindromo = (string = "") =>{
  if(!string) return console.warn("el string esta vacio")
  let arr = string.split("").reverse()
  let str = "";
  for (const valor of arr) {
    str = str + valor
  }
  (string.toUpperCase() === str)
  ? console.log("Si es un palindromo")
  : console.log("No son iguales")

} */

/* const palindromo = (string = "") =>
  (!string)
  ? console.warn("el string esta vacio")
  : (string.toUpperCase().split("").reverse().join("") === string.toUpperCase())
    ? console.log("Es un palindromo")
    : console.warn("No es un palindromo");


palindromo("SALAS") */








/* ==================================================================================================== */

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */


/* const eliminar = (str, strcom) => {
  let stri = str.split(strcom);
  let dev = ""
  for (const valor of stri) {
    dev = dev + valor
  }
  console.log(dev)
} */

/* const eliminar = (str = "", strcom = "") =>
(!str || !strcom)
? console.war("la cadena esta vacia")
: console.log(str.split(strcom).join(""));


eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
eliminar("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","o") */








/* ==================================================================================================== */

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

// const aletorio = () => {
//   let alet = 0
//   for (let i = 0; i < 1000; i++) {
//     alet = Math.trunc(Math.random()*1000)
//     if (alet >= 501 && alet <= 600) {
//       break;
//     }
//   }
//   return console.log(alet)
// }


// const aletorio = () => console.info(Math.round((Math.random()*100)+500));
// aletorio()





/* ==================================================================================================== */

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

// const capicua = (numero = undefined) =>
//   (numero.toString().split("").reverse().join("") === numero.toString())
//   ? console.log("Es capicua")
//   : console.log("no es capicua");

// capicua(2002)






/* ==================================================================================================== */

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

// const factorial = (numero = undefined) =>{
// if (numero === undefined ) return console.log("no se envio ningun numero ")
// if (numero < 0 ) return console.log("no se puede ")
//   let num = 1;
//   for (let i = numero; i > 0; i--) {
//     num *= i
//   }
//   return console.log(num)
// }

// factorial(5)







/* ====================================================================================================*/

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

// const primos = (numero = undefined) => {
//   if (typeof numero !== "number") return console.error("Esto no es un numero");
//   if (numero <= 1) return console.error(` el numero -> ${numero} no puede ser primo`);
//   if (!numero) return console.warn("La varible esta vacia");
//   let primo = true
//   for (let i = 2; i < numero; i++) {
//     if(numero % i === 0){
//       primo = false;
//       break;
//     }
//   }
//   return console.log(primo)
// }

// primos(-13)






/* ====================================================================================================*/

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

// const parImpar = (numero = undefined) =>{
//   if (typeof numero !== "number") return console.error("Esto no es un numero");
//   if (!numero) return console.warn("La varible esta vacia");
//   return (numero % 2 === 0)
//   ? console.log(`El numero ${numero} es Par`)
//   : console.log(`El numero ${numero} es Impar`)
// }

// parImpar(29)






/* ====================================================================================================*/

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

// const convercion = (numero = undefined, car = undefined) =>{
//   if(numero === undefined) return console.warn("No ingreso grasdos a convertir")
//   if(typeof numero !== "number") return console.warn("El numero "+numero+" ,No es un numero")

//   if(car === undefined) return console.warn("No ingreso el tipo de grados a convertir")
//   if(typeof car !== "string") return console.warn("La unidad "+car+" ,No es una cadena de Texto")

//   if(car.length !== 1 || !/(C|F)/.test(car)) return console.error("valor de unidad non reconocido")

//   let grados = 0;
//   if (car === "C") {
//     grados = ((numero * (9/5))+32).toFixed(2)
//     return console.log(`${grados}°F`)
//   }else{
//     grados = ((numero - 32)/(9/5)).toFixed(2)
//     return console.log(`${grados}°C`)
//   }

// }


// convercion(0,"C")


/* ====================================================================================================*/

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
 */
// const binario = (numero = undefined, base = undefined) =>{
//   if (!numero) return console.warn("El numero esta vacio");
//   if (!base) return console.warn("La base esta vacia");
//   if (typeof numero !== "number") return console.warn(`El tipo de dato no es un numero`);
//   if (typeof base !== "number") return console.warn(`El tipo de base no es un numero`);

//   let tem = 0;

//   if (base === 2){
//     numero.toString().split("").reverse().forEach((element, index) => {
//       tem += (parseInt(element) * Math.pow(2,index));
//     });
//     return console.log(tem)

//   }else if(base === 10){
//     tem = numero;
//     let bin = [];
//     for(let i = 0; i < numero; i++){
//       bin[i] = (tem % 2)
//       tem = Math.trunc(tem / 2)
//       if ((tem / 2) === 0) {
//         break;
//       }
//     }
//     return console.log(bin.reverse().join(""))
//   }else{
//     return console.warn("solo se acepta base 2 y 10")
//   }

// }

// binario(1110001001,2)



// const binario = (numero = undefined, base = undefined) =>{
//   if (numero === undefined) return console.warn("El numero esta vacio");
//   if (typeof numero !== "number") return console.warn(`El tipo de dato no es un numero`);
//   if (base === undefined) return console.warn("La base esta vacia");
//   if (typeof base !== "number") return console.warn(`El tipo de base no es un numero`);

//   if(base === 2){
//     return console.log(`${numero} base ${base} = ${parseInt(numero,base)} base 10`)
//   }else if(base === 10){
//     return console.log(`${numero} base ${base} = ${numero.toString(2)} base 2`)
//   }
// }

// binario(4,10)


/* ====================================================================================================*/

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */


// const montoFinal = (monto = undefined, dct = undefined) =>{
//   if (!monto) return console.warn("la cantidad del monto esta vacia")
//   if (typeof monto !== "number") return console.warn("la cantidad del monto NO es un numero")
//   if (!dct) return console.warn("la cantidad del descuento esta vacia")
//   if (typeof dct !== "number") return console.warn("la cantidad del descuento No es un numero")
//   if (monto < 0 || dct < 0) return console.warn("la cantidad del monto o descuento no puede ser negativo, ni 0")

//   return console.log(monto - (monto * (dct / 100)))
// }

// montoFinal(1000,20)




/* ====================================================================================================*/

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */


// const fecha = (anio = undefined) => {
//   const hoy = new Date().getFullYear();
//   const antes = anio.getFullYear()

//   return console.log(`La cantidad de años que pasaron fueron ${hoy - antes}`)
// }

// fecha(new Date(1984, 4, 23))


// const calcularAnios = (fecha = undefined) => {
//   if (fecha === undefined) return console.warn("No ingresaste la fecha");
//   if (!fecha instanceof Date) return console.error("El valor que ingresaste no es una fecha válida");

//   let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
//   aniosEnMs = 1000 * 60 * 60 * 24 * 365;
//   aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMs);

//   return (Math.sign(aniosHumanos) === -1)
//     ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
//     : (Math.sign(aniosHumanos) === 1)
//       ? console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
//       : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
// }

// calcularAnios(new Date(1984, 4, 23))




/* ====================================================================================================*/

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

// const cadenaString = (string = "") => {

//   let a = 0, b = 0;
//   // console.log(element);
//   string.toLowerCase().split("").forEach(element => {
//     // (["a","e","i","o","u"].includes(element) === true)
//     // ? a++
//     // : ([" ",",",".",":",";"].includes(element) === true)
//     // ? console.log(element)
//     // : b++
//     if (/[aeiouáéíóúü]/.test(element)) a++;
//     if (/[bcdfghjklmnnpqrstvwxyz]/.test(element)) b++;
//   })

//   return console.log(`numero de vocales es ${a} y numero de consonantes es ${b}`)
// }

// cadenaString("Hola Mundo")



// const contarLetras = (cadena = "") => {
//   if (!cadena) return console.warn("No ingresaste una cadena de texto");
//   if (typeof cadena !== "string") return console.error(`El valor "${cadena} ingresado, NO es una
//   cadena de texto`);

//   let vocales = 0, consonantes = 0;

//   cadena = cadena.toLocaleLowerCase();
//   for (let letra of cadena) {
//     if (/[aeiouáéíóúü]/.test(letra)) vocales++;
//     if (/[bcdfghjklmnnpqrstvwxyz]/.test(letra)) consonantes++;
//   }

//   return console.log({
//     cadena,
//     vocales,
//     consonantes
//   })
// }

// contarLetras("HOLA CHICOS COMO ESTAN")


/* ====================================================================================================*/

/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá 
verdadero. */

// const validarNombre = (nombre = "") => {
//   if (!nombre) return console.warn("No ingresaste una cadena de texto");
//   if (typeof nombre !== "string") return console.error(`El valor "${nombre} ingresado, NO es una
//   cadena de texto`);

//   let expresionRegular = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(nombre);

//   return console.log((expresionRegular) 
//           ? `${nombre}, SI es un nombre`  
//           : `${nombre}, No es un nombre`  
//         )
// }

// validarNombre("Jhon Jairo")



/* ====================================================================================================*/

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

// const validarCorreo = (correo = "") => {
//   if (!correo) return console.warn("No ingresaste una cadena de texto");
//   if (typeof correo !== "string") return console.error(`El valor "${correo} ingresado, NO es una
//   cadena de texto`);

//   let expresionRegular = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);

//   return console.log((expresionRegular) 
//           ? `${correo}, SI es un correo`  
//           : `${correo}, No es un correo`  
//         )
// }

// validarCorreo("jhon.jairo.tumiri@gmail.com")






/* ====================================================================================================*/

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */

// const numerico = (array) =>{
//   if (!array) return console.warn("el array esta vacio");
//   if (!(Array.isArray(array))) return console.warn("ESTO NO ES UN ARRAY"); 

//   let cuadrado = array.map(e => Math.pow(e,2))

//   return console.log(cuadrado,array)
// }
// numerico([1231231,12,3,123,1,123,1])
// numerico([1, 4, 5])





/* // RESUELTO JONMIRCHA 

const devolverCuadrados = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo de números");
  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacío");
  
  for (let num of arr) {
    if (typeof num !== "number") return console.error(`El valor ${num} ingresado, NO es un número`)
  }

  const newArr = arr.map(el => el*el);
  return console.info(`Arreglo original: ${arr},\nArreglo elevado al cuadrado: ${newArr}·`)

}

devolverCuadrados();
devolverCuadrados(true);
devolverCuadrados({});
devolverCuadrados([]);
devolverCuadrados([1, "3", 4, {}]);
devolverCuadrados([1, 4, {}]);
devolverCuadrados([12,3,12,3,23,32,1,2]) */






/* ====================================================================================================*/

/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */

// const numaltoBajo = (array = undefined) => {
//   if (!array) return console.warn("el array esta vacio");
//   if (!(Array.isArray(array))) return console.warn("ESTO NO ES UN ARRAY");

//   let min = 0, may = 0, c = 0
//   array.map(e => {
//     if (e < min) min = e;
//     if (c < e) may = e;
//     c = e
//   })
//   return console.log(`El menor es ${min}, el mayor es ${may}`)
// }

// numaltoBajo()
// numaltoBajo([1, 4, 5, 99, -60])
// numaltoBajo([-1, 1, 4, 5, 99, 60])
// numaltoBajo(2)



/* // RESUELTO JONMIRCHA

const arrayMinMax = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo de números");
  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacío");
  for (let num of arr) {
    if (typeof num !== "number") return console.error(`El valor ${num} ingresado, NO es un número`)
  }
  return console.info(`arreglo original: ${arr}
                      \nValor mayor: ${Math.max(...arr)}
                      \nValor menor: ${Math.min(...arr)}`)
}

arrayMinMax()
arrayMinMax(false)
arrayMinMax([])
arrayMinMax([12,3,3,2,1,123,-23])
 */



/* ====================================================================================================*/

/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */


// const parImpares = (array = undefined) =>{
//   if(!array) return console.warn("el array esta vacio")
//   if(!(Array.isArray(array))) return console.error("ESTO NO ES UN ARRAY")

//   let par = [], impar = [];
//   for (let i = 0; i < array.length; i++) {
//     if((array[i]%2) === 0) par[i] = array[i]
//     if((array[i]%2) !== 0) impar[i] = array[i]
//   }
// par = par.join("").split("")
// impar = impar.join("").split("")

//   return console.info({par, impar})
// } 
// parImpares()
// parImpares(1)
// parImpares([1,2,3,4,5,6,7,8,9,0])


/* // RESUELTO JONMIRCHA 

const arrayParImpar = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo de números");
  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacío");
  for (let num of arr) {
    if (typeof num !== "number") return console.error(`El valor ${num} ingresado, NO es un número`)
  }
  return console.info({
    par: arr.filter(num => num % 2 === 0),
    impar: arr.filter(num => num % 2 !== 0)
  })
}

arrayParImpar()
arrayParImpar([1,2,3,4,5,6,7,8,9,0]) */


/* ====================================================================================================*/

/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }. */


// const orden = (array = undefined) => {
//   if (!array) return console.warn("ESTO ESTA VACIO")
//   if (!(Array.isArray(array))) return console.error("ESTO NO ES UN ARRAY")
//   let men = array.sort()
//   let i = (array.length - 1);
//   let may = [];

//   for (const valor of men) {
//     may[i] = valor
//     i--
//   }

//   return console.log(
//     {
//       menorMayor: men,
//       mayorMenor: may
//     })
// }

// orden([7, 5, 7, 8, 6])


/* // RESUELTO JONMIRCHA 

const arrayOrdenar = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo de números");
  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacío");
  for (let num of arr) {
    if (typeof num !== "number") return console.error(`El valor ${num} ingresado, NO es un número`)
  }

  return console.info({
    arr,
    asc: arr.map(e => e).sort(),
    des: arr.map(e => e).sort().reverse()
  })
}

arrayOrdenar([7, 5, 7, 8, 6]) */


/* ====================================================================================================*/

/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]. */


/* // RESUELTO JONMIRCHA 

const arrayDuplicados = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo de números");
  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacío");
  if (arr.length === 1) return console.error("El arreglo debe tener al menos 2 valores");

  return console.info({
    original: arr,
    sinDuplicar: arr.filter((value,index,self) => self.indexOf(value) === index)
  })
}

arrayDuplicados()
arrayDuplicados({})
arrayDuplicados([])
arrayDuplicados(["x", 10, "x", 2, "10", 10, true, true]) */


/* // RESUELTO JONMIRCHA 

const arrayDuplicados = (arr = undefined) => {
  if (arr === undefined) return console.warn("No ingresaste un arreglo de números");
  if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo esta vacío");
  if (arr.length === 1) return console.error("El arreglo debe tener al menos 2 valores");

  return console.info({
    original: arr,
    sinDuplicar: [...new Set(arr)]
  })
}

arrayDuplicados(["x", 10, "x", 2, "10", 10, true, true]) */


/* ====================================================================================================*/

/* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */

// const promedio = (array = undefined) => {
//   if(!array) return console.warn("ESTO ESTA VACIO")
//   let a = 0
//   array.forEach(e => a += e);
//   let b = a/array.length
//   return (!(isNaN(b)))
//           ? console.log(b)
//           : console.error("EN EL CONTENDI ODEL ARRAY NO HABIA SOLO NUMEROS")
// }


// promedio([9,8,7,6,5,4,3,2,1,0])

// promedio([9,8,3,24])


// RESUELTO JONMIRCHA 

// const arrayPromedio = (arr = undefined) => {
//   if (arr === undefined) return console.warn("No ingresaste un arreglo de números");
//   if (!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");
//   if (arr.length === 0) return console.error("El arreglo esta vacío");
//   for (let num of arr) {
//     if (typeof num !== "number") return console.error(`El valor ${num} ingresado, NO es un número`)
//   }

//   return console.info(
//     arr.reduce((total,num, index, arr) =>{
//       total += num
//       if(index === (arr.length-1)){
//         return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`
//       }else{
//         return total
//       }
//     })
//   )
// } 

// arrayPromedio([9,8,3,24])



/* ====================================================================================================*/

/* 27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.

  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */


class pelicula {

  constructor({ idPelicula, titulo, director, anioEstreno, pais, genero, calificaciones }) {

    this.idPelicula = idPelicula,
      this.titulo = titulo,
      this.director = director,
      this.anioEstreno = anioEstreno,
      this.pais = pais,
      this.genero = genero,
      this.calificaciones = calificaciones

    this.validacionId(idPelicula, titulo)
    this.validacionTitulo(titulo)
    this.validacionDirector(director, titulo)
    this.validacionAñoEstreno(anioEstreno, titulo)
    this.validacionPaises(pais, titulo)
    this.validacionGeneros(genero, titulo)
    this.validacionCalificacion(calificaciones, titulo)
  }

  generosAceptdos(){
    let generos = "Action,Adult,Adventure,Animation,Biography,Comedy,Crime,Documentary,Drama,Family,Fantasy,Film,Noir,Game-Show,History,Horror,Musical,Music,Mystery,News,Reality-TV,Romance,SciFi,Short,Sport,Talk-Show,Thriller,War,Western".split(",")
    let i = 1;
    console.info(`=========== GENEROS ACEPTADOS SON: =========`)
    for (const iterator of generos) {
      console.log(`${i}) ${iterator}`)
      i++
    }
    
  }

  validarArray(concepto, valor, titulo,complemento = undefined) {
    if (typeof valor !== "string") return false;
    for (let ite of valor.split(",")) {
      if (/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s.]+$/g.test(ite) === false) return console.error(`"${ite}" no es un nombre de ${concepto} valido en "${titulo}"`)
    }
    if(complemento !== undefined || valor === undefined){
      for (let iterator of valor.split(",")) {
        if(complemento.includes(iterator) === false) {
          console.error(`${iterator} No es un ${concepto} valido en ${titulo}`)
          this.generosAceptdos()
        }
      }
    }
    return true
  }

  validarNumeros(concepto, valor, titulo, digitos) {
    if(concepto === "calificacion"){
        if(!(valor > 1 && valor < 10)){
        console.error(`La ${concepto} tiene que ser en 1 y 10 , en ${titulo}`)
      }
    }
    if (!valor) return console.error(`el ${concepto} esta vacio en ${titulo}`)
    if (isNaN(valor)) return console.error(` ${concepto} "${valor}" en "${titulo}" , ${concepto} NO ES UN NUMERO`)
    if ((Math.trunc(valor).toString().length > digitos)) return console.error(`${valor}; ${concepto} de "${titulo}" no puede pasar los ${digitos} digitos`)


    return true
  }
  
  validarCadena(concepto, valor, titulo, longitud) {
    if (!valor) return console.error(`${concepto}, esta vacio de la pelicula ${titulo}`)
    if (typeof valor !== "string") return console.error(`${concepto} "${valor}", No es un string en ${titulo}`)
    if (valor.length > longitud ) return console.error(`"${valor}" ; el ${concepto} no pueden tener mas de ${longitud} caracteres`)

    return true
  }

  validacionId(idPelicula, titulo) {
    if (this.validarCadena("id de la Pelicula", idPelicula, titulo)) {
      if (!(/^([a-z]){2}([0-9]){7,8}$/.test(idPelicula))) {
        console.error(`"${idPelicula}" de ${titulo}, No es un id correspondiente`)
      }
    }
  }

  validacionTitulo(titulo) {
    this.validarCadena("Titulo", titulo, titulo, 100)
    return true
  }

  validacionDirector(director, titulo) {
    this.validarCadena("Director", director, titulo, 50)
    this.validarArray("Director", director, titulo)
    return true
  }

  validacionAñoEstreno(anioEstreno, titulo) {
    this.validarNumeros("año de estreno", anioEstreno, titulo, 4)
    return true
  }
  validacionPaises(pais, titulo) {
    this.validarArray("Pais", pais, titulo)
    return true
  }

  validacionGeneros(genero, titulo) {
    let generos = "Action,Adult,Adventure,Animation,Biography,Comedy,Crime,Documentary,Drama,Family,Fantasy,Film,Noir,Game-Show,History,Horror,Musical,Music,Mystery,News,Reality-TV,Romance,SciFi,Short,Sport,Talk-Show,Thriller,War,Western".split(",")
    this.validarCadena("genero", genero, titulo)
    this.validarArray("genero", genero, titulo, generos)
    return true
  }

  validacionCalificacion(calificaciones,titulo){
    this.validarNumeros("calificacion", calificaciones, titulo, 2)
    return true
  }

  fichaTecnica(){console.info(`    titulo: ${this.titulo}
    director: ${this.director}
    anioEstreno: ${this.anioEstreno}
    pais: ${this.pais}
    genero: ${this.genero}
    calificacion: ${this.calificaciones}`)
  }

}



/* const TheLastOfUs = new pelicula({
  idPelicula: "tt3581920",
  titulo: "The Last of Us",
  director: "Neil Druckma,Craig mazin",
  anioEstreno: 2022,
  pais: "indonesia",
  genero: "Action,Adventure,Drama,Horror,SciFi",
  calificaciones: 8.9
})
const CreedIII = new pelicula({
  idPelicula: "tt11145118",
  titulo: "Creed III",
  director: "Michael B. Jordan,Zach Beyl,Ryan Coogler",
  anioEstreno: 2023,
  pais: "Estados Unidos",
  genero: "Drama,Sport",
  calificaciones: 7.3
})
const titanic = new pelicula({
  idPelicula: "tt11145118",
  titulo: "titanic",
  director: "Jhon Beyl,Ryan Coogler",
  anioEstreno: 1990,
  pais: "Estados Unidos",
  genero: "Drama",
  calificaciones: 2.3
}) */


// const misPelis = [{
//   idPelicula: "tt3581920",
//   titulo: "The Last of Us",
//   director: "Neil Druckma,Craig mazin",
//   anioEstreno: 2022,
//   pais: "indonesia",
//   genero: "Action,Adventure,Drama,Horror,SciFi",
//   calificaciones: 8.9
// },
// {
//   idPelicula: "tt11145118",
//   titulo: "Creed III",
//   director: "Michael B. Jordan,Zach Beyl,Ryan Coogler",
//   anioEstreno: 2023,
//   pais: "Estados Unidos",
//   genero: "Drama,Sport",
//   calificaciones: 7.3
// },
// {
//   idPelicula: "tt11145118",
//   titulo: "titanic",
//   director: "Jhon Beyl,Ryan Coogler",
//   anioEstreno: 1990,
//   pais: "Estados Unidos",
//   genero: "Drama",
//   calificaciones: 2.3
// }
// ]

// misPelis.push({
//   idPelicula: "tt11145118",
//   titulo: "citanic",
//   director: "Jhon Beyl,Ryan Coogler",
//   anioEstreno: 1990,
//   pais: "Estados Unidos",
//   genero: "Drama",
//   calificaciones: 2.3
// })

// misPelis.forEach(e => new pelicula(e).fichaTecnica())

/* =========================================================================================== */
/* ========================================================================================= */
/* DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM */

let $reloj = document.querySelector(".reloj")

// let soyjhon 
setInterval(() => {
  let soyjhon = new Date().toLocaleString();

  $reloj.innerHTML = soyjhon
}, 1000);
