'use client'

import { Button } from "@/components/ui/button"
import { useIsAuthenticated } from "@azure/msal-react"
import { handleLogin, handleLogout } from "@/service/msal/msal"
import React from "react";

function AccountArea() {
  const isAuthenticated = useIsAuthenticated()
  return (
    isAuthenticated ? (
      <Button size="sm" onClick={() => handleLogout("redirect")}>
        Sair
      </Button>
    ) : (
      <Button size={"sm"} onClick={() => handleLogin("redirect")}>
        Entrar
      </Button>
    )
  )
}

export default AccountArea