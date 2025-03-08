export default function Navbar () {
    return (
        <>
        <header className="bg-white shadow backdrop:blur px-12 py-4 sticky top-0 z-40 w-full">
            <div className="flex justify-between items-center text-[var(--text-black)]">
                <h2 className="text-lg font-semibold">Portafolio</h2>
                <div>
                    <nav className="flex justify-between items-center gap-8 text-sm cursor-pointer">
                        <a id="#inicio" className="hover:text-sky-600">Inicio</a>
                        <a id="#acerca" className="hover:text-sky-600">Acerca de</a>
                        <a id="" className="hover:text-sky-600">Habilidades</a>
                        <a id="" className="hover:text-sky-600">Proyectos</a>
                        <a id="" className="hover:text-sky-600">Contacto</a>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}