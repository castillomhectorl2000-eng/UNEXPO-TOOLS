export default {
    name: "Ingeniería Eléctrica",
    faculty: "UNEXPO Barquisimeto",
    totalMaxUC: 168,
    semesters: [
        {
            semester: "Semestre I",
            courses: [
                { code: "EB1115", name: "CÁLCULO I", uc: 5, prereqs: [], coreqs: [] },
                { code: "EB3112", name: "DIBUJO I", uc: 2, prereqs: [], coreqs: [] },
                { code: "EB4121", name: "INGLÉS TÉCNICO I", uc: 1, prereqs: [], coreqs: [] },
                { code: "EB6113", name: "LENGUAJE Y REDACCIÓN", uc: 3, prereqs: [], coreqs: [] },
                { code: "EB6411", name: "ACTIVIDADES COMPLEMENTARIAS", uc: 1, prereqs: [], coreqs: [] },
                { code: "EB7113", name: "DESARRO. DE HABILI. DEL PENSAMIENTO", uc: 3, prereqs: [], coreqs: [] },
                { code: "IQ5113", name: "QUÍMICA GENERAL", uc: 3, prereqs: [], coreqs: [] }
            ]
        },
        {
            semester: "Semestre II",
            courses: [
                { code: "EB1125", name: "CALCULO II", uc: 5, prereqs: ["EB1115"], coreqs: [] },
                { code: "EB2115", name: "FISICA I", uc: 5, prereqs: [], coreqs: ["EB1125"] },
                { code: "EB3122", name: "DIBUJO II", uc: 2, prereqs: ["EB3112"], coreqs: [] },
                { code: "EB4131", name: "INGLES TECNICO II", uc: 1, prereqs: ["EB4121"], coreqs: [] },
                { code: "EB7123", name: "DESARRO. DE HABILI DEL PENSAMIENTO II", uc: 3, prereqs: ["EB7113"], coreqs: [] },
                { code: "EB7212", name: "LECTURA CRITICA", uc: 2, prereqs: ["EB7113"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre III",
            courses: [
                { code: "EB1134", name: "CALCULO III", uc: 4, prereqs: ["EB1125"], coreqs: ["EB1213"] },
                { code: "EB1213", name: "ALGEBRA LINEAL", uc: 3, prereqs: ["EB1115"], coreqs: [] },
                { code: "EB2124", name: "FISICA II", uc: 4, prereqs: ["EB2115", "EB1125"], coreqs: [] },
                { code: "EB2211", name: "LABORATORIO DE FISICA", uc: 1, prereqs: [], coreqs: ["EB2124"] },
                { code: "EB7133", name: "DESARRO. DE HABILI, DEL PENSAMIENTO III", uc: 3, prereqs: ["EB7123"], coreqs: [] },
                { code: "IE5114", name: "CIRCUITOS ELECTRICOS I", uc: 4, prereqs: ["EB1125"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre IV",
            courses: [
                { code: "EB1144", name: "CALCULO IV", uc: 4, prereqs: ["EB1134", "EB1213"], coreqs: [] },
                { code: "EB1312", name: "PROGRAMACION", uc: 2, prereqs: ["EB1125", "EB1213"], coreqs: [] },
                { code: "IE5124", name: "CIRCUITOS ELECTRICOS II", uc: 4, prereqs: ["IE5114"], coreqs: ["EB1144"] },
                { code: "IE5213", name: "ELECTROMETRIA", uc: 3, prereqs: ["IE5114"], coreqs: [] },
                { code: "IE5221", name: "LABORATORIO ELECTROMETRIA", uc: 1, prereqs: ["EB2211"], coreqs: ["IE5213"] },
                { code: "IE6112", name: "MÁQUINAS ELÉCTRICAS I", uc: 2, prereqs: ["IE5114"], coreqs: [] },
                { code: "EB6542", name: "INTROD. A LA ADMINISTRACION", uc: 2, prereqs: [], coreqs: [], customCond: "40 U.C. APROB." }
            ]
        },
        {
            semester: "Semestre V",
            courses: [
                { code: "EL1013", name: "ELECTRONICA ANALOGICA", uc: 3, prereqs: ["IE5114"], coreqs: [] },
                { code: "EL3013", name: "TEORIA DE CONTROL", uc: 3, prereqs: ["IE5114", "EB1144"], coreqs: [] },
                { code: "IE5131", name: "LABORATORIO CIRCUITOS ELÉCTRICOS", uc: 1, prereqs: ["IE5124", "IE5221"], coreqs: [] },
                { code: "IE5313", name: "TEORIA ELECTROMAGNETICA", uc: 3, prereqs: ["EB1144", "EB2124"], coreqs: [] },
                { code: "IE6122", name: "MAQUINAS ELECTRICAS II", uc: 2, prereqs: ["IE5124"], coreqs: ["IE6112"] },
                { code: "13043", name: "PROBABILIDAD Y ESTADÍSTICA", uc: 3, prereqs: ["EB1134", "EB1312"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre VI",
            courses: [
                { code: "113023", name: "INGENIERIA ECONOMICA", uc: 3, prereqs: ["EB1134"], coreqs: [] },
                { code: "EL1033", name: "CIRCUITOS DIGITALES I", uc: 3, prereqs: ["EL1013"], coreqs: [] },
                { code: "EL1041", name: "LAB. DE ELECTRONICA", uc: 1, prereqs: ["IE5131"], coreqs: ["EL1033"] },
                { code: "IE6134", name: "MAQUINAS ELECTRICAS III", uc: 4, prereqs: ["IE6122"], coreqs: [] },
                { code: "IE6214", name: "MATERIALES ELECTRICOS", uc: 4, prereqs: ["IE5313", "IE6122"], coreqs: [] },
                { code: "IE7113", name: "TRANSMISION ENERGIA ELECTRICA I", uc: 3, prereqs: ["IE5124"], coreqs: [] },
                { code: "IE7514", name: "INSTALACIONES ELECTRICAS I", uc: 4, prereqs: ["IE5124", "IE6122"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre VII",
            courses: [
                { code: "EL1054", name: "ELECTRONICA INDUSTRIAL", uc: 4, prereqs: ["EL1033"], coreqs: ["EL1041"] },
                { code: "IE6142", name: "LABORATORIO DE MAQ. ELECTRICAS", uc: 2, prereqs: ["IE6134", "IE5131"], coreqs: [] },
                { code: "IE7213", name: "ANALISIS SISTEMAS ELECT. DE POTEN. I", uc: 3, prereqs: ["IE7113", "IE6134"], coreqs: [] },
                { code: "IE7523", name: "INSTALACIONES ELECTRICAS II", uc: 3, prereqs: ["IE7514"], coreqs: [] },
                { code: "IE7613", name: "REDES ELECTRICAS", uc: 3, prereqs: ["IE7514"], coreqs: [] },
                { code: "EB6552", name: "ADMINISTRACIÓN DE EMPRESAS", uc: 2, prereqs: [], coreqs: [], customCond: "60 U.C. APROB." }
            ]
        },
        {
            semester: "Semestre VIII",
            courses: [
                { code: "II1043", name: "GESTIÓN DE MANTENIMIENTO", uc: 3, prereqs: ["13043"], coreqs: [] },
                { code: "IE6314", name: "CONTROLES ELECTRICOS", uc: 4, prereqs: ["IE6142"], coreqs: [] },
                { code: "IE7313", name: "PROTEC. DE SIST. ELECT. DE POTENCIA", uc: 3, prereqs: ["IE7213"], coreqs: [] },
                { code: "IE8212", name: "TRABAJO ESPECIAL I", uc: 2, prereqs: ["IE7213", "IE7613"], coreqs: [] },
                { code: "ELEC_P1", name: "ELECTIVA PROFESIONAL 1", uc: 3, prereqs: [], coreqs: [] },
                { code: "ELEC_P2", name: "ELECTIVA PROF. Ó PRODUCCIÓN 2", uc: 3, prereqs: [], coreqs: [] }
            ]
        },
        {
            semester: "Semestre IX",
            courses: [
                { code: "IE7321", name: "LAB. PROTEC. SIST. DE POTEN.", uc: 1, prereqs: ["IE7313"], coreqs: [] }
            ]
        }
    ]
};