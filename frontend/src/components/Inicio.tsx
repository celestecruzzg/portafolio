import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Foto from '../assets/images/celeste.jpg'

export default function Inicio () {
    return (
        <>
        <div id='#inicio' className='flex flex-col justify-center items-center py-32 text-[var(--text-black)]'>
            <img
                src={Foto}
                className="rounded-full w-42  outline-offset-4 outline-double outline-sky-600"
                alt=""
            />
            <div className='flex-col py-5 text-center max-w-2xl'>
                <h1 className='font-semibold text-4xl'>
                    ¡Hola, soy <span className='text-sky-600'>Celeste Cruz!</span>
                </h1>
                <p className='py-3 text-base'>
                    Desarrollador web especializado en crear experiencias 
                    digitales atractivas y funcionales
                </p>
                <div className='flex justify-center items-center max-w-2xl gap-8 mt-2'>
                    <a href="https://github.com/celestecruzzg" target='_blank'>
                        <FaGithub className='text-3xl hover:text-[var(--github)]' />
                    </a>
                    <a href="https://www.linkedin.com/in/celeste-gonzalez-cruz-06d122004" target='_blank'>
                        <FaLinkedin className='text-3xl hover:text-[var(--linkedin)]' />
                    </a>
                    <a href="https://www.facebook.com/celestecruzzg" target='_blank'>
                        <FaFacebook className='text-3xl hover:text-[var(--facebook)]' />
                    </a>
                    <a href="https://www.instagram.com/celeste_cruzzg" target='_blank'>
                        <FaInstagram className='text-3xl hover:text-[var(--instagram)]' />
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}