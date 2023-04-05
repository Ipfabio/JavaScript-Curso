const hoy = new Date();
console.log(hoy);

const birthday = new Date(1996, 11, 24);
console.log(birthday);

let hoyVsBirthday = hoy > birthday;
console.log(hoyVsBirthday);

const day = birthday.getDate();
console.log(day);

const month = birthday.getMonth() + 1;
console.log(month);

const year = birthday.getFullYear();
console.log(year);

/*
 * Enunciado del ejercicio:

Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
 */
