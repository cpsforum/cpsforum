'use client'

import { Button } from "@/components/ui/button"
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react"
import { handleLogin, handleLogout } from "@/service/msal/msal"
import React from "react";

function AccountArea() {
  return (
    <>
      <UnauthenticatedTemplate>
        <Button size={"sm"} onClick={() => handleLogin("redirect")}>
          Entrar
        </Button>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <Button size="sm" onClick={() => handleLogout("redirect")}>
          Sair
        </Button>
      </AuthenticatedTemplate>
    </>
  )
}

export default AccountArea