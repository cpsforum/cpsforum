import { redirect } from "next/navigation"
import { auth } from "../../../../auth"

export const metadata = {
    title: "Criar um tópico",
    description: "Crie um tópico no Fórum Centro Paula Souza",
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

export default async function CriarLayout({ children }) {
    const session = await auth()
    if (!session){
        redirect('/sign-in')
    }
    return (
        children
    )
}