export default {
    name: "Ingeniería Industrial",
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
                { code: "EB7113", name: "DESARRO. DE HABILI. DEL PENSAMIENTO", uc: 3, prereqs: [], coreqs: [] },
                { code: "IQ5113", name: "QUIMICA GENERAL", uc: 3, prereqs: [], coreqs: [] }
            ]
        },
        {
            semester: "Semestre II",
            courses: [
                { code: "EB1125", name: "CALCULO II", uc: 6, prereqs: ["EB1115"], coreqs: [] },
                { code: "EB2115", name: "FISICA I", uc: 6, prereqs: [], coreqs: ["EB1125"] },
                { code: "EB3122", name: "DIBUJO II", uc: 2, prereqs: ["EB3112"], coreqs: [] },
                { code: "EB4131", name: "INGLÉS TÉCNICO II", uc: 1, prereqs: ["EB4121"], coreqs: [] },
                { code: "EB7123", name: "DESARRO. DE HABILI, DEL PENSAMIENTO II", uc: 3, prereqs: ["EB7113"], coreqs: [] },
                { code: "EB7212", name: "LECTURA CRITICA", uc: 2, prereqs: ["EB7113"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre III",
            courses: [
                { code: "EB1134", name: "CALCULO III", uc: 4, prereqs: ["EB1125"], coreqs: ["EB1213"] },
                { code: "EB1213", name: "ALGEBRA LINEAL", uc: 3, prereqs: ["EB1115"], coreqs: [] },
                { code: "EB2124", name: "FÍSICA II", uc: 4, prereqs: ["EB2115", "EB1125"], coreqs: [] },
                { code: "EB2211", name: "LABORATORIO DE FÍSICA", uc: 1, prereqs: ["EB1125"], coreqs: ["EB2124"] },
                { code: "EB7133", name: "DESARRO. DE HABILI. DEL PENSAMIENTO III", uc: 3, prereqs: ["EB7123"], coreqs: [] },
                { code: "112311", name: "INICIACIÓN PROFESIONAL", uc: 1, prereqs: [], coreqs: [], customCond: "30 U.C. APROB." },
                { code: "IM1022", name: "DIBUJO DE MAQUINA", uc: 2, prereqs: ["EB3122"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre IV",
            courses: [
                { code: "EB1154", name: "MATEMATICAS ESPECIALES", uc: 4, prereqs: ["EB1134", "EB1213"], coreqs: [] },
                { code: "EB1312", name: "PROGRAMACIÓN", uc: 2, prereqs: ["EB1125", "EB1213"], coreqs: [] },
                { code: "IM1043", name: "MECANICA APLICADA", uc: 3, prereqs: ["EB1213", "EB3122"], coreqs: [] },
                { code: "IQ4063", name: "TERMIDINAMICA", uc: 3, prereqs: ["EB1134", "IQ5113"], coreqs: [] },
                { code: "IQ4093", name: "INGENIERÍA QUÍMICA", uc: 3, prereqs: ["EB1134", "IQ5113"], coreqs: [] },
                { code: "EB6542", name: "INTRODUCCIÓN A LA ADMINISTRACIÓN", uc: 2, prereqs: [], coreqs: [], customCond: "40 U.C. APROB." }
            ]
        },
        {
            semester: "Semestre V",
            courses: [
                { code: "IQ4073", name: "Fenómenos de Transporte", uc: 3, prereqs: ["IQ4063", "IQ4093"], coreqs: [] },
                { code: "112322", name: "PLANTAS INDUSTRIALES Y MAN. DE MATERIALES", uc: 2, prereqs: ["112311"], coreqs: [] },
                { code: "IE5014", name: "FUNDAMENTOS DE INGENIERÍA ELÉCTRICA", uc: 4, prereqs: ["EB2211", "EB1134"], coreqs: [] },
                { code: "EB6552", name: "ADMINISTRACIÓN DE EMPRESAS", uc: 2, prereqs: [], coreqs: [], customCond: "60 U.C. APROB." },
                { code: "IM1054", name: "RESISTENCIA Y ENSAYO DE MATERIALES", uc: 4, prereqs: ["IM1043"], coreqs: [] },
                { code: "113114", name: "ESTADISTICA INDUSTRIAL", uc: 4, prereqs: ["EB1154", "EB1312"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre VI",
            courses: [
                { code: "IM1063", name: "ELEMENTOS DE MAQUINA", uc: 3, prereqs: ["IM1022", "IM1054"], coreqs: [] },
                { code: "IM2014", name: "TECNOLOGIA DE FABRICACION I", uc: 4, prereqs: ["IM1054"], coreqs: [] },
                { code: "IQ4003", name: "TRANFERENCIA DE CALOR", uc: 3, prereqs: ["IQ4073"], coreqs: [] },
                { code: "112113", name: "INGENERIA DEL TRABAJO", uc: 3, prereqs: ["112322", "113114"], coreqs: [] },
                { code: "112121", name: "LABORATORIO DE INGENIERÍA DEL TRABAJO", uc: 1, prereqs: [], coreqs: ["112113"] },
                { code: "MT1015", name: "TECNOLOGIA DE MATERIALES", uc: 5, prereqs: ["IM1054"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre VII",
            courses: [
                { code: "IQ4031", name: "LAB. DE FENOMENO DE TRANPORTE", uc: 1, prereqs: ["IQ4003"], coreqs: [] },
                { code: "EL3034", name: "INSTRUMENTACION Y CONTROL", uc: 4, prereqs: ["IE5014"], coreqs: [] },
                { code: "111114", name: "INVESTIGACIÓN DE OPERACIONES I", uc: 4, prereqs: ["112113"], coreqs: [] },
                { code: "111213", name: "CONTROL DE CALIDAD", uc: 3, prereqs: ["113114"], coreqs: [] },
                { code: "111313", name: "PLANIFICACIÓN Y CONTROL DE LA PRODUCCIÓN", uc: 3, prereqs: ["112113"], coreqs: [] },
                { code: "113214", name: "INGENIERIA DE COSTO", uc: 4, prereqs: ["112113"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre VIII",
            courses: [
                { code: "113223", name: "INGENIERIA ECONONICA", uc: 3, prereqs: ["113214"], coreqs: [] },
                { code: "111123", name: "INVESTIGACIÓN DE OPERACIONES II", uc: 3, prereqs: ["111114"], coreqs: [] },
                { code: "111323", name: "MANTENIMIENTO INDUSTRIAL", uc: 3, prereqs: ["111114"], coreqs: [] },
                { code: "111332", name: "TRABAJO ESPECIAL I", uc: 2, prereqs: ["111313", "111213"], coreqs: [] },
                { code: "112213", name: "HIGIENE Y SEGURIDAD INDUSTRIAL", uc: 3, prereqs: ["112113"], coreqs: [] },
                { code: "ELEC_P1", name: "ELECTIVA PROFESIONAL 1", uc: 3, prereqs: [], coreqs: [] }
            ]
        },
        {
            semester: "Semestre IX",
            courses: [
                { code: "111393", name: "TRABAJO ESPECIAL II", uc: 3, prereqs: ["111332"], coreqs: [] },
                { code: "112333", name: "INSTALACIONES INDUSTRIALES", uc: 3, prereqs: ["111323"], coreqs: [] },
                { code: "113263", name: "TEORIA DE DECISIONES", uc: 3, prereqs: ["113223"], coreqs: [] },
                { code: "113243", name: "PROYECTOS INDUSTRIALES", uc: 3, prereqs: ["113223"], coreqs: [] },
                { code: "113313", name: "GERENCIA DE RECURSOS HUMANOS", uc: 3, prereqs: ["111332"], coreqs: [] },
                { code: "ELEC_P2", name: "ELECTIVA PROFESIONAL 2", uc: 3, prereqs: [], coreqs: [] }
            ]
        },
        {
            semester: "Semestre X",
            courses: [
                { code: "124216", name: "ENTRENAMIENTO INDUSTRIAL", uc: 16, prereqs: [], coreqs: [], customCond: "APROBAR TODO" }
            ]
        }
    ]
};