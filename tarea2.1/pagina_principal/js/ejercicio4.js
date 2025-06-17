let verdes = 0;
let blancos = 0;
let rojos = 0;

function agregarFoco() {
    const color = document.getElementById('colorFoco').value;

    if (color === 'verde') {
        verdes++;
    } else if (color === 'blanco') {
        blancos++;
    } else if (color === 'rojo') {
        rojos++;
    }

    const mensaje = document.getElementById('mensajeFoco');
    mensaje.innerHTML = `Último foco agregado: <strong style="text-transform: capitalize;">${color}</strong>`;
}

function mostrarResultados() {
    const total = verdes + blancos + rojos;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <h3>Resultados:</h3>
    <p>Verdes: ${verdes}</p>
    <p>Blancos: ${blancos}</p>
    <p>Rojos: ${rojos}</p>
    <strong><p>Total focos: ${total}</p></strong>`;
}