const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear()

console.log("===================Ingreso de datos===================");
let numero = parseInt(prompt("Ingrese un numero de tres cifras: "));

while (numero < 100 || numero > 999 || isNaN(numero)) {
    console.log("El numero debe ser de tres cifras.");
    numero = parseInt(prompt("Ingrese un numero de tres cifras: "));
}

let centenas = parseInt((numero / 100));           
let decenas = parseInt((numero % 100) / 10);
let unidades = numero % 10;

let invertido = unidades * 100 + decenas * 10 + centenas;

console.log("===================Resultado===================");
if (numero === invertido) {
    console.log(`El numero ${numero} es igual a su reverso ${invertido}`);
} else {
    console.log(`El numero ${numero} NO es igual a su reverso ${invertido}`);
}
