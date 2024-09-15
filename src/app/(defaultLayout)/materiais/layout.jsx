import Header from "@/components/header/header"
import MaterialsLayout from "@/components/layout/materials.jsx"

export const metadata = {
    title: 'Materiais',
    description: 'Materiais didáticos para estudantes',
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

export default function MaterialLayout({ children }) {
    return (
        <MaterialsLayout>
            {children}
        </MaterialsLayout>
    )
}

