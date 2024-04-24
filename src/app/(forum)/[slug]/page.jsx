'use client'
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { Feed } from "@/components/feed/feed";
import { Topic } from "@/components/data/topic-data";
import { sectionlinks } from "@/components/data/section-data";
import PageTitle from "@/components/layout/pagetitle";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import dayjs from "dayjs";

export default function SectionPage() {
  const { slug } = useParams();
  // Definindo variáveis para usar fora do escopo
  const supersection = sectionlinks.find(supersection => supersection.sections.some(section => section.slug === slug));
  const section = (supersection?.sections || []).find(section => section.slug === slug);

  const supersectionname = (supersection || []).title;

  const sectionid = (section || []).id;
  const sectionname = (section || []).title;
  
  const items = Topic.filter(topic => topic.section === sectionid);
  const relevantTopics = items
  const recentTopics = items.sort((a, b) => dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1);
  return (
    <>
      <PageTitle ntb title={sectionname} subtitle={supersectionname} className="flex justify-between" />
      <Tabs defaultValue="recent" className="mt-3 w-full">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm">
              Ordenar por:&nbsp;
            </span>
            <TabsList>
              <TabsTrigger value="recent">Recentes</TabsTrigger>
              <TabsTrigger value="relevant">Relevantes</TabsTrigger>
            </TabsList>
          </div>
          <span className=" font-medium">
            {items.length} tópicos
          </span>
        </div>
        <TabsContent value="relevant"><Feed items={relevantTopics} /></TabsContent>
        <TabsContent value="recent"><Feed items={recentTopics} /></TabsContent>
      </Tabs>
    </>
  );
}
