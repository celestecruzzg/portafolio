import Foto from '../assets/images/acerca.svg'

export default function Acerca () {
    return (
        <>
        <section id="#acerca" className="px-12 py-12 text-[var(--text-black)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="font-semibold text-2xl">Acerca de mí</h2>
                    <span className="font-light text-sm text-slate-500">
                        Acerca de mi trayectoria y experiencia.
                    </span>
                    <div className="mt-6 space-y-4">
                        <p className="text-base">
                        Soy una estudiante de ingeniería en Desarrollo y Gestión de Software Multiplataforma, 
                        apasionada por crear soluciones tecnológicas innovadoras que combinen diseño intuitivo y 
                        funcionalidad eficiente.
                        </p>
                        <p>
                        Mi enfoque se centra en desarrollar productos que no solo cumplan con los requisitos técnicos, 
                        sino que también brinden una experiencia de usuario óptima. Me especializo en tecnologías frontend 
                        modernas y tengo experiencia en desarrollo backend, lo que me permite abordar proyectos de manera 
                        integral.
                        </p>
                    </div>
                </div>
                {/* Segunda columna */}
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <img src={Foto} alt="" />
                </div>
            </div>
        </section>
        </>
    )
}