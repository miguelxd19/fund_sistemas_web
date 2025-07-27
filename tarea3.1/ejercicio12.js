const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear();

console.log("===================Informacion del producto===================");
let precio = parseFloat(prompt("Ingrese el valor del producto: "));
while (isNaN(precio) || precio < 0) {
    console.log("El precio debe ser un numero positivo.");
    precio = parseFloat(prompt("Ingrese el valor del producto: "));
}

let totalPagar;
let descuento = 0;

console.log("========================Resultados============================");
if (precio > 200) {
    console.log("El producto tiene un descuento del 20% por ser mayor a $200.");
    descuento = precio * 0.2;
    totalPagar = precio - descuento;
} else {
    totalPagar = precio
}

console.log(`El precio del producto es $${precio.toFixed(2)}`);
console.log(`El descuento aplicado es $${descuento.toFixed(2)}`);
console.log(`El total a pagar es $${totalPagar.toFixed(2)}`)
