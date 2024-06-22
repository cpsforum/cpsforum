'use client'

import React from "react"
import { Button } from "@/components/ui/button"
import Spinner from "@/components/ui/spinner"
import { SignIn } from "@/lib/auth-action"

export default function SignInButton() {
    const [isLoading, setIsLoading] = React.useState(false)
    const handleSubmit = () => {
        setIsLoading(true)
        SignIn()
    }
    return (
        <Button disabled={isLoading} onClick={handleSubmit} className={"bg-sky-700 text-foreground relative hover:bg-sky-800 text-white"}>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    <svg viewBox="6.962 11.584 14 14.035" className="mr-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14.035">
                        <path d="M6.962 11.592h6.757v6.78H6.962z" fill="#f65314" />
                        <path d="M14.129 11.584h6.757v6.78H14.129z" fill="#7cbb00" />
                        <path d="M6.962 18.839h6.757v6.78H6.962z" fill="#00a1f1" />
                        <path d="M14.205 18.839h6.757v6.78h-6.757z" fill="#fb0" />
                    </svg>
                    Entrar com e-mail institucional
                </>
            )}
        </Button>
    )
}