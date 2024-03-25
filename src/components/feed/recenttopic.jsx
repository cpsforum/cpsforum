import { dayjs } from "@/components/data/dayjs"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export default function RecentTopic({ item }) {
    return (
        <button
            key={item.id}
            className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-xs transition-all hover:bg-accent"
            )}
        >
            <div className="flex w-full flex-col gap-1">
                <div className="flex items-center gap-2">
                    <div className="font-semibold">{item.subject}</div>
                </div>
                <div className="flex items-center">
                    <div className="font-medium">{item.name}</div>
                    <div
                        title={item.date}
                        className={cn(
                            "text-muted-foreground ml-auto",
                        )}
                    >
                        {dayjs(item.date).fromNow()}
                    </div>
                </div>
            </div>
        </button>
    )
}