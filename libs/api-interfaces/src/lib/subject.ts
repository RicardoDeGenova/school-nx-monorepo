export const enum SubjectName {
    PORTUGUESE = 'Língua portuguesa',
    ART = 'Arte',
    PHYSICAL_ED = 'Educação física',
    ENGLISH = 'Língua inglesa',
    MATH = 'Matemática',
    EXP_MATH = 'Matemática experimental',
    SCIENCE = 'Ciências',
    EXP_SCIENCE = 'Ciências experimental',
    BIOLOGY = 'Biologia',
    PHYSICS = 'Física',
    CHEMISTRY = 'Química',
    PHILOSOPHY = 'Filosofia',
    GEOGRAPHY = 'Geografia',
    HISTORY = 'História',
    SOCIOLOGY = 'Sociologia',
    LIFE_PROJECT = 'Projeto de vida',
    ELECTIVES = 'Eletivas',
    TEC_AND_INOVATION = 'Tecnologia e inovação',
    EXP_PRACTICE_I = 'Práticas experimentais I',
    EXP_PRACTICE_II = 'Práticas experimentais II',
    EXP_PRACTICE_III = 'Práticas experimentais III',
    STUDY_ORIENTATION = 'Orientação de estudos',
    YOUTH_PROTAG = 'Protagonismo juventil',
}

export const enum SubjectGroup {
    LANGUAGE = 'Linguagens e suas tecnologias',
    MATH = 'Matemática e suas tecnologias',
    NATURAL_SCIENCES = 'Ciências da natureza e suas tecnologias',
    SOCIAL_SCIENCES = 'Ciências humanas e sociais aplicadas',
    FORMATIVE_ITINERARY = 'Itinerário formativo',
}

export interface Subject {
    name: SubjectName,
    group: SubjectGroup,
}


