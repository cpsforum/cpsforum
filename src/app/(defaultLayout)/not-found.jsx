"use client"

import React from "react"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import Spinner from '@/components/ui/spinner'
import Image from 'next/image'

export default function NotFound() {
    const [isLoading, setIsLoading] = React.useState(false)
    const router = useRouter()

    const onClick = () => {
        setIsLoading(true)

        router.push('/')
    }

    return (
        <div className='grid items-center justify-center content-center h-screen bg-[url(/bg404.png)] bg-center bg-cover animated-bg overflow-y-hidden absolute w-full'>
            <Card className='grid py-16 px-8 rounded-[1rem] border-none text-white backdrop-blur-md bg-black/20 d-flex justify-items-around flex-col'>
                <div className='flex justify-center content-start d-flex'>
                    <Image
                        src="/favicon-white.svg"
                        width={75}
                        height={75}
                        alt="cps error"
                        className="my-8"
                    />
                </div>
                <h2 className='text-[1.5rem] mb-[1.5rem]'>
                    Oops! Código 404
                </h2>
                <p>
                    Perdoe-nos, parece que encontramos um erro.
                </p>
                <Button onClick={onClick} className="relative bg-sky-700 hover:bg-sky-800 mt-[1rem]" disabled={isLoading}>
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        'RETORNAR À HOME'
                    )}
                </Button>
            </Card>
        </div>
    )
}