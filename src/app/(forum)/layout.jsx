import MainLayout from "@/components/layout/mainlayout"
import Header from "@/components/header/header"

export const metadata = {
    title: 'Fórum Centro Paula Souza',
    description: 'Conecte-se com estudantes e professores, compartilhe conhecimento, tire dúvidas e participe de discussões sobre educação, tecnologia e inovação.',
  }

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

