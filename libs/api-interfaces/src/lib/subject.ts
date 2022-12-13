export type SubjectName =
    'Língua portuguesa' |
    'Arte' |
    'Educação física' |
    'Língua inglesa' |
    'Matemática' |
    'Matemática experimental' |
    'Ciências' |
    'Ciências experimental' |
    'Biologia' |
    'Física' |
    'Química' |
    'Filosofia' |
    'Geografia' |
    'História' |
    'Sociologia' |
    'Projeto de vida' |
    'Eletivas' |
    'Tecnologia e inovação' |
    'Práticas experimentais I' |
    'Práticas experimentais II' |
    'Práticas experimentais III' |
    'Orientação de estudos' |
    'Protagonismo juventil';

export type SubjectGroup =
    'Linguagens e suas tecnologias' |
    'Matemática e suas tecnologias' |
    'Ciências da natureza e suas tecnologias' |
    'Ciências humanas e sociais aplicadas' |
    'Itinerário formativo';


export interface Subject {
    name: SubjectName,
    group: SubjectGroup,
}


