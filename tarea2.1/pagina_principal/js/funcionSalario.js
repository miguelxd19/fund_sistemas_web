function calcularSalario(){
    const salario = parseFloat(document.getElementById('salario').value);
    let incrementoAnual = 0.10;
    let anios = 6;
    let detalles = ""; // ← Declarar aquí

    if (isNaN(salario) || salario <= 0) {
        document.getElementById("resultado").innerHTML = "Por favor, ingrese un salario válido.";
        return;
    }

    detalles += `<strong>Proyección de salario con incremento anual del 10%</strong><br>`;
    detalles += `Salario inicial: $${salario.toFixed(2)}<br><br>`;

    let salarioFinal = salario;
    for (let i = 1; i <= anios; i++) {
        salarioFinal += salarioFinal * incrementoAnual;
        detalles += `Año ${i}: $${salarioFinal.toFixed(2)}<br>`;
    }

    detalles += `<br><strong>Salario después de ${anios} años: $${salarioFinal.toFixed(2)}</strong>`;

    document.getElementById("resultado").innerHTML = detalles;
}
