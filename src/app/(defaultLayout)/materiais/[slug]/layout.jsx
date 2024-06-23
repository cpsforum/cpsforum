// layout.jsx
import { materialsLinks } from "@/components/data/section-data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    // Ler parâmetros da rota
    const slug = params.slug;
}


export default function SectionLayout({ children }) {
    return children
}