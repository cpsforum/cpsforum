import { Topic } from "@/components/data/topic-data";
import { redirect, notFound } from "next/navigation";

export default async function generateMetadata({ params }) {
    const id = params.id;
    const req = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/topico/${id}`, {cache: 'no-cache'})
    const { topic } = await req.json()
    if (!topic) {
        notFound();
    }
    return (
        redirect(`${id}/${topic.slug}`)
    )
}