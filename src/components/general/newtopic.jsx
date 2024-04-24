import { PenBoxIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function NewTopicButton() {
    return (
        <Link href={'/criar'} className={cn(buttonVariants())}>
            <PenBoxIcon size={15} className="mr-2" />Novo tópico
        </Link>
    )
}