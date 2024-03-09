"use client"

import * as React from "react"

import Spinner from '@/components/ui/spinner'
import { Button } from "@/components/ui/button"
import { z } from "zod"

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export default function UserForm({ ...props }) {
  const [isLoading, setIsLoading] = React.useState(false)

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
        <div className="grid ">
          <Button disabled={isLoading}>
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