'use client'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import Godai from '@/assets/Godai-RGB-logo.png'
import HeroImg from '@/assets/1.webp'

const navigation = [
    { name: 'NOSOTROS', href: '#' },
    { name: 'AMENIDADES', href: '#' },
    { name: 'MODELOS', href: '#' },
    { name: 'TU ENTORNO', href: '#' },
    { name: 'CONTACTO', href: '#' },
  ]

export const Hero = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    return (
        <div className="bg-white">
            <div className="lg:h-screen overflow-hidden bg-black">
                <Image src={HeroImg} width={1920} height={960} alt='' className='w-full h-screen object-cover' />
                
                <button onClick={openModal} className="absolute w-20 h-20 flex items-center justify-center lg:left-[1025px] lg:top-[215px] 2xl:left-[1280px] 2xl:top-[215px]">
                    {/* Círculo exterior */}
                    <div className="absolute w-full h-full rounded-full border border-white"></div>
                    {/* Círculo intermedio */}
                    <div className="absolute w-16 h-16 rounded-full bg-transparent border border-white"></div>
                    {/* Círculo interior */}
                    <div className="absolute w-12 h-12 rounded-full bg-white"></div>
                    {/* Contenido del botón, como un ícono de reproducción */}
                    <svg className="w-8 h-8 text-black transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {/* Aquí he agregado una rotación de 90 grados para que el icono apunte hacia la derecha */}
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="rotate(90 12 12)" d="M5 12l10-6v12l-10-6z"></path>
                    </svg>
                </button>

                <Dialog open={modalIsOpen} onClose={closeModal} className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-xl">
                            <button onClick={closeModal} className="absolute top-20 right-20 text-white hover:text-gray-900">
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            {/* Aquí puedes colocar el reproductor de video con tu video local */}
                            <video controls className="w-full" autoPlay>
                                <source src="/GOD_03-04-24.mp4" type="video/mp4" />
                                Tu navegador no soporta el elemento de video.
                            </video>
                        </div>
                    </div>
                </Dialog>

                
            </div>
            <header className="fixed inset-x-0 top-0 z-50">
                <nav className={`flex items-center justify-between lg:px-8 ${scrolled ? 'bg-white text-blue-900 p-2 transition-all duration-300' : 'bg-transparent text-white p-6'}`} aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Image src={Godai} alt='' className='w-32 h-full'/>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5" onClick={() => setMobileMenuOpen(true)}>
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 ">
                        {item.name}
                        </a>
                    ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <Link href="#" className="rounded-full bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Contáctanos
                        </Link>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <Image
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                                height={32}
                                width={32}
                                />
                            </Link>
                            <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                    Contáctanos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>

            <div className="absolute left-12 top-1/2 transform -translate-y-1/2">
                <div className='px-10 py-10 bg-transparent backdrop-blur-lg shadow-2xl rounded-2xl'>
                    <h2 className='font-bold text-4xl lg:text-7xl text-white drop-shadow-2xl drop'>DESPIERTA <br /> UNA <span className='text-blue-900'>NUEVA</span> <br /> <span className='text-blue-900'>CIUDAD</span> <br /> EN IRAPUATO</h2>
                    
                    <div className='flex gap-4 mt-12'>
                        <Link href={'#'} className='px-8 py-2 border-2 border-blue-900 text-blue-900 font-semibold'>
                            Solicitar Informes
                        </Link>

                        <Link href={'#'} className='px-16 py-2 bg-blue-900 text-white'>
                            Conócenos
                        </Link>

                    </div>
                </div>
            </div>

        </div>
    )
}
