import { renderHome } from './views/home.js';
import { renderScheduleView, initScheduleLogic } from './views/schedule.js';
import { renderCheckerIndex, initCheckerLogic } from './views/checker.js';
import { renderBibliotecaView, initBibliotecaLogic } from './views/biblioteca.js';

const appContainer = document.getElementById('app-container');
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Inicializar el Modo Oscuro / Neón según la preferencia guardada
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    themeIcon.textContent = '☀️';
} else {
    document.documentElement.classList.remove('dark');
    themeIcon.textContent = '🌙';
}

// Evento del botón de cambio de tema
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = '🌙';
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = '☀️';
        }
    });
}

// Enrutador Principal
function router(route) {
    if (!appContainer) return;
    appContainer.innerHTML = '';

    if (route === 'home') {
        appContainer.innerHTML = renderHome();
        
        // Activar eventos de las tarjetas en el inicio
        const cardSchedule = document.getElementById('card-schedule');
        const cardChecker = document.getElementById('card-checker');
        const cardBiblioteca = document.getElementById('card-biblioteca');

        if (cardSchedule) cardSchedule.addEventListener('click', () => router('schedule'));
        if (cardChecker) cardChecker.addEventListener('click', () => router('checker'));
        if (cardBiblioteca) cardBiblioteca.addEventListener('click', () => router('biblioteca'));
    } 
    else if (route === 'schedule') {
        appContainer.innerHTML = renderScheduleView();
        initScheduleLogic(); 
        
        const backHomeBtn = document.getElementById('back-home');
        if (backHomeBtn) backHomeBtn.addEventListener('click', () => router('home'));
    } 
    else if (route === 'checker') {
        appContainer.innerHTML = renderCheckerIndex();
        initCheckerLogic(router); 
        
        const backHomeBtn = document.getElementById('back-home-pensum');
        if (backHomeBtn) backHomeBtn.addEventListener('click', () => router('home'));
    }
    else if (route === 'biblioteca') {
        appContainer.innerHTML = renderBibliotecaView();
        initBibliotecaLogic(router);
    }
    else if (route === 'proximamente') {
        const careerKey = localStorage.getItem('unexpo_selected_career') || 'esta ingeniería';
        appContainer.innerHTML = `
            <div class="max-w-2xl mx-auto text-center py-20">
                <div class="bg-blue-50 dark:bg-cyan-950/40 border border-blue-200 dark:border-cyan-500/40 rounded-3xl p-10 shadow-lg">
                    <div class="text-6xl mb-4">🚧</div>
                    <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                        Herramientas de ${careerKey.toUpperCase()}
                    </h2>
                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
                        Esta sección de herramientas especializadas se encuentra en desarrollo activo. ¡Próximamente estará disponible!
                    </p>
                    <button id="back-home-proxy" class="bg-[#0073e6] hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-bold px-6 py-3 rounded-xl transition shadow-md">
                        &larr; Volver al Inicio
                    </button>
                </div>
            </div>
        `;
        const btnBack = document.getElementById('back-home-proxy');
        if (btnBack) btnBack.addEventListener('click', () => router('home'));
    }
}

// Configurar enlaces principales de la barra superior
const navHome = document.getElementById('nav-home');
const navSchedule = document.getElementById('nav-schedule');
const navChecker = document.getElementById('nav-checker');

if (navHome) navHome.addEventListener('click', () => router('home'));
if (navSchedule) navSchedule.addEventListener('click', () => router('schedule'));
if (navChecker) navChecker.addEventListener('click', () => router('checker'));

// Escuchar eventos globales de navegación (para los botones superiores de ingenierías y biblioteca)
window.addEventListener('navigate', (e) => {
    router(e.detail);
});

// Cargar la pantalla de inicio por defecto al abrir la aplicación
document.addEventListener('DOMContentLoaded', () => {
    router('home');
});