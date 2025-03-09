import { BiLogoVisualStudio } from "react-icons/bi";
import { BsTerminalFill } from "react-icons/bs";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { FaBootstrap, FaCss3, FaGitAlt, FaHtml5, FaJs, FaNode, FaNpm, FaReact, FaUbuntu, FaWindows } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDotnet, SiManjaro, SiMysql, SiNestjs, SiPhp, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export default function Habilidades () {
    return (
        <>
        <section id='habilidades' className="px-12 py-20 my-12 text-[var(--text-black)]">
        <h2 className="font-semibold text-2xl">Habilidades</h2>
            <span className="font-light text-sm text-slate-500">
                Stack de tecnologías y herramientas que domino.
            </span>
            <div className="min-w-sm grid grid-cols-1 md:grid-cols-2 gap-18 items-center">
                {/* primer columna */}
                <div>
                    <div className="mt-6 min-w-sm border-2 border-sky-100 rounded-2xl py-5 px-7">
                        <h3 className="font-semibold text-lg">Desarrollo frontend</h3>
                        <div className="flex flex-wrap items-center mt-2 gap-7">
                            <div className="flex flex-col items-center">
                                <FaHtml5 className="text-4xl hover:text-[var(--html)]"/>
                                <span className="text-xs text-slate-500">HTML5</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaCss3 className="text-4xl hover:text-[var(--css)]"/>
                                <span className="text-xs text-slate-500">CSS3</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaJs className="text-4xl hover:text-[var(--js)]"/>
                                <span className="text-xs text-slate-500">JS</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiTypescript className="text-[32px] hover:text-[var(--ts)]"/>
                                <span className="text-sm text-slate-500">TS</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaReact className="text-4xl hover:text-[var(--react)]"/>
                                <span className="text-xs text-slate-500">React</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <RiTailwindCssFill className="text-4xl hover:text-[var(--tailwind)]"/>
                                <span className="text-xs text-slate-500">Tailwind</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaBootstrap className="text-4xl hover:text-[var(--bootstrap)]"/>
                                <span className="text-xs text-slate-500">Bootstrap</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* segunda columna */}
                <div>
                    <div className="mt-6 min-w-sm border-2 border-sky-100 rounded-2xl py-5 px-7">
                        <h3 className="font-semibold text-lg">Desarrollo backend</h3>
                        <div className="flex flex-wrap items-center mt-2 gap-7">
                            <div className="flex flex-col items-center">
                                <SiPhp className="text-4xl hover:text-[var(--php)]"/>
                                <span className="text-xs text-slate-500">PHP</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <TbBrandCSharp className="text-4xl hover:text-[var(--csharp)]"/>
                                <span className="text-xs text-slate-500">C#</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaNode className="text-4xl hover:text-[var(--node)]"/>
                                <span className="text-xs text-slate-500">NodeJS</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiNestjs className="text-[32px] hover:text-[var(--nest)]"/>
                                <span className="text-sm text-slate-500">NestJS</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiDotnet className="text-4xl hover:text-[var(--dotnetcore)]"/>
                                <span className="text-xs text-slate-500">.NET Core</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiMysql className="text-4xl hover:text-[var(--mysql)]"/>
                                <span className="text-xs text-slate-500">MySQL</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <DiMsqlServer className="text-4xl hover:text-[var(--sqlserver)]"/>
                                <span className="text-xs text-slate-500">SQLServer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-w-sm border-2 border-sky-100 rounded-2xl py-5 px-7">
                    <h3 className="font-semibold text-lg">Otras herramientas</h3>
                    <div className="flex flex-wrap items-center mt-2 gap-7">
                        <div className="flex flex-col items-center">
                            <BsTerminalFill className="text-4xl hover:text-[var(--shell)]"/>
                            <span className="text-xs text-slate-500">Shell</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaGitAlt className="text-[37px] hover:text-[var(--git)]"/>
                            <span className="text-xs text-slate-500">Git</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaNpm className="text-[37px] hover:text-[var(--npm)]"/>
                            <span className="text-xs text-slate-500">npm</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <BiLogoVisualStudio className="text-[37px] hover:text-[var(--vsc)]"/>
                            <span className="text-xs text-slate-500">VS Code</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <DiVisualstudio className="text-[37px] hover:text-[var(--vs)]"/>
                            <span className="text-xs text-slate-500">VS</span>
                        </div>
                    </div>
                </div>
                <div className="min-w-sm border-2 border-sky-100 rounded-2xl py-5 px-7">
                    <h3 className="font-semibold text-lg">Sistemas operativos</h3>
                    <div className="flex flex-wrap items-center mt-2 gap-7">
                        <div className="flex flex-col items-center">
                            <FaWindows className="text-4xl hover:text-[var(--windows)]"/>
                            <span className="text-xs text-slate-500">Windows</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaUbuntu className="text-[37px] hover:text-[var(--ubuntu)]"/>
                            <span className="text-xs text-slate-500">Ubuntu</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <SiManjaro className="text-[37px] hover:text-[var(--manjaro)]"/>
                            <span className="text-xs text-slate-500">Manjaro</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}