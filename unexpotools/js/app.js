import { renderHome } from './views/home.js';
import { renderScheduleView, initScheduleLogic } from './views/schedule.js';

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

        if (cardSchedule) cardSchedule.addEventListener('click', () => router('schedule'));
        if (cardChecker) cardChecker.addEventListener('click', () => router('checker'));
    } 
    else if (route === 'schedule') {
        appContainer.innerHTML = renderScheduleView();
        initScheduleLogic(); // Inicializa la lectura del TXT y la grilla
        
        const backHomeBtn = document.getElementById('back-home');
        if (backHomeBtn) backHomeBtn.addEventListener('click', () => router('home'));
    } 
    else if (route === 'checker') {
        appContainer.innerHTML = renderCheckerIndex();
        initCheckerLogic(router); // Le pasamos el router
        const backHomeBtn = document.getElementById('back-home-pensum');
        if (backHomeBtn) backHomeBtn.addEventListener('click', () => router('home'));
    }
    else if (route === 'checker') {
        appContainer.innerHTML = `
            <div class="max-w-2xl mx-auto text-center py-20">
                <h2 class="text-3xl font-bold mb-4 dark:text-white">UNEXPO Pénsum+ (Verificador) 🔍</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-6">Próximamente configuraremos este módulo con prelaciones.</p>
                <button id="back-home" class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:text-cyan-400 text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition">&larr; Volver al inicio</button>
            </div>
        `;
        const backHomeBtn = document.getElementById('back-home');
        if (backHomeBtn) backHomeBtn.addEventListener('click', () => router('home'));
    }
}

// Configurar enlaces de la barra de navegación superior
const navHome = document.getElementById('nav-home');
const navSchedule = document.getElementById('nav-schedule');
const navChecker = document.getElementById('nav-checker');

if (navHome) navHome.addEventListener('click', () => router('home'));
if (navSchedule) navSchedule.addEventListener('click', () => router('schedule'));
if (navChecker) navChecker.addEventListener('click', () => router('checker'));

// Cargar la pantalla de inicio por defecto al abrir la aplicación
document.addEventListener('DOMContentLoaded', () => {
    router('home');
});