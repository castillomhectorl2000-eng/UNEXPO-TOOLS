export function renderScheduleView() {
    return `
        <div class="max-w-7xl mx-auto">
            <div class="flex justify-between items-center mb-6 flex-wrap gap-4">
                <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center gap-3">
                    📅 UNEXPO Generador de Horario
                </h2>
                <div class="flex items-center gap-3">
                    <button id="btn-print-pdf" class="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition flex items-center gap-2 shadow-sm dark:shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                        🖨️ Imprimir / Guardar PDF
                    </button>
                    <div id="clock" class="font-bold text-gray-600 dark:text-cyan-400 bg-white dark:bg-gray-900 px-4 py-2 rounded-lg border border-gray-200 dark:border-cyan-500/30 shadow-sm"></div>
                </div>
            </div>

            <!-- Estado de Clase Actual (Se oculta al imprimir) -->
            <div class="no-print bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-cyan-500/30 shadow-sm mb-6">
                <h3 class="text-sm font-semibold text-gray-500 dark:text-cyan-300 uppercase tracking-wider mb-1">Clase Actual en Vivo</h3>
                <div id="current-status" class="text-lg font-bold text-[#0073e6] dark:text-cyan-400 dark:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">Cargando estado...</div>
            </div>

            <!-- Añadir Materia (Se oculta al imprimir) -->
            <div class="no-print bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-cyan-500/30 shadow-sm mb-6">
                <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-3">➕ Añadir Materia al Horario</h3>
                <div class="flex gap-3 flex-wrap">
                    <input type="text" id="input-code" placeholder="Código (ej. IE7213)" class="px-4 py-2 bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-cyan-500/40 rounded-lg text-gray-800 dark:text-gray-100 uppercase focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400">
                    <input type="text" id="input-sec" placeholder="Sección (ej. 1)" class="px-4 py-2 bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-cyan-500/40 rounded-lg text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400">
                    <button id="btn-add-subject" class="bg-[#0073e6] hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white px-5 py-2 rounded-lg font-semibold transition dark:shadow-[0_0_10px_rgba(6,182,212,0.4)]">Añadir al Horario</button>
                </div>
                <div id="error-container" class="text-red-500 text-sm mt-2 font-medium"></div>
            </div>

            <!-- Grilla del Horario -->
            <div class="overflow-x-auto bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-cyan-500/30 shadow-md">
                <table class="w-full border-collapse text-center min-w-[950px]">
                    <thead>
                        <tr class="bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-cyan-300 border-b border-gray-200 dark:border-cyan-500/30">
                            <th class="p-3 border-r border-gray-200 dark:border-cyan-500/30">Hora</th>
                            <th class="p-3 border-r border-gray-200 dark:border-cyan-500/30">Lunes</th>
                            <th class="p-3 border-r border-gray-200 dark:border-cyan-500/30">Martes</th>
                            <th class="p-3 border-r border-gray-200 dark:border-cyan-500/30">Miércoles</th>
                            <th class="p-3 border-r border-gray-200 dark:border-cyan-500/30">Jueves</th>
                            <th class="p-3 border-r border-gray-200 dark:border-cyan-500/30">Viernes</th>
                            <th class="p-3">Sábado</th>
                        </tr>
                    </thead>
                    <tbody id="schedule-body">
                        <!-- Las filas se generan por JS -->
                    </tbody>
                </table>
            </div>

            <div class="no-print mt-6">
                <button id="back-home" class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition">&larr; Volver al inicio</button>
            </div>
        </div>
    `;
}

export function initScheduleLogic() {
    let masterDatabase = JSON.parse(localStorage.getItem('smartMasterDBv4')) || [];
    let scheduleData = JSON.parse(localStorage.getItem('smartScheduleDatav2')) || [];
    const hours = Array.from({ length: 12 }, (_, i) => i + 7);

    function parseTextToDB(rawText) {
        const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        let db = [];

        lines.forEach(line => {
            const codeMatch = line.match(/([A-Z]{2,4}\d{3,4})/);
            if (!codeMatch) return;
            const code = codeMatch[1];
            
            const codeIndex = line.indexOf(code);
            let namePart = line.substring(0, codeIndex).trim();
            
            if (!namePart || namePart.length < 2) {
                namePart = `ASIGNATURA (${code})`;
            }

            const remainder = line.substring(codeIndex + code.length).trim();
            const tokens = remainder.split(/\s+/);
            if (tokens.length < 3) return;

            const sec = tokens[0];
            const blocks = [];
            let idx = 1;

            while (idx + 2 < tokens.length) {
                const potentialDay = parseInt(tokens[idx]);
                const potentialHour = parseInt(tokens[idx+1]);
                const room = tokens[idx+2];

                if (!isNaN(potentialDay) && !isNaN(potentialHour) && potentialDay >= 1 && potentialDay <= 6 && potentialHour >= 7 && potentialHour <= 21) {
                    blocks.push({
                        day: potentialDay,
                        start: potentialHour,
                        end: potentialHour + 1,
                        room: room
                    });
                    idx += 3;
                } else {
                    idx++;
                }
            }

            if (blocks.length > 0) {
                db = db.filter(item => !(item.code === code && item.sec === sec));
                db.push({ code, name: namePart, sec, blocks });
            }
        });
        return db;
    }

    function renderScheduleTable() {
        const tbody = document.getElementById('schedule-body');
        if (!tbody) return;
        tbody.innerHTML = '';

        hours.forEach(hour => {
            const row = document.createElement('tr');
            const timeCell = document.createElement('td');
            timeCell.className = 'p-3 border-r border-b border-gray-200 dark:border-cyan-500/30 font-bold bg-gray-50 dark:bg-gray-950 text-gray-500 dark:text-cyan-400 text-xs w-28';
            timeCell.textContent = `${hour.toString().padStart(2, '0')}:00 - ${(hour + 1).toString().padStart(2, '0')}:00`;
            row.appendChild(timeCell);

            for (let day = 1; day <= 6; day++) {
                const cell = document.createElement('td');
                cell.className = 'border-r border-b border-gray-200 dark:border-cyan-500/30 p-1 relative h-14 align-middle';
                const itemStartingHere = scheduleData.find(item => item.day === day && item.start === hour);

                if (itemStartingHere) {
                    const duration = itemStartingHere.end - itemStartingHere.start;
                    cell.rowSpan = duration;

                    const card = document.createElement('div');
                    card.className = 'bg-blue-50 dark:bg-cyan-950/40 border border-blue-300 dark:border-cyan-400/60 text-gray-800 dark:text-cyan-100 rounded-lg p-2 relative text-left shadow-sm dark:shadow-[0_0_10px_rgba(6,182,212,0.2)] flex flex-col justify-center';
                    card.style.height = `calc(${duration * 56}px - 8px)`;

                    const now = new Date();
                    const currentDay = now.getDay();
                    const currentHour = now.getHours();
                    const isActive = (day === currentDay && currentHour >= itemStartingHere.start && currentHour < itemStartingHere.end);

                    if (isActive) {
                        card.className += ' ring-2 ring-blue-600 dark:ring-cyan-400 dark:shadow-[0_0_20px_rgba(6,182,212,0.8)]';
                    }

                    card.innerHTML = `
                        <button class="delete-btn absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] cursor-pointer z-10" data-key="${itemStartingHere.groupKey}">×</button>
                        <div class="font-bold text-[11px] leading-tight mb-1 pr-5 break-words">${itemStartingHere.name}</div>
                        <div class="text-[10px] opacity-90">${itemStartingHere.sec ? 'Sec: ' + itemStartingHere.sec + ' | ' : ''}Aula: ${itemStartingHere.room}</div>
                        <div class="text-[10px] opacity-70">${itemStartingHere.start}:00 - ${itemStartingHere.end}:00</div>
                    `;
                    cell.appendChild(card);
                    row.appendChild(cell);
                } else {
                    const isCovered = scheduleData.some(item => item.day === day && item.start < hour && item.end > hour);
                    if (!isCovered) {
                        row.appendChild(cell);
                    }
                }
            }
            tbody.appendChild(row);
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const key = e.target.getAttribute('data-key');
                scheduleData = scheduleData.filter(item => item.groupKey !== key);
                localStorage.setItem('smartScheduleDatav2', JSON.stringify(scheduleData));
                renderScheduleTable();
            });
        });

        updateActiveStatus();
    }

    function addSubject() {
        const codeInput = document.getElementById('input-code').value.trim().toUpperCase();
        const secInput = document.getElementById('input-sec').value.trim();
        const errorContainer = document.getElementById('error-container');
        errorContainer.textContent = '';

        if (!codeInput || !secInput) {
            errorContainer.textContent = "Por favor ingresa el código y la sección.";
            return;
        }

        const foundSubject = masterDatabase.find(s => s.code.toUpperCase() === codeInput && s.sec === secInput);

        if (!foundSubject) {
            errorContainer.textContent = "No se encontró esa materia o sección en database.txt.";
            return;
        }

        let overlap = false;
        foundSubject.blocks.forEach(newBlock => {
            for (let h = newBlock.start; h < newBlock.end; h++) {
                const conflicting = scheduleData.some(existing => {
                    if (existing.day !== newBlock.day) return false;
                    return (h >= existing.start && h < existing.end);
                });
                if (conflicting) overlap = true;
            }
        });

        if (overlap) {
            errorContainer.textContent = "⚠️ Error de solapamiento: Ya tienes otra materia ocupando ese horario.";
            return;
        }

        const groupKey = `${codeInput}-${secInput}-${Date.now()}`;
        foundSubject.blocks.forEach(block => {
            for (let hourBlock = block.start; hourBlock < block.end; hourBlock++) {
                scheduleData.push({
                    groupKey: groupKey,
                    name: foundSubject.name,
                    sec: foundSubject.sec,
                    room: block.room,
                    day: block.day,
                    start: hourBlock,
                    end: hourBlock + 1
                });
            }
        });

        localStorage.setItem('smartScheduleDatav2', JSON.stringify(scheduleData));
        document.getElementById('input-code').value = '';
        document.getElementById('input-sec').value = '';
        renderScheduleTable();
    }

    function updateActiveStatus() {
        const now = new Date();
        const currentDay = now.getDay();
        const currentHour = now.getHours();

        const clockEl = document.getElementById('clock');
        if (clockEl) {
            clockEl.textContent = now.toLocaleString('es-ES', { 
                weekday: 'long', hour: '2-digit', minute: '2-digit', second: '2-digit' 
            });
        }

        const statusEl = document.getElementById('current-status');
        if (!statusEl) return;

        const activeItem = scheduleData.find(item => 
            item.day === currentDay && currentHour >= item.start && currentHour < item.end
        );

        if (activeItem) {
            statusEl.textContent = `🟢 En curso: ${activeItem.name} (${activeItem.sec ? 'Sec: ' + activeItem.sec + ' - ' : ''}Aula ${activeItem.room})`;
        } else {
            statusEl.textContent = "⚪ No tienes clases registradas en este momento.";
        }
    }

    // Cargar el archivo de texto y procesarlo limpiando caché anterior
    fetch('data/database.txt')
        .then(response => {
            if (!response.ok) throw new Error("No se pudo cargar database.txt");
            return response.text();
        })
        .then(rawText => {
            masterDatabase = parseTextToDB(rawText);
            localStorage.setItem('smartMasterDBv4', JSON.stringify(masterDatabase));
            renderScheduleTable();
        })
        .catch(err => {
            console.warn("Usando base de datos guardada en caché:", err);
            renderScheduleTable();
        });

    const addBtn = document.getElementById('btn-add-subject');
    if (addBtn) {
        addBtn.addEventListener('click', addSubject);
    }

    const printBtn = document.getElementById('btn-print-pdf');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    setInterval(updateActiveStatus, 1000);
}