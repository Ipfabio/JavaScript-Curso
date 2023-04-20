let nombre = "Aron"
let apellido = "Stone"

const Persona = {nombre: nombre, apellido: apellido}

sessionStorage.setItem("persona",JSON.stringify({Persona}))

localStorage.setItem("persona",JSON.stringify({Persona}))

let now = new Date()
document.cookie = `datos=${JSON.stringify(Persona)}; expires=${new Date(now.getTime() + 2 * 60000)}`
