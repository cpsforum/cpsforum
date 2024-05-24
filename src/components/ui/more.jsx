import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { EllipsisVertical } from "lucide-react"

export default function More({children}) {
    return (
        <Popover>
            <PopoverTrigger>
                <EllipsisVertical className="hover:text-muted-foreground" size={17}/>
            </PopoverTrigger>
            <PopoverContent side={"left"} align={"start"} className="w-40">
                <div className="grid gap-4">
                    {children}
                </div>
            </PopoverContent>
        </Popover>
    )
}