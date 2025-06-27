document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');
    const waitMessage = document.getElementById('waitmessage');
    const progressBar = document.querySelector('.progress-bar');
    const progressBarContainer = document.querySelector('.progress-bar-container');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('input').value.trim();
        const comentario = document.getElementById('comentario').value.trim();

        if (email === "") {
            alert("Por favor, ingrese su correo.");
            return;
        }

        // Limpiar mensaje anterior y ocultar
        waitMessage.innerHTML = '';
        waitMessage.style.display = 'none';

        // Reiniciar barra de carga
        progressBar.style.transition = 'none';
        progressBar.style.width = '0%';

        // Limpiar inputs
        loginForm.reset();

        // Forzar el reinicio de la animación
        setTimeout(() => {
            progressBar.style.transition = 'width 3s ease';
            progressBar.style.width = '100%';

            // Mostrar el mensaje solo cuando la barra termine (3 segundos)
            setTimeout(() => {
                waitMessage.innerHTML = `
                    <p><strong>Gracias por contactarnos</strong></p>
                    <p><strong>Correo:</strong> ${email}</p>
                    <p><strong>Comentario:</strong> ${comentario}</p>
                `;
                waitMessage.style.display = 'block';
            }, 3000); // 3s = duración de la animación
        }, 50);
    });
});