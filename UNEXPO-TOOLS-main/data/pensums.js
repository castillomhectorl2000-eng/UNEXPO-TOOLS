export const pensumsData = {
    "electronica_control": {
        name: "Ingeniería Electrónica (Control)",
        faculty: "UNEXPO Barquisimeto",
        totalMaxUC: 172,
        semesters: [
            {
                semester: "Semestre I",
                courses: [
                    { code: "EB1115", name: "CÁLCULO I", uc: 5, prereqs: [], coreqs: [] },
                    { code: "EB3112", name: "DIBUJO I", uc: 2, prereqs: [], coreqs: [] },
                    { code: "EB4121", name: "INGLÉS TÉCNICO I", uc: 1, prereqs: [], coreqs: [] },
                    { code: "EB6113", name: "LENGUAJE Y REDACCIÓN", uc: 3, prereqs: [], coreqs: [] },
                    { code: "EB6411", name: "ACTIVIDADES COMP.", uc: 1, prereqs: [], coreqs: [] },
                    { code: "EB7113", name: "HABILIDADES PENSAMIENTO", uc: 3, prereqs: [], coreqs: [] },
                    { code: "IQ5113", name: "QUÍMICA GENERAL", uc: 3, prereqs: [], coreqs: [] }
                ]
            },
            {
                semester: "Semestre II",
                courses: [
                    { code: "EB1125", name: "CÁLCULO II", uc: 5, prereqs: ["EB1115"], coreqs: [] },
                    { code: "EB2115", name: "FÍSICA I", uc: 5, prereqs: [], coreqs: ["EB1125"] },
                    { code: "EB3122", name: "DIBUJO II", uc: 2, prereqs: ["EB3112"], coreqs: [] },
                    { code: "EB4131", name: "INGLÉS TÉCNICO II", uc: 1, prereqs: ["EB4121"], coreqs: [] },
                    { code: "EB7123", name: "HABILIDADES II", uc: 3, prereqs: ["EB7113"], coreqs: [] },
                    { code: "EB7212", name: "LECTURA CRÍTICA", uc: 2, prereqs: ["EB7113"], coreqs: [] }
                ]
            },
            {
                semester: "Semestre III",
                courses: [
                    { code: "EB1134", name: "CÁLCULO III", uc: 4, prereqs: ["EB1125"], coreqs: ["EB1213"] },
                    { code: "EB1213", name: "ÁLGEBRA LINEAL", uc: 3, prereqs: ["EB1115"], coreqs: [] },
                    { code: "EB2124", name: "FÍSICA II", uc: 4, prereqs: ["EB2115", "EB1125"], coreqs: [] },
                    { code: "EB2211", name: "LAB. FÍSICA", uc: 1, prereqs: [], coreqs: ["EB2124"] },
                    { code: "EB7133", name: "HABILIDADES III", uc: 3, prereqs: ["EB7123"], coreqs: [] },
                    { code: "IE5114", name: "CIRCUITOS ELÉCTRICOS I", uc: 4, prereqs: ["EB1125"], coreqs: [] }
                ]
            },
            {
                semester: "Semestre IV",
                courses: [
                    { code: "EB1144", name: "CÁLCULO IV", uc: 4, prereqs: ["EB1134", "EB1213"], coreqs: [] },
                    { code: "EB1312", name: "PROGRAMACIÓN", uc: 3, prereqs: ["EB1125", "EB1213"], coreqs: [] },
                    { code: "EB6542", name: "INTROD. ADMINISTRACIÓN", uc: 2, prereqs: [], coreqs: [], customCond: "40 U.C. APROB." },
                    { code: "EL1142", name: "MEDICIONES ELÉCTRICAS", uc: 2, prereqs: ["EB2211"], coreqs: ["IE5124"] },
                    { code: "EL1154", name: "ELECTRÓNICA I", uc: 4, prereqs: ["EB2124", "IE5114"], coreqs: [] },
                    { code: "IE5124", name: "CIRCUITOS ELÉCTRICOS II", uc: 4, prereqs: ["IE5114"], coreqs: [] },
                    { code: "IE5131", name: "LAB. CIRCUITOS ELÉCT.", uc: 1, prereqs: [], coreqs: ["IE5124"] }
                ]
            },
            {
                semester: "Semestre V",
                courses: [
                    { code: "EB6552", name: "ADMINISTRACIÓN EMPRESAS", uc: 2, prereqs: [], coreqs: [], customCond: "60 U.C. APROB." },
                    { code: "EL1123", name: "TECNOLOGÍA ELECTRÓNICA", uc: 3, prereqs: ["EL1154"], coreqs: [] },
                    { code: "EL1161", name: "LAB. I ELECTRÓNICA", uc: 1, prereqs: ["EL1142"], coreqs: ["EL1183"] },
                    { code: "EL1183", name: "ELECTRÓNICA II", uc: 3, prereqs: ["EL1154"], coreqs: [] },
                    { code: "EL2113", name: "ANÁLISIS DE SEÑALES", uc: 3, prereqs: ["EB1144", "IE5114"], coreqs: [] },
                    { code: "EL3213", name: "CIRCUITOS DIGITALES", uc: 3, prereqs: ["EL1154"], coreqs: [] },
                    { code: "113043", name: "PROBABILIDAD Y ESTADÍSTICA", uc: 4, prereqs: ["EB1312", "EB1134"], coreqs: [] }
                ]
            },
            {
                semester: "Semestre VI",
                courses: [
                    { code: "EL1181", name: "LAB. II ELECTRÓNICA", uc: 1, prereqs: ["EL1161"], coreqs: ["EL1313"] },
                    { code: "EL1313", name: "ELECTRÓNICA III", uc: 3, prereqs: ["EL1183"], coreqs: [] },
                    { code: "EL2124", name: "SISTEMAS COMUNICACIONES", uc: 4, prereqs: ["EL2113"], coreqs: [] },
                    { code: "EL3163", name: "TEORÍA DE CONTROL", uc: 3, prereqs: ["EL2113"], coreqs: [] },
                    { code: "EL3221", name: "LAB. CIRCUITOS DIG. I", uc: 1, prereqs: ["EL3213"], coreqs: [] },
                    { code: "IE6013", name: "MÁQUINAS ELÉCTRICAS", uc: 3, prereqs: ["IE5124"], coreqs: [] }
                ]
            },
            {
                semester: "Semestre VII",
                courses: [
                    { code: "EL1223", name: "ELEC. INDUSTRIAL I", uc: 3, prereqs: ["EL1313"], coreqs: [] },
                    { code: "EL3121", name: "LAB. I SISTEMAS CONTROL", uc: 1, prereqs: ["EL3163"], coreqs: [] },
                    { code: "EL3173", name: "CONTROL TIEMPO CONTINUO", uc: 3, prereqs: ["EL3163"], coreqs: [] },
                    { code: "EL3234", name: "MICROPROCESADORES", uc: 4, prereqs: ["EL3221", "EB1312"], coreqs: [] },
                    { code: "EL3333", name: "INSTRUMENTACIÓN ELEC.", uc: 3, prereqs: ["EL1313", "EL3221"], coreqs: [] },
                    { code: "IE6021", name: "LAB. MÁQUINAS ELÉCT.", uc: 1, prereqs: ["EL1142", "IE6013"], coreqs: [] }
                ]
            },
            {
                semester: "Semestre VIII",
                courses: [
                    { code: "EL1243", name: "ELEC. INDUSTRIAL II", uc: 3, prereqs: ["EL1223"], coreqs: [] },
                    { code: "EL3142", name: "LAB. II SISTEMAS CONTROL", uc: 2, prereqs: ["EL3121", "EL3221"], coreqs: [] },
                    { code: "EL3193", name: "CONTROL TIEMPO DISCRETO", uc: 3, prereqs: ["EL3173", "EL3234"], coreqs: [] },
                    { code: "EL5112", name: "TRABAJO ESPECIAL I", uc: 2, prereqs: ["EL3234", "EL1223"], coreqs: [] },
                    { code: "113023", name: "INGENIERÍA ECONÓMICA", uc: 3, prereqs: ["EB1134"], coreqs: [] },
                    { code: "ELEC_P1", name: "ELECTIVA PROFESIONAL 1", uc: 3, prereqs: [], coreqs: [] }
                ]
            },
            {
                semester: "Semestre IX",
                courses: [
                    { code: "EL1252", name: "LAB. ELEC. INDUSTRIAL", uc: 2, prereqs: [], coreqs: ["EL1243"] },
                    { code: "EL3324", name: "INSTRUMENTACIÓN IND.", uc: 4, prereqs: ["EL3163"], coreqs: [] },
                    { code: "EL5123", name: "TRABAJO ESPECIAL II", uc: 3, prereqs: ["EL5112"], coreqs: [] },
                    { code: "111033", name: "PLANIF. Y CONT. PROD.", uc: 3, prereqs: ["113043"], coreqs: [] },
                    { code: "ELEC_P2", name: "ELECTIVA PROFESIONAL 2", uc: 3, prereqs: [], coreqs: [] },
                    { code: "ELEC_P3", name: "ELECTIVA PROFESIONAL 3", uc: 3, prereqs: [], coreqs: [] }
                ]
            },
            {
                semester: "Semestre X",
                courses: [
                    { code: "EL52216", name: "ENTRENAMIENTO INDUSTRIAL", uc: 16, prereqs: [], coreqs: [], customCond: "APROBAR TODO" }
                ]
            }
        ]
    }
    // Aquí podrás añadir más carreras o menciones fácilmente en el futuro (ej. "electronica_comunicaciones", "industrial", etc.)
};