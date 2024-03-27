'use client'
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { Feed } from "@/components/feed/feed";
import { Topic } from "@/components/data/topic-data";
import { materialsLinks } from "@/components/data/section-data";
import PageTitle from "@/components/layout/pagetitle";

export default function Home() {
  // Capturando o slug da URL
  const { slug } = useParams();
  // Verificando se há alguma superseção que possui uma seção com o slug capturado
  const supersectionindex = materialsLinks.findIndex(supersection => supersection.sections.some(section => section.slug === slug));
  if (supersectionindex !== -1) {
    supersectionname = materialsLinks[supersectionindex].title;
    // Verificando qual o index da seção correspondente ao slug
    const sectionindex = materialsLinks[supersectionindex].sections.findIndex(section => section.slug === slug);
    if (sectionindex !== -1) {
      //Caputurando ID, nome e filtrando items mandados para o Feed
      const sectionid = materialsLinks[supersectionindex].sections[sectionindex].id;
      sectionname = materialsLinks[supersectionindex].sections[sectionindex].title;
      items = Topic.filter(topic => topic.section === sectionid);
    }
  }else{
    // 404 se não houver nenhuma seção correspondente
    return notFound();
  }

  return (
    <>
      teste
    </>
  );
}
