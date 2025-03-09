import Acerca from "../components/Acerca";
import Footer from "../components/Footer";
import Habilidades from "../components/Habilidades";
import Inicio from "../components/Inicio";
import Navbar from "../components/Navbar";
import Proyectos from "../components/Proyectos";

export default function Principal() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex flex-col gap-10 px-4 md:px-8 lg:px-16">
                <Inicio />
                <Habilidades />
                <Proyectos />
                <Acerca />
            </main>
            <Footer />
        </div>
    );
}
