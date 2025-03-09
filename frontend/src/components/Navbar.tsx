export default function Navbar () {
    return (
        <>
        <header className="bg-white shadow px-12 py-4 sticky top-0 z-40 w-full">
            <div className="flex justify-between items-center text-[var(--text-black)]">
                <h2 className="text-lg font-semibold">Portafolio</h2>
                <div className="flex">
                    <nav className="hidden md:flex font-normal justify-between items-center gap-8 text-sm cursor-pointer">
                        <a href="#inicio" className="hover:text-sky-600 transition duration-300">Inicio</a>
                        <a href="#habilidades" className="hover:text-sky-600 transition-delay">Habilidades</a>
                        <a href="#proyectos" className="hover:text-sky-600">Proyectos</a>
                        <a href="#acerca" className="hover:text-sky-600">Acerca de</a>
                    </nav>
                    <button></button>
                </div>
            </div>
        </header>
        </>
    )
}