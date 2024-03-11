"use client"

import './globals.css'

import * as React from "react"

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

    router.push('/forum')
  }

  return (
    <div className='grid items-center justify-center content-center h-screen bg-[url(/rose-petals.svg)] bg-center bg-cover'>
      <Card className='grid p-10 rounded-[1rem] bg-stone-800 border-none text-white'>
        <div className='flex justify-center content-start'>
          <Image
            src="/favicon.png"
            width={100}
            height={100}
            alt="cps error"
          />
        </div>
        <h2 className='text-[1.5rem] mb-[1.5rem]'>
          Oops! Código 404
        </h2>
        <p>
          Perdoe-nos, parece que encontramos um erro.
        </p>
        <Button onClick={onClick} className='mt-[1rem]' disabled={isLoading}>
          {isLoading ? (
            <Spinner className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            'RETORNAR À HOME'
          )}
        </Button>
      </Card>
    </div>
  )
}