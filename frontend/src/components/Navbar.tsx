import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow px-12 py-4 sticky top-0 z-40 w-full">
            <div className="flex justify-between items-center text-[var(--text-black)]">
                <a href="#inicio" className="text-lg font-semibold">Portafolio</a>
                <nav className="hidden md:flex font-normal justify-between items-center gap-8 text-sm cursor-pointer">
                    <a href="#inicio" className="hover:text-sky-600">Inicio</a>
                    <a href="#habilidades" className="hover:text-sky-600">Habilidades</a>
                    <a href="#proyectos" className="hover:text-sky-600">Proyectos</a>
                    <a href="#acerca" className="hover:text-sky-600">Acerca de</a>
                </nav>

                <button 
                    className="md:hidden text-2xl text-[var(--text-black)]"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Menú hamburguesin */}
            <div className={`${menuOpen ? "block" : "hidden"} transition-all ease-linear md:hidden absolute top-15 left-0 w-full bg-white shadow-md`}>
                <nav className="flex flex-col items-center gap-4 py-4">
                    <a href="#inicio" className="hover:text-sky-600" onClick={() => setMenuOpen(false)}>Inicio</a>
                    <a href="#habilidades" className="hover:text-sky-600" onClick={() => setMenuOpen(false)}>Habilidades</a>
                    <a href="#proyectos" className="hover:text-sky-600" onClick={() => setMenuOpen(false)}>Proyectos</a>
                    <a href="#acerca" className="hover:text-sky-600" onClick={() => setMenuOpen(false)}>Acerca de</a>
                </nav>
            </div>
        </header>
    );
}
