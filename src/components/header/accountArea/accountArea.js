'use client'

import { Button, buttonVariants } from "@/components/ui/button"
import { useIsAuthenticated } from "@azure/msal-react"
import { handleLogin, handleLogout } from "@/service/msal/msal"
import { callMsGraph } from "@/service/msal/graph"
import { useMsal } from "@azure/msal-react"
import React from "react";
import Link from "next/link"
import { loginRequest } from "@/service/msal/authConfig";

function AccountArea() {
  // const { instance, accounts } = useMsal();
  // const [graphData, setGraphData] = React.useState(null);
  // const [picurl, setPicurl] = React.useState(null);

  // function RequestProfileData() {
  //   // Silently acquires an access token which is then attached to a request for MS Graph data
  //   instance.acquireTokenSilent({
  //     ...loginRequest,
  //     account: accounts[0],
  //   })
  //     .then((response) => {
  //       callMsGraph(response.accessToken).then(response => setGraphData(response));
  //       // callMsGraphPhoto(response.accessToken).then(response => response.blob())
  //       //   .then(blob => {
  //       //     const url = URL.createObjectURL(blob);
  //       //     setPicurl(url);
  //       //   });

  //     });
  // }
  
  const isAuthenticated = useIsAuthenticated()

  // React.useEffect(() => {
  //   if (isAuthenticated && instance) {
  //     RequestProfileData();
  //   }
  // }, [isAuthenticated]);

  return (
    isAuthenticated ? (
      <Button size="sm" onClick={() => handleLogout("redirect")}>
        Sair
      </Button>
    ) : (
      <Link className={buttonVariants() + " h-8 px-4 py-2"} href={'/sign-in'}>
        Entrar
      </Link>
    )
  )
}

export default AccountArea