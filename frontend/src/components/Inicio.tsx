import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Foto from '../assets/images/celeste.png'
import { IoIosPin } from 'react-icons/io'

export default function Inicio () {
    return (
        <>
        <span id='inicio' className='text-xs text-white'>uwu</span>
        <div className='flex flex-col justify-center items-center py-14 my-4 text-[var(--text-black)]'>
            <img
                src={Foto}
                className="rounded-full w-64  outline-offset-4 outline-double outline-sky-600"
                alt=""
            />
            <div className='flex-col py-5 text-center max-w-2xl'>
                <h1 className='font-semibold text-4xl'>
                    ¡Hola, soy <span className='text-sky-600'>Celeste Cruz</span>!
                </h1>
                <p className='py-3 text-base'>
                    Desarrolladora de software fullstack, con experiencia en el desarrollo 
                    de aplicaciones web.
                </p>
                <div className='flex justify-center items-center max-w-2xl gap-8 mt-2 animation animation-efect'>
                    <a href="https://github.com/celestecruzzg" target='_blank'>
                        <FaGithub className='text-3xl text-[var(--github)]' />
                    </a>
                    <a href="https://www.linkedin.com/in/celeste-gonzalez-cruz-06d122004" target='_blank'>
                        <FaLinkedin className='text-3xl text-[var(--linkedin)]' />
                    </a>
                    <a href="https://www.facebook.com/celestecruzzg" target='_blank'>
                        <FaFacebook className='text-3xl text-[var(--facebook)]' />
                    </a>
                    <a href="https://www.instagram.com/celeste_cruzzg" target='_blank'>
                        <FaInstagram className='text-3xl text-[var(--instagram)]' />
                    </a>
                </div>
                    <span className='flex justify-center items-center mt-6 gap-3 animation animation-efect'>
                        <IoIosPin className='text-3xl text-red-700' />Cancún, México
                    </span>
            </div>
        </div>
        </>
    )
}