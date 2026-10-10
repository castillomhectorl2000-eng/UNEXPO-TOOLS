export default {
    name: "Ingeniería Metalúrgica",
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
                { code: "EB7113", name: "DESARRO. DE HABILI DEL PENSAMIENTO", uc: 3, prereqs: [], coreqs: [] },
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
                { code: "EB7212", name: "LECTURA CRITICA", uc: 2, prereqs: ["EB7113"], coreqs: [] },
                { code: "EB7123", name: "DESARRO DE HABILI. DEL PENSAMIENTO II", uc: 3, prereqs: ["EB7113"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre III",
            courses: [
                { code: "EB1134", name: "CALCULO III", uc: 4, prereqs: ["EB1125"], coreqs: ["EB1213"] },
                { code: "EB1213", name: "ALGEBRA LINEAL", uc: 3, prereqs: ["EB1115"], coreqs: [] },
                { code: "EB2124", name: "FISICA II", uc: 4, prereqs: ["EB2115", "EB1125"], coreqs: [] },
                { code: "EB2211", name: "LABORATORIO DE FÍSICA", uc: 1, prereqs: ["EB1125"], coreqs: ["EB2124"] },
                { code: "EB7133", name: "DESARRO, DE HABILI DEL PENSAMIENTO III", uc: 3, prereqs: ["EB7123"], coreqs: [] },
                { code: "MT2103", name: "FISICO-QUIMICA", uc: 3, prereqs: ["IQ5113", "EB1125"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre IV",
            courses: [
                { code: "EB1154", name: "MATEMATICAS ESPECIALES", uc: 4, prereqs: ["EB1134", "EB1213"], coreqs: [] },
                { code: "EB1312", name: "PROGRAMACIÓN", uc: 2, prereqs: ["EB1125", "EB1213"], coreqs: [] },
                { code: "EB6542", name: "INTRODUCCIÓN A LA ADMINISTRACIÓN", uc: 2, prereqs: [], coreqs: [], customCond: "40 U.C. APROB." },
                { code: "IM1043", name: "MECANICA APLICADA", uc: 3, prereqs: ["EB1213", "EB3122"], coreqs: [] },
                { code: "IQ3022", name: "ANÁLISIS QUÍMICO METALURGICO", uc: 2, prereqs: ["MT2103"], coreqs: [] },
                { code: "MT2133", name: "PROCESOS METALURGICOS", uc: 3, prereqs: ["MT2103", "EB2124"], coreqs: [] },
                { code: "MT2143", name: "TERMODINAMICA METALURGICA", uc: 3, prereqs: ["EB1134", "MT2103"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre V",
            courses: [
                { code: "IE5014", name: "FUNDAMENTOS DE ING., ELÉCTRICA", uc: 4, prereqs: ["EB2211", "EB1134"], coreqs: [] },
                { code: "113043", name: "PROBABILIDAD Y ESTADÍSTICA", uc: 4, prereqs: ["EB1134", "EB1312"], coreqs: [] },
                { code: "IM1054", name: "RESISTENCIA Y ENSAYO DE MATERIALES", uc: 4, prereqs: ["IM1043"], coreqs: [] },
                { code: "IQ4013", name: "FENÓMENOS DE TRANSPORTE I", uc: 4, prereqs: ["MT2143", "EB1154"], coreqs: [] },
                { code: "MT1134", name: "METALURGIA FÍSICA I", uc: 5, prereqs: ["EB1154", "MT2143"], coreqs: [] },
                { code: "MT2212", name: "METALURGIA EXTRACTIVA I", uc: 2, prereqs: ["MT2133"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre VI",
            courses: [
                { code: "EB6552", name: "ADMINISTRACIÓN DE EMPRESAS", uc: 2, prereqs: [], coreqs: [], customCond: "60 UC. APROB." },
                { code: "113023", name: "INGENIERÍA ECONÓMICA", uc: 3, prereqs: ["EB1134"], coreqs: [] },
                { code: "IM2014", name: "TECNOLOGIA DE FABRICACION I", uc: 4, prereqs: ["IM1054"], coreqs: [] },
                { code: "IQ4034", name: "FENOMENOS DE TRANSPORTE II", uc: 4, prereqs: ["IQ4013"], coreqs: [] },
                { code: "MT1144", name: "METALURGIA FÍSICA II", uc: 4, prereqs: ["MT1134"], coreqs: [] },
                { code: "MT2222", name: "METALURGIA EXTRACTIVA II", uc: 2, prereqs: ["MT2212", "IQ4013"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre VII",
            courses: [
                { code: "111053", name: "CONTROL DE CALIDAD", uc: 3, prereqs: ["113043"], coreqs: [] },
                { code: "IM2054", name: "TECNOLOGÍA DE FABRICACIÓN II", uc: 4, prereqs: ["IM2014"], coreqs: [] },
                { code: "IQ4031", name: "LAB. DE FEN. DE TRANSPORTE", uc: 1, prereqs: ["IQ4034"], coreqs: [] },
                { code: "MT1313", name: "TRATAMIENTOS TÉRMICOS", uc: 3, prereqs: ["MT1144", "IQ4034"], coreqs: [] },
                { code: "MT2231", name: "LAB. DE METALURGIA EXTRACTIVA", uc: 1, prereqs: ["MT2222", "IQ3022"], coreqs: [] },
                { code: "MT4213", name: "FUNDICIÓN", uc: 3, prereqs: ["IQ4034", "MT1144"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre VIII",
            courses: [
                { code: "MT2323", name: "CORROSION", uc: 3, prereqs: ["MT1144"], coreqs: [] },
                { code: "MT3112", name: "METALURGIA MECÁNICA I", uc: 2, prereqs: ["MT1144", "IM1054"], coreqs: [] },
                { code: "MT4123", name: "INGENIERÍA DE LA SOLDADURA", uc: 3, prereqs: ["MT4213", "IE5014"], coreqs: [] },
                { code: "MT4234", name: "SIDERURGIA", uc: 4, prereqs: ["MT2222", "IQ4034"], coreqs: [] },
                { code: "MT5112", name: "TRABAJO ESPECIAL I", uc: 2, prereqs: ["MT4213", "MT1313", "MT2231"], coreqs: [] },
                { code: "ELEC_P1", name: "ELECTIVA PROFESIONAL 1", uc: 3, prereqs: [], coreqs: [] }
            ]
        },
        {
            semester: "Semestre IX",
            courses: [
                { code: "MT1223", name: "ENSAYOS NO DESTRUCTIVOS", uc: 3, prereqs: ["MT4123"], coreqs: [] },
                { code: "MT3132", name: "METALURGIA MECÁNICA II", uc: 2, prereqs: ["MT3112", "IM2054"], coreqs: [] },
                { code: "MT5123", name: "TRABAJO ESPECIAL II", uc: 3, prereqs: ["MT5112"], coreqs: [] },
                { code: "MT3111", name: "LABORATORIO METALURGIA MECANICA", uc: 1, prereqs: ["MT3112"], coreqs: [] },
                { code: "ELEC_P2", name: "ELECTIVA PROFESIONAL 2", uc: 3, prereqs: [], coreqs: [] },
                { code: "ELEC_P3", name: "ELECTIVA PROFESIONAL 3", uc: 3, prereqs: [], coreqs: [] }
            ]
        },
        {
            semester: "Semestre X",
            courses: [
                { code: "MT52216", name: "ENTRENAMIENTO INDUSTRIAL", uc: 16, prereqs: [], coreqs: [], customCond: "APROBAR TODO" }
            ]
        }
    ]
};