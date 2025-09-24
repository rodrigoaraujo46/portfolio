import type { ReactNode } from "react";
import { MorphingHover } from "./morphing-hover";
import ToggleTheme from "./theme-toggle";
import { FileUserIcon, Mails } from "lucide-react";
import { SiGithub, SiLeetcode } from "@icons-pack/react-simple-icons";
import Link from "./link";
import { Linkedin } from "./linkedin";

function Intro() {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex h-6 flex-row items-center justify-between">
                <p className="text-md font-bold sm:text-xl">Rodrigo Araújo</p>
                <ToggleTheme />
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[minmax(0,40%)_1fr]">
                <img
                    className="h-[30rem] w-full rounded-3xl object-cover object-center md:h-full"
                    src="https://wallpapers.com/images/hd/cool-michael-jordan-smoking-a-cigar-34krtybx095zjfp7.jpg"
                />
                <div className="grid grid-rows-[auto_auto_auto_auto_1fr] gap-8 text-center md:text-start">
                    <p className="text-lg font-bold sm:text-2xl">
                        {" "}
                        👋 Hi, I’m Rodrigo — I turn Caffeine ☕ into{" "}
                    </p>
                    <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
                        <GradientSpan>Full-Stack </GradientSpan>{" "}
                        <MorphingHover textNormal="Code" textHover="Bugs" />
                    </h1>
                    <p className="ml-[3px] text-xl font-bold sm:text-3xl">
                        Crafting <GradientSpan> fast </GradientSpan>
                        and <GradientSpan> reliable </GradientSpan>
                        apps that ship and scale.
                    </p>
                    <div className="mt-10 flex h-12 flex-row justify-center gap-5 md:ml-[4px] md:justify-start">
                        <Link
                            href="https://www.linkedin.com/in/rodrigoaraujo46/"
                            title="Linkedin"
                        >
                            <Linkedin className="h-full w-auto" />
                        </Link>
                        <Link href="https://github.com/rodrigoaraujo46" title="Github">
                            <SiGithub title="" className="h-full w-auto" />
                        </Link>
                        <Link
                            href="https://leetcode.com/u/rodrigoaraujo46/"
                            title="LeetCode"
                        >
                            <SiLeetcode title="" className="h-full w-auto" />
                        </Link>
                        <Link href="mailto:rodrigo46.dev@gmail.com" title="Email">
                            <Mails className="h-full w-auto" />
                        </Link>
                        <Link href="./assets/resume.pdf" title="Resume">
                            <FileUserIcon className="h-full w-auto" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function GradientSpan({ children }: { children: ReactNode }) {
    return (
        <span className="from-rose dark:from-foam to-love dark:to-pine bg-gradient-to-r bg-clip-text text-transparent">
            {children}
        </span>
    );
}

export default Intro;
