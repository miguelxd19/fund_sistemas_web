function calcularPaquete(){
    const dinero = parseFloat(document.getElementById('dinero').value);
    let paquete = '';
    let contenido = '';

    if (isNaN(dinero) || dinero <= 0) {
        alert('Por favor, ingrese una cantidad válida.');
        return;
    }

    if (dinero >= 50000) {
        paquete = 'Paquete A';
        contenido = 'Televisión, Modular, 3 pares de zapatos, 5 camisas, 5 pantalones.';
    } else if (dinero >= 20000) {
        paquete = 'Paquete B';
        contenido = 'Grabadora, 3 pares de zapatos, 5 camisas, 5 pantalones.';
    } else if (dinero >= 10000) {
        paquete = 'Paquete C';
        contenido = '2 pares de zapatos, 3 camisas, 3 pantalones.';
    } else {
        paquete = 'Paquete D';
        contenido = '1 par de zapatos, 2 camisas, 2 pantalones.';
    }

    document.getElementById('resultado').innerHTML = `
    <h2>Resultado</h2>
    <p>Con el dinero ingresado <strong>"${dinero}"</strong>, puedes adquirir:</p>
    <p>${paquete}</p>
    <p><strong>Contenido: </strong>${contenido}</p>`;

    document.getElementById('dinero').value = '';
}