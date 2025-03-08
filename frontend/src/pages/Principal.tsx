import Acerca from "../components/Acerca";
import Inicio from "../components/Inicio";
import Navbar from "../components/Navbar";

export default function Principal () {
    return (
        <>
        <body className="min-h-screen">
            <Navbar/>
            <div className="transition-all ease-in-out ">
                <Inicio/>
            </div>
            <div className="mt-14">
                <Acerca/>
            </div>
        </body>
        </>
    )
}