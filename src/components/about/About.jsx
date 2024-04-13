import Image from "next/image"

import juegos from '@/assets/Slider-God nuevo 2.png';
import vivienda from '@/assets/Slider-God nuevo 1.png';
import anios from '@/assets/60_anios_logo.webp';



export const About = () => {
  return (
    <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8 px-20">
            <div>
                <div>
                  <span className="uppercase font-bold text-blue-900 text-4xl">TU CASA EN LA MEJOR ZONA</span>
                </div>
                <div className="rounded-xl w-full h-full mt-12">
                    <Image src={juegos} alt="" className="w-full h-full object-cover rounded-xl"/>
                </div>
            </div>
            <div>
                <div className="rounded-xl w-full h-96">
                    <Image src={vivienda} alt="" className="w-full h-full object-cover rounded-xl"/>
                </div>
                <div className="mt-8">
                    <p className="text-lg">Si buscas un lugar para vivir que refleje tu estilo de vida, Godai es tu futuro hogar. Este proyecto residencial te ofrece una experiencia de vida ideal para disfrutar la comodidad en cada uno de sus modernos espacios; además de la alta plusvalía que ofrece la zona diamante de IRAPUATO. ¡Plusvalía que crece día con día!</p>
                </div>
                <div className="flex justify-between mt-4 px-16">
                    <div className="text-center relative">
                        <h1 className="font-bold text-9xl text-blue-900 opacity-20">75</h1>
                        <span className="font-bold text-blue-900 text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap">Familias felices</span>
                    </div>
                    <div className="drop-shadow-2xl">
                        <Image src={anios} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
