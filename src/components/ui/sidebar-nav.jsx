import * as React from "react"
import { LucideIcon } from "lucide-react"
import { cva } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useParams } from "next/navigation";

const buttonVariants = cva(
  "inline-flex whitespace-wrap w-full items-center align-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "py-1.5 rounded-md px-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "ghost",
      size: "default",
    },
  }
)

const SideBarLink = React.forwardRef(({ links, isCollapsed, className, variant, size, ...props }, ref) => {
  const { slug } = useParams()
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex w-full flex-col gap-4 py-8 px-3 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={`/forum/${link.slug}`}
                  className={cn(
                    buttonVariants({ variant: link.variant == "default" || slug == link.slug ? "default" : "ghost", size: "icon" }),
                    "h-9 w-9 justify-center",
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={`/forum/${link.slug}`}
              className={cn(
                buttonVariants({ variant: link.variant == "default" || slug == link.slug ? "default" : "ghost", size: "sm" }),
                "justify-start"
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                    "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
    </div>
  );
})

const SideBarSectionLink = React.forwardRef(({ links, isCollapsed, className, variant, size, ...props }, ref) => {
  const { slug } = useParams()
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex w-full flex-col gap-4 py-6 px-3 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          <div className="py-2">
            {
              isCollapsed ? (
                <Tooltip key={index} delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={`/forum/${link.slug}`}
                      className={cn(
                        buttonVariants({ variant: link.variant, size: "icon" }),
                        "h-9 w-9 inline-flex w-full items-center align-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                      )}
                    >
                      <link.icon className="h-4 w-4" />
                      <span className="sr-only">{link.title}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="flex items-center gap-4">
                    {link.title}
                    {link.label && (
                      <span className="ml-auto text-muted-foreground">
                        {link.label}
                      </span>
                    )}
                  </TooltipContent>
                </Tooltip>
              ) : (
                <div>
                  <span
                    key={index}
                    className={cn(
                      "inline-flex w-full items-center justify-start align-center whitespace-wrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                      "justify-start px-3 py-1"
                    )}
                  >
                    {link.title}
                    {link.label && (
                      <span
                        className={cn(
                          "ml-auto"
                        )}
                      >
                        {link.label}
                      </span>
                    )}
                  </span>
                  {link.sections.map((section, sindex) =>
                    <Link href={`/forum/${section.slug}`}
                      key={index+'-'+sindex}
                      className={
                        cn(
                          buttonVariants({ variant: slug == section.slug ? "default" : "ghost", size: "default" }),
                          "text-muted-foreground",
                          slug == section.slug &&
                          "text-white",                          
                        )
                      }>
                      {section.title}
                    </Link>
                  )}
                </div>
              )
            }
          </div>
        )}
      </nav>
    </div>
  );
})

SideBarLink.displayName = "Button"

export { SideBarLink, SideBarSectionLink, buttonVariants }
