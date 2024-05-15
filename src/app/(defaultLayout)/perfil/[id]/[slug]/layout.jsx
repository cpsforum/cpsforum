import { User } from "@/components/data/topic-data"
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
    // read route params
    const id = params.id;
    const slug = params.slug;
    const user = User.find(user => user.id == id && user.slug == slug);
    if(!user){
        notFound();
    }
    return {
        title: user.name + " - Fórum Centro Paula Souza",
        description: "Perfil de " + user.name + " no Fórum Centro Paula Souza",
    }
}

export default function UserLayout({ children }) {
    return (
        children
    )
}