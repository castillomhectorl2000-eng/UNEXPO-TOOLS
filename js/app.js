import { renderHome } from './views/home.js';
import { renderScheduleView, initScheduleLogic } from './views/schedule.js';
import { renderCheckerIndex, initCheckerLogic } from './views/checker.js';

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
        initCheckerLogic(router); // Inicializa los selectores y pasa el router
        
        const backHomeBtn = document.getElementById('back-home-pensum');
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