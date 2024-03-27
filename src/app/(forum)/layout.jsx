import MainLayout from "@/components/layout/mainlayout"
import Header from "@/components/header/header"

export default function ForumLayout({ children }) {
    return (
        <div>
            <Header />
            <MainLayout>
                {children}
            </MainLayout>
        </div>
    )
}

