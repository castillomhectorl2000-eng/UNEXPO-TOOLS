export default {
    name: "Ingeniería Mecánica",
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
                { code: "IQ5113", name: "QUÍMICA GENERAL", uc: 3, prereqs: [], coreqs: [] }
            ]
        },
        {
            semester: "Semestre II",
            courses: [
                { code: "EB1125", name: "CALCULO II", uc: 5, prereqs: ["EB1115"], coreqs: [] },
                { code: "EB2115", name: "FÍSICA I", uc: 5, prereqs: [], coreqs: ["EB1125"] },
                { code: "EB3122", name: "DIBUJO II", uc: 2, prereqs: ["EB3112"], coreqs: [] },
                { code: "EB4131", name: "INGLÉS TÉCNICO II", uc: 1, prereqs: ["EB4121"], coreqs: [] },
                { code: "EB7123", name: "DESARRO. DE HABILI. DEL PENSAMIENTO II", uc: 3, prereqs: ["EB7113"], coreqs: [] },
                { code: "EB7212", name: "LECTURA CRÍTICA", uc: 2, prereqs: ["EB7113"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre III",
            courses: [
                { code: "EB1134", name: "CALCULO III", uc: 4, prereqs: ["EB1125"], coreqs: ["EB1213"] },
                { code: "EB1213", name: "ALGEBRA LINEAL", uc: 3, prereqs: ["EB1115"], coreqs: [] },
                { code: "EB2124", name: "FÍSICA II", uc: 4, prereqs: ["EB2115", "EB1125"], coreqs: [] },
                { code: "EB2211", name: "LABORATORIO DE FÍSICA", uc: 1, prereqs: [], coreqs: ["EB2124"] },
                { code: "IM1112", name: "DIBUJO DE MÁQUINAS", uc: 2, prereqs: ["EB3122"], coreqs: [] },
                { code: "IM1253", name: "MECANICA APLICADA I", uc: 3, prereqs: ["EB1125", "EB2115"], coreqs: [], customCond: "36 U.C. APROB" }
            ]
        },
        {
            semester: "Semestre IV",
            courses: [
                { code: "EB1154", name: "MATEMATICAS ESPECIALES", uc: 4, prereqs: ["EB1134", "EB1213"], coreqs: [] },
                { code: "EB1312", name: "PROGRAMACIÓN", uc: 2, prereqs: ["EB1125", "EB1213"], coreqs: [] },
                { code: "EB6542", name: "INTRODUCCIÓN A LA ADMINISTRACION", uc: 2, prereqs: [], coreqs: [], customCond: "40 U.C. AROBADAS" },
                { code: "EB7133", name: "DESARRO. DE HABILI, DEL PENSAMIENTO III", uc: 3, prereqs: ["EB7123"], coreqs: [] },
                { code: "IE5014", name: "FUNDAMENTOS DE ING. ELÉCTRICA", uc: 4, prereqs: ["EB1134", "EB2211"], coreqs: [] },
                { code: "IM1263", name: "MECANICA APLICADA II", uc: 3, prereqs: ["IM1253"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre V",
            courses: [
                { code: "113043", name: "PROBABILIDAD Y ESTADÍSTICA", uc: 3, prereqs: ["EB1134", "EB1312"], coreqs: [] },
                { code: "IM1273", name: "MECANISMOS", uc: 3, prereqs: ["IM1263"], coreqs: [] },
                { code: "IM1324", name: "RESISTENCIA DE MATERIALES", uc: 4, prereqs: ["IM1253"], coreqs: [] },
                { code: "IM1331", name: "ENSAYOS RESIST. DE MATERIALES", uc: 1, prereqs: [], coreqs: ["IM1324"] },
                { code: "IM2114", name: "MÁQUINAS HERRAMIENTAS", uc: 4, prereqs: ["IM1112"], coreqs: [] },
                { code: "IM3153", name: "TERMODINAMICA I", uc: 3, prereqs: ["EB1154", "EB2211"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre VI",
            courses: [
                { code: "IM1443", name: "ELEMENTOS DE MAQUINAS", uc: 3, prereqs: ["IM1273", "IM1324"], coreqs: [] },
                { code: "IM2314", name: "METROLOGÍA Y CALIDAD", uc: 4, prereqs: ["IM2114", "113043"], coreqs: [] },
                { code: "IM3163", name: "TERMODINAMICA II", uc: 3, prereqs: ["IM3153"], coreqs: [] },
                { code: "IM3224", name: "MECANICA DE FLUIDOS", uc: 4, prereqs: ["IM3153"], coreqs: [] },
                { code: "MT1015", name: "TECNOLOGIA DE MATERIALES", uc: 5, prereqs: ["IM1331"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre VII",
            courses: [
                { code: "EB6552", name: "ADMINISTRACION DE EMPRESAS", uc: 2, prereqs: [], coreqs: [], customCond: "60 U.C. APROBADAS" },
                { code: "EL3034", name: "INSTRUMENTACIÓN Y CONTROL", uc: 4, prereqs: ["IE5014"], coreqs: [] },
                { code: "113023", name: "INGENIERIA ECONÓMICA", uc: 3, prereqs: ["EB1134"], coreqs: [] },
                { code: "IM1453", name: "ELEMENTOS DE MÁQUINAS II", uc: 3, prereqs: ["IM1443"], coreqs: [] },
                { code: "IM2234", name: "TECNOLOGÍA MECÁNICA I", uc: 4, prereqs: ["IM2314"], coreqs: [] },
                { code: "IM3234", name: "MAQ. E INSTALCIONES HIDRÁULICAS", uc: 4, prereqs: ["IM3224"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre VIII",
            courses: [
                { code: "IM1463", name: "VIBRACIONES Y BALANCEO", uc: 3, prereqs: ["IM1453"], coreqs: [] },
                { code: "IM2244", name: "TECNOLOGÍA MECÁNICA II", uc: 4, prereqs: ["IM2234"], coreqs: [] },
                { code: "IM3173", name: "MÁQUINAS TÉRMICAS I", uc: 3, prereqs: ["IM3234", "IM3163"], coreqs: [] },
                { code: "IM3323", name: "TRANSFERENCIA DE CALOR", uc: 3, prereqs: ["IM3234"], coreqs: [] },
                { code: "IM4112", name: "TRABAJO ESPECIAL I", uc: 2, prereqs: ["IM1453", "IM3234"], coreqs: [] },
                { code: "MT4053", name: "SOLDADURA", uc: 3, prereqs: ["MT1015"], coreqs: [] }
            ]
        },
        {
            semester: "Semestre IX",
            courses: [
                { code: "111043", name: "GESTIÓN DE MANTENIMIENTO", uc: 3, prereqs: ["113043"], coreqs: [] },
                { code: "IM3184", name: "MÁQUINAS TÉRMICAS II", uc: 4, prereqs: ["IM3173"], coreqs: [] },
                { code: "IM4123", name: "TRABAJO ESPECIAL II", uc: 3, prereqs: ["IM4112"], coreqs: [] },
                { code: "ELEC_P1", name: "ELECTIVA PROFESIONAL 1", uc: 3, prereqs: [], coreqs: [] },
                { code: "ELEC_P2", name: "ELECTIVA PROFESIONAL 2", uc: 3, prereqs: [], coreqs: [] },
                { code: "ELEC_P3", name: "ELECTIVA PROFESIONAL 3", uc: 3, prereqs: [], coreqs: [] }
            ]
        },
        {
            semester: "Semestre X",
            courses: [
                { code: "IM51216", name: "ENTRENAMIENTO INDUSTRIAL", uc: 16, prereqs: [], coreqs: [], customCond: "APROBAR TODO" }
            ]
        }
    ]
};