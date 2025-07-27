const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear()
console.log("===================Informacion del usuario===================");
let nombre = prompt("Introduce tu nombre: ");
let sexo = prompt("Introduce tu sexo (masculino(M)/femenino (F)): ").toUpperCase();

while (sexo !== 'M' && sexo !== 'F') {
    console.log("Sexo no valido. Introduce 'M' para masculino o 'F' para femenino");
    sexo = prompt("Introduce tu sexo (masculino(M)/femenino (F)): ");
}

let grupo;
if (sexo === 'F' && nombre.toUpperCase() < 'M') {
    grupo = 'A';
    sexo = 'femenino';
}else if (sexo === 'M' && nombre.toUpperCase() > 'N') {
    grupo = 'A';
    sexo = 'masculino';
}else {
    grupo = 'B';
    if (sexo === 'F') {
        sexo = 'femenino';
    } else {
        sexo = 'masculino';
    }
}

console.log("===========================Resultados=============================");
console.log(`Hola ${nombre}, tu sexo es ${sexo} y te corresponde al grupo ${grupo}`);