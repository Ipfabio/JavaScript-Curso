// factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

let contador = 1;
let factorial = 1;
while (contador <= 10) {
  factorial *= contador;
  console.log(factorial);
  contador++;
}
