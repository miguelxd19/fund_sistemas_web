const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear();

console.log("===================Informacion del producto===================");
let precioKilo = parseFloat(prompt("Ingrese el precio por kilo de manzana: "));
while (isNaN(precioKilo) || precioKilo < 0) {
    console.log("El precio por kilo debe ser un numero positivo");
    precioKilo = parseFloat(prompt("Ingrese el precio por kilo de manzana: "));
}
let kilos = parseFloat(prompt("Ingrese la cantidad de kilos comprados: "));
while (isNaN(kilos) || kilos <= 0) {
    console.log("La cantidad de kilos debe ser un numero positivo");
    kilos = parseFloat(prompt("Ingrese la cantidad de kilos comprados: "));
}

let total = precioKilo * kilos;
let descuento = 0;

console.log("===========================Resultados=============================");
console.log(`El precio total es $${total.toFixed(2)}`);

if (kilos > 10) {
    descuento = total * 0.20
    console.log(`El descuento aplicado (20%) es $${descuento.toFixed(3)}`);
} else if (kilos > 5) {
    descuento = total * 0.15
    console.log(`El descuento aplicado (15%) es $${descuento.toFixed(3)}`);
} else if (kilos > 2) {
    descuento = total * 0.10
    console.log(`El descuento aplicado (10%) es $${descuento.toFixed(3)}`);
}else {
    console.log("No se aplica descuento.");
}   

let totalPagar = total - descuento;

console.log(`El total a pagar es $${totalPagar.toFixed(2)}`);
