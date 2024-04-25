import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOutIcon, PenBoxIcon, SettingsIcon, UserIcon } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { handleLogout } from "@/service/msal/msal";

export default function AccountButton({ picurl, graphData }) {
    return (
        graphData ?
            <Popover>
                <PopoverTrigger asChild>
                    <Avatar>
                        {picurl ?
                            <AvatarImage src={picurl} />
                            :
                            null
                        }
                        <AvatarFallback>
                            {graphData.givenName.charAt(0) + graphData.surname.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent side={"bottom"} align={"end"}>
                    <div className='flex flex-col mb-4'>
                        <h1 className="text-lg font-medium">{graphData.displayName}</h1>
                        <span className="text-sm text-muted-foreground">{graphData.mail}</span>
                    </div>
                    <div className="grid gap-2">
                        <Link href={'/criar'} className="flex gap-2">
                            <PenBoxIcon size={15} />
                            <span className="text-sm leading-none">Enviar mensagem</span>
                        </Link>
                        <Link href={'/perfil'} className="flex gap-2">
                            <UserIcon size={15} />
                            <span className="text-sm leading-none">Meu perfil</span>
                        </Link>
                        <Link href={'/configuracoes'} className="flex gap-2">
                            <SettingsIcon size={15} />
                            <span className="text-sm leading-none">Configurações</span>
                        </Link>
                        <button onClick={() => handleLogout('redirect')} className="outline-none flex gap-2">
                            <LogOutIcon size={15}/>
                            <span className="text-sm leading-none">Sair</span>
                        </button>
                    </div>
                </PopoverContent>
            </Popover>
            :
            null
    )
}