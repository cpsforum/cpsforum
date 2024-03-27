import { Topic } from "@/components/data/topic-data"
import { notFound } from 'next/navigation'

export async function generateMetadata({ params }) {
    // read route params
    const id = params.id;
    const slug = params.slug;
    const topic = Topic.find(topic => topic.id == id && topic.slug == slug);
    if(!topic){
        notFound();
    }
    return {
        title: topic.title + " - Fórum Centro Paula Souza",
    }
}

export default function TopicLayout({ children }) {
    return (
        children
    )
}