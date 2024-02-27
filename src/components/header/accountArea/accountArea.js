'use client'

import { Button } from "@/components/ui/button"
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react"
import { handleLogin } from "@/service/msal/msal"
import React from "react";

function AccountArea() {
  return (
    <>
      <UnauthenticatedTemplate>
        <Button onClick={() => handleLogin("redirect")}>
          Entrar
        </Button>
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <div>
          Logado
        </div>
      </AuthenticatedTemplate>
    </>
  )
}

export default AccountArea