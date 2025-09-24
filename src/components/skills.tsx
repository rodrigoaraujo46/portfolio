import {
    SiCss,
    SiDocker,
    SiFigma,
    SiGit,
    SiGo,
    SiHtml5,
    SiHtmx,
    SiJavascript,
    SiKubernetes,
    SiMongodb,
    SiNeovim,
    SiNgrok,
    SiPostgresql,
    SiPython,
    SiReact,
    SiRedis,
    SiRefinedgithub,
    SiTailwindcss,
    SiTypescript,
} from "@icons-pack/react-simple-icons";
import Tooltip from "./tooltip";
import Card, { CardContent, CardDescription, CardTitle } from "./card";

function Skills() {
    return (
        <section className="flex flex-col gap-8">
            <h2 className="mx-auto text-4xl">Skills</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-[60%_1fr]">
                <div className="grid grid-rows-2 gap-4">
                    <Card>
                        <CardTitle>Frontend</CardTitle>
                        <CardDescription></CardDescription>
                        <CardContent>
                            <div className="flex flex-row flex-wrap gap-x-8 gap-y-10">
                                <Tooltip tip="JavaScript">
                                    <SiJavascript color="default" className="h-12 w-auto" />{" "}
                                </Tooltip>
                                <Tooltip tip="TailwindCSS">
                                    <SiTailwindcss color="default" className="h-12 w-auto" />
                                </Tooltip>
                                <Tooltip tip="CSS">
                                    <SiCss color="default" className="h-12 w-auto" />
                                </Tooltip>
                                <Tooltip tip="React">
                                    <SiReact color="default" className="h-12 w-auto" />
                                </Tooltip>
                                <Tooltip tip="HTML">
                                    <SiHtml5 color="default" className="h-12 w-auto" />
                                </Tooltip>
                                <Tooltip tip="HTMX">
                                    <SiHtmx color="default" className="h-12 w-auto" />
                                </Tooltip>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardTitle>Backend</CardTitle>
                        <CardDescription></CardDescription>
                        <CardContent>
                            <div className="flex flex-row flex-wrap gap-x-8 gap-y-10">
                                <Tooltip tip="GO">
                                    <SiGo color="default" className="h-12 w-auto" />
                                </Tooltip>
                                <Tooltip tip="Python">
                                    <SiPython color="default" className="h-12 w-auto" />
                                </Tooltip>
                                <Tooltip tip="TypeScript">
                                    <SiTypescript color="default" className="h-12 w-auto" />
                                </Tooltip>
                                <Tooltip tip="PostgreSQL">
                                    <SiPostgresql color="default" className="h-12 w-auto" />
                                </Tooltip>
                                <Tooltip tip="MongoDB">
                                    <SiMongodb color="default" className="h-12 w-auto" />
                                </Tooltip>
                                <Tooltip tip="Redis">
                                    <SiRedis color="default" className="h-12 w-auto" />
                                </Tooltip>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <Card>
                    <CardTitle>Tools</CardTitle>
                    <CardDescription></CardDescription>
                    <CardContent>
                        <div className="flex flex-row flex-wrap gap-x-8 gap-y-10">
                            <Tooltip tip="GitHub">
                                <SiRefinedgithub className="h-12 w-auto" />
                            </Tooltip>
                            <Tooltip tip="Git">
                                <SiGit color="default" className="h-12 w-auto" />
                            </Tooltip>
                            <Tooltip tip="Figma">
                                <SiFigma color="default" className="h-12 w-auto" />
                            </Tooltip>
                            <Tooltip tip="Docker">
                                <SiDocker color="default" className="h-12 w-auto" />
                            </Tooltip>
                            <Tooltip tip="Kubernetes">
                                <SiKubernetes color="default" className="h-12 w-auto" />
                            </Tooltip>
                            <Tooltip tip="Neovim">
                                <SiNeovim color="default" className="h-12 w-auto" />
                            </Tooltip>
                            <Tooltip tip="Ngrok">
                                <SiNgrok className="h-12 w-auto" />
                            </Tooltip>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

export default Skills;
