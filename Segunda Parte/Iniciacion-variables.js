var variable;
let variableLet_;

const constante = "Hola soy una constante";

var a = 1;
console.log(a);

a = 4;
console.log(a);
console.log(constante);
// constante =  'adios!' No se puede reasignar

let b = 3;
console.log(b);

b = 5;
console.log(b);
/*
 Dif entre var y let
    -> var afecta a todo el contenido
    -> let afecta el bloque donde esté siendo declarado
*/

var variable = "Hola soy una variable VAR";

for (var i = 0; i < 3; i++) {
  var variable = "Soy la segunda variable"; // No debe realizarse de ésta manera, es ilustrativo
}

console.log(variable);

let variableLet = "Hola soy una variable LET";

for (var i = 0; i < 3; i++) {
  let variableLet = "Soy la segunda variable LET"; // No debe realizarse de ésta manera, es ilustrativo
}

console.log(variableLet);

//////////

var num = 4;

console.log(typeof num);

num = "Hola soy num"; // Esto no es una buena practica

console.log(typeof num);
