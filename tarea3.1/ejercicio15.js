const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear();

function validarNum(numero){
    while (isNaN(numero) || numero !== 0 && numero !== 1) {
        console.log("El estado del interruptor debe ser 0 o 1");
        numero = parseFloat(prompt("Ingrese el estado del interruptor (1 cerrado, 0 abierto): "));
    }
    return numero;
}

function estado(num){
    if (num === 1) {
        return "cerrado";
    } else {
        return "abierto";
    }
}

console.log("===================Informacion de los interruptores===================");
console.log("Interruptor 1");
let i1 = parseInt(prompt("Estado del interruptor 1 (1 cerrado, 0 abierto): "));
i1=validarNum(i1);
console.log("---------------------------------------------------------------------");
console.log("Interruptor 2");
let i2 = parseInt(prompt("Estado del interruptor 2 (1 cerrado, 0 abierto): "));
i2=validarNum(i2);
console.log("---------------------------------------------------------------------");
console.log("Interruptor 3");
let i3 = parseInt(prompt("Estado del interruptor 3 (1 cerrado, 0 abierto): "));
i3=validarNum(i3);

let suma = i1 + i2 + i3

console.log("===============================Resumen=================================");

console.log("El estado de los interruptores");
console.log(`Interruptor 1: ${estado(i1)}`);
console.log(`Interruptor 2: ${estado(i2)}`);
console.log(`Interruptor 3: ${estado(i3)}`);

if (suma >= 2) {
    console.log("El equipo funcionara")
} else {
    console.log("El equipo no funcionara")
}
