// Este es el archivo que vamos a utilizar

const nombre = "Gorka"

/* eslint-disable */
const persona2 = 'Maria'

/* eslint-enable */

// En esta linea quiero tener comillas simples (quiero que me desactives la regla de las comillas dobles)
const nuevoString = 'Esto es un nuevo string'; //  eslint-disable-line

/* eslint-disable-next-line indent */
  const string2 = "Más strings"

console.log("hola")

const persona3 = "Maria"

const nombre3 = "Julian"

console.log(4)


/* En package.json: 
"scripts": {
    "lint": "eslint ."  esto nos permite correr todos los archivos corroborando los errores.
En la terminal:
    npm run lint */