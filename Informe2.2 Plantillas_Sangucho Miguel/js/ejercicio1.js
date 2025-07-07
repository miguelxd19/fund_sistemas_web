function sumarVectores() {
  const inputA = document.getElementById("vectorA").value;
  const inputB = document.getElementById("vectorB").value;
  const resultado = document.getElementById("resultado");

  const vectorA = inputA.split(",").map(x => parseFloat(x.trim()));
  const vectorB = inputB.split(",").map(x => parseFloat(x.trim()));

  if (vectorA.length === 0 || vectorB.length === 0 ||vectorA.length !== vectorB.length ||vectorA.some(isNaN) || vectorB.some(isNaN)) {
    resultado.className = "alert alert-danger";
    resultado.textContent = "Error: Ambos vectores deben tener la misma cantidad de números válidos.";
    return;
  }

  const vectorC = [];
  for (let i = 0; i < vectorA.length; i++) {
    vectorC[i] = vectorA[i] + vectorB[i];
  }

  resultado.className = "alert alert-success";
  resultado.textContent = `Vector resultante C: [ ${vectorC.join(", ")} ]`;
}
