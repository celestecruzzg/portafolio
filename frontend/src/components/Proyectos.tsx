import { FaReact } from 'react-icons/fa';
import { SiFastapi, SiMysql, SiTypescript } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import Itzamna from '../assets/images/itzamna.png';

export default function Proyectos() {
    return (
        <section id='proyectos' className="px-6 md:px-12 py-16 text-[var(--text-black)]">
            <h2 className="font-semibold text-2xl text-center md:text-left">Mis proyectos</h2>
            <span className="block font-light text-sm text-slate-500 text-center md:text-left">
                Proyectos que he realizado recientemente.
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <div className="mt-6 border-2 border-sky-100 rounded-2xl">
                    <img src={Itzamna} alt="itzamna" className='w-full object-cover rounded-t-2xl' />
                    <div className='p-6'>
                        <h3 className="font-semibold text-lg">Chatbot para trámites del Gobierno de Q.Roo.</h3>
                        <p className="mt-2 text-sm text-slate-500">
                            Un asistente virtual inteligente que proporciona información mediante una API sobre los 
                            trámites del gobierno de Quintana Roo.
                        </p>
                        <div className='flex flex-wrap justify-center md:justify-start mt-4 gap-6'>
                            <div className="flex flex-col items-center">
                                <FaReact className="text-4xl text-[var(--react)]"/>
                                <span className="text-xs text-slate-500">ReactJS</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiTypescript className="text-3xl text-[var(--ts)]"/>
                                <span className="text-xs text-slate-500">TypeScript</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <RiTailwindCssFill className="text-4xl text-[var(--tailwind)]"/>
                                <span className="text-xs text-slate-500">Tailwind</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiFastapi className="text-4xl text-[var(--fastapi)]"/>
                                <span className="text-xs text-slate-500">FastAPI</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiMysql className="text-4xl text-[var(--mysql)]"/>
                                <span className="text-xs text-slate-500">MySQL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}