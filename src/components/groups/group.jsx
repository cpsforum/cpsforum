'use client'

import { cn } from "@/lib/utils"
import More from "@/components/ui/more"
import Link from "next/link"
import { GroupMessage, GroupUser } from "@/components/data/groups"
import Image from "next/image"

export const Group = ({ item }) => {
    const userCount = GroupUser.filter(user => user.groupid === item.id).length;
    const messages = GroupMessage.filter(msg => msg.groupid === item.id)
    return (
        <div key={item.id} className="flex gap-2 transition-all bg-secondary border rounded-lg p-3">
            <div className="w-20 h-20 relative rounded-md overflow-hidden">
                <Image src={item.pic} alt={item.name} fill objectFit="cover" />
            </div>
            <div className={cn("flex flex-col items-start gap-2 text-left text-sm")}>
                <div className="flex w-full flex-col">
                    <Link
                        href={`/grupos/${item.id}/`}
                        className="flex items-center text-base">
                        <div className="flex items-center gap-2">
                            <div className="font-semibold">{item.name}</div>
                        </div>
                    </Link>
                    <div className="text-xs">
                        <label className="text-muted-foreground">
                            {userCount}&nbsp;membros
                        </label>
                        &nbsp;·&nbsp;
                        <Link className="hover:text-muted-foreground" href={`/grupos/${item.id}/`}>{messages.length}&nbsp;mensagens não lidas</Link>
                    </div>
                </div>
            </div>
            <div className={"ml-auto"}>
                <More>
                    <span>A</span>
                </More>
            </div>
        </div>
    )
}