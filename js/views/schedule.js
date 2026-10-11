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

            <!-- Estado de Clase Actual -->
            <div class="no-print bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-cyan-500/30 shadow-sm mb-6">
                <h3 class="text-sm font-semibold text-gray-500 dark:text-cyan-300 uppercase tracking-wider mb-1">Clase Actual en Vivo</h3>
                <div id="current-status" class="text-lg font-bold text-[#0073e6] dark:text-cyan-400 dark:drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">Cargando estado...</div>
            </div>

            <!-- Añadir Materia -->
            <div class="no-print bg-white dark:bg-gray-900 p-5 rounded-xl border border-gray-200 dark:border-cyan-500/30 shadow-sm mb-6 relative">
                <h3 class="text-lg font-bold text-gray-800 dark:text-white mb-3">➕ Añadir Materia al Horario</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
                    <div class="relative">
                        <label class="block text-xs font-semibold text-gray-500 dark:text-cyan-300 mb-1">Buscar por Nombre de Materia:</label>
                        <input type="text" id="input-subject-name" placeholder="Ej. Cálculo I, Física II..." class="w-full px-4 py-2 bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-cyan-500/40 rounded-lg text-gray-800 dark:text-gray-100 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400" autocomplete="off">
                        <div id="suggestions-dropdown" class="absolute z-30 left-0 right-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-cyan-500/40 rounded-lg mt-1 shadow-xl max-h-48 overflow-y-auto hidden"></div>
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-gray-500 dark:text-cyan-300 mb-1">Sección Disponible:</label>
                        <select id="select-section" class="w-full px-4 py-2 bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-cyan-500/40 rounded-lg text-gray-800 dark:text-gray-100 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-cyan-400">
                            <option value="">-- Selecciona primero una materia --</option>
                        </select>
                    </div>
                </div>

                <div class="mt-4 flex justify-end">
                    <button id="btn-add-subject" class="bg-[#0073e6] hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold transition dark:shadow-[0_0_10px_rgba(6,182,212,0.4)]">Añadir al Horario</button>
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
    let selectedSubjectCode = null;

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

    function renderScheduleTable(previewBlocks = []) {
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
                
                const itemsStartingHere = scheduleData.filter(item => item.day === day && item.start === hour);
                const previewStartingHere = previewBlocks.filter(item => item.day === day && item.start === hour);

                if (itemsStartingHere.length > 0) {
                    const maxDuration = Math.max(...itemsStartingHere.map(i => i.end - i.start));
                    cell.rowSpan = maxDuration;

                    // Verificar cuántas materias distintas ocupan este mismo bloque de tiempo en scheduleData
                    const uniqueGroupsInThisSlot = new Set(itemsStartingHere.map(i => i.groupKey));
                    const isOverlapBlock = uniqueGroupsInThisSlot.size > 1;

                    const card = document.createElement('div');
                    
                    if (isOverlapBlock) {
                        card.className = 'bg-orange-50 dark:bg-orange-950/50 border border-orange-400 dark:border-orange-500 text-gray-800 dark:text-orange-200 rounded-lg p-2 relative text-left shadow-sm flex flex-col justify-center';
                    } else {
                        card.className = 'bg-blue-50 dark:bg-cyan-950/40 border border-blue-300 dark:border-cyan-400/60 text-gray-800 dark:text-cyan-100 rounded-lg p-2 relative text-left shadow-sm flex flex-col justify-center';
                    }

                    card.style.height = `calc(${maxDuration * 56}px - 8px)`;

                    const now = new Date();
                    const currentDay = now.getDay();
                    const currentHour = now.getHours();
                    const isActive = (day === currentDay && currentHour >= hour && currentHour < hour + maxDuration);

                    if (isActive) {
                        card.className += isOverlapBlock ? ' ring-2 ring-orange-500' : ' ring-2 ring-blue-600 dark:ring-cyan-400';
                    }

                    let innerHTMLContent = '';
                    const processedKeys = new Set();

                    itemsStartingHere.forEach(item => {
                        if (!processedKeys.has(item.groupKey)) {
                            processedKeys.add(item.groupKey);
                            innerHTMLContent += `
                                <button class="delete-btn absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] cursor-pointer z-10" data-key="${item.groupKey}">×</button>
                            `;
                        }
                    });

                    const uniqueNames = [...new Set(itemsStartingHere.map(i => i.name))];
                    const uniqueSecs = [...new Set(itemsStartingHere.map(i => i.sec))];
                    const uniqueRooms = [...new Set(itemsStartingHere.map(i => i.room))];

                    innerHTMLContent += `
                        <div class="font-bold text-[11px] leading-tight mb-1 pr-5 break-words">${uniqueNames.join(' / ')}</div>
                        <div class="text-[10px] opacity-90">Sec: ${uniqueSecs.join(', ')} | Aula: ${uniqueRooms.join(', ')}</div>
                        <div class="text-[10px] opacity-70">${hour}:00 - ${hour + maxDuration}:00</div>
                    `;

                    card.innerHTML = innerHTMLContent;
                    cell.appendChild(card);
                    row.appendChild(cell);
                } else if (previewStartingHere.length > 0) {
                    const maxDuration = Math.max(...previewStartingHere.map(i => i.end - i.start));
                    cell.rowSpan = maxDuration;

                    const previewCard = document.createElement('div');
                    previewCard.className = 'bg-blue-300/40 dark:bg-cyan-500/20 border border-dashed border-blue-500 dark:border-cyan-400 text-gray-600 dark:text-cyan-200 rounded-lg p-2 relative text-left opacity-60 flex flex-col justify-center pointer-events-none';
                    previewCard.style.height = `calc(${maxDuration * 56}px - 8px)`;

                    const uniqueNames = [...new Set(previewStartingHere.map(i => i.name))];
                    previewCard.innerHTML = `
                        <div class="font-bold text-[11px] leading-tight mb-1 break-words">${uniqueNames.join(' / ')} (Vista previa)</div>
                        <div class="text-[10px]">Sec: ${previewStartingHere[0].sec} | Aula: ${previewStartingHere[0].room}</div>
                        <div class="text-[10px]">${hour}:00 - ${hour + maxDuration}:00</div>
                    `;
                    cell.appendChild(previewCard);
                    row.appendChild(cell);
                } else {
                    const isCovered = scheduleData.some(item => item.day === day && item.start < hour && item.end > hour) ||
                                      previewBlocks.some(item => item.day === day && item.start < hour && item.end > hour);
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
                // Filtrar eliminando el grupo seleccionado
                scheduleData = scheduleData.filter(item => item.groupKey !== key);
                localStorage.setItem('smartScheduleDatav2', JSON.stringify(scheduleData));
                renderScheduleTable();
            });
        });

        updateActiveStatus();
    }

    const inputName = document.getElementById('input-subject-name');
    const suggestionsBox = document.getElementById('suggestions-dropdown');
    const selectSection = document.getElementById('select-section');

    if (inputName) {
        inputName.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            suggestionsBox.innerHTML = '';
            selectedSubjectCode = null;
            selectSection.innerHTML = '<option value="">-- Selecciona primero una materia --</option>';
            renderScheduleTable();

            if (query.length < 2) {
                suggestionsBox.classList.add('hidden');
                return;
            }

            const uniqueMap = new Map();
            masterDatabase.forEach(item => {
                if (item.name.toLowerCase().includes(query) || item.code.toLowerCase().includes(query)) {
                    if (!uniqueMap.has(item.name)) {
                        uniqueMap.set(item.name, item.code);
                    }
                }
            });

            if (uniqueMap.size > 0) {
                suggestionsBox.classList.remove('hidden');
                uniqueMap.forEach((code, name) => {
                    const div = document.createElement('div');
                    div.className = 'px-4 py-2 hover:bg-cyan-500/10 cursor-pointer text-xs text-gray-800 dark:text-gray-200 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center';
                    div.innerHTML = `<span><strong>${name}</strong></span> <span class="text-cyan-600 dark:text-cyan-400 font-mono">${code}</span>`;
                    
                    div.onclick = () => {
                        inputName.value = name;
                        selectedSubjectCode = code;
                        suggestionsBox.classList.add('hidden');

                        const sectionsForSubject = masterDatabase.filter(s => s.code === code);
                        selectSection.innerHTML = '<option value="">-- Selecciona una sección --</option>';
                        sectionsForSubject.forEach(secObj => {
                            const opt = document.createElement('option');
                            opt.value = secObj.sec;
                            opt.textContent = `Sección ${secObj.sec}`;
                            selectSection.appendChild(opt);
                        });
                    };
                    suggestionsBox.appendChild(div);
                });
            } else {
                suggestionsBox.classList.add('hidden');
            }
        });
    }

    if (selectSection) {
        selectSection.addEventListener('change', (e) => {
            const secVal = e.target.value;
            if (!selectedSubjectCode || !secVal) {
                renderScheduleTable();
                return;
            }

            const targetSubject = masterDatabase.find(s => s.code === selectedSubjectCode && s.sec === secVal);
            if (!targetSubject) {
                renderScheduleTable();
                return;
            }

            let previewExpanded = [];
            targetSubject.blocks.forEach(block => {
                for (let hourBlock = block.start; hourBlock < block.end; hourBlock++) {
                    previewExpanded.push({
                        name: targetSubject.name,
                        sec: targetSubject.sec,
                        room: block.room,
                        day: block.day,
                        start: hourBlock,
                        end: hourBlock + 1
                    });
                }
            });

            renderScheduleTable(previewExpanded);
        });
    }

    document.addEventListener('click', (e) => {
        if (suggestionsBox && inputName && !inputName.contains(e.target) && !suggestionsBox.contains(e.target)) {
            suggestionsBox.classList.add('hidden');
        }
    });

    function addSubject(forceAdd = false) {
        const secInput = selectSection.value.trim();
        const errorContainer = document.getElementById('error-container');
        errorContainer.textContent = '';

        if (!selectedSubjectCode || !secInput) {
            errorContainer.textContent = "Por favor selecciona una materia de las sugerencias y una sección.";
            return;
        }

        const foundSubject = masterDatabase.find(s => s.code === selectedSubjectCode && s.sec === secInput);

        if (!foundSubject) {
            errorContainer.textContent = "No se encontró esa sección en la base de datos.";
            return;
        }

        let overlapDetected = false;
        foundSubject.blocks.forEach(newBlock => {
            for (let h = newBlock.start; h < newBlock.end; h++) {
                const conflicting = scheduleData.some(existing => {
                    if (existing.day !== newBlock.day) return false;
                    return (h >= existing.start && h < existing.end);
                });
                if (conflicting) overlapDetected = true;
            }
        });

        if (overlapDetected && !forceAdd) {
            const confirmOverlap = confirm("⚠️ Hay un solapamiento con otra materia en este horario. ¿Deseas agregarla de todos modos?");
            if (!confirmOverlap) {
                return;
            }
            forceAdd = true;
        }

        const groupKey = `${foundSubject.code}-${secInput}-${Date.now()}`;
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
        inputName.value = '';
        selectSection.innerHTML = '<option value="">-- Selecciona primero una materia --</option>';
        selectedSubjectCode = null;
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
        addBtn.addEventListener('click', () => addSubject(false));
    }

    const printBtn = document.getElementById('btn-print-pdf');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    setInterval(updateActiveStatus, 1000);
}