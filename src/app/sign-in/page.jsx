"use client"

import Image from "next/image"
import Link from "next/link"
import UserForm from "@/components/authUser/user-auth-form"

export default function SignIn() {
    return (
        <div className="max-h-[calc(100vh-3.5rem)] md:grid lg:max-w-none lg:px-0 grid-cols-[70%_minmax(30%,_1fr)] bg-stone-800">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                <div className="absolute inset-0 bg-cover bg-center bg-origin-content bg-[url(/rose-petals.svg)]" />
            </div>
            <div className="container grid grid-cols-1 justify-center">
                <div className="grid content-start justify-center">
                    <Image
                        src="/logoImgCPS.png"
                        width={200}
                        height={200}
                        alt="Forum CPS"
                    />
                </div>
                <div className="flex justify-around flex-col space-y-2 text-center">
                    <h1 className="font-semibold text-white text-[1.5rem] animate-pulse">
                        Acesse sua conta
                    </h1>
                    <UserForm />
                </div>
                <div className="grid content-end text-[15px] justify-center">
                    <p className="p-8 align-center text-sm text-muted-foreground text-slate-300 mt-[1rem]">
                        <Link
                            href="/terms"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            {" "}Termos de Uso
                        </Link>
                        {" "} | {" "}
                        <Link
                            href="/privacy"
                            className="underline underline-offset-4 hover:text-primary"
                        >
                            Política de Privacidade
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}