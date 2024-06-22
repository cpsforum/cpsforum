import { auth } from "@/../auth"
import { redirect } from "next/navigation"

export const metadata = {
    title: "Entrar",
    description: "Entre em sua conta utilizando o e-mail institucional",
}

export default async function Authentication({children}){
    const session = await auth()
    if (session) {
        redirect('/')
    }
    return children
}