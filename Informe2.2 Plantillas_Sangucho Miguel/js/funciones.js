function calcularBtn() {
    const input = document.getElementById("arrayInput").value;
    const numero = input.split(",").map(x => parseFloat(x.trim()));
    const resultado = document.getElementById("resultado");

    if (numero.length !== 10 || numero.some(isNaN)) {

        resultado.className = "alert alert-danger";
        resultado.textContent = "Por favor, ingrese exactamente 10 números válidos separados por comas.";
        return;
    }

    //const suma = numero.reduce((a, b) => a + b, 0);
    let suma = 0;
    for (let i = 0; i < 10; i++) {
        suma += numero[i];
    }

    resultado.className = "alert alert-success";
    resultado.textContent = `La suma de los números es: ${suma}`;
}
