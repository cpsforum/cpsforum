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


const MainLayout = ({ children }) => {
    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                className={"max-h-[calc(100vh-3.5rem)]"}
                direction="horizontal"
            >
                <ResizablePanel className="max-h-full top-0 left-0 sticky !overflow-y-auto no-scrollbar" minSize={14} defaultSize={17}>
                    <LeftSidebar />
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