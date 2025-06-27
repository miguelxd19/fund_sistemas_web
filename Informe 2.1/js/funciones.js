document.addEventListener("DOMContentLoaded", () => {
    // 1. Funcionalidad del menú toggle
    const toggle = document.getElementById('menu-toggle');
    const navlinks = document.querySelectorAll('.nav-link');
    
    if (toggle) {
        toggle.addEventListener('click', () => {
            navlinks.forEach(nav => nav.classList.toggle('active'));
        });
    }

    // 2. Manejo del usuario (registro + login)
    const registeredUser = localStorage.getItem('registeredUser') || localStorage.getItem('username');
    const userMenu = document.getElementById("userMenu");

    if (registeredUser && userMenu) {
        // Mostrar el nombre del usuario en el menú
        userMenu.innerHTML = `
            <span class="user-name">Hola, <strong>${registeredUser}</strong></span>
            <a href="#" id="logoutBtn">Cerrar sesión</a>
        `;

        // Botón de cerrar sesión
        const logoutBtn = document.getElementById("logoutBtn");
        logoutBtn.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem('registeredUser');
            localStorage.removeItem('username');
            window.location.href = 'index.html'; // Recarga limpia
        });
    }

    // 3. Mostrar mensaje de bienvenida flotante
    if (registeredUser) {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'user-welcome visible';
        welcomeDiv.innerHTML = `Bienvenido/a, <strong>${registeredUser}</strong>`;
        document.body.appendChild(welcomeDiv);

        // Opcional: Eliminar después de 5 segundos
        setTimeout(() => {
            welcomeDiv.style.opacity = '0';
            setTimeout(() => welcomeDiv.remove(), 500);
        }, 5000);
    }
});