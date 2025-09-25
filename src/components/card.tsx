import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

function Card({
    children,
    className,
}: {
    children?: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                `inset-shadow-2xs inset-shadow-black/40 flex flex-col gap-4 rounded-2xl bg-card p-6 text-card-foreground filter`,
                className,
            )}
        >
            {children}
        </div>
    );
}

function CardTitle({ children }: { children?: ReactNode }) {
    return <h3 className="text-xl">{children}</h3>;
}

function CardDescription({ children }: { children?: ReactNode }) {
    return <p className="text-md">{children}</p>;
}

function CardContent({ children }: { children?: ReactNode }) {
    return <div>{children}</div>;
}

export default Card;
export { CardTitle, CardDescription, CardContent };
