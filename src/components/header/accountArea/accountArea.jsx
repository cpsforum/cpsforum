'use client'

import { Button, buttonVariants } from "@/components/ui/button"
import { useIsAuthenticated } from "@azure/msal-react"
import { handleLogin, handleLogout } from "@/service/msal/msal"
import { callMsGraph, callMsGraphPhoto } from "@/service/msal/graph"
import { getToken } from "@/service/msal/msal"
import React from "react";
import Link from "next/link"
import { loginRequest } from "@/service/msal/authConfig";
import { msalInstance } from "@/service/msal/msal"
import { initialized } from "@/service/msal/MyMsalProvider"
import AccountButton from "./accountBtn"

function AccountArea() {
  const [graphData, setGraphData] = React.useState(null);
  const [picurl, setPicurl] = React.useState(null);

  async function RequestProfileData() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    await getToken()
      .then((response) => {
        callMsGraph(response).then(response => setGraphData(response));
        callMsGraphPhoto(response).then(response => response.blob())
          .then(blob => {
            const url = URL.createObjectURL(blob);
            setPicurl(url);
          });
      });
  }
  
  const isAuthenticated = useIsAuthenticated()

  React.useEffect(() => {
    if (isAuthenticated && initialized == true) {
      RequestProfileData();
    }
  }, [isAuthenticated, initialized]);

  return (
    isAuthenticated ? (
       <AccountButton picurl={picurl} graphData={graphData} />
    ) : (
      <Link className={buttonVariants() + " h-8 px-4 py-2"} href={'/sign-in'}>
        Entrar
      </Link>
    )
  )
}

export default AccountArea