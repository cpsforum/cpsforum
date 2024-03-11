import { dayjs } from "@/components/data/dayjs"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

export const Topic = ({ item }) => {
    return (
        <button
            key={item.id}
            className={cn(
                "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent"
            )}
        >
            <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                    <div className="flex items-center gap-2">
                        <div className="font-semibold">{item.subject}</div>
                        {!item.read && (
                            <span className="flex h-2 w-2 rounded-full bg-blue-600" />
                        )}
                    </div>
                    <div
                        title={item.date}
                        className={cn(
                            "text-muted-foreground ml-auto text-xs",
                        )}
                    >
                        {dayjs(item.date).fromNow()}
                    </div>
                </div>
                <div className="text-xs font-medium">{item.name}</div>
            </div>
            <div className="line-clamp-2 text-xs text-muted-foreground">
                {item.text.substring(0, 300)}
            </div>
            {item.labels.length ? (
                <div className="flex items-center gap-2">
                    {item.labels.map((label, i) => (
                        <Badge key={i} variant={getBadgeVariantFromLabel(label)}>
                            {label} 
                        </Badge>
                    ))}
                </div>
            ) : null}
        </button>
    )
}

function getBadgeVariantFromLabel(label) {
    if (["work"].includes(label.toLowerCase())) {
        return "default"
    }

    if (["personal"].includes(label.toLowerCase())) {
        return "outline"
    }

    return "secondary"
}