class Estudiante {
  nombre = "Marcos";
  asignaturas = ["JavaScript", "HTML", "CSS"];

  obtenDatos() {
    return { nombre: this.nombre, asignaturas: this.asignaturas };
  }
}

const estudiante1 = new Estudiante();

console.log(estudiante1.obtenDatos());
