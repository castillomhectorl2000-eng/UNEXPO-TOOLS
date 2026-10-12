export function renderProximamenteView() {
    const careerKey = localStorage.getItem('unexpo_selected_career') || 'esta ingeniería';
    
    return `
        <div class="max-w-2xl mx-auto text-center py-20">
            <div class="bg-blue-50 dark:bg-cyan-950/40 border border-blue-200 dark:border-cyan-500/40 rounded-3xl p-10 shadow-lg">
                <div class="text-6xl mb-4">🚧</div>
                <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                    Herramientas de ${careerKey.toUpperCase()}
                </h2>
                <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Esta sección de herramientas especializadas se encuentra en desarrollo activo. ¡Próximamente estará disponible con calculadoras, simuladores y recursos exclusivos!
                </p>
                <button id="back-home-proxy" class="bg-[#0073e6] hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-md">
                    &larr; Volver al Inicio
                </button>
            </div>
        </div>
    `;
}

export function initProximamenteLogic(routerCallback) {
    const btnBack = document.getElementById('back-home-proxy');
    if (btnBack) {
        btnBack.addEventListener('click', () => {
            routerCallback('home');
        });
    }
}