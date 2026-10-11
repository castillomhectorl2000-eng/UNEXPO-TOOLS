export function renderHome() {
    return `
        <div class="max-w-4xl mx-auto text-center py-12">
            <span class="bg-blue-100 text-[#0073e6] dark:bg-cyan-950/60 dark:text-cyan-400 dark:border dark:border-cyan-500/40 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider dark:shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                Comunidad Politécnica
            </span>
            <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white mt-4 mb-6">
                Tu vida académica en la <span class="text-[#0073e6] dark:text-cyan-400 dark:drop-shadow-[0_0_10px_rgba(6,182,212,0.6)]">UNEXPO</span>, más organizada.
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
                Herramientas diseñadas para evitar dolores de cabeza con los horarios, las prelaciones y la planeación de tus semestres.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6 text-left">
                <!-- Tarjeta 1: UNEXPO Generador de Horario -->
                <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md dark:shadow-none border border-gray-100 dark:border-cyan-500/20 dark:hover:border-cyan-400/60 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition flex flex-col justify-between">
                    <div>
                        <!-- Logo de la Herramienta -->
                        <div class="w-20 h-20 mx-auto sm:mx-0 rounded-xl overflow-hidden mb-4 border border-blue-200 dark:border-cyan-500/40 shadow-sm bg-gray-900">
                            <img src="assets/logo-horario.png" alt="Generador de Horario" class="w-full h-full object-cover">
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">UNEXPO Generador de Horario</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Arma tu semana clase a clase, evita cruces de secciones y visualiza tu disponibilidad de forma visual.</p>
                    </div>
                    <button id="card-schedule" class="mt-4 bg-[#0073e6] hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-medium px-4 py-2 rounded-lg text-sm transition text-center dark:shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                        Probar Generador &rarr;
                    </button>
                </div>

                <!-- Tarjeta 2: UNEXPO Pénsum+ / Verificador -->
                <div class="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md dark:shadow-none border border-gray-100 dark:border-cyan-500/20 dark:hover:border-cyan-400/60 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition flex flex-col justify-between">
                    <div>
                        <!-- Logo de la Herramienta -->
                        <div class="w-20 h-20 mx-auto sm:mx-0 rounded-xl overflow-hidden mb-4 border border-blue-200 dark:border-cyan-500/40 shadow-sm bg-gray-900">
                            <img src="assets/logo-pensum.png" alt="Verificador de Materias" class="w-full h-full object-cover">
                        </div>
                        <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-2">UNEXPO Pénsum+ (Verificador)</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Descubre qué materias puedes ver este semestre basándote en lo que ya aprobaste y sus prerrequisitos.</p>
                    </div>
                    <button id="card-checker" class="mt-4 bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition text-center border border-transparent dark:border-cyan-500/30">
                        Verificar Materias &rarr;
                    </button>
                </div>
            </div>
        </div>
    `;
}