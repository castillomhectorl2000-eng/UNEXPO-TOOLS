export function renderBibliotecaView() {
    return `
        <div class="max-w-7xl mx-auto py-6 relative">
            <div class="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div>
                    <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
                        📚 Biblioteca Digital UNEXPO
                    </h2>
                    <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Busca, filtra y visualiza los libros recomendados para tus materias.
                    </p>
                </div>
                <button id="back-home-lib" class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition">&larr; Volver al inicio</button>
            </div>

            <!-- Filtros y Buscador -->
            <div class="bg-white dark:bg-gray-900 p-4 rounded-xl border border-gray-200 dark:border-cyan-500/30 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div class="w-full md:w-1/2 relative">
                    <input type="text" id="input-search-lib" placeholder="Buscar libro por nombre..." class="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-cyan-500/40 rounded-xl text-gray-800 dark:text-gray-100 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400">
                </div>
                <div class="w-full md:w-1/3">
                    <select id="select-filter-materia" class="w-full px-4 py-2.5 bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-cyan-500/40 rounded-xl text-gray-800 dark:text-gray-100 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400">
                        <option value="">-- Filtrar por todas las materias --</option>
                    </select>
                </div>
            </div>

            <!-- Grilla de Libros -->
            <div id="libros-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div class="col-span-full text-center py-10 text-gray-500 dark:text-cyan-400">Cargando biblioteca...</div>
            </div>

            <!-- Modal / Visor Interno de PDF -->
            <div id="pdf-modal" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden">
                <div class="bg-white dark:bg-gray-900 w-full max-w-5xl h-[85vh] rounded-2xl border border-gray-200 dark:border-cyan-500/40 shadow-2xl flex flex-col overflow-hidden">
                    <div class="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
                        <h3 id="modal-title" class="font-bold text-gray-800 dark:text-white text-lg truncate">Visualizando Libro</h3>
                        <button id="close-modal" class="bg-red-500 hover:bg-red-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center transition">&times;</button>
                    </div>
                    <div class="flex-grow bg-gray-100 dark:bg-gray-950 relative">
                        <iframe id="pdf-iframe" src="" class="w-full h-full border-0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function initBibliotecaLogic(routerCallback) {
    let librosDB = [];

    const gridEl = document.getElementById('libros-grid');
    const searchInput = document.getElementById('input-search-lib');
    const filterSelect = document.getElementById('select-filter-materia');
    const backBtn = document.getElementById('back-home-lib');
    const modal = document.getElementById('pdf-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const pdfIframe = document.getElementById('pdf-iframe');
    const modalTitle = document.getElementById('modal-title');

    if (backBtn) {
        backBtn.addEventListener('click', () => routerCallback('home'));
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            pdfIframe.src = '';
        });
    }

    // Cerrar modal al hacer clic fuera del contenido
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                pdfIframe.src = '';
            }
        });
    }

    function renderList(list) {
        if (!gridEl) return;
        gridEl.innerHTML = '';

        if (list.length === 0) {
            gridEl.innerHTML = `<div class="col-span-full text-center py-12 text-gray-500 dark:text-gray-400 font-medium">No se encontraron libros con esos criterios de búsqueda.</div>`;
            return;
        }

      list.forEach(libro => {
            const card = document.createElement('div');
            card.className = 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-cyan-500/30 rounded-xl p-4 shadow-sm hover:shadow-md dark:hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition flex flex-col justify-between';
            
            // Usamos directamente el link que colocaste en el TXT, asegurándonos de cambiar /view por /preview si es un enlace estándar de Drive
            let embedLink = libro.link.trim();
            if (embedLink.includes('/view')) {
                embedLink = embedLink.replace(/\/view.*$/, '/preview');
            } else if (!embedLink.includes('/preview') && embedLink.includes('drive.google.com')) {
                // Si es un enlace tipo uc?id= o similar, lo adaptamos a preview de forma segura
                const matchId = embedLink.match(/id=([a-zA-Z0-9_-]+)/) || embedLink.match(/\/d\/([a-zA-Z0-9_-]+)/);
                if (matchId && matchId[1]) {
                    embedLink = `https://drive.google.com/file/d/${matchId[1]}/preview`;
                }
            }

            card.innerHTML = `
                <div>
                    <div class="w-full h-48 bg-gray-100 dark:bg-gray-950 rounded-lg overflow-hidden mb-3 border border-gray-100 dark:border-cyan-500/20 flex items-center justify-center">
                        <img src="assets/libros/${libro.img}.png" alt="${libro.nombre}" class="w-full h-full object-cover" onerror="this.src='assets/logo-horario.png'">
                    </div>
                    <span class="inline-block bg-blue-100 text-[#0073e6] dark:bg-cyan-950/60 dark:text-cyan-400 text-[10px] font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                        ${libro.materia}
                    </span>
                    <h3 class="font-bold text-gray-800 dark:text-white text-base leading-snug mb-2">${libro.nombre}</h3>
                </div>
                <button class="view-pdf-btn mt-4 w-full bg-[#0073e6] hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-medium py-2 rounded-lg text-xs transition dark:shadow-[0_0_10px_rgba(6,182,212,0.4)] cursor-pointer" data-link="${embedLink}" data-title="${libro.nombre}">
                    📖 Leer Libro Aquí
                </button>
            `;
            gridEl.appendChild(card);
        });

        // Activar eventos de los botones para abrir el modal interno
        document.querySelectorAll('.view-pdf-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const link = e.currentTarget.getAttribute('data-link');
                const title = e.currentTarget.getAttribute('data-title');
                
                if (modalTitle) modalTitle.textContent = title;
                if (pdfIframe) pdfIframe.src = link;
                if (modal) modal.classList.remove('hidden');
            });
        });
    }

    function updateFiltersAndList() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const selectedMateria = filterSelect ? filterSelect.value : '';

        const filtered = librosDB.filter(libro => {
            const matchName = libro.nombre.toLowerCase().includes(query) || libro.materia.toLowerCase().includes(query);
            const matchMateria = selectedMateria === '' || libro.materia === selectedMateria;
            return matchName && matchMateria;
        });

        renderList(filtered);
    }

    fetch('data/libros.txt')
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar libros.txt");
            return response.text();
        })
        .then(rawText => {
            const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
            librosDB = [];
            const materiasSet = new Set();

            lines.forEach(line => {
                const parts = line.split(',').map(p => p.trim());
                if (parts.length >= 4) {
                    const [nombre, materia, link, img] = parts;
                    librosDB.push({ nombre, materia, link, img });
                    materiasSet.add(materia);
                }
            });

            if (filterSelect) {
                materiasSet.forEach(mat => {
                    const opt = document.createElement('option');
                    opt.value = mat;
                    opt.textContent = mat;
                    filterSelect.appendChild(opt);
                });
            }

            renderList(librosDB);
        })
        .catch(err => {
            console.warn("Error cargando libros:", err);
            gridEl.innerHTML = `<div class="col-span-full text-center py-10 text-red-500">Error al cargar la base de datos de libros (libros.txt).</div>`;
        });

    if (searchInput) searchInput.addEventListener('input', updateFiltersAndList);
    if (filterSelect) filterSelect.addEventListener('change', updateFiltersAndList);
}