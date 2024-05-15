'use client'

import CordIntegration from "@/service/cord/CordIntegration"
import { useParams } from "next/navigation"

export default function ChatPage(){
    const {groupid} = useParams();
    return(
        <CordIntegration groupid={groupid} />
    )
}