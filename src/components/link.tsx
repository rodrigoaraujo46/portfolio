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
            className={cn(
                "transition-transform hover:scale-110 hover:text-rose focus:scale-110 focus:text-rose dark:focus:text-foam dark:hover:text-foam",
                className,
            )}
            target={target}
            rel={rel}
            {...props}
        >
            {children}
        </a>
    ) : (
        <Tooltip asChild tip={title}>
            <a
                className={cn(
                    "transition-transform hover:scale-110 hover:text-rose focus:scale-110 focus:text-rose dark:focus:text-foam dark:hover:text-foam",
                    className,
                )}
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
