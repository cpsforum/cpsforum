'use client'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { TooltipProvider } from "../ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area"
import { LeftSidebar } from "@/components/layout/leftsidebar";

const MaterialsLayout = ({ children }) => {
    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                className={"max-h-[calc(100vh-3.5rem)]"}
                direction="horizontal"
            >
                <LeftSidebar />
                <ResizableHandle withHandle />
                <ResizablePanel className="max-h-full" defaultSize={63}>
                    <ScrollArea className="h-full">
                        {children}
                    </ScrollArea>
                </ResizablePanel>
                <ResizableHandle withHandle />
            </ResizablePanelGroup>
        </TooltipProvider>
    )
}

export default MaterialsLayout