import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export default function More({children}) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="hover:text-muted-foreground" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                    </svg>
                </button>
            </PopoverTrigger>
            <PopoverContent side={"left"} align={"start"} className="w-40">
                <div className="grid gap-4">
                    {children}
                </div>
            </PopoverContent>
        </Popover>
    )
}