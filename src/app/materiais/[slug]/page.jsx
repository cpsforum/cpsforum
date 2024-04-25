'use client'
import { notFound, useParams } from "next/navigation";
import { materialsLinks } from "@/components/data/section-data";
import BookRow from "@/components/materials/bookRow";

export default function Home() {
  // Capturando o slug da URL
  const { slug } = useParams();
  
  return (
    <>
      <BookRow slug={slug} />
    </>
  );
}
