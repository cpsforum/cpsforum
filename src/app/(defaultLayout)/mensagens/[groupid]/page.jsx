import CordIntegration from "@/service/cord/CordIntegration"

export default function ChatPage({params}){
    return(
        <CordIntegration groupid={params.groupid} />
    )
}