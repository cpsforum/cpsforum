import SuportLayout from "@/components/layout/suport"

export const metadata = {
    title: "Forum Centro Paula Souza",
    description: "Suporte",
}

export default function PageLayout({ children }) {
    return (
        <SuportLayout>
            {children}
        </SuportLayout>
    )
}

