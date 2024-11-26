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
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"


export default function Home() {
    const { data: session } = useSession()
    const { isPending: isTopicsPending, error: errorTopics, data: topics } = useQuery({
        queryKey: ['topics'],
        queryFn: () =>
            fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/`, { headers: { "Bearer": session.accessToken } }).then((res) =>
                res.json(),
            ),
    })

    const { isPending: isRecentTopicsPending, error: errorRecentTopics, data: recentTopics } = useQuery({
        queryKey: ['recentTopics'],
        queryFn: () =>
            fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/?sort=createdAt,desc`, { headers: { "Bearer": session.accessToken } }).then((res) =>
                res.json(),
            ),
    })

    const forumMessagesTopics = Topic.filter(topic => topic.section === 1);

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
                    {!isTopicsPending ?
                        <Feed items={topics.topics} />
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
                <TabsContent value="recent">
                    {!isRecentTopicsPending ?
                        <Feed items={recentTopics.topics} />
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
            </Tabs>
        </>
    )
}