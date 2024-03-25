import { Separator } from "@/components/ui/separator";
import { SideBarLink, SideBarSectionLink } from "@/components/layout/sidebar-nav";
import {
    ResizablePanel
} from "@/components/ui/resizable"
import { links, sectionlinks } from "../data/section-data";

export const LeftSidebar = () => {
    return (
        <>
            <SideBarLink
                isCollapsed={false}
                links={links} />
            <Separator />
            <SideBarSectionLink isCollapsed={false}
                links={sectionlinks.slice(1)} />
        </>
    )
}