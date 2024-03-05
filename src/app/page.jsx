import Image from "next/image";
import { Topic } from "@/components/data/topic-data";
import { Feed } from "@/components/feed/feed";

export default function Home() {
  return (
    <Feed items={Topic} />
  );
}
