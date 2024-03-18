'use client'

import { Button, buttonVariants } from "@/components/ui/button"
import { useIsAuthenticated } from "@azure/msal-react"
import { handleLogin, handleLogout } from "@/service/msal/msal"
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
      <Link className={buttonVariants() + " h-8 px-4 py-2"} href={'sign-in'}>
        Entrar
      </Link>
    )
  )
}

export default AccountArea