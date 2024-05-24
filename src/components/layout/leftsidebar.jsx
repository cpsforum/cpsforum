import { Separator } from "@/components/ui/separator";
import { SideBarLink, SideBarSectionLink } from "@/components/layout/sidebar-nav";
import {
    ResizablePanel
} from "@/components/ui/resizable"
import { links, materialsLinks, sectionlinks } from "../data/section-data";

export const LeftSidebar = ({isCollapsed, isMaterials }) => {
    return (
        <>
            <SideBarLink
                isCollapsed={isCollapsed}
                links={links} />
            {!isCollapsed && <Separator />}
            <SideBarSectionLink
                isCollapsed={isCollapsed}
                links={isMaterials ? materialsLinks.slice(0) : sectionlinks.slice(1)} 
            />
        </>
    )
}