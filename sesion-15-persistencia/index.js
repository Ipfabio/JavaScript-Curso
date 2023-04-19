// localStorage.setItem("nombre", "Gorka")
// localStorage.setItem("nombre", "Aron")

console.log(localStorage.getItem("nombre"));

localStorage.setItem("persona", JSON.stringify({ nombre: "Gorka", edad: 32 }));

console.log(JSON.parse(localStorage.getItem("persona")));

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto JS

localStorage.removeItem("nombre");

sessionStorage.setItem("nombre-sesion", "Gorka");

/* Cookies */

document.cookie = "nombreCookie=GorkaCookie";

document.cookie =
  "nombreCaducidad=Nombre; expires=" + new Date(2023, 0, 1).toUTCString();

console.log(document.cookie);
