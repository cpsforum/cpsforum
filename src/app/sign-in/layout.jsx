import { auth } from "@/../auth"
import { redirect } from "next/navigation"

export const metadata = {
    title: "Entrar",
    description: "Entre em sua conta utilizando o e-mail institucional",
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

export default async function Authentication({children}){
    const session = await auth()
    if (session) {
        redirect('/')
    }
    return children
}