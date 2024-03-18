'use client'

import { Button } from "@/components/ui/button"
import { useIsAuthenticated } from "@azure/msal-react"
import { handleLogin, handleLogout } from "@/service/msal/msal"
import { buttonVariants } from "@/components/ui/button"
import React from "react";
import Link from "next/link"

function AccountArea() {
  const isAuthenticated = useIsAuthenticated()
  return (
    isAuthenticated ? (
      <Button size="sm" onClick={() => handleLogout("redirect")}>
        Sair
      </Button>
    ) : (
      <Link href={'sign-in'}>
        Entrar
      </Link>
    )
  )
}

export default AccountArea