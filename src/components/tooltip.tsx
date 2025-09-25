import type { ReactNode } from "react";

export default function Tooltip({
    tip,
    children,
}: {
    tip: string;
    children: ReactNode;
}) {
    return (
        <div className="relative inline-flex">
            <div className="peer">{children}</div>
            <div
                role="tooltip"
                className="-top-9 -translate-x-1/2 pointer-events-none absolute left-1/2 translate-y-1 rounded-4xl bg-popover px-2 pt-[5px] pb-[6px] text-popover-foreground text-xs opacity-0 transition-all duration-300 ease-out peer-hover:translate-y-0 peer-hover:scale-100 peer-hover:opacity-100 peer-focus:translate-y-0 peer-focus:scale-100 peer-focus:opacity-100"
            >
                {tip}
                <div className="-translate-x-1/2 absolute top-full left-1/2 h-0 w-0 border-t-4 border-t-popover border-r-4 border-r-transparent border-l-4 border-l-transparent"></div>
            </div>
        </div>
    );
}
