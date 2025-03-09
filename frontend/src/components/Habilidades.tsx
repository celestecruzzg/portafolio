import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaGitAlt, FaNpm, FaNode, FaWindows, FaUbuntu } from "react-icons/fa";
import { SiTypescript, SiNestjs, SiMysql, SiPhp, SiDotnet, SiManjaro } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiMsqlServer, DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { BsTerminalFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Habilidades() {
  return (
    <section id="habilidades" className="px-12 md:px-12 py-20 my-4 text-[var(--text-black)]">
      <h2 className="font-semibold text-2xl text-center md:text-left">Habilidades</h2>
      <span className="block font-light text-sm text-slate-500 text-center md:text-left">
        Stack de tecnologías y herramientas que domino.
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-8">
        <div className="border-2 border-sky-100 rounded-2xl py-5 px-6">
          <h3 className="font-semibold text-lg text-center md:text-left">Desarrollo frontend</h3>
          <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-6">
            <div className="flex flex-col items-center">
              <FaHtml5 className="text-4xl text-[var(--html)]" />
              <span className="text-xs text-slate-500">HTML5</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCss3 className="text-4xl text-[var(--css)]" />
              <span className="text-xs text-slate-500">CSS3</span>
            </div>
            <div className="flex flex-col items-center">
              <FaJs className="text-4xl text-[var(--js)]" />
              <span className="text-xs text-slate-500">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTypescript className="text-4xl text-[var(--ts)]" />
              <span className="text-xs text-slate-500">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <FaReact className="text-4xl text-[var(--react)]" />
              <span className="text-xs text-slate-500">React</span>
            </div>
            <div className="flex flex-col items-center">
              <RiTailwindCssFill className="text-4xl text-[var(--tailwind)]" />
              <span className="text-xs text-slate-500">Tailwind</span>
            </div>
            <div className="flex flex-col items-center">
              <FaBootstrap className="text-4xl text-[var(--bootstrap)]" />
              <span className="text-xs text-slate-500">Bootstrap</span>
            </div>
          </div>
        </div>

        <div className="border-2 border-sky-100 rounded-2xl py-5 px-6">
          <h3 className="font-semibold text-lg text-center md:text-left">Desarrollo backend</h3>
          <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-6">
            <div className="flex flex-col items-center">
              <SiPhp className="text-4xl text-[var(--php)]" />
              <span className="text-xs text-slate-500">PHP</span>
            </div>
            <div className="flex flex-col items-center">
              <TbBrandCSharp className="text-4xl text-[var(--csharp)]" />
              <span className="text-xs text-slate-500">C#</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNode className="text-4xl text-[var(--node)]" />
              <span className="text-xs text-slate-500">NodeJS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNestjs className="text-4xl text-[var(--nest)]" />
              <span className="text-xs text-slate-500">NestJS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiDotnet className="text-4xl text-[var(--dotnetcore)]" />
              <span className="text-xs text-slate-500">.NET Core</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMysql className="text-4xl text-[var(--mysql)]" />
              <span className="text-xs text-slate-500">MySQL</span>
            </div>
            <div className="flex flex-col items-center">
              <DiMsqlServer className="text-4xl text-[var(--sqlserver)]" />
              <span className="text-xs text-slate-500">SQL Server</span>
            </div>
          </div>
        </div>

        <div className="border-2 border-sky-100 rounded-2xl py-5 px-6">
          <h3 className="font-semibold text-lg text-center md:text-left">Otras herramientas</h3>
          <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-6">
            <div className="flex flex-col items-center">
              <BsTerminalFill className="text-4xl text-[var(--shell)]" />
              <span className="text-xs text-slate-500">Shell</span>
            </div>
            <div className="flex flex-col items-center">
              <FaGitAlt className="text-4xl text-[var(--git)]" />
              <span className="text-xs text-slate-500">Git</span>
            </div>
            <div className="flex flex-col items-center">
              <FaNpm className="text-4xl text-[var(--npm)]" />
              <span className="text-xs text-slate-500">npm</span>
            </div>
            <div className="flex flex-col items-center">
              <BiLogoVisualStudio className="text-4xl text-[var(--vsc)]" />
              <span className="text-xs text-slate-500">VS Code</span>
            </div>
            <div className="flex flex-col items-center">
              <DiVisualstudio className="text-4xl text-[var(--vs)]" />
              <span className="text-xs text-slate-500">Visual Studio</span>
            </div>
          </div>
        </div>

        <div className="border-2 border-sky-100 rounded-2xl py-5 px-6">
          <h3 className="font-semibold text-lg text-center md:text-left">Sistemas operativos</h3>
          <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-6">
            <div className="flex flex-col items-center">
              <FaWindows className="text-4xl text-[var(--windows)]" />
              <span className="text-xs text-slate-500">Windows</span>
            </div>
            <div className="flex flex-col items-center">
              <FaUbuntu className="text-4xl text-[var(--ubuntu)]" />
              <span className="text-xs text-slate-500">Ubuntu</span>
            </div>
            <div className="flex flex-col items-center">
              <SiManjaro className="text-4xl text-[var(--manjaro)]" />
              <span className="text-xs text-slate-500">Manjaro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
