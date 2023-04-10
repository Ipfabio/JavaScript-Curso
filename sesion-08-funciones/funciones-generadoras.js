function* generaId() {
  let id = 0;
  while (true) {
    id++;
    if (id === 10) {
      return id;
    }
    yield id; // Esperando hasta que se vuelva a llamar
  }
}

const gen = generaId(); // gen es un objeto Generator

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next()); // pasando sin 'value' nos dice el valor y si se cumple la condición con "done:"
