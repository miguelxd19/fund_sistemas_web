const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear();

console.log("===================Informacion del producto===================");
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario del articulo: "));
while (isNaN(precioUnitario) || precioUnitario < 0) {
    console.log("El precio unitario debe ser un numero positivo.");
    precioUnitario = parseFloat(prompt("Ingrese el precio unitario del articulo: "));
}
let cantidad = parseInt(prompt("Ingrese la cantidad adquirida: "));
while (isNaN(cantidad) || cantidad <= 0) {
    console.log("La cantidad debe ser un numero entero positivo.");
    cantidad = parseInt(prompt("Ingrese la cantidad adquirida: "));
}

let total = precioUnitario * cantidad;
let descuento = 0;

console.log("========================Resultados============================");
console.log(`El precio total es $${total.toFixed(2)}`);

if (cantidad > 20) {
    descuento = total * 0.10;
    console.log(`El descuento aplicado (10%) es $${descuento.toFixed(2)}`)
} else if (cantidad > 10) {
    descuento = total * 0.05;
    console.log(`El descuento aplicado (5%) es $${descuento.toFixed(2)}`)
}

let totalPagar = total - descuento;


console.log(`El total a pagar es $${totalPagar.toFixed(2)}`)
