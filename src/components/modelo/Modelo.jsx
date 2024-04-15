import Image from "next/image"

import fachada from '@/assets/FACHADA.webp';
import Link from "next/link";


export const Modelo = () => {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-16">
        <div>
            <Image src={fachada} alt="" />
        </div>
        <div className="flex flex-col h-full">
            <h3 className="text-5xl mt-16">Aire</h3>

            <div className="grid grid-cols-4 gap-6 mt-6">
                <div className="flex gap-2 items-center">
                    <div className="h-4 w-4 rounded-full bg-blue-900"></div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bed-double"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M12 4v6"/><path d="M2 18h20"/></svg> */}
                    <span>3 Recámaras</span>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="h-4 w-4 rounded-full bg-blue-900"></div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shower-head"><path d="m4 4 2.5 2.5"/><path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"/><path d="M15 5 5 15"/><path d="M14 17v.01"/><path d="M10 16v.01"/><path d="M13 13v.01"/><path d="M16 10v.01"/><path d="M11 20v.01"/><path d="M17 14v.01"/><path d="M20 11v.01"/></svg> */}
                    <span> 3<sup>1/2</sup> Baños</span>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="h-4 w-4 rounded-full bg-blue-900"></div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> */}
                    <span>Construcción 156 m<sup>2</sup></span>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="h-4 w-4 rounded-full bg-blue-900"></div>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-box-select"><path d="M5 3a2 2 0 0 0-2 2"/><path d="M19 3a2 2 0 0 1 2 2"/><path d="M21 19a2 2 0 0 1-2 2"/><path d="M5 21a2 2 0 0 1-2-2"/><path d="M9 3h1"/><path d="M9 21h1"/><path d="M14 3h1"/><path d="M14 21h1"/><path d="M3 9v1"/><path d="M21 9v1"/><path d="M3 14v1"/><path d="M21 14v1"/></svg> */}
                    <span> Terreno 117 m<sup>2</sup></span>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-6 mt-16">
                <div>
                    <span>Aire</span>
                    <div className="w-full h-4 rounded-full bg-blue-900"></div>
                </div>
                <div>
                    <span>Madera</span>
                    <div className="w-full h-4 rounded-full bg-slate-300"></div>
                </div>
                <div>
                    <span>Tierra</span>
                    <div className="w-full h-4 rounded-full bg-slate-300"></div>
                </div>
                <div>
                    <span>Agua</span>
                    <div className="w-full h-4 rounded-full bg-slate-300"></div>
                </div>
            </div>

            <div className="mt-auto">
                <Link href={'#'} className='px-8 py-2 border-2 border-blue-900 text-blue-900'>
                    Solicitar Informes
                </Link>
            </div>
        </div>
    </div>
  )
}
