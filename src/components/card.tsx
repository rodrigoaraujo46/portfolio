import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

function Card({ children, className }: { children?: ReactNode, className?: string }) {
    return (
        <div className={cn(`flex flex-col gap-4 bg-card filter text-card-foreground
             inset-shadow-black/40 inset-shadow-2xs rounded-2xl p-6`, className)}>
            {children}
        </div>
    )
}

function CardTitle({ children }: { children?: ReactNode }) {
    return (
        <h3 className="text-xl">
            {children}
        </h3>
    )
}

function CardDescription({ children }: { children?: ReactNode }) {
    return (
        <p className="text-md">
            {children}
        </p>
    )
}



function CardContent({ children }: { children?: ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

export default Card;
export { CardTitle, CardDescription, CardContent };
