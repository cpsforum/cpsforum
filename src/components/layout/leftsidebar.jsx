import { Separator } from "@/components/ui/separator";
import { SideBarLink, SideBarSectionLink } from "@/components/layout/sidebar-nav";
import {
    ResizablePanel
} from "@/components/ui/resizable"
import { links, materialsLinks, sectionlinks } from "../data/section-data";

export const LeftSidebar = ({ isMaterials }) => {
    return (
        <>
            <SideBarLink
                isCollapsed={false}
                links={links} />
            <Separator />
            <SideBarSectionLink
                isCollapsed={false}
                links={isMaterials ? materialsLinks.slice(1) : sectionlinks.slice(1)} 
            />
            {/*test*/}
        </>
    )
}