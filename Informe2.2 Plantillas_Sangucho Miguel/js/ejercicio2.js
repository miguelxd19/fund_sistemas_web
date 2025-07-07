const alumnos = [];

document.getElementById("formAlumno").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const promedio = parseFloat(document.getElementById("promedio").value);

  if (!nombre || isNaN(promedio)) {
    alert("Por favor, complete ambos campos correctamente.");
    return;
  }

  alumnos.push({ nombre, promedio });

  document.getElementById("formAlumno").reset();

  alumnos.sort((a, b) => b.promedio - a.promedio);

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  alumnos.forEach(alumno => {
    const item = document.createElement("div");
    item.className = "list-group-item";
    item.textContent = `${alumno.nombre} - Promedio: ${alumno.promedio}`;
    resultadoDiv.appendChild(item);
  });
});
