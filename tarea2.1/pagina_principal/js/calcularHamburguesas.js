function calcularTotal() {
    const precioSencilla = 20;
    const precioDoble = 25;
    const precioTriple = 28;
    const recargoTarjeta = 0.05;
    const cantSencillas = parseInt(document.getElementById('sencillas').value);
    const cantDobles = parseInt(document.getElementById('dobles').value);
    const cantTriples = parseInt(document.getElementById('triples').value);
    const pagaConTarjeta = document.getElementById('tarjeta').checked;

    //validaciones
    if (isNaN(cantSencillas) || isNaN(cantDobles) || isNaN(cantTriples)) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese cantidades válidas.";
        return;
    } else if (cantSencillas < 0 || cantDobles < 0 || cantTriples < 0) {
        document.getElementById("resultado").innerHTML = "Las cantidades no pueden ser negativas.";
        return;
    }

    let subtotal = (cantSencillas * precioSencilla) + (cantDobles * precioDoble) + (cantTriples * precioTriple);
    let total = subtotal;
    let pagaTarjeta = "No";
    if (pagaConTarjeta) {
        total += subtotal * recargoTarjeta;
        pagaTarjeta = "Sí";
    }

    document.getElementById('resultado').innerHTML = `
    <strong>Resumen de la compra:</strong><br>
    Hamburguesas sencillas: ${cantSencillas} x $${precioSencilla} = $${(cantSencillas * precioSencilla).toFixed(2)}<br>
    Hamburguesas dobles: ${cantDobles} x $${precioDoble} = $${(cantDobles * precioDoble).toFixed(2)}<br>
    Hamburguesas triples: ${cantTriples} x $${precioTriple} = $${(cantTriples * precioTriple).toFixed(2)}<br>  
    Tarjeta de credito: ${pagaTarjeta}<br><br> 
    <strong>Subtotal: $${subtotal.toFixed(2)} </strong><br>
    <strong>Total a pagar: $${total.toFixed(2)}</strong>`;
}