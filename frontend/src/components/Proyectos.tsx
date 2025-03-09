import { FaPython, FaReact } from 'react-icons/fa'
import Itzamna from '../assets/images/itzamna.png'
import { SiFastapi, SiMysql, SiTypescript } from 'react-icons/si'
import { RiTailwindCssFill } from 'react-icons/ri'

export default function Proyectos () {
    return (
        <>
        <section id='proyectos' className="px-12 py-20 my-12 text-[var(--text-black)]">
            <h2 className="font-semibold text-2xl">Mis proyectos</h2>
                <span className="font-light text-sm text-slate-500">
                    Proyectos que he realizado recientemente.
                </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-18 items-center">
                <div className="mt-6 min-w-sm flex-wrap border-2 border-sky-100 rounded-2xl">
                    <img src={Itzamna} alt="itzamna" className='rounded-t-xl'/>
                    <div className='min-w-sm flex-wrap py-5 px-6'>
                        <h3 className="font-semibold text-lg">Chatbot para trámites del Gobierno de Q.Roo.</h3>
                        <p className="mt-2 text-xs text-slate-500">
                            Un asistente virtual inteligente que proporciona información mediante una API los 
                            trámites del gobierno de Quintana Roo.
                        </p>
                        <div className='flex flex-wrap items-center mt-2 gap-7'>
                            <div className="mt-2 flex flex-col items-center">
                                <FaReact className="text-4xl hover:text-[var(--react)]"/>
                                <span className="text-xs text-slate-500">ReactJS</span>
                            </div>
                            <div className="mt-2 flex flex-col items-center pt-2">
                                <SiTypescript className="text-[32px] hover:text-[var(--ts)]"/>
                                <span className="text-sm text-slate-500">TS</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <RiTailwindCssFill className="text-4xl hover:text-[var(--tailwind)]"/>
                                <span className="text-xs text-slate-500">Tailwind</span>
                            </div>
                            <div className="mt-2 flex flex-col items-center">
                                <SiFastapi className="text-4xl hover:text-[var(--fastapi)]"/>
                                <span className="text-xs text-slate-500">FastApi</span>
                            </div>
                            <div className="mt-2 flex flex-col items-center">
                                <SiMysql className="text-4xl hover:text-[var(--mysql)]"/>
                                <span className="text-xs text-slate-500">MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}