// Existen 3 manera de declarar 'variables'
var variable;
let variableLet_;

const constante = "Hola soy una constante";
console.log(constante);
// constante = "adios" No se puede re-definir

var a = 1;
console.log(a);

a = 4;
console.log(a);

let b = 3;
console.log(b);

b = 5;
console.log(b);

/* Dif entre var y let
var afecta a todo el código
let solo al bloque donde esté siendo declarado 
*/

var variable = "Hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
  var variable = "Soy la segunda variable"; // Esto es ilustrativo, no se debe realizar asi
}
// afecta a la declaración original
console.log(variable);

var variableLET = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
  let variableLET = "Soy la segunda variable LET"; // esto no seria buena practica
}
// let solo afecta al bloque de codigo donde este siendo definido
console.log(variableLET);

////////////////

var num = 4;

console.log(typeof num);

var num = "Hola soy num";

console.log(typeof num);
