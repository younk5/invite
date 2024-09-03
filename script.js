// Função para inicializar eventos após o DOM ser carregado
function initialize() {
    // Mostra o banner após a página ser carregada
    showBanner();
}

// Função para mostrar um banner com animação de fade-in
function showBanner() {
    const banner = document.querySelector('.banner');
    if (banner) {
        banner.style.opacity = '1';
        banner.style.transform = 'translateY(0)';
    }
}

// Inicializa o script ao carregar o DOM
document.addEventListener('DOMContentLoaded', initialize);
