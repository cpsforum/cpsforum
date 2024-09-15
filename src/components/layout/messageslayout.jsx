'use client'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { TooltipProvider } from "../ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area"
import { LeftSidebar } from "@/components/layout/leftsidebar";
import RightSidebar from "./rightsidebar";
import React from "react";
import PageTitle from "./pagetitle";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";


const MessagesLayout = ({ children }) => {
    const { groupid } = useParams();
    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                className={"max-h-[calc(100vh-3.5rem)]"}
                direction="horizontal"
            >
                <ResizablePanel className="max-h-full hidden lg:block top-0 left-0 sticky !overflow-y-auto no-scrollbar"
                    collapsible
                    collapsedSize={4}
                    minSize={4}
                    defaultSize={4}>
                    <LeftSidebar isCollapsed={true} />
                </ResizablePanel>
                <ResizableHandle className={"hidden lg:flex"} withHandle />
                <ResizablePanel className={cn("max-h-full", groupid && 'hidden lg:block')} minSize={20} defaultSize={35}>
                    <ScrollArea className="h-full px-4">
                        <PageTitle title="Mensagens" className="flex" ncb/>
                    </ScrollArea>
                </ResizablePanel>
                <ResizableHandle className={"hidden lg:flex"} withHandle />
                <ResizablePanel className={cn("max-h-full px-3 top-0 left-0 sticky !overflow-y-auto no-scrollbar", !groupid && 'hidden lg:block')} defaultSize={61}>
                    {children}
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    )
}

export default MessagesLayout