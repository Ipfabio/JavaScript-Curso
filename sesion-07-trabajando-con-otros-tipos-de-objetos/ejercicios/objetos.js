const obj = {
  nombre: "Marcos",
  apellido: "Antony",
  edad: 25,
  altura: 1.7,
  eresDesarrollador: true,
};

let edad = obj.edad;
console.log(edad);

const bestFriend1 = {
  nombre: "Julio",
  apellido: "Merc",
  edad: 23,
  altura: 1.57,
  eresDesarrollador: false,
};

const bestFriend2 = {
  nombre: "Charlie",
  apellido: "Chaz",
  edad: 27,
  altura: 1.9,
  eresDesarrollador: false,
};

let lista = [obj, bestFriend1, bestFriend2];
console.log(lista);

let listaOrdenada = lista.sort((a, b) => b.edad - a.edad);
console.log(listaOrdenada);

/* Enunciado del ejercicio:
Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
 */
