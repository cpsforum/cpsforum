import MainLayout from "@/components/layout/mainlayout"
import Header from "@/components/header/header"

export const metadata = {
    title: 'Fórum Centro Paula Souza',
    description: 'Conecte-se com estudantes e professores, compartilhe conhecimento, tire dúvidas e participe de discussões sobre educação, tecnologia e inovação.',
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/favicon-black.svg',
                href: '/favicon-black.svg',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '/favicon-white.svg',
                href: '/favicon-white.svg',
            },
        ],
    }
}

export default function ForumLayout({ children }) {
    return (
        <MainLayout>
            {children}
        </MainLayout>
    )
}

