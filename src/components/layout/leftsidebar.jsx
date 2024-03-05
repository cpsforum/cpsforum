import { Separator } from "@/components/ui/separator";
import { SideBarLink, SideBarSectionLink } from "@/components/ui/sidebar-nav";
import { HomeIcon, Users, Newspaper } from "lucide-react";
import { useParams } from "next/navigation";
import {
    ResizablePanel
} from "@/components/ui/resizable"

export const LeftSidebar = () => {
    const { slug } = useParams();
    const links = [
        {
            title: "Home",
            icon: HomeIcon,
            slug: "/",
            variant: slug ? "ghost" : "default"
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
    const sectionlinks = [
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
    return (
        <ResizablePanel className="max-h-full top-0 left-0 sticky !overflow-y-auto no-scrollbar" minSize={14} defaultSize={17}>
            <SideBarLink
                isCollapsed={false}
                links={links} />
            <Separator />
            <SideBarSectionLink isCollapsed={false}
                links={sectionlinks} />
        </ResizablePanel >
    )
}