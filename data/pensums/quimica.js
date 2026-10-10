export default {
    name: "Ingeniería Química",
    faculty: "UNEXPO Barquisimeto",
    totalMaxUC: 172,
    semesters: [
        {
            semester: "Semestre I",
            courses: [
                { code: "EB1115", name: "CALCULO I", uc: 5, prereqs: [], coreqs: [] },
                { code: "EB3112", name: "DIBUJO I", uc: 2, prereqs: [], coreqs: [] },
                { code: "EB4121", name: "INGLÉS TÉCNICO I", uc: 1, prereqs: [], coreqs: [] },
                { code: "EB6113", name: "LENGUAJE Y REDACCIÓN", uc: 3, prereqs: [], coreqs: [] },
                { code: "EB6411", name: "ACTIVIDADES COMPLEMENTARIAS", uc: 1, prereqs: [], coreqs: [] },
                { code: "EB7113", name: "DESARRO. DE HABILI. DEL PENSAMIENTO I", uc: 3, prereqs: [], coreqs: [] },
                { code: "IQ5113", name: "QUIMICA GENERAL", uc: 3, prereqs: [], coreqs: [] }
            ]
        },
        {
            semester: "Semestre II",
            courses: [
                { code: "EB1125", name: "CALCULO II", uc: 5, prereqs: ["EB1115"], coreqs: [] },
                { code: "EB2115", name: "FISICA I", uc: 5, prereqs: [], coreqs: ["EB1125"] },
                { code: "EB3122", name: "DIBUJO II", uc: 2, prereqs: ["EB3112"], coreqs: [] },
                { code: "EB4131", name: "INGLÉS TÉCNICO II", uc: 1, prereqs: ["EB4121"], coreqs: [] },
                { code: "EB7123", name: "DESARRO. DE HABILI. DEL PENSAMIENTO II", uc: 3, prereqs: ["EB7113"], coreqs: [] },
                { code: "EB7212", name: "LECTURA CRITICA", uc: 2, prereqs: ["EB7113"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre III",
            courses: [
                { code: "EB1134", name: "CALCULO III", uc: 4, prereqs: ["EB1125"], coreqs: ["EB1213"] },
                { code: "EB1213", name: "ALGEBRA LINEAL", uc: 3, prereqs: ["EB1115"], coreqs: [] },
                { code: "EB2124", name: "FISICA II", uc: 4, prereqs: ["EB2115", "EB1125"], coreqs: [] },
                { code: "EB7133", name: "DESARRO. DE HABILI DEL PENSAMIENTO III", uc: 3, prereqs: ["EB7123"], coreqs: [] },
                { code: "IQ3121", name: "LAB. DE QUIMICA GENERAL", uc: 1, prereqs: [], coreqs: ["IQ3213"] },
                { code: "IQ3213", name: "QUIMICA ANALITICA", uc: 3, prereqs: ["IQ5113", "EB1125"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre IV",
            courses: [
                { code: "EB1154", name: "MATEMATICAS ESPECIALES", uc: 4, prereqs: ["EB1134", "EB1213"], coreqs: [] },
                { code: "EB1312", name: "PROGRAMACIÓN", uc: 2, prereqs: ["EB1213", "EB1125"], coreqs: [] },
                { code: "EB2211", name: "LABORATORIO DE FISICA", uc: 1, prereqs: [], coreqs: ["EB2124"] },
                { code: "IQ3113", name: "ELEMENTOS DE FISICO-QUIMICA", uc: 3, prereqs: ["EB1125", "IQ5113"], coreqs: [] },
                { code: "IQ3222", name: "LAB. DE QUIMICA ANALÍTICA", uc: 2, prereqs: ["IQ3213", "IQ3121"], coreqs: [] },
                { code: "IQ4113", name: "PRINCIPIOS DE INGENIERIA QUIMICA", uc: 3, prereqs: ["EB1134", "IQ3213"], coreqs: ["IQ3113"] }
            ]
        },
        {
            semester: "Semestre V",
            courses: [
                { code: "EB6542", name: "INTRODUCCIÓN A LA ADMINISTRACIÓN", uc: 2, prereqs: [], coreqs: [], customCond: "40 U.C. AROB." },
                { code: "IE5014", name: "FUNDAMENTOS DE INGENIERÍA ELÉCTRICA", uc: 4, prereqs: ["EB2211", "EB1134"], coreqs: [] },
                { code: "IM1013", name: "FUNDAMENTOS DE RESISTENCIA DE MATERIALES", uc: 3, prereqs: ["EB2211", "EB1134"], coreqs: [] },
                { code: "IQ3313", name: "QUIMICA ORGANICA I", uc: 3, prereqs: ["IQ3113", "IQ3213"], coreqs: [] },
                { code: "IQ4213", name: "TERMODINANICA I", uc: 3, prereqs: ["IQ4113"], coreqs: [] },
                { code: "IQ4313", name: "FENOMENOS DE TRANSPORTE I", uc: 3, prereqs: [], coreqs: ["IQ4213"] }
            ]
        },
        {
            semester: "Semestre VI",
            courses: [
                { code: "EB6552", name: "ADMINISTRACION DE EMPRESAS", uc: 2, prereqs: [], coreqs: [], customCond: "60 U.C. APROB." },
                { code: "113023", name: "INGENIERIA ECONÓMICA", uc: 3, prereqs: ["EB1134"], coreqs: [] },
                { code: "113043", name: "PROBABILIDAD Y ESTADÍSTICA", uc: 3, prereqs: ["EB1134", "EB1312"], coreqs: [] },
                { code: "IQ3233", name: "ANALISIS INSTRUMENTAL", uc: 3, prereqs: ["EB2211"], coreqs: ["IQ3323"] },
                { code: "IQ3323", name: "QUÍMICA ORGANICA II", uc: 3, prereqs: ["IQ3313", "IQ3222"], coreqs: [] },
                { code: "IQ4224", name: "TERMODINAMICA II", uc: 4, prereqs: ["IQ4213", "EB1154"], coreqs: [] },
                { code: "IQ4334", name: "FENOMENOS DE TRANSPORTE II", uc: 4, prereqs: ["IQ4313"], coreqs: ["IQ4224"] }
            ]
        },
        {
            semester: "Semestre VII",
            courses: [
                { code: "111053", name: "CONTROL DE CALIDAD", uc: 3, prereqs: ["113043"], coreqs: [] },
                { code: "IQ3241", name: "LAB. DE ANALISIS INTRUMENTAL", uc: 1, prereqs: ["IQ3233"], coreqs: [] },
                { code: "IQ3332", name: "LAB. DE QUIMICA ORGANICA", uc: 2, prereqs: ["IQ3323"], coreqs: ["IQ3241"] },
                { code: "IQ3413", name: "CINETICA QUIMICA", uc: 3, prereqs: ["IQ3323", "IQ4334"], coreqs: [] },
                { code: "IQ4331", name: "LAB. DE FENOMENOS DE TRANSPORTE", uc: 1, prereqs: ["IQ4334"], coreqs: [] },
                { code: "IQ4414", name: "OPERACIONES UNITARIAS I", uc: 4, prereqs: ["IQ4334", "IQ4224"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre VIII",
            courses: [
                { code: "EL3034", name: "INTRUMENTACION Y CONTROL", uc: 4, prereqs: ["IE5014", "IQ4331"], coreqs: [] },
                { code: "111033", name: "PLANIFICACIÓN Y CONTROL DE LA PRODUCCCIÓN", uc: 3, prereqs: ["113043"], coreqs: [] },
                { code: "IQ3421", name: "LAB. DE TERMODINÁMICA Y CINÉTICA", uc: 1, prereqs: ["IQ3413", "IQ4224"], coreqs: [] },
                { code: "IQ4424", name: "OPERACIONES UNITARIAS II", uc: 4, prereqs: ["IQ4414"], coreqs: [] },
                { code: "IQ4513", name: "REACTORES QUÍMICOS", uc: 3, prereqs: ["IQ3413", "IQ4224"], coreqs: [] },
                { code: "IQ4532", name: "TRABAJO ESPECIAL I", uc: 2, prereqs: ["IQ3241", "IQ4414"], coreqs: [] },
                { code: "ELEC_P1", name: "ELECTIVA PROFESIONAL 1", uc: 3, prereqs: [], coreqs: [] }
            ]
        },
        {
            semester: "Semestre IX",
            courses: [
                { code: "IQ4432", name: "LAB. DE OPERACIONES UNITARIAS", uc: 2, prereqs: ["IQ4424", "IQ4331"], coreqs: [] },
                { code: "IQ4523", name: "INGENIERIA DE PROCESOS", uc: 3, prereqs: ["IQ4513", "IQ4414"], coreqs: [] },
                { code: "IQ4543", name: "TRABAJO ESPECIAL II", uc: 3, prereqs: ["IQ4532"], coreqs: ["IQ4432"] },
                { code: "ELEC_P2", name: "ELECTIVA PROFESIONAL 2", uc: 3, prereqs: [], coreqs: [] },
                { code: "ELEC_P3", name: "ELECTIVA PROFESIONAL 3", uc: 3, prereqs: [], coreqs: [] }
            ]
        },
        {
            semester: "Semestre X",
            courses: [
                { code: "IQ47216", name: "ENTRENAMIENTO INDUSTRIAL", uc: 16, prereqs: [], coreqs: [], customCond: "APROBAR TODO" }
            ]
        }
    ]
};