import { MessageCircleIcon } from "lucide-react";

export default function ChatPage(){
    return(
        <div className="hidden lg:flex w-full h-full justify-center items-center">
            <div className="flex items-center flex-col">
                <MessageCircleIcon strokeWidth={0.4} size={300}/>
                <h1 className="text-2xl font-bold">Mensagens</h1>
                <h2 className="text-md text-muted-foreground">Selecione uma conversa para abrir o chat</h2>
            </div>
        </div>
    )
}