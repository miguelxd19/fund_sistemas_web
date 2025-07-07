document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();

  const inputA = document.getElementById("vectorA").value.split(",").map(x => parseInt(x.trim()));
  const inputB = document.getElementById("vectorB").value.split(",").map(x => parseInt(x.trim()));
  const resultado = document.getElementById("resultado");

  if (inputA.length !== 10 || inputB.length !== 10 || inputA.some(isNaN) || inputB.some(isNaN)) {
    resultado.className = "alert alert-danger";
    resultado.style.display = "block";
    resultado.textContent = "Por favor, ingrese exactamente 10 números válidos en cada vector.";
    return;
  }

  const vectorC = [];

  for (let i = 0; i < 10; i++) {
    const A = inputA[i];
    const B = inputB[i];

    if (A === B) {
      vectorC.push(A);
    } else if (B > A) {
      vectorC.push(2 * (B - A));
    } else {
      vectorC.push(B);
    }
  }

  resultado.className = "alert alert-success";
  resultado.style.display = "block";
  resultado.textContent = `Vector C (reposición): [ ${vectorC.join(", ")} ]`;
});
