function siempreTrue() {
  return true;
}

async function promesaCincoSegundos() {
  return setTimeout(() => console.log("Hola, soy una promesa"), 5000);
}

function* indicePar() {
  let id = 0;
  while (true) {
    yield (id += 2);
  }
}

console.log(siempreTrue());

const par = indicePar();
console.log(par.next().value);
console.log(par.next().value);
console.log(par.next().value);

console.log(promesaCincoSegundos());

/**
 * Enunciado del ejercicio:

Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos
 */
