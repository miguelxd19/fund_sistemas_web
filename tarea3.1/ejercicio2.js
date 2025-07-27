const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear()
console.log("===================Informacion de la renta===================");
let renta = parseFloat(prompt("Introduce el monto de tu renta: "));

while (isNaN(renta) || renta < 0) {
    console.log("El monto de la renta debe ser un numero positivo");
    renta = parseFloat(prompt("Introduce el monto de tu renta: "));
}

let impositivo;
switch (true) {
    case (renta < 10000):
        impositivo = 0.05;
        break;
    case (renta >= 10000 && renta <= 20000):
        impositivo = 0.10; 
        break;
    case (renta > 20000 && renta <= 35000):
        impositivo = 0.15; 
        break;  
    case (renta > 35000 && renta <= 60000):
        impositivo = 0.20; 
        break;
    case (renta > 60000):
        impositivo = 0.25;  
        break;
}

let impuesto = renta * impositivo;
console.log("===========================Resultados=============================");
console.log(`Monto de la renta: ${renta.toFixed(2)} euros`);
console.log(`Tipo impositivo: ${(impositivo * 100).toFixed(2)}%`);
console.log(`Impuesto aplicado: ${impuesto.toFixed(2)} euros`);
