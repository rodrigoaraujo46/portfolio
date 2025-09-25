import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Tooltip from "./ui/tooltip";

function Link({
    children,
    title,
    className,
    target = "_blank",
    rel = "noopener noreferrer",
    ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
    return title === undefined ? (
        <a
            className={cn("hover:scale-110 focus:scale-110", className)}
            target={target}
            rel={rel}
            {...props}
        >
            {children}
        </a>
    ) : (
        <Tooltip asChild tip={title}>
            <a
                className={cn("hover:scale-110 focus:scale-110", className)}
                target={target}
                rel={rel}
                {...props}
            >
                {children}
            </a>
        </Tooltip>
    );
}

export default Link;
