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


const MessagesLayout = ({ children }) => {
    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                className={"!h-[calc(100vh-3.5rem)]"}
                direction="horizontal"
            >
                <ResizablePanel className="max-h-full top-0 left-0 sticky !overflow-y-auto no-scrollbar"
                    collapsible
                    collapsedSize={5}
                    minSize={5}
                    maxSize={5}
                    defaultSize={5}>
                    <LeftSidebar isCollapsed={true} />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel className="max-h-full" minSize={20} defaultSize={35}>
                    <ScrollArea className="h-full px-4">
                        <PageTitle title="Mensagens" className="flex" ncb/>
                    </ScrollArea>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel className="max-h-full px-3 top-0 left-0 sticky !overflow-y-auto no-scrollbar" defaultSize={60}>
                    {children}
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    )
}

export default MessagesLayout