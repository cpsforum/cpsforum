'use client'

import { CordProvider, Thread } from "@cord-sdk/react";
import { RequestProfileData } from "@/service/msal/graph";
import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { initialized } from "@/service/msal/MyMsalProvider";
import { getCordClientAuthToken } from "@/service/cord/cordTokenFetcher";
import Spinner from "@/components/ui/spinner";

export default function CordIntegration({groupid}) {
    const [clientAuthToken, setClientAuthToken] = React.useState(false);

    async function setData() {
        const { graphData, url } = await RequestProfileData();
        getCordClientAuthToken(graphData).then((token) => {
            setClientAuthToken(token.clientAuthToken);
        });
    }

    const isAuthenticated = useIsAuthenticated()
    React.useEffect(() => {
        if (isAuthenticated && initialized == true) {
            setData()
        }
    }, [isAuthenticated, initialized]);

    return (
        clientAuthToken ? (
            <CordProvider clientAuthToken={clientAuthToken}>
                <Thread composerExpanded className="h-full" threadId={groupid} groupId={groupid} />
            </CordProvider>
        )
            :
            (
                <div className="w-full h-full flex justify-center items-center">
                    <div className="flex items-center flex-col">
                        <Spinner />
                    </div>
                </div>
            )

    );
}