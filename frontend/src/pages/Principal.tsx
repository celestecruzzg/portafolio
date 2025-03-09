import Acerca from "../components/Acerca";
import Footer from "../components/Footer";
import Habilidades from "../components/Habilidades";
import Inicio from "../components/Inicio";
import Navbar from "../components/Navbar";
import Proyectos from "../components/Proyectos";

export default function Principal () {
    return (
        <>
        <div className="min-h-screen">
            <Navbar/>
            <div className="">
                <Inicio/>
            </div>
            <div className="mt-14">
                <Habilidades/>
            </div>
            <div className="mt-14">
                <Proyectos/>
            </div>
            <div className="mt-14">
                <Acerca/>
            </div>
            <div className="mt-14">
                <Footer/>
            </div>
        </div>
        </>
    )
}