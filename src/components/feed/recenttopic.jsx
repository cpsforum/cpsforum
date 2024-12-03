import { dayjs } from "@/components/data/dayjs"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function RecentTopic({ item }) {
    const author = item.user
    return (
        <Link
            href={`/topico/${item.id}/${item.slug}`}
            key={item.id}
            className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left transition-all hover:bg-accent"
            )}
        >
            <div className="flex w-full flex-col gap-1">
                <div className="flex items-center gap-2">
                    <div className="font-semibold text-sm">{item.title}</div>
                </div>
                <div className="flex items-center">
                <span className="text-xs text-muted-foreground font-medium">{author.name}</span>
                    <div
                        title={item.createdAt}
                        className={cn(
                            "text-muted-foreground text-xs ml-auto",
                        )}
                    >
                        {dayjs(item.createdAt).fromNow()}
                    </div>
                </div>
            </div>
        </Link>
    )
}