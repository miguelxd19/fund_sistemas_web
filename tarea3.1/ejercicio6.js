const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear();

console.log("===================Informacion del pedido===================");
let docenas = parseInt(prompt("Ingrese la cantidad de docenas compradas: "));
let precioPorDocena = parseFloat(prompt("Ingrese el precio por docena ($): "));

let montoCompra = docenas * precioPorDocena;
let descuento = 0;
let obsequios = 0;

if (docenas > 3) {
    descuento = montoCompra * 0.15;
    obsequios = docenas - 3;
} else {
    descuento = montoCompra * 0.10;
}

let montoPagar = montoCompra - descuento;

console.log("===========================Resumen del pedido===========================");
console.log(`Monto de la compra: S/. ${montoCompra.toFixed(2)}`);
console.log(`Descuento aplicado: S/. ${descuento.toFixed(2)}`);
console.log(`Monto final a pagar: S/. ${montoPagar.toFixed(2)}`);
console.log(`Unidades de obsequio: ${obsequios}`);
