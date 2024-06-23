import { HomeIcon, Users, Newspaper, MessageCircle } from "lucide-react";

const Sections = [
    {
        id: 1,
        title: 'Mensagens do Forum CPS',
        ssection: 1,
        slug: 'mensagens-do-forum-cps'
    },
    {
        id: 2,
        title: 'Matemática',
        ssection: 2,
        slug: 'matematica'
    },
    {
        id: 3,
        title: 'Física',
        ssection: 2,
        slug: 'fisica'
    },
    {
        id: 4,
        title: 'Química',
        ssection: 2,
        slug: 'quimica'
    },
    {
        id: 5,
        title: 'Biologia',
        ssection: 2,
        slug: 'biologia'
    },
    {
        id: 6,
        title: 'Português e Literatura',
        ssection: 3,
        slug: 'portugues-e-literatura'
    },
    {
        id: 7,
        title: 'Redação',
        ssection: 3,
        slug: 'redacao'
    },
    {
        id: 8,
        title: 'Inglês',
        ssection: 3,
        slug: 'ingles'
    },
    {
        id: 9,
        title: 'Geografia',
        ssection: 3,
        slug: 'geografia'
    },
    {
        id: 10,
        title: 'História',
        ssection: 3,
        slug: 'historia'
    },
    {
        id: 11,
        title: 'Filosofia',
        ssection: 3,
        slug: 'filosofia'
    },
    {
        id: 12,
        title: 'Sociologia',
        ssection: 3,
        slug: 'sociologia'
    },
    {
        id: 13,
        title: 'Artes',
        ssection: 3,
        slug: 'artes'
    },
    {
        id: 14,
        title: 'Desenvolvimento de Sistemas',
        ssection: 4,
        slug: 'desenvolvimento-de-sistemas'
    },
    {
        id: 15,
        title: 'Contabilidade',
        ssection: 4,
        slug: 'contabilidade'
    },
    {
        id: 16,
        title: 'Química - Cursos',
        ssection: 4,
        slug: 'quimica-cursos'
    },
    {
        id: 17,
        title: 'Administração',
        ssection: 4,
        slug: 'administracao'
    },
    {
        id: 18,
        title: 'Logística',
        ssection: 4,
        slug: 'logistica'
    },
    {
        id: 19,
        title: 'Marketing',
        ssection: 4,
        slug: 'marketing'
    },
    {
        id: 20,
        title: 'ENEM',
        ssection: 6,
        slug: 'enem'
    },
    {
        id: 21,
        title: 'Fuvest',
        ssection: 6,
        slug: 'fuvest'
    },
    {
        id: 22,
        title: 'ITA-IME',
        ssection: 6,
        slug: 'ita-ime'
    },
    {
        id: 23,
        title: 'Fatec',
        ssection: 6,
        slug: 'vest-fatec'
    },
    {
        id: 24,
        title: 'Vestibulares diversos',
        ssection: 6,
        slug: 'vestibulares-diversos'
    },
    {
        id: 25,
        title: 'Olimpíadas',
        ssection: 7,
        slug: 'olimpiadas'
    },
    {
        id: 26,
        title: 'Tecnologia',
        ssection: 7,
        slug: 'tecnologia'
    },
    {
        id: 27,
        title: 'TCC',
        ssection: 7,
        slug: 'tcc'
    }
]

export const links = [
    {
        title: "Home",
        icon: HomeIcon,
        slug: "",
    },
    {
        title: "Jornal",
        icon: Newspaper,
        slug: "jornal"
    },
    {
        title: "Grupos",
        icon: Users,
        slug: "grupos"
    },
    {
        title: "Mensagens",
        icon: MessageCircle,
        slug: "mensagens"
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
    },
    {
        title: 'Vestibulares',
        sections: [
            {
                id: 20,
                title: 'ENEM',
                slug: 'enem'
            },
            {
                id: 21,
                title: 'Fuvest',
                slug: 'fuvest'
            },
            {
                id: 22,
                title: 'ITA-IME',
                slug: 'ita-ime'
            },
            {
                id: 23,
                title: 'Fatec',
                slug: 'vestfatec'
            },
            {
                id: 24,
                title: 'Vestibulares diversos',
                slug: 'vestibulares-diversos'
            },
        ]
    },
    {
        title: 'Outros',
        sections: [
            {
                id: 25,
                title: 'Olimpíadas',
                slug: 'olimpiadas'
            },
            {
                id: 26,
                title: 'Tecnologia',
                slug: 'tecnologia'
            },
            {
                id: 27,
                title: 'TCC',
                slug: 'tcc'
            }
        ]
    },
    {
        title: 'Suporte',
        sections: [
            {
                id: 28,
                title: "Política de Privacidade",
                slug: "suporte/politica-de-privacidade",
            },
            {
                id: 29,
                title: "Sobre",
                slug: "suporte/sobre",
            },
        ]
    }
]

export const materialsLinks = [
    {
        title: "Categorias",
        sections: [
            {
                id: 1,
                title: 'Ciências Humanas',
                slug: 'materiais/ciencias-humanas',
            },
            {
                id: 2,
                title: 'Linguagens',
                slug: 'materiais/linguagens'
            },
            {
                id: 3,
                title: 'Ciências da Natureza',
                slug: 'materiais/ciencias-da-natureza'
            },
            {
                id: 4,
                title: 'Ciências Sociais e Matemática',
                slug: 'materiais/ciencias-sociais-e-matematica'
            },
            {
                id: 5,
                title: 'Obras Literárias',
                slug: 'materiais/obras-literarias'
            },
        ]
    }
]