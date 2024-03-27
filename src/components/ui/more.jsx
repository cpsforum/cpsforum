import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { DotIcon, FlagIcon, PencilIcon } from "lucide-react"

export default function More({ }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="hover:text-muted-foreground" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    </svg>
                </button>
            </PopoverTrigger>
            <PopoverContent side={"left"} align={"start"} className="w-40">
                <div className="grid gap-4">
                    <div className="flex gap-2">
                        <PencilIcon size={15} />
                        <Label>Editar</Label>
                    </div>
                    <div className="flex gap-2">
                        <FlagIcon size={15} />
                        <Label>Reportar</Label>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}