import { sectionlinks } from "@/components/data/section-data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    // read route params
    const slug = params.slug;
    const supersection = sectionlinks.find(supersection => supersection.sections.some(section => section.slug === slug));
    const section = (supersection?.sections || []).find(section => section.slug === slug);

    if (!section) {
        notFound();
    }
    return {
        title: section.title + " - Fórum Centro Paula Souza",
        description: 'Veja perguntas sobre ' + section.title + ' no Fórum Centro Paula Souza.',
    }
}

export default function SectionLayout({ children }) {
    return children
}