'use client'
import { notFound, useParams } from "next/navigation";
import { Topic } from "@/components/data/topic-data";
import { materialsLinks } from "@/components/data/section-data";
import PageTitle from "@/components/layout/pagetitle";

export default function Home() {
  // Capturando o slug da URL
  const { slug } = useParams();
  
  return (
    <>
      


      
    </>
  );
}
