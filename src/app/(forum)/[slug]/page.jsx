'use client'
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { Feed } from "@/components/feed/feed";
import { Topic } from "@/components/data/topic-data";
import { sectionlinks } from "@/components/data/section-data";
import PageTitle from "@/components/layout/pagetitle";

export default function Home() {
  // Definindo variáveis para usar fora do escopo
  var items, supersectionname, sectionname;
  // Capturando o slug da URL
  const { slug } = useParams();
  // Verificando se há alguma superseção que possui uma seção com o slug capturado
  const supersectionindex = sectionlinks.findIndex(supersection => supersection.sections.some(section => section.slug === slug));
  if (supersectionindex !== -1) {
    supersectionname = sectionlinks[supersectionindex].title;
    // Verificando qual o index da seção correspondente ao slug
    const sectionindex = sectionlinks[supersectionindex].sections.findIndex(section => section.slug === slug);
    if (sectionindex !== -1) {
      //Caputurando ID, nome e filtrando items mandados para o Feed
      const sectionid = sectionlinks[supersectionindex].sections[sectionindex].id;
      sectionname = sectionlinks[supersectionindex].sections[sectionindex].title;
      items = Topic.filter(topic => topic.section === sectionid);
    }
  }else{
    // 404 se não houver nenhuma seção correspondente
    return notFound();
  }

  return (
    <>
      <PageTitle title={sectionname} subtitle={supersectionname} />
      <Feed items={items} />
    </>
  );
}
