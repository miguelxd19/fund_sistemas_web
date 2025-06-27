document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('searchInput');
    const textSearch = document.getElementById('textSearch');
    const voiceSearch = document.getElementById('voiceSearch');
    const scanSearch = document.getElementById('scanSearch');
    const cards = document.querySelectorAll('.card');

    // Función para buscar y resaltar tarjetas
    function searchAndHighlight() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let hasResults = false;

        cards.forEach(card => {
            const cardName = card.getAttribute('data-name').toLowerCase();
            const cardText = card.textContent.toLowerCase();
            
            // Remover resaltado anterior
            card.classList.remove('highlight');
            
            // Verificar coincidencia
            if (searchTerm && (cardName.includes(searchTerm) || cardText.includes(searchTerm))) {
                card.classList.add('highlight');
                hasResults = true;
                
                // Scroll suave a la tarjeta
                card.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }
        });

        // Mostrar mensaje si no hay resultados
        if (searchTerm && !hasResults) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.textContent = 'No se encontraron destinos con ese nombre';
            
            // Limpiar mensajes anteriores
            const oldMessage = document.querySelector('.no-results');
            if (oldMessage) oldMessage.remove();
            
            // Insertar mensaje
            document.querySelector('.cards').appendChild(noResults);
        } else {
            // Eliminar mensaje si hay resultados
            const oldMessage = document.querySelector('.no-results');
            if (oldMessage) oldMessage.remove();
        }
    }

    // Eventos de búsqueda
    textSearch.addEventListener('click', searchAndHighlight);
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchAndHighlight();
    });

    // Simulación de búsqueda por voz
    voiceSearch.addEventListener('click', () => {
        alert('Búsqueda por voz activada. Di el nombre de un destino como "Condor Machay"');
    });

    // Simulación de búsqueda por escaneo
    scanSearch.addEventListener('click', () => {
        alert('Escaneo activado. Apunta a un código QR de destino');
    });
});