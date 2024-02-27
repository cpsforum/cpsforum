'use client'

import { useEffect } from "react";
import { initializeMsal, msalInstance } from "@/service/msal/msal";
import { MsalProvider } from "@azure/msal-react"

export default function MyMsalProvider({children}) {
    useEffect(() => {
        initializeMsal();
    }, []);

    return (
        <MsalProvider instance={msalInstance}>
            {children}
        </MsalProvider>
    );
};