'use client'

import { Button } from "@/components/ui/button"
import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal } from "@azure/msal-react"
import { callMsGraph } from "@/service/msal/graph"
import { handleLogin } from "@/service/msal/msal"
import React from "react";
import { call } from "@mdxeditor/editor"

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