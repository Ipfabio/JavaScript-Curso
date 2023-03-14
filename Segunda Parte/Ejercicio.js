const alumno = {
  nombre: "Fabio",
  edad: 27,
  desarrollador: true,
  fecha_nacimiento: new Date(1995, 11, 22),
  libro_favorito: {
    nombre: "Sherlock Holmes El sabueso de los Baskerville",
    autor: "Arthur Conan Doyle",
    fecha: 1902,
    url: "https://www.buscalibre.com.ar/libro-el-sabueso-de-los-baskerville-arthur-conan-doyle-salim/9789871784219/p/47910770?bmkt_source=google&bmkt_campaign=878569622&gclid=Cj0KCQjwtsCgBhDEARIsAE7RYh1BZBHpi05UHtW0H7iP4eHRsLDVDxuRApf5UY5EHut-_ZZwm0oeS54aAmyuEALw_wcB",
  },
};

console.log(alumno.fecha_nacimiento);

/*Enunciado del ejercicio:

Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url) */