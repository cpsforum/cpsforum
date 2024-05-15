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


const MainLayout = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false)
    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                className={"max-h-[calc(100vh-3.5rem)]"}
                direction="horizontal"
            >
                <ResizablePanel className="max-h-full top-0 left-0 sticky !overflow-y-auto no-scrollbar"
                    onCollapse={() => {
                        setIsCollapsed(true)
                        document.cookie = `left-react-resizable-panels:collapsed=true`
                    }}
                    onExpand={() => {
                        setIsCollapsed(false)
                        document.cookie = `left-react-resizable-panels:collapsed=false`
                    }}
                    collapsible
                    collapsedSize={5}
                    minSize={14}
                    defaultSize={17}>
                    <LeftSidebar isCollapsed={isCollapsed} />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel className="max-h-full" defaultSize={63}>
                    <ScrollArea className="h-full px-4">
                        {children}
                    </ScrollArea>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel className="max-h-full px-3 top-0 left-0 sticky !overflow-y-auto no-scrollbar" defaultSize={20}>
                    <RightSidebar />
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    )
}

export default MainLayout