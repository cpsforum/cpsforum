'use client'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import { TooltipProvider } from "../ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area"
import { LeftSidebar } from "@/components/layout/leftsidebar";

const MainLayout = ({ children }) => {
    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                className={"max-h-[calc(100vh-3.5rem)]"}
                direction="horizontal"
            >
                <LeftSidebar />
                <ResizableHandle withHandle />
                <ResizablePanel className="max-h-full" defaultSize={63}>
                    <ScrollArea className="h-full px-4">
                        {children}
                    </ScrollArea>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel className="max-h-full sticky top-0 !overflow-y-auto no-scrollbar" defaultSize={20}>
                    <div className="flex h-[200px] items-center justify-center p-6">
                        <span className="font-semibold">Two</span>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    )
}

export default MainLayout