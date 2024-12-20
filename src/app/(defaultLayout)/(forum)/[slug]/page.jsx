'use client'
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { Feed } from "@/components/feed/feed";
import { Topic } from "@/components/data/topic-data";
import { sectionlinks } from "@/components/data/section-data";
import PageTitle from "@/components/layout/pagetitle";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

export default function SectionPage() {
  const { slug } = useParams();
  // Definindo variáveis para usar fora do escopo
  const [topics, setTopics] = useState([]);
  const [recentTopics, setRecentTopics] = useState([]);

  const supersection = sectionlinks.find(supersection => supersection.sections.some(section => section.slug === slug));
  const section = (supersection?.sections || []).find(section => section.slug === slug);

  async function getTopics() {
    const req = await fetch(`/api/${slug}`)
    const { topics } = await req.json()
    setTopics(topics)
  }

  async function getRecentTopics() {
    const req = await fetch(`/api/${slug}`)
    const { topics } = await req.json()
    setRecentTopics(topics)
  }

  useEffect(() => {
    getTopics()
    getRecentTopics()
  }, []);

  return (
    <>
      <PageTitle ntb title={section.title} subtitle={supersection.title} className="flex justify-between" />
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
            {topics.length} tópicos
          </span>
        </div>
        <TabsContent value="relevant"><Feed items={topics} /></TabsContent>
        <TabsContent value="recent"><Feed items={recentTopics} /></TabsContent>
      </Tabs>
    </>
  );
}
