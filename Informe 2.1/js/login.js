document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');
    const circle = document.querySelector('.progress-circle');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const continueBtn = document.getElementById('continueBtn');
    const inputUsername = document.getElementById("input");

    // Evento al enviar el formulario
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = inputUsername.value.trim();

        if (username === "") {
            alert("Por favor, ingrese su nombre de usuario.");
            return;
        }

        // Guardar nombre de usuario en localStorage
        localStorage.setItem("username", username);

        // 1. Reiniciar animación
        circle.style.transition = 'none';
        circle.style.strokeDashoffset = '502';

        // 2. Resetear UI
        welcomeMessage.innerHTML = '';
        continueBtn.classList.remove('visible');

        // Pequeño delay para asegurar el reinicio
        setTimeout(() => {
            // 3. Iniciar animación
            circle.style.transition = 'stroke-dashoffset 2s linear';
            circle.style.strokeDashoffset = '0';

            // 4. Mostrar elementos después de la animación
            setTimeout(() => {
                welcomeMessage.innerHTML = `Bienvenido <strong>${username}</strong>, usted ha ingresado con éxito.`;
                continueBtn.classList.add('visible');
            }, 2000);
        }, 10);
    });

    // Evento para redirigir al hacer clic en "Continuar"
    continueBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
