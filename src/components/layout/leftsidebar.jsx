import { Separator } from "@/components/ui/separator";
import { SideBarLink, SideBarSectionLink } from "@/components/layout/sidebar-nav";
import { useParams } from "next/navigation";
import {
    ResizablePanel
} from "@/components/ui/resizable"
import { links, sectionlinks } from "../data/section-data";

export const LeftSidebar = () => {
    return (
        <ResizablePanel className="max-h-full top-0 left-0 sticky !overflow-y-auto no-scrollbar" minSize={14} defaultSize={17}>
            <SideBarLink
                isCollapsed={false}
                links={links} />
            <Separator />
            <SideBarSectionLink isCollapsed={false}
                links={sectionlinks.slice(1)} />
        </ResizablePanel >
    )
}