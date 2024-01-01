console.clear();
console.log("https://github.com/makeitrealcamp/ejercicios-javascript")


/*==========CONDICIONAL==================*/

// const contrasenaValida = (contrasenia) =>{
//     if (contrasenia === "2Fj(jjbFsuj" || contrasenia == "eoZiugBf&g9") {
//         return true;
//     } else {
//         return false;
//     };
// };

// console.log(contrasenaValida("2Fj(jjbFsuj")); // true
// console.log(contrasenaValida("eoZiugBf&g9")); // true
// console.log(contrasenaValida("hola")); // false
// console.log(contrasenaValida("")); // false


/* ================ CALCULAR IMPUESTOS ================*/

// const calcularImpuestos = (edad, ingresos) => {
//     if ((edad >= 18) && (ingresos >= 1000)) {
//         ingresos = (ingresos*0.4)
//         return ingresos
//     } else {
//         return 0
//     }
// }

// // código de prueba
// console.log(calcularImpuestos(18, 1000)) // 400
// console.log(calcularImpuestos(40, 10000)) // 4000
// console.log(calcularImpuestos(17, 5000)) // 0
// console.log(calcularImpuestos(30, 500)) // 0

/* ======================IMC indice de masa corporal============ */

// const bmi = (peso, altura) =>{
    
//     let imc = peso / Math.pow(altura,2)

//     if (imc < 18.5) {
//         return "Bajo de peso"
//     }else if(imc > 18.5 && imc < 24.9){
//         return "Normal"
//     }else if(imc > 25 && imc < 29.9){
//         return "Sobrepeso"
//     }else{
//         return "Obeso"
//     }

// }

// // código de prueba
// console.log(bmi(65, 1.8)) // "Normal"
// console.log(bmi(72, 1.6)) // "Sobrepeso"
// console.log(bmi(52, 1.75)) //  "Bajo de peso"
// console.log(bmi(135, 1.7)) // "Obeso"

/* ========== imprimir un arreglo =========== */

// const imprimirArreglo = (aray) =>{
//     for (const value of aray) {
//         console.log(value)
//     }
// }

// let boludo = [1, "Hola", 2, "Mundo"];

// // código de prueba
// console.log(imprimirArreglo(boludo))
// // 1
// // Hola
// // 2
// // Mundo

/* ================= NUMEROS DE LIKES =================== */

// const likes = (numero) => {
//     if (numero > 1000 && numero < 1000000) {
//         numero = Math.trunc(numero / 1000)
//         numero = numero + "K"
//         return numero
//     } else if(numero > 999999){
//         numero =  Math.trunc(numero / 1000000)
//         numero = numero + "M"
//         return numero
//     }else{
//         return numero
//     }
// }

// // código de prueba
// console.log(likes(983)) // "983"
// console.log(likes(1900)) // "1K"
// console.log(likes(54000)) // "54K"
// console.log(likes(120800)) // "120K"
// console.log(likes(25222444)) // "25M"

/* =====================FizzBuzz======================== */

// const fizzBuzz = (numero) =>{
//     if ( (numero % 3 == 0) && (numero % 5 == 0) ) {return "fizzbuzz"} 
//     else if (numero % 5 == 0){return "buzz"}
//     else if (numero % 3 == 0){ return "fizz"}
//     else{ return numero};
// };

// // código de prueba
// console.log(fizzBuzz(6)); // "fizz"
// console.log(fizzBuzz(20)); // "buzz"
// console.log(fizzBuzz(30)); // "fizzbuzz"
// console.log(fizzBuzz(8)); // 8

/* ======== CONTAR RANGO DE NUMEROS ============== */

// const contarRango = (uno,dos) => {
//     for (let i = 0; uno < dos; i++) {
//         uno++
//         if (uno === dos) {
//             return i
//         };
//     }
// }

// // código de prueba
// console.log(contarRango(1, 9)); // 7
// console.log(contarRango(1332, 8743)); // 7410
// console.log(contarRango(5, 6)); // 0

/* ============= Sumar rango de numeros ================= */

// const sumarRango = (uno, dos) => {

//     let suma = 0;
//     let tres = 0

//     for (let i = 0; uno < dos; i++) {
       

//         suma += uno 

//         uno++

//     }
//     tres = suma + uno

//     if (tres == dos) {
//         tres =  tres - dos
//         return tres
//     } else {
//         return tres   
//     }

// }

// // código de prueba
// console.log(sumarRango(0, 10)) // 55
// console.log(sumarRango(12, 14)) // 39
// console.log(sumarRango(5, 5)) // 0

/* =========== numero de ases (letra "a") ================ */

// const numeroDeAes = (string) => {
//     let contador = 0;
//     for (const valor of string) {
//         if (valor == "a"){
//             contador++
//         }
//     }
//     return contador
// }


// const numeroDeAes = (string) => {
//     let contador = 0;
//     for (let i = 0; i < string.length; i++) {
//         valor = string[i]
//         if (valor == "a") {
//             contador++
//         }
//     }
//     return contador
// }

// código de prueba
// console.log(numeroDeAes("abracadabra")) // 5
// console.log(numeroDeAes("etinol")) // 0
// console.log(numeroDeAes("")) // 0

/* ============== Numero de caracteres ============== */

// const numeroDeCaracteres = (string,caracter) => {
//     let contador = 0;
//     for (const valor of string) {
//         if ( valor === caracter) {
//             contador++
//         }
//     }
//     return contador
// }

// // código de prueba
// console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
// console.log(numeroDeCaracteres("MMMMM", "m")) // 0
// console.log(numeroDeCaracteres("eeee", "e")) // 4

/* =============== sumar arreglo =================== */

// const sumarArreglo = (arreglo) =>{

//     let unidad = 0;
//     for (const valor of arreglo) {
//         unidad += valor
//     }
//     return unidad
// }

// // código de prueba
// console.log(sumarArreglo([3, 1, 2])) // 6
// console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 55
// console.log(sumarArreglo([])) // 0

/* ============== multiplicar arreglos ========= */

// const multiplicarArreglo = (arreglo) =>{
//     let multi = 1;
//     for (const valor of arreglo) {
//         multi *= valor
//     }
//     return multi
// }

// // código de prueba
// console.log(multiplicarArreglo([4, 1, 2, 3])) // 24
// console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8])) // 40320
// console.log(multiplicarArreglo([])) // 1

/* ============= remover ceros ============== */

// const removerCeros = (arreglo) =>{
//     let remover = [];
//     let i = 0;
//     for (const valor of arreglo) {
//         if(valor !== 0){
//             remover[i] = valor
//             i++
//         }
//     }
//     return remover
// }


// // código de prueba
// console.log(removerCeros([0, 1, 0, 2, 0, 3])) // [1, 2, 3]
// console.log(removerCeros([9, 3, 6, 4])) // [9, 3, 6, 4]
// console.log(removerCeros([0, 0, 0])) // []

/* ============== ADN =============== */

    // SE USO UN SWITCH

// const transcribir = (string) =>{
//     let transcribido = ""
//     for (const valor of string) {
//         switch (valor) {
//             case "G":
//                 transcribido = transcribido + "C"
//                 break;
//             case "C":
//                 transcribido = transcribido + "G"
//                 break;
//             case "T":
//                 transcribido = transcribido + "A"
//                 break;
//             case "A":
//                 transcribido = transcribido + "U"
//                 break;
//             default:
//                 transcribido = transcribido + ""
//                 break;
//         }
//     }
//     return transcribido
// }

// // código de prueba
// console.log(transcribir("ACGT")) // "UGCA"
// console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

    // SE USO UN OBJETO COMO CONDIONAL

// const transcribir = (strong) => {
//     let transcribido = "";
//     const valores = {
//         G:"C",
//         C:"G",
//         T:"A",
//         A:"U"
//     }
//     for (const iterator of strong) {
//         transcribido = transcribido+valores[`${iterator}`]
//     }
//     return transcribido
// } 

// // código de prueba
// console.log(transcribir("ACGT")) // "UGCA"
// console.log(transcribir("ACGTGGTCTTAA")) // "UGCACCAGAAUU"

/* =============== Capitalizar palabra ========== */

// const capitalizar = (string) => {

//     // SE USA TERNARIAS / CONDICINAL

//     (string !== "")
//     ? string = string[0].toUpperCase() + string.slice(1)
//     : string = string
    
//     return string
// }

// // código de prueba
// console.log(capitalizar("hola mundo")) // "Hola Mundo"
// console.log(capitalizar("make it real")) // "Make It Real"
// console.log(capitalizar("")) // ""

/* =============== Encontrar el número maximo ============= */

// const max = (array) => {
//     let elMax = 0;
//     for (const iterator of array) {
//         if (elMax < iterator) {
//             elMax = iterator
//         }
//     }
//     return elMax
// }

// // código de prueba
// console.log(max([3, 9, 6])) // 9
// console.log(max([67, 35, 54, 26])) // 67
// console.log(max([5, 9, 2, 4, 5, 7])) // 9

/* ================ El minimo ================== */

// const mini = (array) => {
//     let elmin = array[0];
//     let elmax = array[0]
//     for (const valor of array) {
//         if (elmin > valor){
//             elmin = valor
//         }
//         if(elmax < valor){
//             elmax = valor
//         }
//     }
//     console.log(`El minimo es: ${elmin}`)
//     console.log(`El mayor es: ${elmax}`)
// }

// // código de prueba
// console.log(mini([3, 9, 6])) // 3
// console.log(mini([67, 35, 54, 26])) // 26
// console.log(mini([5, 9, 2, 4, 5, 7])) // 2

/* ============ Generar contraseña ============== */

// const password =(string)=>{
//     let nuevaContraseña = ""
//     const valores = {
//         a: "4",
//         e: "3",
//         i: "1",
//         o: "0"
//     }
//     for (const valor of string) {
//         (valores[`${valor}`])
//         ? nuevaContraseña = nuevaContraseña + valores[`${valor}`]
//         : nuevaContraseña = nuevaContraseña + valor
//     }

//     return nuevaContraseña
// }

// // código de prueba
// console.log(password("hola")) // "h0l4"
// console.log(password("esta es una prueba")) // "3st43sun4pru3b4"
// console.log(password("")) // ""

/* ============== pares  ========================== */

// const pares = (array) =>{
//     let i = 0;
//     let array2 = [];
//     for (const valor of array) {
//         if(valor%2 === 0){
//             array2[i] = valor
//             i++
//         }
//     }
//     return array2
// }

// // código de prueba
// console.log(pares([1, 2, 3, 4, 5, 6])) // [2, 4, 6]
// console.log(pares([])) // []

/* ==============  Encontrar posiciones de numeros pares ===== */

// const posiciones = (array) => {
//     let array2 = []
//     let i = 0
//     let a = 0
//     for (const valor of array) {
//         if (valor%2===0) {
//             array2[a] = i
//             a++
//         }
//         i++ 
//     }
//     return array2

// }
// // código de prueba
// console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]
// console.log(posiciones([])) // []

/* =============== Duplicar elementos de un arreglo ======= */

// const duplicar = (array) => {
//     let array2 = []
//     let i = 0
//     for (const valor of array) {
//         array2[i] = valor * 2 
//         i++
//     }
//     return array2
// }

// // código de prueba
// console.log(duplicar([1, 2, 3])) // [2, 4, 6]
// console.log(duplicar([])) // []

/* ============ Encontrar palabras que empiecen por "a" ============*/

// const empiezanConA = (array) =>{
//     let array2 = [];
//     let i = 0;

//     for (const posicion of array) {
//         if (posicion[0] === "A" || posicion[0] === "a") {
//             array2[i] = posicion
//             i++
//         }
//     }

//     return array2
// }

// // código de prueba
// console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) // ["alfa", "Arbol"]
// console.log(empiezanConA(["beta", "delta", "gama"])) // []
// console.log(empiezanConA([])) // []

/* ============= Encontrar palabras que terminan en "s" =====*/

// const terminanConS= (array) =>{
//     let array2 = [];
//     let i = 0;
    
//     for (const valor of array) {
//         if (valor[(valor.length - 1)] === "s" || valor[(valor.length - 1)] === "S") {
//             array2[i] = valor; 
//             i++;
//         }
//     }
//     return array2
// }


// // código de prueba
// console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) // ["pruebas", "tokens"]
// console.log(terminanConS(["beta", "delta", "gama"])) // []
// console.log(terminanConS([])) // []

/* ========== iMPRIMIR UNA mATRIZ ========= */

// const imprimirMatriz = (matriz) =>{
//     for (let i = 0; i < matriz.length; i++) {
//         for (let a = 0; a < matriz.length; a++) {
//             console.log(matriz[i][a])
//         }
//     }
// } 

// // código de prueba
// console.log(imprimirMatriz([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ]))

/* ========= traducir números a palabras ============ */

// const numerosAPalabras = (array) =>{
//     let array2 = [];
//     let i = 0;
//     const objeto = {
//         1: "uno",
//         2: "dos",
//         3: "tres",
//         4: "cuatro",
//         5: "cinco",
//         6: "seis",
//         7: "siete",
//         8: "ocho",
//         9: "nueve",
//         0: "cero"
//     }

//     for (const valor of array) {
//         array2[i] = objeto[valor]
//         i++
//     }
//     return array2
// }

// // código de prueba
// console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
// console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]

/* ========= numeroAPalabra =============== */

// const numeroAPalabra = (array) => {
//     let array2 = [];
//     let i = 0;
//     const objeto = {
//         uno: 1, 
//         dos: 2, 
//         tres: 3, 
//         cuatro: 4, 
//         cinco: 5, 
//         seis: 6, 
//         siete: 7, 
//         ocho: 8, 
//         nueve: 9, 
//         cero: 0 
//     }
//     for (const valor of array) {
//         // console.log(valor)
//         (objeto[valor] !== undefined)
//         ? array2[i] = objeto[valor] 
//         : array2[i] = -1
//         i++
//     }
//     return array2
// }

// // código de prueba
// console.log(numeroAPalabra(["cero", "uno", "dos", "tres", "what?", "cuatro"])) // [0, 1, 2, 3, -1, 4]
// console.log(numeroAPalabra(["cinco", "seis", "siete", "ocho", "nueve"])) // [5, 6, 7, 8, 9]

/* ============ Numero de asteriscos en un arreglo ==================*/

// const numAsteriscos = (array) =>{
//     let a = 0

//     for (const valor of array) {
//         (valor === "*")
//         ? a++
//         : ""
//     }
//     return a
// }

// // código de prueba
// console.log(numAsteriscos(['', '*', '', '*'])) // 2
// console.log(numAsteriscos(['*', '*', '*'])) // 3
// console.log(numAsteriscos([])) // 0

/* ========== Número de asteriscos en una matriz ====== */

// const numAsteriscos = (matriz) =>{
//     let i = 0;

//     for (let a = 0; a < matriz.length; a++) {
//         for (let b = 0; b < matriz.length; b++) {
//             (matriz[a][b] === "*")
//             ? i++
//             : ""            
//         }        
//     }
//     return i
// }

// // código de prueba
// console.log(numAsteriscos([
//     ['*', '', '*'],
//     ['', '*', ''],
//     ['*', '', '*']
//   ]))
//   // 5

/* =========  Distancia entre dos strings ============*/

// const distancia = (string1, string2) => {

//     let longitud = "";
//     let contador = 0;
//     string1.length > string2.length
//     ? longitud = string1
//     : longitud = string2

//     for (let i = 0; i < longitud.length; i++) {
//             string1[i] === string2[i]
//             ? contador += 0
//             : contador += 1
//     }
//     return contador
// }

// // código de prueba
// console.log(distancia("hola", "hola")) // 0
// console.log(distancia("sol", "tol")) // 1
// console.log(distancia("carro", "correr")) // 3
// console.log(distancia("arroyo", "arrollo"))