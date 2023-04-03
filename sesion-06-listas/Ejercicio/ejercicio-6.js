let listaCompras = ["Pan", "Leche", "Manteca", "Atún", "Harina"];

listaCompras.push("Aceite de Girasol");
console.log(listaCompras);

listaCompras.pop();
console.log(listaCompras);

let peliculasFavoritas = [
  {
    titulo: "Matrix",
    director: "Hermanas Wachiwski",
    fecha: "1999",
  },
  {
    titulo: "Avengers: EndGame",
    director: "Anthony Russo, Joe Russo",
    fecha: "2019",
  },
  {
    titulo: "Spiderman, Far From Home",
    director: "Jon Watts",
    fecha: "2019",
  },
];
console.log(peliculasFavoritas[0]);

const posteriorPrimEnero = peliculasFavoritas.filter(
  (peli) => peli.fecha > "2010"
);
console.log(posteriorPrimEnero);

const directores = peliculasFavoritas.map(
  (valor, indice) => `${indice + 1} - ${valor.director}`
);
console.log(directores);

const titulos = peliculasFavoritas.map(
  (valor, indice) => `${indice + 1} - ${valor.titulo}`
);
console.log(titulos);

const directoresYTitulos = directores.concat(titulos);
console.log(directoresYTitulos);

const directoresYTitulosPropagacion = [...directores, ...titulos];
console.log(directoresYTitulos);
