'use client'

import { buttonVariants } from "@/components/ui/button"
import { useIsAuthenticated } from "@azure/msal-react"
import React from "react";
import Link from "next/link"
import { initialized } from "@/service/msal/MyMsalProvider"
import AccountButton from "./accountBtn"
import { RequestProfileData } from "@/service/msal/graph"

function AccountArea() {
  const [graphData, setGraphData] = React.useState(null);
  const [picurl, setPicurl] = React.useState(null);

  async function setData() {
    const { graphData, url } = await RequestProfileData();
    setGraphData(graphData);
    setPicurl(url);
  }

  const isAuthenticated = useIsAuthenticated()

  React.useEffect(() => {
    if (isAuthenticated && initialized == true) {
      setData()
    }
  }, [isAuthenticated, initialized]);

  return (
    isAuthenticated ? (
      <AccountButton picurl={picurl} graphData={graphData} />
    ) : (
      <Link title="Entre em sua conta" href={'/sign-in'} className="h-8 w-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" stroke="hsl(var(--foreground))">
          <g className="mectrl_stroke" strokeWidth="1.9" fill="none">
            <circle cx="32" cy="32" r="30.25" />
            <g transform="matrix(1.1 0 0 1.1 8.8 5.61)">
              <circle className="mectrl_stroke" cx="20" cy="16" r="7" />
              <path className="mectrl_stroke" d="M30 35h10m-5-5v10m-4.167-7.91A11 11 0 0 0 9 34" />
            </g>
          </g>
        </svg>
      </Link>
    )
  )
}

export default AccountArea