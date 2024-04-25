'use client'

import React, { useEffect } from "react";
import { getToken, initializeMsal, msalInstance } from "@/service/msal/msal";
import { MsalProvider } from "@azure/msal-react"

export var [initialized, setInitialized] = ''

export default function MyMsalProvider({children}) {
    [initialized, setInitialized] = React.useState(false)
    useEffect(() => {
        initializeMsal()
    }, []);

    return (
        <MsalProvider instance={msalInstance}>
            {children}
        </MsalProvider>
    );
};