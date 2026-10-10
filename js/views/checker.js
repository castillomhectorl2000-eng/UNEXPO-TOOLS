import activePensum from '../../data/pensums/electronica_control.js';

const pensumsDatabase = {
    "electronica_control": activePensum
};

let selectedCareerKey = null;

export function renderCheckerIndex() {
    return `
        <div class="max-w-4xl mx-auto py-10">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center justify-center gap-3">
                    🛡️ Pénsum+ : Verificador de Prelaciones
                </h2>
                <p class="text-gray-600 dark:text-gray-400 mt-2">
                    Selecciona tu carrera y mención para cargar tu árbol de materias y verificar tus prelaciones.
                </p>
            </div>

            <div class="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-cyan-500/30 shadow-lg">
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 dark:text-cyan-300 mb-2">1. Selecciona tu Carrera:</label>
                        <select id="select-career" class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-cyan-500/40 rounded-xl text-gray-800 dark:text-gray-100 font-medium">
                            <option value="">-- Elige una carrera --</option>
                            <option value="electronica">Ingeniería Electrónica</option>
                        </select>
                    </div>

                    <div id="mencion-container" style="display: none;">
                        <label class="block text-sm font-semibold text-gray-700 dark:text-cyan-300 mb-2">2. Selecciona la Mención:</label>
                        <select id="select-mencion" class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-300 dark:border-cyan-500/40 rounded-xl text-gray-800 dark:text-gray-100 font-medium">
                            <option value="control">Mención: Control</option>
                        </select>
                    </div>

                    <div class="pt-4 flex justify-between items-center flex-wrap gap-4">
                        <button id="back-home-pensum" class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:text-cyan-400 text-gray-800 px-4 py-2.5 rounded-xl text-sm font-medium transition">&larr; Volver al inicio</button>
                        <button id="btn-load-pensum" disabled class="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition opacity-50 cursor-not-allowed">
                            Cargar mi Pénsum ➔
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

export function initCheckerLogic(routerCallback) {
    const selectCareer = document.getElementById('select-career');
    const mencionContainer = document.getElementById('mencion-container');
    const btnLoad = document.getElementById('btn-load-pensum');

    if (selectCareer) {
        selectCareer.addEventListener('change', (e) => {
            const val = e.target.value;
            if (val === 'electronica') {
                mencionContainer.style.display = 'block';
                btnLoad.disabled = false;
                btnLoad.classList.remove('opacity-50', 'cursor-not-allowed');
                selectedCareerKey = 'electronica_control';
            } else {
                mencionContainer.style.display = 'none';
                btnLoad.disabled = true;
                btnLoad.classList.add('opacity-50', 'cursor-not-allowed');
                selectedCareerKey = null;
            }
        });
    }

    if (btnLoad) {
        btnLoad.addEventListener('click', () => {
            if (selectedCareerKey && pensumsDatabase[selectedCareerKey]) {
                const pensumObj = pensumsDatabase[selectedCareerKey];
                renderActivePensumTree(selectedCareerKey, pensumObj, routerCallback);
            }
        });
    }
}

function renderActivePensumTree(careerKey, activePensum, routerCallback) {
    let courseStates = JSON.parse(localStorage.getItem(`unexpo_pensum_${careerKey}_states`)) || {};
    const appContainer = document.getElementById('app-container');
    if (!appContainer) return;

    appContainer.innerHTML = `
        <div class="max-w-7xl mx-auto">
            <div class="bg-white dark:bg-gray-900 border border-gray-200 dark:border-cyan-500/30 rounded-xl p-5 mb-6 flex justify-between items-center flex-wrap gap-4 shadow-sm">
                <div>
                    <h2 class="text-2xl font-extrabold text-gray-900 dark:text-cyan-400 flex items-center gap-2">
                        🛡️ ${activePensum.name}
                    </h2>
                    <p class="text-xs text-gray-500 dark:text-gray-400">Haz clic en las materias para cambiar su estado (Bloqueada ➔ Lista ➔ Inscrita ➔ Aprobada)</p>
                </div>
                
                <div class="flex items-center gap-4 flex-wrap">
                    <div class="flex gap-3">
                        <div class="bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 px-3 py-1.5 rounded-lg text-center">
                            <div id="stat-uc" class="text-sm font-bold text-amber-500">0 / ${activePensum.totalMaxUC}</div>
                            <div class="text-[10px] text-gray-400 uppercase">Puntos (UC)</div>
                        </div>
                        <div class="bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 px-3 py-1.5 rounded-lg text-center">
                            <div id="stat-progress" class="text-sm font-bold text-cyan-400">0%</div>
                            <div class="text-[10px] text-gray-400 uppercase">Progreso</div>
                        </div>
                    </div>
                    <button id="btn-reset-pensum" class="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-xs font-bold uppercase transition">Reiniciar</button>
                    <button id="btn-back-selector" class="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:text-cyan-400 text-gray-800 px-3 py-2 rounded-lg text-xs font-bold uppercase transition">Cambiar Carrera</button>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-900 border border-blue-300 dark:border-cyan-500/40 rounded-xl p-5 mb-6 shadow-sm">
                <div class="flex justify-between items-center mb-3 border-b border-gray-200 dark:border-gray-800 pb-2">
                    <h3 class="text-sm font-bold text-blue-600 dark:text-cyan-300 flex items-center gap-2">
                        🎯 Materias Recomendadas para el Siguiente Semestre
                    </h3>
                    <div id="suggestion-total-uc" class="bg-blue-100 dark:bg-cyan-950 text-blue-800 dark:text-cyan-300 px-3 py-1 rounded-full text-xs font-bold border border-blue-300 dark:border-cyan-500/30">Total: 0 UC</div>
                </div>
                <div id="suggestion-list-container" class="flex gap-3 flex-wrap"></div>
            </div>

            <div class="tree-container relative flex flex-col gap-8" id="tree-container">
                <svg id="svg-connections" class="absolute top-0 left-0 w-full h-full pointer-events-none z-0"></svg>
            </div>
        </div>
    `;

    document.getElementById('btn-back-selector').addEventListener('click', () => {
        routerCallback('checker');
    });

    document.getElementById('btn-reset-pensum').addEventListener('click', () => {
        if (confirm("¿Reiniciar el progreso de este pénsum?")) {
            courseStates = {};
            localStorage.removeItem(`unexpo_pensum_${careerKey}_states`);
            renderTree();
        }
    });

    function calculateTotalUC() {
        let total = 0;
        activePensum.semesters.forEach(sem => {
            sem.courses.forEach(course => {
                if (courseStates[course.code] === 'completed') total += course.uc;
            });
        });
        return total;
    }

    function checkPrereqs(course) {
        if (!course.prereqs || course.prereqs.length === 0) return true;
        return course.prereqs.every(req => courseStates[req] === 'completed');
    }

    function isCourseAvailable(course) {
        if (courseStates[course.code] === 'completed' || courseStates[course.code] === 'enrolled') return true;

        let totalUC = calculateTotalUC();
        if (course.customCond === "40 U.C. APROB." && totalUC < 40) return false;
        if (course.customCond === "60 U.C. APROB." && totalUC < 60) return false;
        if (course.customCond === "APROBAR TODO") {
            let allCodes = [];
            activePensum.semesters.forEach(s => s.courses.forEach(c => { if(c.code !== "EL52216") allCodes.push(c.code); }));
            return allCodes.every(c => courseStates[c] === 'completed');
        }

        if (!checkPrereqs(course)) return false;

        if (course.coreqs && course.coreqs.length > 0) {
            let coreqsMet = course.coreqs.every(req => courseStates[req] === 'completed' || courseStates[req] === 'enrolled');
            if (!coreqsMet) return false;
        }

        return true;
    }

    function countDependents(code) {
        let count = 0;
        activePensum.semesters.forEach(sem => {
            sem.courses.forEach(c => {
                let isPrereq = c.prereqs && c.prereqs.includes(code);
                let isCoreq = c.coreqs && c.coreqs.includes(code);
                if (isPrereq || isCoreq) count++;
            });
        });
        return count;
    }

    function findCourseByCode(code) {
        for (let sem of activePensum.semesters) {
            for (let course of sem.courses) {
                if (course.code === code) return course;
            }
        }
        return null;
    }

    function updateSuggestions() {
        const container = document.getElementById('suggestion-list-container');
        const totalUcBadge = document.getElementById('suggestion-total-uc');
        if (!container || !totalUcBadge) return;
        container.innerHTML = '';

        let availableList = [];
        activePensum.semesters.forEach((sem, semIndex) => {
            sem.courses.forEach(course => {
                if (courseStates[course.code] !== 'completed' && courseStates[course.code] !== 'enrolled') {
                    if (checkPrereqs(course)) {
                        let totalUC = calculateTotalUC();
                        let passesCond = true;
                        if (course.customCond === "40 U.C. APROB." && totalUC < 40) passesCond = false;
                        if (course.customCond === "60 U.C. APROB." && totalUC < 60) passesCond = false;
                        if (course.customCond === "APROBAR TODO") {
                            let allCodes = [];
                            activePensum.semesters.forEach(s => s.courses.forEach(c => { if(c.code !== "EL52216") allCodes.push(c.code); }));
                            passesCond = allCodes.every(c => courseStates[c] === 'completed');
                        }

                        if (passesCond) {
                            availableList.push({
                                ...course,
                                semIndex: semIndex,
                                dependents: countDependents(course.code)
                            });
                        }
                    }
                }
            });
        });

        availableList.sort((a, b) => {
            if (a.semIndex !== b.semIndex) return a.semIndex - b.semIndex;
            return b.dependents - a.dependents;
        });

        let selectedSuggestions = [];
        let currentSelectedUC = 0;

        for (let course of availableList) {
            let missingCoreqs = (course.coreqs || []).filter(req => courseStates[req] !== 'completed' && courseStates[req] !== 'enrolled' && !selectedSuggestions.some(s => s.code === req));
            let tempUC = course.uc;
            let extraCourses = [];

            for (let reqCode of missingCoreqs) {
                let reqObj = findCourseByCode(reqCode);
                if (reqObj) {
                    extraCourses.push(reqObj);
                    tempUC += reqObj.uc;
                }
            }

            if (currentSelectedUC + tempUC <= 18) {
                extraCourses.forEach(reqObj => {
                    selectedSuggestions.push(reqObj);
                    currentSelectedUC += reqObj.uc;
                });
                selectedSuggestions.push(course);
                currentSelectedUC += course.uc;
            }
        }

        totalUcBadge.innerText = `Total: ${currentSelectedUC} / 18 UC`;

        if (selectedSuggestions.length === 0) {
            container.innerHTML = `<p class="text-xs text-gray-500 dark:text-gray-400 m-0">¡No hay materias disponibles o ya has completado el pénsum!</p>`;
            return;
        }

        selectedSuggestions.forEach(course => {
            const chip = document.createElement('div');
            chip.className = 'bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg p-2.5 flex flex-col gap-1 min-w-[185px] flex-1';
            chip.innerHTML = `
                <div class="flex justify-between text-[10px] text-gray-400 font-mono">
                    <span>${course.code}</span>
                    <span class="text-cyan-500">${activePensum.semesters.find(s => s.courses.some(c => c.code === course.code)).semester}</span>
                </div>
                <div class="text-xs font-bold text-gray-800 dark:text-gray-200">${course.name}</div>
                <div class="flex justify-between text-[11px] mt-1 border-t border-gray-100 dark:border-gray-900 pt-1 text-gray-500">
                    <span class="text-amber-500 font-bold">${course.uc} UC</span>
                    <span class="text-emerald-500">🔑 Desbloquea ${countDependents(course.code)} mat.</span>
                </div>
            `;
            container.appendChild(chip);
        });
    }

    function toggleCourse(code) {
        const courseObj = findCourseByCode(code);
        if (!courseObj) return;

        let currentState = courseStates[code];

        if (!currentState || currentState === 'locked') {
            if (isCourseAvailable(courseObj)) {
                courseStates[code] = 'enrolled';
            } else {
                alert("🔒 Nodo Bloqueado: Faltan pre-requisitos previos.");
                return;
            }
        } else if (currentState === 'enrolled') {
            courseStates[code] = 'completed';
        } else if (currentState === 'completed') {
            delete courseStates[code];
        }

        localStorage.setItem(`unexpo_pensum_${careerKey}_states`, JSON.stringify(courseStates));
        renderTree();
    }

    function renderTree() {
        const container = document.getElementById('tree-container');
        if (!container) return;

        const existingSections = container.querySelectorAll('.tier-section');
        existingSections.forEach(s => s.remove());

        let totalUC = calculateTotalUC();
        let percent = Math.round((totalUC / activePensum.totalMaxUC) * 100);

        document.getElementById('stat-uc').innerText = `${totalUC} / ${activePensum.totalMaxUC}`;
        document.getElementById('stat-progress').innerText = `${percent}%`;

        activePensum.semesters.forEach(sem => {
            const section = document.createElement('div');
            section.className = 'tier-section bg-gray-50/50 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800 rounded-xl p-4 relative z-10';

            let semCompleted = sem.courses.filter(c => courseStates[c.code] === 'completed').length;

            const header = document.createElement('div');
            header.className = 'text-sm font-bold text-cyan-600 dark:text-cyan-400 mb-4 border-b border-dashed border-gray-200 dark:border-gray-800 pb-2 flex justify-between';
            header.innerHTML = `<span>${sem.semester}</span> <span>${semCompleted}/${sem.courses.length} Aprobadas</span>`;
            section.appendChild(header);

            const cluster = document.createElement('div');
            cluster.className = 'flex gap-4 justify-center flex-wrap';

            sem.courses.forEach(course => {
                const node = document.createElement('div');
                let state = courseStates[course.code];
                let available = isCourseAvailable(course);
                let statusClass = 'border-gray-700 bg-gray-900 opacity-35 grayscale';
                let statusText = 'Bloq';
                let iconText = '🔒';

                if (state === 'completed') {
                    statusClass = 'border-emerald-500 bg-emerald-950/60 shadow-[0_0_12px_rgba(16,185,129,0.5)] opacity-100';
                    statusText = 'Aprobada';
                    iconText = '✅';
                } else if (state === 'enrolled') {
                    statusClass = 'border-amber-500 bg-amber-950/60 shadow-[0_0_12px_rgba(245,158,11,0.5)] opacity-100';
                    statusText = 'Inscrita';
                    iconText = '📝';
                } else if (available) {
                    statusClass = 'border-blue-500 dark:border-cyan-400 bg-blue-900/40 dark:bg-cyan-950/40 shadow-[0_0_12px_rgba(6,182,212,0.4)] opacity-100';
                    statusText = 'Lista';
                    iconText = '🔓';
                }

                node.className = `skill-node w-[145px] h-[90px] rounded-lg border-2 flex flex-col justify-between cursor-pointer p-2.5 relative transition hover:scale-105 select-none ${statusClass}`;
                node.id = `node-${course.code}`;
                node.onclick = () => toggleCourse(course.code);

                node.innerHTML = `
                    <div class="flex justify-between items-center text-[10px] font-mono text-gray-400 font-bold">
                        <span>${course.code}</span>
                        <span>${iconText}</span>
                    </div>
                    <div class="text-[11px] font-bold leading-tight text-gray-100 line-clamp-2">${course.name}</div>
                    <div class="flex justify-between items-center text-[10px] border-t border-white/10 pt-1 text-gray-300">
                        <span class="text-amber-400 font-bold">${course.uc} UC</span>
                        <span>${statusText}</span>
                    </div>
                `;

                cluster.appendChild(node);
            });

            section.appendChild(cluster);
            container.appendChild(section);
        });

        updateSuggestions();
        setTimeout(drawConnections, 50);
    }

    function drawConnections() {
        const svg = document.getElementById('svg-connections');
        const treeContainer = document.getElementById('tree-container');
        if (!svg || !treeContainer) return;

        const containerRect = treeContainer.getBoundingClientRect();
        svg.setAttribute('width', containerRect.width);
        svg.setAttribute('height', containerRect.height);
        svg.innerHTML = '';

        activePensum.semesters.forEach(sem => {
            sem.courses.forEach(course => {
                if (course.prereqs && course.prereqs.length > 0) {
                    const targetNode = document.getElementById(`node-${course.code}`);
                    if (!targetNode) return;
                    const targetRect = targetNode.getBoundingClientRect();

                    course.prereqs.forEach(reqCode => {
                        const sourceNode = document.getElementById(`node-${reqCode}`);
                        if (!sourceNode) return;
                        const sourceRect = sourceNode.getBoundingClientRect();

                        const x1 = (sourceRect.left + sourceRect.width / 2) - containerRect.left;
                        const y1 = (sourceRect.top + sourceRect.height / 2) - containerRect.top;
                        const x2 = (targetRect.left + targetRect.width / 2) - containerRect.left;
                        const y2 = (targetRect.top + targetRect.height / 2) - containerRect.top;

                        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                        const cx = (x1 + x2) / 2;
                        const cy = (y1 + y2) / 2;
                        const d = `M ${x1} ${y1} Q ${cx} ${y1}, ${cx} ${cy} T ${x2} ${y2}`;
                        
                        path.setAttribute('d', d);
                        
                        let isSourceCompleted = courseStates[reqCode] === 'completed';
                        let isTargetActive = courseStates[course.code] === 'completed' || courseStates[course.code] === 'enrolled' || isCourseAvailable(course);

                        let strokeColor = '#334155';
                        let strokeWidth = '2';
                        
                        if (isSourceCompleted && isTargetActive) {
                            strokeColor = '#10b981';
                            strokeWidth = '3';
                        } else if (isSourceCompleted) {
                            strokeColor = '#3b82f6';
                            strokeWidth = '2.5';
                        }

                        path.setAttribute('stroke', strokeColor);
                        path.setAttribute('stroke-width', strokeWidth);
                        path.setAttribute('fill', 'none');
                        path.setAttribute('stroke-linecap', 'round');

                        svg.appendChild(path);
                    });
                }
            });
        });
    }

    renderTree();
}