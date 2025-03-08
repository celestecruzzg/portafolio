import Acerca from "../components/Acerca";
import Inicio from "../components/Inicio";
import Navbar from "../components/Navbar";
import backgroundImage from "../assets/images/background.png";

export default function Principal () {
    return (
        <>
        <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar/>
            <div className="transition-all ease-in-out ">
                <Inicio/>
            </div>
            <div className="mt-14">
                <Acerca/>
            </div>
        </div>
        </>
    )
}