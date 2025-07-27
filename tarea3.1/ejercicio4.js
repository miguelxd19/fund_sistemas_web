const prompt = require('../libreria/node_modules/prompt-sync')();
console.clear();
console.log("===================Informacion del pedido===================");
let tipo = prompt("¿Desea una pizza vegetariana? (S=si/N=no)").toLowerCase();
while (tipo !== "s" && tipo !== "n") {
    console.log("Respuesta no valida. Ingrese 'S' para si o 'N' para no.");
    tipo = prompt("¿Desea una pizza vegetariana? (S=si/N=no)").toLowerCase();
}

let ingrediente = "";
let tipoPizza = "";

if (tipo === "s") {
    tipoPizza = "vegetariana";
    ingrediente = prompt("Elija un ingrediente (Pimiento o Tofu): ").toLowerCase();
    while (ingrediente !== "pimiento" && ingrediente !== "tofu") {
        ingrediente = prompt("Ingrediente no valido. Por favor, elija 'Pimiento' o 'Tofu'.").toLowerCase();
    }
} else {
    tipoPizza = "no vegetariana";
    ingrediente = prompt("Elija un ingrediente (Peperoni, Jamon o Salmon)").toLowerCase();
    while (ingrediente !== "peperoni" && ingrediente !== "jamon" && ingrediente !== "salmon") {
        ingrediente = prompt("Ingrediente no válido. Por favor, elija 'Peperoni', 'Jamón' o 'Salmón'.").toLowerCase();
    }
}


let ingredientesBase = "mozzarella, tomate";
let ingredienteFinal = ingrediente;

console.log("==============================Pedido de Pizza==================================");
console.log(`Has elegido una pizza ${tipoPizza}.\nIngredientes: ${ingredientesBase} y ${ingredienteFinal}.`);
