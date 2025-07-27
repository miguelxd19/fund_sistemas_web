const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear();

console.log("===================Informacion del estacionamiento===================");
let horas = parseInt(prompt("Ingrese la cantidad de horas estacionado: "));
let minutos = parseInt(prompt("Ingrese la cantidad de minutos adicionales: "));

let horasTotales = horas;

if (minutos > 0) {
    horasTotales += 1;
}

let totalPagar = horasTotales * 1.5;

console.log("===================Resumen del estacionamiento===================");
console.log(`Tiempo total cobrado: ${horasTotales} hora(s)`);
console.log(`Monto a pagar: $/. ${totalPagar.toFixed(2)}`);
