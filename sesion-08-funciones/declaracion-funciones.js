// Qué son las funciones, cómo se declaran y cómo se utilizan
const nom = "Gorka";

// saludar("Miguel")
saludar(nom);

function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

////
let nombre_2 = "Juan";

despedir(nombre_2);
console.log(nombre_2);

function despedir(nombre) {
  nombre = "Diego";
  console.log(`adios ${nombre}`);
}

////

let persona = { nombre: "Juan", apellido: "Gonzalez" };
console.log(persona);

saludarPersona(persona);
console.log(persona);

function saludarPersona(objeto) {
  objeto.apellido = "Villar";
  console.log(`Hola ${objeto.nombre}, ${objeto.apellido}`);
}

//////

function imprimeNumero(numero = 7) {
  // Parámetros por defecto
  console.log(numero);
}

imprimeNumero();

/////

function imprimir(...parametros) {
  console.log(...parametros);
}

imprimir(1, 3, 9, 2, "Hola", { id: 9 });

//////

function suma(...nums) {
  return nums.reduce((a, b) => a + b);
}

const s = suma(1, 2, 3, 4, 9, 15, 16);

console.log(s);

//////
let variable = "hola";

function multiplicar(a = 0, b = 0) {
  console.log(variable);
  let variable_interna = "adios";
  console.log(variable_interna);
  return a * b;
}
//console.log(variable_interna) Da error

console.log(multiplicar(4, 9));
