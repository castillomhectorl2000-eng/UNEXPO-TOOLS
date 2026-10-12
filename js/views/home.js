export function renderHome() {
    return `
        <div class="max-w-6xl mx-auto text-center py-10">
            <!-- Barra superior de accesos directos por Ingeniería -->
            <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-cyan-500/30 rounded-2xl p-4 mb-8 shadow-sm">
                <h3 class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-cyan-400 mb-3 text-center">
                    ⚡ Accesos Rápidos por Ingeniería
                </h3>
                <div class="flex flex-wrap justify-center gap-2">
                    <button class="nav-career-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 hover:bg-blue-100 dark:hover:bg-cyan-900 transition" data-career="electronica">
                        📡 Electrónica
                    </button>
                    <button class="nav-career-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 hover:bg-blue-100 dark:hover:bg-cyan-900 transition" data-career="electrica">
                        ⚡ Eléctrica
                    </button>
                    <button class="nav-career-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 hover:bg-blue-100 dark:hover:bg-cyan-900 transition" data-career="mecanica">
                        ⚙️ Mecánica
                    </button>
                    <button class="nav-career-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 hover:bg-blue-100 dark:hover:bg-cyan-900 transition" data-career="metalurgica">
                        🛡️ Metalúrgica
                    </button>
                    <button class="nav-career-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 hover:bg-blue-100 dark:hover:bg-cyan-900 transition" data-career="quimica">
                        🧪 Química
                    </button>
                    <button class="nav-career-btn px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-cyan-950/50 text-blue-700 dark:text-cyan-300 border border-blue-200 dark:border-cyan-500/30 hover:bg-blue-100 dark:hover:bg-cyan-900 transition" data-career="industrial">
                        🏭 Industrial
                    </button>
                </div>
            </div>

            <!-- Contenido Principal -->
            <span class="bg-blue-100 text-[#0073e6] dark:bg-cyan-950/60 dark:text-cyan-400 dark:border dark:border-cyan-500/40 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider dark:shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                Comunidad Politécnica
            </span>
            <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white mt-4 mb-6">
                Tu vida académica en la <span class="text-[#0073e6] dark:text-cyan-400 dark:drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">UNEXPO</span>, más organizada.
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                Herramientas diseñadas para evitar dolores de cabeza con los horarios, las prelaciones, los libros y la planeación de tus semestres.
            </p>
            
            <!-- Cuadrícula de 3 Herramientas Principales -->
            <div class="grid md:grid-cols-3 gap-6 text-left">
                <!-- Tarjeta 1: UNEXPO Generador de Horario -->
                <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md dark:shadow-none border border-gray-100 dark:border-cyan-500/20 dark:hover:border-cyan-400/60 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition flex flex-col justify-between">
                    <div>
                        <div class="w-16 h-16 mx-auto sm:mx-0 rounded-xl overflow-hidden mb-4 border border-blue-200 dark:border-cyan-500/40 shadow-sm bg-gray-900 flex items-center justify-center text-2xl">
                            📅
                        </div>
                        <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2">Generador de Horario</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Arma tu semana clase a clase, evita cruces de secciones y visualiza conflictos en tiempo real.</p>
                    </div>
                    <button id="card-schedule" class="mt-4 bg-[#0073e6] hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-medium px-4 py-2 rounded-lg text-sm transition text-center dark:shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                        Probar Generador &rarr;
                    </button>
                </div>

                <!-- Tarjeta 2: UNEXPO Pénsum+ / Verificador -->
                <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md dark:shadow-none border border-gray-100 dark:border-cyan-500/20 dark:hover:border-cyan-400/60 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition flex flex-col justify-between">
                    <div>
                        <div class="w-16 h-16 mx-auto sm:mx-0 rounded-xl overflow-hidden mb-4 border border-blue-200 dark:border-cyan-500/40 shadow-sm bg-gray-900 flex items-center justify-center text-2xl">
                            🛡️
                        </div>
                        <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2">Pénsum+ (Verificador)</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Descubre qué materias puedes ver este semestre basándote en lo que ya aprobaste.</p>
                    </div>
                    <button id="card-checker" class="mt-4 bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-cyan-600 text-white font-medium px-4 py-2 rounded-lg text-sm transition text-center border border-transparent dark:border-cyan-500/30">
                        Verificar Materias &rarr;
                    </button>
                </div>

                <!-- Tarjeta 3: Biblioteca Digital -->
                <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md dark:shadow-none border border-gray-100 dark:border-cyan-500/20 dark:hover:border-cyan-400/60 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition flex flex-col justify-between">
                    <div>
                        <div class="w-16 h-16 mx-auto sm:mx-0 rounded-xl overflow-hidden mb-4 border border-blue-200 dark:border-cyan-500/40 shadow-sm bg-gray-900 flex items-center justify-center text-2xl">
                            📚
                        </div>
                        <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-2">Biblioteca Digital</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Encuentra libros y guías de estudio organizadas por materias con acceso directo a PDF.</p>
                    </div>
                    <button id="card-biblioteca" class="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition text-center shadow-sm">
                        Ir a Biblioteca &rarr;
                    </button>
                </div>
            </div>
        </div>
    `;
}

export function initHomeLogic(routerCallback) {
    const btnSchedule = document.getElementById('card-schedule');
    if (btnSchedule) {
        btnSchedule.addEventListener('click', () => routerCallback('schedule'));
    }

    const btnChecker = document.getElementById('card-checker');
    if (btnChecker) {
        btnChecker.addEventListener('click', () => routerCallback('checker'));
    }

    const btnBiblioteca = document.getElementById('card-biblioteca');
    if (btnBiblioteca) {
        btnBiblioteca.addEventListener('click', () => routerCallback('biblioteca'));
    }
}