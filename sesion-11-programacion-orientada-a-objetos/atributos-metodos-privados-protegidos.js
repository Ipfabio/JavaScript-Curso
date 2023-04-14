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
    // Función Getter -> Nos permite acceder (de forma controlada) a algún atributo protegido
    return this.#nombre;
  }

  #obtenEdad() {
    return this.#edad;
  }

  getEdad() {
    return this.#edad;
  }
  setEdad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }
}

const persona = new Persona("Gorka", 70);
// console.log(persona)
// console.log(persona.nombre)
persona.saludo();
console.log(persona.obtenNombre());
// console.log(persona.#obtenEdad())
console.log(persona._isDeveloper);

// Getter -> Métodos que nos permiten obtener atributos/métodos privados o protegidos
const edad = persona.getEdad();
console.log(edad);

// Setter -> Métodos que nos permiten cambiar el valor de los atributos privados o protegidos
// Quiero cambiar la edad de la persona
persona.setEdad(15);
console.log(persona.getEdad());
