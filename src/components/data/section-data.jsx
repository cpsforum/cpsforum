import { HomeIcon, Users, Newspaper } from "lucide-react";

export const links = [
    {
        title: "Home",
        icon: HomeIcon,
        slug: "/",
    },
    {
        title: "Grupos",
        icon: Users,
        slug: "grupos"
    },
    {
        title: "Jornal",
        icon: Newspaper,
        slug: "jornal"
    },
]
export const sectionlinks = [
    {
        title: "Matemática e Ciências da Natureza",
        sections: [{
            title: "Matemática",
            slug: "matematica"
        },
        {
            title: "Física",
            slug: "fisica"
        },
        {
            title: "Química",
            slug: "quimica"
        },
        {
            title: "Biologia",
            slug: "biologia"
        }]
    },
    {
        title: "Português e Ciências Sociais",
        sections: [
            {
                title: 'Português e Literatura',
                slug: 'portugues-e-literatura'
            },
            {
                title: 'Redação',
                slug: 'redacao'
            },
            {
                title: 'Inglês',
                slug: 'ingles'
            },
            {
                title: 'Geografia',
                slug: 'geografia'
            },
            {

                title: 'História',
                slug: 'historia'
            },
            {

                title: 'Filosofia',
                slug: 'filosofia'
            },
            {

                title: 'Sociologia',
                slug: 'sociologia'
            },
            {
                title: 'Artes',
                slug: 'artes'
            }
        ]
    },
    {
        title: "Etec",
        sections: [
            {
                title: 'Desenvolvimento de Sistemas',
                slug: 'desenvolvimento-de-sistemas'
            },
            {
                title: 'Contabilidade',
                slug: 'contabilidade'
            },
            {
                title: 'Química',
                slug: 'quimica-curso'
            },
            {
                title: 'Administração',
                slug: 'administracao'
            },
            {
                title: 'Logística',
                slug: 'logistica'
            },
            {
                title: 'Marketing',
                slug: 'marketing'
            }
        ]
    }
]