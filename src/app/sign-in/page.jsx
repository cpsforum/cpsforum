import Image from "next/image"
import Link from "next/link"
import SignInButton from "@/components/signin/signinbutton"

export const metadata = {
    title: "Authentication",
    description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {
    return (
        <div className="container relative h-[calc(100vh-3.5rem)] flex-col items-center lg:justify-center flex column pt-32 lg:pt-0 space-y-6 lg:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="relative w-full h-32 lg:h-full flex-col bg-muted lg:p-10 text-white lg:flex dark:border-r">
                <Image alt="Fórum Centro Paula Souza" width={1280} height={854} className="absolute top-0 left-0 w-full h-full object-cover" src={"https://d2caspv51kzhac.cloudfront.net/forumsigninpagebanner.png"}>
                </Image>
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Entre em sua conta
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Para acessar o fórum, entre com seu e-mail institucional.
                        </p>
                    </div>
                    <SignInButton />
                    <div className="px-4 text-center text-sm text-muted-foreground">
                        Ao clicar em entrar, você concorda com os&nbsp;
                        <Link
                            href="/terms"
                            className="underline underline-offset-4 hover:text-foreground"
                        >
                            Termos de Uso
                        </Link>
                        &nbsp;e a&nbsp;
                        <Link
                            href="/privacy"
                            className="underline underline-offset-4 hover:text-foreground"
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