import RecentFeed from "../feed/recentfeed";
import PageTitle from "./pagetitle";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { useQuery } from "@tanstack/react-query";

export default function RightSidebar() {
    const { isPending: isRecentTopicsPending, error: errorRecentTopics, data: recentTopics } = useQuery({
        queryKey: ['recentTopicsSidebar'],
        queryFn: () =>
            fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/?sort=createdAt,desc`).then((res) =>
                res.json(),
            ),
    })
    return (
        <>
            <div >
                <PageTitle title='Seções seguidas' />
                <div className="my-4 flex items-center justify-between border rounded-lg text-xs font-semibold p-3" >
                    <h2>Entre para ver suas seções seguidas</h2>
                    <Link className={`${cn(buttonVariants())} text-xs h-6`} href="/sign-in" >Entrar</Link>
                </div>
            </div>
            <div>
                <PageTitle title='Tópicos mais recentes' />
                {
                    !isRecentTopicsPending ?
                        <RecentFeed items={recentTopics.topics} />
                        :
                        <div className="gap-2 mt-4 flex flex-col">
                            {
                                [...Array(10)].map((_, i) => (
                                    <Skeleton key={i} className="h-16 w-full rounded-lg" />
                                ))
                            }
                        </div>
                }
            </div>
        </>
    )
}