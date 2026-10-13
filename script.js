document.addEventListener("DOMContentLoaded", () => {
    inicializarTema();
    cargarCarreraSeleccionada();
});

/* Lógica del Modo Oscuro / Claro */
function inicializarTema() {
    const temaGuardado = localStorage.getItem('unesr_theme') || 'light';
    document.documentElement.setAttribute('data-theme', temaGuardado);
    actualizarBotonTema(temaGuardado);
}

function toggleTheme() {
    const temaActual = document.documentElement.getAttribute('data-theme') || 'light';
    const nuevoTema = temaActual === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', nuevoTema);
    
    // Sincroniza con la clase dark de Tailwind
    if (nuevoTema === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    localStorage.setItem('unesr_theme', nuevoTema);
    actualizarBotonTema(nuevoTema);
}
function actualizarBotonTema(tema) {
    const icon = document.getElementById('themeIcon');
    const text = document.getElementById('themeText');
    if (tema === 'dark') {
        icon.textContent = '☀️';
        text.textContent = 'Modo Claro';
    } else {
        icon.textContent = '🌙';
        text.textContent = 'Modo Oscuro';
    }
}

function cambiarCarrera() {
    cargarCarreraSeleccionada();
}

async function cargarCarreraSeleccionada() {
    const select = document.getElementById('careerSelect');
    const carreraKey = select.value;
    const contenedor = document.getElementById('pensumContent');
    
    contenedor.innerHTML = "<p style='text-align:center;'>Cargando pensum...</p>";

    try {
        const response = await fetch(`pensums/${carreraKey}.txt`);
        
        if (!response.ok) {
            throw new Error(`No se pudo cargar el archivo pensums/${carreraKey}.txt`);
        }

        const dataText = await response.text();
        const materias = procesarTxt(dataText);

        renderizarPensum(materias, carreraKey);
        cargarProgresoGuardado(carreraKey);
        actualizarEstadosYProgreso();

    } catch (error) {
        console.error(error);
        contenedor.innerHTML = `
            <div style="text-align:center; padding: 2rem; color: #ef4444;">
                <p><strong>Error al cargar el pensum.</strong></p>
                <small>Asegúrate de que existe el archivo <code>pensums/${carreraKey}.txt</code> en tu carpeta.</small>
            </div>`;
    }
}

function procesarTxt(txt) {
    const lineas = txt.split('\n');
    const materias = [];

    lineas.forEach(linea => {
        const limpia = linea.trim();
        if (limpia !== "" && !limpia.startsWith('#')) {
            const partes = limpia.split(',').map(p => p.trim());
            if (partes.length >= 5) {
                materias.push({
                    codigo: partes[0],
                    nombre: partes[1],
                    uc: parseInt(partes[2]) || 0,
                    prelacion: partes[3],
                    tipo: partes[4]
                });
            }
        }
    });

    return materias;
}

function renderizarPensum(materias, carreraKey) {
    const contenedor = document.getElementById('pensumContent');
    contenedor.innerHTML = "";

    if (materias.length === 0) {
        contenedor.innerHTML = "<p style='text-align:center;'>No hay materias registradas en este pensum.</p>";
        return;
    }

    const grid = document.createElement('div');
    grid.className = "subjects-grid";

    materias.forEach((mat) => {
        const card = document.createElement('div');
        card.className = "subject-card";
        card.setAttribute('data-id', `${carreraKey}_${mat.codigo}`);
        card.setAttribute('data-codigo', mat.codigo);
        card.setAttribute('data-uc', mat.uc);
        card.setAttribute('data-tipo', mat.tipo);
        card.setAttribute('data-prelacion', mat.prelacion);
        
        card.onclick = function() { intentarTacharMateria(this); };

        const badgeTipoClass = getTipoClass(mat.tipo);

        card.innerHTML = `
            <div class="card-header">
                <span class="subject-code">${mat.codigo}</span>
                <span class="subject-tag ${badgeTipoClass}">${mat.tipo}</span>
            </div>
            <h3>${mat.nombre}</h3>
            <div class="card-details">
                <span class="creditos">UC: ${mat.uc}</span>
                <span class="prelacion">Prelación: ${mat.prelacion}</span>
            </div>
            <div class="lock-indicator"></div>
        `;

        grid.appendChild(card);
    });

    contenedor.appendChild(grid);
}

function getTipoClass(tipo) {
    const t = tipo.toUpperCase();
    if (t.includes('INTRODUCTORIO')) return 'tag-intro';
    if (t.includes('GENERAL')) return 'tag-general';
    if (t.includes('PROFESIONAL')) return 'tag-pro';
    if (t.includes('ELECTIVA')) return 'tag-elective';
    return 'tag-default';
}

function intentarTacharMateria(card) {
    // Si la materia está bloqueada visualmente, no permitimos hacer nada
    if (card.classList.contains("locked")) {
        const prelacionStr = card.getAttribute('data-prelacion');
        alert(`🔒 Esta materia está bloqueada. Debes aprobar primero su prelación: [ ${prelacionStr} ]`);
        return;
    }

    const isApproved = card.classList.contains("approved");

    if (isApproved) {
        const codigoActual = card.getAttribute('data-codigo');
        if (tieneDependientesAprobados(codigoActual)) {
            alert("No puedes desmarcar esta materia porque ya aprobaste otra materia que depende de ella como prelación.");
            return;
        }
        card.classList.remove("approved");
    } else {
        card.classList.add("approved");
    }

    guardarProgreso();
    actualizarEstadosYProgreso();
}

function actualizarEstadosYProgreso() {
    evaluarBloqueosVisuales();
    actualizarBarraProgreso();
}

// Evalúa dinámicamente qué materias deben mostrarse bloqueadas u operativas
function evaluarBloqueosVisuales() {
    const cards = document.querySelectorAll('.subject-card');
    
    cards.forEach(card => {
        const isApproved = card.classList.contains('approved');
        if (isApproved) {
            // Si ya está aprobada, nunca está bloqueada
            card.classList.remove('locked');
            const indicator = card.querySelector('.lock-indicator');
            if (indicator) indicator.innerHTML = '';
            return;
        }

        const prelacionStr = card.getAttribute('data-prelacion');
        
        // Si no tiene prelación o dice "Ninguna", está libre
        if (!prelacionStr || prelacionStr.toLowerCase() === "ninguna" || prelacionStr.trim() === "") {
            card.classList.remove('locked');
            const indicator = card.querySelector('.lock-indicator');
            if (indicator) indicator.innerHTML = '';
        } else {
            // Comprobamos si cumple la prelación
            if (!cumplePrelacion(prelacionStr)) {
                card.classList.add('locked');
                const indicator = card.querySelector('.lock-indicator');
                if (indicator) {
                    indicator.innerHTML = `<span class="lock-badge">🔒 Bloqueada (Req: ${prelacionStr})</span>`;
                }
            } else {
                card.classList.remove('locked');
                const indicator = card.querySelector('.lock-indicator');
                if (indicator) indicator.innerHTML = '';
            }
        }
    });
}

function cumplePrelacion(prelacionStr) {
    const aprobadas = document.querySelectorAll('.subject-card.approved');
    const codigosAprobados = Array.from(aprobadas).map(c => c.getAttribute('data-codigo').toLowerCase());
    
    const requisitos = prelacionStr.split(/[,;]/).map(r => r.trim().toLowerCase());

    for (let req of requisitos) {
        let cumplida = false;
        aprobadas.forEach(card => {
            const cod = card.getAttribute('data-codigo').toLowerCase();
            const nom = card.querySelector('h3').textContent.toLowerCase();
            if (cod === req || nom.includes(req)) {
                cumplida = true;
            }
        });
        if (!cumplida && !codigosAprobados.includes(req) && !cumplidaSiEsNecesario(req, codigosAprobados)) {
            return false;
        }
    }
    return true;
}

function cumplidaSiEsNecesario(req, codigosAprobados) {
    return codigosAprobados.some(c => req.includes(c) || c.includes(req));
}

function tieneDependientesAprobados(codigoActual) {
    let dependienteAprobado = false;
    document.querySelectorAll('.subject-card').forEach(card => {
        if (card.classList.contains('approved')) {
            const prelacion = card.getAttribute('data-prelacion').toLowerCase();
            if (prelacion.includes(codigoActual.toLowerCase())) {
                dependienteAprobado = true;
            }
        }
    });
    return dependienteAprobado;
}

function actualizarBarraProgreso() {
    const cards = document.querySelectorAll('.subject-card');
    let totalFijasUC = 0;
    let aprobadasFijasUC = 0;
    let totalElectivasUCDisponibles = 0;
    let aprobadasElectivasUC = 0;

    cards.forEach(card => {
        const uc = parseInt(card.getAttribute('data-uc')) || 0;
        const tipo = card.getAttribute('data-tipo').toUpperCase();
        const isApproved = card.classList.contains('approved');

        if (tipo.includes('ELECTIVA')) {
            totalElectivasUCDisponibles += uc;
            if (isApproved) {
                aprobadasElectivasUC += uc;
            }
        } else {
            totalFijasUC += uc;
            if (isApproved) {
                aprobadasFijasUC += uc;
            }
        }
    });

    // 1. Cálculo barra Fijas
    const porcentajeFijas = totalFijasUC > 0 ? Math.min(100, Math.round((aprobadasFijasUC / totalFijasUC) * 100)) : 0;
    
    // 2. Cálculo barra Electivas (Meta estricta de 23 UC)
    const objetivoElectivasUC = 23;
    const electivasValidas = Math.min(aprobadasElectivasUC, objetivoElectivasUC);
    const porcentajeElectivas = Math.min(100, Math.round((electivasValidas / objetivoElectivasUC) * 100));

    // Elementos en el HTML
    const textFijas = document.getElementById('progressTextFijas');
    const fillFijas = document.getElementById('progressFillFijas');
    const textElectivas = document.getElementById('progressTextElectivas');
    const fillElectivas = document.getElementById('progressFillElectivas');

    if (textFijas) {
        textFijas.textContent = `${porcentajeFijas}% (${aprobadasFijasUC} de ${totalFijasUC} UC)`;
    }
    if (fillFijas) {
        fillFijas.style.width = porcentajeFijas + '%';
    }

    if (textElectivas) {
        textElectivas.textContent = `${porcentajeElectivas}% (${aprobadasElectivasUC} de ${objetivoElectivasUC} UC)`;
    }
    if (fillElectivas) {
        fillElectivas.style.width = porcentajeElectivas + '%';
    }
}
function guardarProgreso() {
    const carreraKey = document.getElementById('careerSelect').value;
    const estados = {};
    document.querySelectorAll('.subject-card').forEach(card => {
        let id = card.getAttribute('data-id');
        estados[id] = card.classList.contains('approved');
    });
    localStorage.setItem(`unesr_progreso_${carreraKey}`, JSON.stringify(estados));
}

function cargarProgresoGuardado(carreraKey) {
    const guardado = localStorage.getItem(`unesr_progreso_${carreraKey}`);
    if (guardado) {
        const estados = JSON.parse(guardado);
        document.querySelectorAll('.subject-card').forEach(card => {
            let id = card.getAttribute('data-id');
            if (estados[id]) {
                card.classList.add('approved');
            }
        });
    }
}