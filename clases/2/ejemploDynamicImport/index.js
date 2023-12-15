let modo = "calculos";
/* Solo trae un modulo, esto es Dynamic Import */
async function ejemploImport() {
  if (modo === "calculos") {
    const { default: Calculadora } = await import("./calculadora.js");
    let calculadora2 = new Calculadora();
    console.log(calculadora2.sumar(1, 2));
  }
}
ejemploImport();

/*

El error que estás viendo indica que estás intentando ejecutar un módulo ECMAScript (ES module) sin haber configurado explícitamente que es un módulo en tu archivo package.json o mediante la extensión .mjs.

Para solucionar esto, puedes seguir uno de estos dos métodos:

Método 1: Configurar en package.json
Agrega "type": "module" en tu package.json:

--------------------
*json
{
  "type": "module",
  "scripts": {
    "start": "node index.js"
  }
}
--------------------
Método 2: Cambiar la extensión del archivo
Cambia la extensión de tu archivo index.js a .mjs.

Renombra index.js a index.mjs:

--------------------
*bash
mv index.js index.mjs
--------------------

Luego, ejecuta el programa usando:

--------------------
*bash
node index.mjs
--------------------

Elige uno de estos métodos según tus preferencias. Ambos deberían solucionar el problema que estás enfrentando.

*/
