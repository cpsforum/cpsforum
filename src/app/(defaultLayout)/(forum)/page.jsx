import { Feed } from "@/components/feed/feed"
import { Topic } from "@/components/data/topic-data"
import PageTitle from "@/components/layout/pagetitle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import dayjs from "dayjs"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import NewTopicButton from "@/components/general/newtopic"

export default function Home() {
    const forumMessagesTopics = Topic.filter(topic => topic.section === 1);
    const relevantTopics = Topic.filter(topic => topic.section !== 1);
    const recentTopics = Topic.filter(topic => topic.section !== 1).sort((a, b) => dayjs(a.date).isBefore(dayjs(b.date)) ? 1 : -1);
    return (
        <>
            <PageTitle title='Home' />
            <Feed items={forumMessagesTopics} />
            <Tabs defaultValue="relevant" className="w-full">
                <div className="flex justify-between">
                    <TabsList>
                        <TabsTrigger value="relevant">Relevantes</TabsTrigger>
                        <TabsTrigger value="recent">Recentes</TabsTrigger>
                    </TabsList>
                    <NewTopicButton />
                </div>
                <TabsContent value="relevant"><Feed items={relevantTopics} /></TabsContent>
                <TabsContent value="recent"><Feed items={recentTopics} /></TabsContent>
            </Tabs>
        </>
    )
}