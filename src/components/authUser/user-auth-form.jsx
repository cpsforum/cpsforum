"use client"

import * as React from "react"

import Spinner from '@/components/ui/spinner'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'


export default function UserForm({ ...props }) {
  const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()

  const onSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid">
          <Button onClick={() => router.push('/forum')} disabled={isLoading}>
            {isLoading ? (
              <Spinner className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              'Entrar'
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}