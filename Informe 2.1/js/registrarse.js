document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById('registerForm');
    const circle = document.querySelector('.progress-circle');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const continueBtn = document.getElementById('continueBtn');
    const inputUsername = document.getElementById("username");

    // Evento al enviar el formulario
    registerForm.addEventListener('submit', function (e) {
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
        circle.style.animation = 'none';

        // 2. Resetear UI
        welcomeMessage.innerHTML = '';
        continueBtn.classList.remove('visible');

        // Pequeño delay para asegurar el reinicio
        setTimeout(() => {
            // 3. Iniciar animación de carga (círculo girando)
            circle.style.animation = 'spin 2s linear infinite';
            
            // Simular tiempo de creación de cuenta (3 segundos)
            setTimeout(() => {
                // Detener animación de giro
                circle.style.animation = 'none';
                
                // Completar el círculo
                circle.style.transition = 'stroke-dashoffset 1s linear';
                circle.style.strokeDashoffset = '0';

                // Mostrar mensaje y botón
                welcomeMessage.innerHTML = `Bienvenido <strong>${username}</strong> <br>¡Su cuenta fue creada con éxito! `;
                continueBtn.classList.add('visible');
            }, 3000);
        }, 10);
    });

    // Evento para redirigir al hacer clic en "Continuar"
    continueBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});