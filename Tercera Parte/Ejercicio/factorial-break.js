// factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let contador = 1;
let factorial = 1;
while (contador <= 10) {
  if (contador < 0) {
    break;
  }
  factorial *= contador;
  console.log(factorial);
  contador++;
}
