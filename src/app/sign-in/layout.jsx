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

export default function Authentication({children}){     
    return children
}