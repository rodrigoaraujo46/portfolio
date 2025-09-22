import type { ReactNode } from "react"
import { MorphingHover } from "./morphing-hover"
import ToggleTheme from "./theme-toggle"
import { Calendar, FileIcon, FilesIcon, FileUserIcon, Github, Linkedin, LinkedinIcon, LucideFile, LucideFiles, LucideMail, Mail, MailboxIcon, MailOpen, Mails } from "lucide-react"
import { SiLeetcode, SiLeetcodeHex, SiRedis } from "@icons-pack/react-simple-icons"

function Intro() {
    return (
        <section className="flex flex-col gap-8">
            <div className="flex flex-row h-6 justify-between items-center">
                <p className="text-xl font-bold">Rodrigo Araújo</p>
                <ToggleTheme />
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-10">
                <img className="rounded-3xl" src="https://placehold.co/384x480" />
                <div className="grid grid-rows-[auto_auto_auto_1fr] gap-4">
                    <p className="text-lg font-bold">👋Hi, I’m Rodrigo — I turn Caffeine ☕ into</p>
                    <h1 className="text-7xl font-bold tracking-tight">
                        <GradientSpan>Full-Stack </GradientSpan>
                        <MorphingHover textNormal="Code" textHover="Bugs" />
                    </h1>
                    <p className="text-2xl ml-[3px] font-bold">
                        Building
                        <GradientSpan> Fast </GradientSpan>
                        and
                        <GradientSpan> Reliable </GradientSpan>
                        apps
                    </p>
                    <div className="flex flex-row gap-4 h-8">
                        <Linkedin />
                        <Github />
                        <Mails />
                        <FileUserIcon/>
                        <SiLeetcode />
                    </div>
                </div>
            </div>
        </section>
    )
}

function GradientSpan({ children }: { children: ReactNode }) {
    return (
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose dark:from-foam to-love dark:to-pine">
            {children}
        </span>
    )
}

export default Intro
