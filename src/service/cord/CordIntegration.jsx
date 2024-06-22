'use client'

import { CordProvider, Thread } from "@cord-sdk/react";
import React from "react";
import { getCordClientAuthToken } from "@/service/cord/cordTokenFetcher";
import Spinner from "@/components/ui/spinner";
import { resources } from "./translation";
import { useSession } from "next-auth/react";

export default async function CordIntegration({ groupid }) {
    
    const session = useSession()

    const [clientAuthToken, setClientAuthToken] = React.useState(false);
    const [notFound, setNotFound] = React.useState(false)

    async function setData() {
        getCordClientAuthToken(session).then((token) => {
            setClientAuthToken(token.clientAuthToken);
        });
    }
    return (
        clientAuthToken ? (
            notFound ? (
                <div className="flex flex-col items-center w-full h-full justify-center">
                    <h1 className="text-xl font-semibold">Não foi possível carregar a conversa.</h1>
                    <h2 className="text-md text-muted-foreground">Tente novamente mais tarde.</h2>
                </div>
            ) :
                (
                    <CordProvider translations={resources} onInitError={() => setNotFound(true)} clientAuthToken={clientAuthToken}>
                        <Thread composerExpanded className="h-full" threadId={groupid} groupId={groupid} />
                    </CordProvider>
                )
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