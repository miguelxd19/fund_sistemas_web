
function guardarDatos() {
    if (confirm('¿Estás seguro de que quieres enviar esta receta?')) {
        alert('Receta enviada con éxito. ¡Gracias por tu contribución!');
        document.getElementById('recipeForm').submit();
    }
}