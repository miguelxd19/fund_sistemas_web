const prompt = require('../libreria/node_modules/prompt-sync')()
console.clear();

console.log("===================Informacion del kilometraje===================");
let km = parseInt(prompt("Ingrese la cantidad de kilometros recorridos: "))

while (km < 0 || isNaN(km)) {
    console.log("Los kilometros debe ser un numero positivo")
    km = parseInt(prompt("Ingrese la cantidad de kilometros recorridos: "))
}

let monto = 300000 

if (km > 300 && km <= 1000) {
    monto += (km - 300) * 15000
} else if (km > 1000) {
    monto += (700 * 15000) + (km - 1000) * 10000
}

let iva = monto * 0.12

console.log("===========================Resultados=============================");
console.log(`El monto total a pagar es: $${monto.toFixed(2)}`)
console.log(`De ese monto $${iva.toFixed(2)} corresponden al IVA 12%`)
