// Sentencias Switch

let nota = 5;

switch (nota) {
  case 5:
    console.log("Buen trabajo, !sobresaliente!");
    break;
  case 4:
    console.log("Buen trabajo, podrías haberlo hecho mejor");
    break;
  case 3:
    console.log("Has obtenido un suficiente");
    break;
  case 2:
    console.log("No has aprobado por poco");
    break;
  case 1:
    console.log(
      "No has estudiado nada, trabaja un poquito más para la próxima"
    );
    break;

  default:
    console.log("Error, introduce una nota entre el 1 y el 5");
    break;
}
