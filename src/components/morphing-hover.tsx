"use client";

import { useRef, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

const morphTime = 1;

interface HoverMorphTextProps {
    textNormal: string;
    textHover: string;
    className?: string;
    textClassName?: string;
}

export const MorphingHover: React.FC<HoverMorphTextProps> = ({
    textNormal,
    textHover,
    className,
}) => {
    // Refs
    const text1Ref = useRef<HTMLSpanElement>(null);
    const text2Ref = useRef<HTMLSpanElement>(null);
    const animRef = useRef<number | null>(null);
    const progressRef = useRef(0); // 0 = normal, 1 = hover

    // Initialize text content and styles
    useEffect(() => {
        const text1 = text1Ref.current;
        const text2 = text2Ref.current;
        if (!text1 || !text2) return;

        text1.textContent = textNormal;
        text2.textContent = textHover;

        text1.style.opacity = "100%";
        text1.style.filter = "none";

        text2.style.opacity = "0%";
        text2.style.filter = "none";
    }, [textNormal, textHover]);

    // Morphing function
    const morph = useCallback((hovering: boolean) => {
        const text1 = text1Ref.current;
        const text2 = text2Ref.current;
        if (!text1 || !text2) return;

        const container = text1.parentElement as HTMLElement;
        container.style.filter = "url(#threshold)";

        const startProgress = progressRef.current;
        const targetProgress = hovering ? 1 : 0;
        const direction = targetProgress > startProgress ? 1 : -1;

        let startTime: number | null = null;

        if (animRef.current) cancelAnimationFrame(animRef.current);

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = (timestamp - startTime) / 1000;
            let fraction = startProgress + direction * (elapsed / morphTime);
            fraction = Math.max(0, Math.min(1, fraction));
            progressRef.current = fraction;

            // Update styles
            const fractionSafe = Math.max(fraction, 0.01);
            const inverted = 1 - fraction;

            text2.style.filter = `blur(${Math.min(8 / fractionSafe - 8, 100)}px)`;
            text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            text1.style.filter = `blur(${Math.min(8 / Math.max(inverted, 0.01) - 8, 100)}px)`;
            text1.style.opacity = `${Math.pow(inverted, 0.4) * 100}%`;

            if ((direction === 1 && fraction < targetProgress) || (direction === -1 && fraction > targetProgress)) {
                animRef.current = requestAnimationFrame(animate);
            } else {
                animRef.current = null;
                progressRef.current = targetProgress;
                container.style.filter = "none";
            }
        };

        animRef.current = requestAnimationFrame(animate);
    }, []);

    // Render
    return (
        <span
            className={cn("relative inline-block", className)}
            onMouseEnter={() => morph(true)}
            onMouseLeave={() => morph(false)}
        >
            <span
                ref={text1Ref}
            />
            <span
                ref={text2Ref}
                className="absolute inset-0"
            />

            <svg id="filters" className="fixed h-0 w-0" preserveAspectRatio="xMidYMid slice">
                <defs>
                    <filter id="threshold">
                        <feColorMatrix
                            in="SourceGraphic"
                            type="matrix"
                            values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
                        />
                    </filter>
                </defs>
            </svg>
        </span>
    );
};
