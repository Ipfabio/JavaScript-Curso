// Listas, array o arreglo (o vectores). Conjunto de variables puestas en orden
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(1, "hola", true, undefined, null); // Pasamos un numero para definir la longitud de la lista o directamente los items
const lista3 = new Array(3);
lista3[0] = "Soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

// Objetos
const movil = {
  altura: 10,
  anchura: 5,
  marca: "Xiami",
  isWhite: false,
  contactos: ["Gorka", "Martin", "Raúl"],
  tarjeta: {
    marca: "Sandisk",
    almacenamiento: 32,
  },
  "altura-tarjeta": 4, // Si tuvieramos la necesidad de crear un atributo separado por guión, debemos declararlo así
};
movil.anyo = 2019;
movil.marca = "Samsung";
// No podemos cambiar 'movil' como tal ya que es una constante, pero si podemos modificar los valores de sus atributos
console.log(movil.marca);

// Fechas
// Librerias de apoyo: Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); // 10 milisegundos
console.log(fecha_milis);

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date(2022, 0, 15);
console.log(fecha_valores);

const dia = ahora.getDate();
const mes = ahora.getMonth() + 1; // ya que empieza desde cero
const anyo = ahora.getFullYear();

console.log(dia, mes, anyo);
