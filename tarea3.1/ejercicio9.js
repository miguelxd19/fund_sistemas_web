const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear();

function validarNumero(numero) {
    while (isNaN(numero) || numero < 0) {
        console.log("El anio de nacimiento debe ser positivo")
        numero = parseInt(prompt("Ingrese el anio de nacimiento: "))
    }
    return numero;
}

console.log("===================Informacion del usuario===================");
console.log("Juan");
let juan = parseInt(prompt("Ingrese el anio de nacimiento: "));
juan = validarNumero(juan);
console.log("-------------------------------------------------------------");
console.log("Mario");
let mario = parseInt(prompt("Ingrese el anio de nacimiento: "));
mario = validarNumero(mario);
console.log("-------------------------------------------------------------");
console.log("Pedro");
let pedro = parseInt(prompt("Ingrese el anio de nacimiento: "));
pedro = validarNumero(pedro);

console.log("===================Resultados===================");

if (juan === mario && mario === pedro) {
    console.log("Juan, Mario y Pedro son contemporaneos")
} else if (juan === mario) {
    console.log("Juan y Mario son contemporaneos")
} else if (juan === pedro) {
    console.log("Juan y Pedro son contemporaneos")
} else if (mario === pedro) {
    console.log("Mario y Pedro son contemporaneos")
} else {
    console.log("Ninguno es contemporaneo")
}
