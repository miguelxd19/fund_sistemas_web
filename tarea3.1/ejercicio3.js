const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear()
console.log("===================Informacion del cliente===================");
let edad = parseInt(prompt("Ingrese la edad del cliente:"));

while (isNaN(edad) || edad < 0) {
  console.log("La edad debe ser un numero positivo.");
  edad = parseInt(prompt("Ingrese la edad del cliente:"));
}

let precio;

if (edad < 4) {
  precio = 0;
} else if (edad <= 18) {
  precio = 5;
} else {
  precio = 10;
}
console.log("======================Precios de las entradas========================");
console.log("Menores de 4 años: Entrada gratuita");
console.log("De 4 a 18 años: Entrada 5 euros");
console.log("Mayores de 18 años: Entrada 10 euros");
console.log("===========================Resultados=============================");

if (precio === 0) {
  console.log("La entrada es gratuita para menores de 4 años.");
} else {
  console.log("El precio de la entrada es de " + precio + " euros.");
}
