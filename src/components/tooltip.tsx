import { type ReactNode } from "react";

export default function Tooltip({
    tip,
    children,
}: {
    tip: string,
    children: ReactNode
}) {
    return (
        <div className="relative inline-flex">
            <div className="peer">{children}</div>
            <div
                role="tooltip"
                className="absolute left-1/2 -translate-x-1/2 -top-9
                  bg-popover text-popover-foreground text-xs px-2 pt-[5px] pb-[6px] rounded-4xl
                  opacity-0 translate-y-1 scale-95
                  peer-hover:opacity-100 peer-hover:translate-y-0 peer-hover:scale-100
                  peer-focus:opacity-100 peer-focus:translate-y-0 peer-focus:scale-100
                  transition-all duration-300 ease-out pointer-events-none
                "
            >
                {tip}
                <div className="absolute left-1/2 top-full -translate-x-1/2 w-0 h-0
                  border-l-4 border-r-4 border-t-4
                  border-l-transparent border-r-transparent border-t-popover
                "></div>
            </div>
        </div>
    );
}
