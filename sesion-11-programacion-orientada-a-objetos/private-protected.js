class Persona {
  // Private -> #
  // Private -> Sólo se puede acceder desde dentro de la clase
  #nombre;
  #edad;
  // #obtenEdad

  // Protected -> _
  // Protected -> Sólo se puede acceder desde dentro de la clase y de clases descendientes
  _isDeveloper = true;
  constructor(nom, edad) {
    this.#nombre = nom;
    this.#edad = edad;
  }

  saludo() {
    console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`);
  }

  obtenNombre() {
    return this.#nombre;
  }

  #obtenEdad() {
    return this.#edad;
  }
}

const persona = new Persona("Gorka", 70);
// console.log(persona)
// console.log(persona.nombre)
persona.saludo();
console.log(persona.obtenNombre());
// console.log(persona.#obtenEdad())
console.log(persona._isDeveloper);
