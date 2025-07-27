const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear();

console.log("===================Informacion del articulo===================");
let costo = parseFloat(prompt("Ingrese el costo del articulo: "));
while (isNaN(costo) || costo < 0) {
    console.log("El costo debe ser un numero positivo.");
    costo = parseFloat(prompt("Ingrese el costo del articulo: "));
}

let precioVenta = costo * 1.15;
 console.log("===========================Resultados=============================");
console.log(`El precio de venta con 15% de ganancia es $${precioVenta.toFixed(2)}`);
