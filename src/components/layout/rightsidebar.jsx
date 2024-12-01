'use client'

import { Topic } from "@/components/data/topic-data";
import RecentFeed from "../feed/recentfeed";
import PageTitle from "./pagetitle";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useIsAuthenticated } from "@azure/msal-react";

export default function RightSidebar() {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <div>
                <PageTitle title="Seções seguidas" />
                <div className="my-4 flex items-center justify-between border rounded-lg text-xs font-semibold p-3">
                    {isAuthenticated ? (
                        <h2>Você ainda não segue nenhuma seção</h2>
                    ) : (
                        <>
                            <h2>Entre para ver suas seções seguidas</h2>
                            <Link
                                className={`${cn(buttonVariants())} text-xs h-6`}
                                href="/sign-in"
                            >
                                Entrar
                            </Link>
                        </>
                    )}
                </div>
            </div>
            <div>
                <PageTitle title="Tópicos mais recentes" />
                <RecentFeed items={Topic} />
            </div>
        </>
    );
}
