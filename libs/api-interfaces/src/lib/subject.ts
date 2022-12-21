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
    'Ciências da Natureza e Matemática' |
    'Ciências de Linguagens e suas Tecnologias' |
    'Ciências Humanas e suas Tecnologias' |
    'Outros';


export interface Subject {
    name: SubjectName,
    group: SubjectGroup,
}