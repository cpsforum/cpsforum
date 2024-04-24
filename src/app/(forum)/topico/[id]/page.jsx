import { Topic } from "@/components/data/topic-data";
import { redirect, notFound } from "next/navigation";

export default async function generateMetadata({ params }) {
    const id = params.id;
    const topic = Topic.find(topic => topic.id == id);
    if (!topic) {
        notFound();
    }
    return (
        redirect(`${id}/${topic.slug}`)
    )
}