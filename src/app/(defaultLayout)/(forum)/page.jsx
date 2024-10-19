"use client"

import { Feed } from "@/components/feed/feed"
import { Topic } from "@/components/data/topic-data"
import PageTitle from "@/components/layout/pagetitle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import dayjs from "dayjs"
import NewTopicButton from "@/components/general/newtopic"
import { auth } from "@/../auth"
import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"


export default function Home() {
    const [topics, setTopics] = useState();
    const [recentTopics, setRecentTopics] = useState();
    const forumMessagesTopics = Topic.filter(topic => topic.section === 1);

    async function getTopics() {
        const req = await fetch(`/api/`)
        const { topics } = await req.json()
        setTopics(topics)
    }

    async function getRecentTopics() {
        const req = await fetch(`/api/?sort=createdAt,desc`)
        const { topics } = await req.json()
        setRecentTopics(topics)
    }

    useEffect(() => {
        getTopics()
        getRecentTopics()
    }, []);

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
                <TabsContent value="relevant">
                    {topics ?
                        <Feed items={topics} />
                        :
                        <div className="gap-2 mt-4 flex flex-col">
                            {
                                [...Array(10)].map((_, i) => (
                                    <Skeleton key={i} className="h-32 w-full rounded-lg" />
                                ))
                            }
                        </div>
                    }
                </TabsContent>
                <TabsContent value="recent"><Feed items={recentTopics} /></TabsContent>
            </Tabs>
        </>
    )
}