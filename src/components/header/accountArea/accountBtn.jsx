import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOutIcon, PenBoxIcon, SettingsIcon, UserIcon } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link";
import { useSession } from "next-auth/react";
import { SignOut } from "@/lib/auth-action";

export default function AccountButton() {
    const session = useSession();
    console.log(session)
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Avatar>
                    <AvatarImage src={session?.data?.user?.image} />
                    <AvatarFallback>
                        {session?.data?.user?.name.charAt(0)}
                    </AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent side={"bottom"} align={"end"}>
                <div className='flex flex-col mb-4'>
                    <h1 className="text-lg font-medium">{session?.data?.user?.name}</h1>
                    <span className="text-sm text-muted-foreground">{session?.data?.user?.email}</span>
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
                    <button onClick={() => SignOut()} className="outline-none flex gap-2">
                        <LogOutIcon size={15} />
                        <span className="text-sm leading-none">Sair</span>
                    </button>
                </div>
            </PopoverContent>
        </Popover>
    )
}