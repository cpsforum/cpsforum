import { dayjs } from "@/components/data/dayjs"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { User } from "@/components/data/topic-data"

export default function RecentTopic({ item }) {
    const author = item.user
    return (
        <button
            href={`/topico/${item.id}/${item.slug}`}
            key={item.id}
            className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-xs transition-all hover:bg-accent"
            )}
        >
            <div className="flex w-full flex-col gap-1">
                <div className="flex items-center gap-2">
                    <div className="font-semibold">{item.title}</div>
                </div>
                <div className="flex items-center">
                <Link href={`/perfil/${author.id}/${author.slug}`} className="text-xs font-medium">{author.firstName}&nbsp;{author.lastName}</Link>
                    <div
                        title={item.createdAt}
                        className={cn(
                            "text-muted-foreground ml-auto",
                        )}
                    >
                        {dayjs(item.createdAt).fromNow()}
                    </div>
                </div>
            </div>
        </button>
    )
}