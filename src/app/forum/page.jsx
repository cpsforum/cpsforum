import { Feed } from "@/components/feed/feed"
import { Topic } from "@/components/data/topic-data"

export default function Home() {
    return (
        <Feed items={Topic} />
    )
}