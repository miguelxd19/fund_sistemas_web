const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear();

function validarNotaExamen(examen) {
    while (examen < 0 || examen > 100) {
        console.log("La nota del examen debe estar entre 0 y 100");
        examen = parseFloat(prompt("Ingrese la nota del examen escrito entre 0 y 100: "));
    }
    return examen;
}

function validarNotas(notas) {
    while(notas < 0 || notas > 10) {
        console.log("La nota debe estar entre 0 y 10");
        notas = parseFloat(prompt("Ingrese la nota: "));
    }
    return notas;
}

console.log("===================Informacion del estudiante===================");
console.log("                  Ingrese las notas del alumno");
console.log("Examen");
let examen = parseFloat(prompt("Ingrese la nota entre 0 y 100: "));
examen = validarNotaExamen(examen);
console.log("----------------------------------------------------------------");
console.log("Lecciones");
let lecciones = parseFloat(prompt("Ingrese la nota entre 0 y 10: "));
lecciones = validarNotas(lecciones);
console.log("----------------------------------------------------------------");
console.log("Tareas");
let tareas = parseFloat(prompt("Ingrese la nota entre 0 y 10: "));
tareas = validarNotas(tareas);
console.log("----------------------------------------------------------------");
console.log("Practicas de laboratorio");
let practicas = parseFloat(prompt("Ingrese la nota entre 0 y 10: "));
practicas = validarNotas(practicas);


let notaFinal = (examen * 0.6 * 0.2) + (lecciones * 0.4) +  (tareas * 0.3) + (practicas * 0.1);

console.log("===================Resumen de calificaciones=====================");
console.log(`La calificacion final es ${notaFinal.toFixed(2)} sobre 20`)