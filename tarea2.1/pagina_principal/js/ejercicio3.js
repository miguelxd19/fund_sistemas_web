let numeros = [];

function agregarNumero() {
    const num = parseFloat(document.getElementById('numero').value);
    if (isNaN(num)) {
        alert("Por favor ingrese un número válido.");
        return;
    }

    numeros.push(num);
    document.getElementById('numero').value = '';
    mostrarNumeros();
}

function mostrarNumeros() {
    const listaNumeros = document.getElementById('listaNumeros');
    if (numeros.length === 0) {
        listaNumeros.textContent = '(ninguno)';
    } else {
        listaNumeros.textContent = numeros.join(' - ');
    }
}

function mostrarResultados() {
    let ceros = 0, menores = 0, mayores = 0;

    for (let num of numeros) {
        if (num === 0) {
            ceros++;
        } else if (num < 0) {
            menores++;
        } else {
            mayores++;
        }
    }

    document.getElementById('resultado').innerHTML = `
    <h2>Resultado:</h2>
    <p>Cantidad de números iguales a 0: <strong>${ceros}</strong></p>
    <p>Cantidad de números menores a 0: <strong>${menores}</strong></p>
    <p>Cantidad de números mayores a 0: <strong>${mayores}</strong></p>`;
}