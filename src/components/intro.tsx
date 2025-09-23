import type { ReactNode } from "react"
import { MorphingHover } from "./morphing-hover"
import ToggleTheme from "./theme-toggle"
import { FileUserIcon, Github, Linkedin, Mails } from "lucide-react"
import { SiCss, SiDocker, SiFigma, SiGit, SiGithub, SiGo, SiJavascript, SiKubernetes, SiLeetcode, SiMongodb, SiPostgresql, SiPython, SiReact, SiRedis, SiSqlite, SiTailwindcss, SiTypescript } from "@icons-pack/react-simple-icons"
import Link from "./links"
import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

function Intro() {
    return (
        <section className="flex flex-col gap-8 overflow-hidden">
            <div className="flex flex-row h-6 justify-between items-center">
                <p className="text-xl font-bold">Rodrigo Araújo</p>
                <ToggleTheme />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,40%)_1fr] gap-10">
                <img className="rounded-3xl object-center h-[30rem] md:h-full w-full object-cover" src="https://wallpapers.com/images/hd/cool-michael-jordan-smoking-a-cigar-34krtybx095zjfp7.jpg" />
                <div className="grid text-center md:text-start grid-rows-[auto_auto_auto_auto_1fr] gap-8">
                    <p className="text-2xl font-bold">👋 Hi, I’m Rodrigo — I turn Caffeine ☕ into</p>
                    <h1 className="text-7xl font-bold tracking-tight">
                        <GradientSpan>Full-Stack </GradientSpan>
                        <MorphingHover textNormal="Code" textHover="Bugs" />
                    </h1>
                    <p className="text-3xl ml-[3px] font-bold">
                        Crafting <GradientSpan> fast </GradientSpan>
                        and <GradientSpan> reliable </GradientSpan>
                        apps that ship and scale.
                    </p>
                    <div className="flex flex-row mt-10 h-8 justify-center md:justify-start gap-5 ml-[4px]">
                        <Link href="https://www.linkedin.com/in/rodrigoaraujo46/" title="Linkedin">
                            <Linkedin className="h-full w-auto" /> </Link>
                        <Link href="https://github.com/rodrigoaraujo46" title="Github">
                            <SiGithub title="" className="h-full w-auto" /> </Link>
                        <Link href="https://leetcode.com/u/rodrigoaraujo46/" title="LeetCode">
                            <SiLeetcode title="" className="h-full w-auto" /> </Link>
                        <Link target="_blank" rel="noopener noreferrer"
                            href="mailto:rodrigo46.dev@gmail.com" title="Email">
                            <Mails className="h-full w-auto" /> </Link>
                        <Link target="_blank" rel="noopener noreferrer"
                            href="./assets/resume.pdf" title="Resume">
                            <FileUserIcon className="h-full w-auto" /> </Link>
                    </div>
                </div >
            </div >
        </section >
    )
}

<div className="relative flex w-full mt-20 flex-col items-center justify-center overflow-hidden">
    <ScrollVelocityContainer className="text-4xl md:text-7xl md:leading-[5rem] font-bold tracking-[-0.02em]">
        <ScrollVelocityRow baseVelocity={10} direction={1}>
            <SiCss className="mx-2 h-12 w-auto" />
            <SiGo className="mx-2 h-12 w-auto" />
            <SiRedis className="mx-2 h-12 w-auto" />
            <SiPython className="mx-2 h-12 w-auto" />
            <SiJavascript className="mx-2 h-12 w-auto" />
            <SiTailwindcss className="mx-2 h-12 w-auto" />
            <SiPostgresql className="mx-2 h-12 w-auto" />
        </ScrollVelocityRow>
        <ScrollVelocityRow className="mt-2" baseVelocity={10} direction={-1}>
            <SiReact className="mx-2 h-12 w-auto" />
            <SiMongodb className="mx-2 h-12 w-auto" />
            <SiGithub className="mx-2 h-12 w-auto" />
            <SiTypescript className="mx-2 h-12 w-auto" />
            <SiGit className="mx-2 h-12 w-auto" />
            <SiFigma className="mx-2 h-12 w-auto" />
            <SiDocker className="mx-2 h-12 w-auto" />
            <SiKubernetes className="mx-2 h-12 w-auto" />
        </ScrollVelocityRow>
    </ScrollVelocityContainer>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
</div>

function GradientSpan({ children }: { children: ReactNode }) {
    return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose dark:from-foam to-love dark:to-pine">
            {children}
        </span>
    )
}

export default Intro
