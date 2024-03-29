'use client'

import Image from "next/image"
import Link from "next/link"
import SignInButton from "@/components/signin/signinbutton"
import { useIsAuthenticated } from "@azure/msal-react"
import { redirect } from "next/navigation"

export default function AuthenticationPage() {
    const isAuthenticated = useIsAuthenticated()
    if (isAuthenticated) {
        redirect('/')
    }

    return (
        <div className="relative h-screen grid grid-cols-[70%_minmax(30%,_1fr)] bg-stone-800">
            <div className="relative hidden h-screen lg:flex flex-col">
                <div className="absolute inset-0 bg-cover bg-center bg-origin-content bg-[url(/auth.webp)]" />
            </div>
            <div className="grid lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 lg:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center text-white">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Entre em sua conta
                        </h1>
                        <p className="text-sm">
                            Para acessar o fórum, entre com seu e-mail institucional.
                        </p>
                    </div>
                    <SignInButton />
                    <div className="px-4 text-center text-sm text-white">
                        Ao clicar em entrar, você concorda com os&nbsp;
                        <Link
                            href="/terms"
                            className="hover:text-zinc-300 underline"
                        >
                            Termos de Uso
                        </Link>
                        &nbsp;e a&nbsp;
                        <Link
                            href="/privacy"
                            className="hover:text-zinc-300 underline"
                        >
                            Política de Privacidade
                        </Link>
                        .
                    </div>
                </div>
            </div>
        </div>
    )
}