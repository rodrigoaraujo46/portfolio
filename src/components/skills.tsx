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
import Card, { CardContent, CardDescription, CardTitle } from "./card";
import Tooltip from "./ui/tooltip";

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
                                    <SiJavascript
                                        title=""
                                        color="default"
                                        className="h-12 w-auto"
                                    />
                                </Tooltip>
                                <Tooltip tip="TailwindCSS">
                                    <SiTailwindcss
                                        title=""
                                        color="default"
                                        className="h-12 w-auto"
                                    />
                                </Tooltip>
                                <Tooltip tip="CSS">
                                    <SiCss
                                        title=""
                                        color="default"
                                        className="h-12 w-auto"
                                    />
                                </Tooltip>
                                <Tooltip tip="React">
                                    <SiReact
                                        title=""
                                        color="default"
                                        className="h-12 w-auto"
                                    />
                                </Tooltip>
                                <Tooltip tip="HTML">
                                    <SiHtml5
                                        title=""
                                        color="default"
                                        className="h-12 w-auto"
                                    />
                                </Tooltip>
                                <Tooltip tip="HTMX">
                                    <SiHtmx
                                        title=""
                                        color="default"
                                        className="h-12 w-auto"
                                    />
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
                                    <SiGo
                                        title=""
                                        color="default"
                                        className="h-12 w-auto"
                                    />
                                </Tooltip>
                                <Tooltip tip="Python">
                                    <SiPython
                                        title=""
                                        color="default"
                                        className="h-12 w-auto"
                                    />
                                </Tooltip>
                                <Tooltip tip="TypeScript">
                                    <SiTypescript
                                        title=""
                                        color="default"
                                        className="h-12 w-auto"
                                    />
                                </Tooltip>
                                <Tooltip tip="PostgreSQL">
                                    <SiPostgresql
                                        title=""
                                        color="default"
                                        className="h-12 w-auto"
                                    />
                                </Tooltip>
                                <Tooltip tip="MongoDB">
                                    <SiMongodb
                                        title=""
                                        color="default"
                                        className="h-12 w-auto"
                                    />
                                </Tooltip>
                                <Tooltip tip="Redis">
                                    <SiRedis
                                        title=""
                                        color="default"
                                        className="h-12 w-auto"
                                    />
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
                                <SiRefinedgithub
                                    title=""
                                    className="h-12 w-auto"
                                />
                            </Tooltip>
                            <Tooltip tip="Git">
                                <SiGit
                                    title=""
                                    color="default"
                                    className="h-12 w-auto"
                                />
                            </Tooltip>
                            <Tooltip tip="Figma">
                                <SiFigma
                                    title=""
                                    color="default"
                                    className="h-12 w-auto"
                                />
                            </Tooltip>
                            <Tooltip tip="Docker">
                                <SiDocker
                                    title=""
                                    color="default"
                                    className="h-12 w-auto"
                                />
                            </Tooltip>
                            <Tooltip tip="Kubernetes">
                                <SiKubernetes
                                    title=""
                                    color="default"
                                    className="h-12 w-auto"
                                />
                            </Tooltip>
                            <Tooltip tip="Neovim">
                                <SiNeovim
                                    title=""
                                    color="default"
                                    className="h-12 w-auto"
                                />
                            </Tooltip>
                            <Tooltip tip="Ngrok">
                                <SiNgrok title="" className="h-12 w-auto" />
                            </Tooltip>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

export default Skills;
