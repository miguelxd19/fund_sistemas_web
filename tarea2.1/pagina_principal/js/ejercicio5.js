function calcularAhorro() {
    const dias = 365;
    let ahorroInicial = parseFloat(document.getElementById('ahorro').value);

    if (isNaN(ahorroInicial) || ahorroInicial <= 0) {
        alert("Por favor, ingrese un valor válido para el ahorro inicial.");
        return;
    }

    let totalAhorro = 0;

    for (let i = 1; i <= dias; i++) {
        totalAhorro += ahorroInicial;
        ahorroInicial *= 3;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <h3>Resultados:</h3>
    <p>Total ahorrado en 1 año: <strong>$${totalAhorro.toFixed(2)}</strong></p>`;
}