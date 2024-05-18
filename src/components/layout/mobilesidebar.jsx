import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LeftSidebar } from "./leftsidebar";
import { Logo } from "@/components/header/header";

export default function MobileSidebar({ className, ...props }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className={cn("shrink-0", className)} {...props}>
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Abrir menu lateral</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="overflow-auto no-scrollbar" >
                <Logo className={"mx-4 h-8 object-cover"}/>
                <LeftSidebar />
            </SheetContent>
        </Sheet>
    )
}