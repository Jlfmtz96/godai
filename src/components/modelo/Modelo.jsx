'use client';

import Image from "next/image"
import Link from "next/link";
import { useState } from "react";


import fachadaAire from '@/assets/fachadaAire.webp';
import fachadaMadera from '@/assets/fachadaMadera.webp';
import fachadaAgua from '@/assets/fachadaAgua.webp';
import fachadaTierra from '@/assets/fachadaTierra.webp';

import Tren from '@/assets/Tren-de-vivienda-1920x420.png'
import { DragCloseDrawerExample } from "../modal/DragCloseDrawer";


// Define la información específica para cada opción
const opcionesInformacion = {
    Aire: {
      titulo: 'Aire',
      recamaras: 3,
      banos: 3.5,
      metrosConstruccion: '156m²',
      metrosTerreno: '117m²',
      imagen: fachadaAire,
      disponible: true, // Cambia esto si Agua está disponible o no
    },
    Madera: {
      titulo: 'Madera',
      recamaras: 3,
      banos: 3.5,
      metrosConstruccion: '180m²',
      metrosTerreno: '130m²',
      imagen: fachadaMadera,
      disponible: true, // Cambia esto si Agua está disponible o no
    },
    Tierra: {
      titulo: 'Tierra',
      recamaras: 2,
      banos: 2,
      metrosConstruccion: '120m²',
      metrosTerreno: '150m²',
      imagen: fachadaTierra,
      disponible: false, // Cambia esto si Agua está disponible o no
    },
    Agua: {
      titulo: 'Agua',
      recamaras: 3,
      banos: 2.5,
      metrosConstruccion: '140m²',
      metrosTerreno: '100m²',
      imagen: fachadaAgua,
      disponible: false, // Cambia esto si Agua está disponible o no
    },
  };


export const Modelo = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('Aire');

    const handleChangeOpcion = (opcion) => {
        setOpcionSeleccionada(opcion);
      };

    return (
        <div className="container mx-auto">
            <div className="text-center relative">
                <h3 className="font-bold text-9xl text-blue-900 opacity-20 uppercase">Modelos</h3>
                <span className="font-bold text-blue-900 text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap">Conoce nuestros prototipos</span>
            </div>
            <div className="grid grid-cols-2 gap-16 mt-16">
                <div className="relative">
                    <div className="z-30">
                        {opcionesInformacion[opcionSeleccionada].disponible ? (
                            <Image src={opcionesInformacion[opcionSeleccionada].imagen} alt="" />
                        ) : (
                            <div className="relative">
                                <Image src={opcionesInformacion[opcionSeleccionada].imagen} alt="" />
                                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-2xl rounded-br-none rounded-bl-[180px] flex justify-center items-center">
                                    <span className="text-white text-4xl font-bold">Agotada</span>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="absolute -left-1 bottom-0 bg-slate-100 h-[450px] w-[450px] rounded-full -z-10"></div>
                    <div className="absolute -left-1 bottom-0 h-36 w-36 bg-blue-900 rounded-full z-10 flex justify-center items-center">
                        <DragCloseDrawerExample />
                    </div>
                </div>
                <div className="flex flex-col h-full">
                    <h3 className="text-5xl mt-16">{opcionesInformacion[opcionSeleccionada].titulo}</h3>

                    <div className="grid grid-cols-4 gap-6 mt-6">
                        <div className="flex gap-1 items-center">
                            <div className="h-4 w-4 rounded-full bg-blue-900"></div>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bed-double"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></svg> */}
                            <p><span className="text-2xl font-semibold">{opcionesInformacion[opcionSeleccionada].recamaras}</span> Recámaras</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="h-4 w-4 rounded-full bg-blue-900"></div>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shower-head"><path d="m4 4 2.5 2.5"/><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"/><path d="M15 5 5 15"/><path d="M14 17v.01"/><path d="M10 16v.01"/><path d="M13 13v.01"/><path d="M16 10v.01"/><path d="M11 20v.01"/><path d="M17 14v.01"/><path d="M20 11v.01"/></svg> */}
                            <p><span className="text-2xl font-semibold">{opcionesInformacion[opcionSeleccionada].banos}</span> Baños</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="h-4 w-4 rounded-full bg-blue-900"></div>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> */}
                            <p><span className="text-2xl font-semibold">{opcionesInformacion[opcionSeleccionada].metrosConstruccion}</span> de Constr.</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <div className="h-4 w-4 rounded-full bg-blue-900"></div>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box-select"><path d="M5 3a2 2 0 0 0-2 2"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 3h1"/><path d="M9 21h1"/><path d="M14 3h1"/><path d="M14 21h1"/><path d="M3 9v1"/><path d="M21 9v1"/><path d="M3 14v1"/><path d="M21 14v1"/></svg> */}
                            <p><span className="text-2xl font-semibold">{opcionesInformacion[opcionSeleccionada].metrosTerreno}</span> de Terreno</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-4 gap-6 mt-16 text-center">
                        <div onClick={() => handleChangeOpcion('Aire')} className={opcionSeleccionada === 'Aire' ? 'cursor-pointer text-blue-900' : 'cursor-pointer text-gray-500'}>
                            <span className="text-2xl">Aire</span>
                            <div className={opcionSeleccionada === 'Aire' ? 'w-full h-4 rounded-full bg-blue-900' : 'w-full h-4 rounded-full bg-slate-300 border border-transparent'}></div>
                        </div>
                        <div onClick={() => handleChangeOpcion('Madera')} className={opcionSeleccionada === 'Madera' ? 'cursor-pointer text-blue-900' : 'cursor-pointer text-gray-500'}>
                            <span className="text-2xl">Madera</span>
                            <div className={opcionSeleccionada === 'Madera' ? 'w-full h-4 rounded-full bg-blue-900' : 'w-full h-4 rounded-full bg-slate-300 border border-transparent'}></div>
                        </div>
                        <div onClick={() => handleChangeOpcion('Tierra')} className={opcionSeleccionada === 'Tierra' ? 'cursor-pointer text-blue-900' : 'cursor-pointer text-gray-500'}>
                            <span className="text-2xl">Tierra</span>
                            <div className={opcionSeleccionada === 'Tierra' ? 'w-full h-4 rounded-full bg-blue-900' : 'w-full h-4 rounded-full bg-slate-300 border border-transparent'}></div>
                        </div>
                        <div onClick={() => handleChangeOpcion('Agua')} className={opcionSeleccionada === 'Agua' ? 'cursor-pointer text-blue-900' : 'cursor-pointer text-gray-500'}>
                            <span className="text-2xl">Agua</span>
                            <div className={opcionSeleccionada === 'Agua' ? 'w-full h-4 rounded-full bg-blue-900' : 'w-full h-4 rounded-full bg-slate-300 border border-transparent'}></div>
                        </div>
                    </div>

                    <div className="my-auto">
                        <Link href={'#'} className='px-8 py-2 border-2 border-blue-900 text-blue-900'>
                            Solicitar Informes
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 w-full h-96 rounded-2xl">
                <Image src={Tren} alt="" className="w-full h-full object-cover rounded-2xl"/>
            </div>
        </div>
    )
}
