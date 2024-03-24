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
        title: "Mensagens do Fórum",
        sections: [{
            id: 1,
            title: "Mensagens do Fórum",
            slug: "mensagens-forum"
        }]
    },
    {
        title: "Matemática e Ciências da Natureza",
        sections: [{
            id: 2,
            title: "Matemática",
            slug: "matematica"
        },
        {
            id: 3,
            title: "Física",
            slug: "fisica"
        },
        {
            id: 4,
            title: "Química",
            slug: "quimica"
        },
        {
            id: 5,
            title: "Biologia",
            slug: "biologia"
        }]
    },
    {
        title: "Português e Ciências Sociais",
        sections: [
            {
                id: 6,
                title: 'Português e Literatura',
                slug: 'portugues-e-literatura'
            },
            {
                id: 7,
                title: 'Redação',
                slug: 'redacao'
            },
            {
                id: 8,
                title: 'Inglês',
                slug: 'ingles'
            },
            {
                id: 9,
                title: 'Geografia',
                slug: 'geografia'
            },
            {
                id: 10,
                title: 'História',
                slug: 'historia'
            },
            {
                id: 11,
                title: 'Filosofia',
                slug: 'filosofia'
            },
            {
                id: 12,
                title: 'Sociologia',
                slug: 'sociologia'
            },
            {
                id: 13,
                title: 'Artes',
                slug: 'artes'
            }
        ]
    },
    {
        title: "Etec",
        sections: [
            {
                id: 14,
                title: 'Desenvolvimento de Sistemas',
                slug: 'desenvolvimento-de-sistemas'
            },
            {
                id: 15,
                title: 'Contabilidade',
                slug: 'contabilidade'
            },
            {
                id: 16,
                title: 'Química',
                slug: 'quimica-curso'
            },
            {
                id: 17,
                title: 'Administração',
                slug: 'administracao'
            },
            {
                id: 18,
                title: 'Logística',
                slug: 'logistica'
            },
            {
                id: 19,
                title: 'Marketing',
                slug: 'marketing'
            }
        ]
    }
]
