import { cn } from "@/lib/utils";
import { type AnchorHTMLAttributes } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export default function Link({
    children,
    title,
    className,
    target = "_blank",
    rel = "noopener noreferrer",
    ...props
}: LinkProps) {
    return (
        <div className="relative hover:scale-110">
            <a target={target} rel={rel} className={cn("peer dark:hover:text-foam hover:text-rose transition-colors", className)} {...props} >
                {children}
            </a>
            <div role="tooltip" className="absolute whitespace-nowrap left-1/2 -translate-x-1/2 -top-9 hidden bg-popover text-popover-foreground peer-hover:block peer-focus:block text-xs px-2 pt-[5px] pb-[6px] rounded-4xl">
                {title}
                <div className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0
                border-l-4 border-r-4 border-t-4
                border-l-transparent border-r-transparent border-t-popover"></div>
            </div>
        </div>
    );
}
