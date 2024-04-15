import Image from "next/image";
import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/footer/Footer";

import profit from '../assets/income_9236087.png';
import market from '../assets/market_12001636.png';
import shield from '../assets/shield_5138377.png';
import business from '../assets/business-strategy_7898249.png';
import I1 from '../assets/1.webp';
import I2 from '../assets/construccion-central-electrica.jpg';
import I4 from '../assets/4.webp';
import I5 from '../assets/aguascalientes_turismo_nacional_.jpg';
import I6 from '../assets/keelung-new-harbor-service-builind-competition-100.jpg';

import I7 from '../assets/don-gotera-imagen-2-64efac06d87fd.webp';
import I8 from '../assets/frigorifico-comida.jpg';
import I9 from '../assets/198.jpg';
import I10 from '../assets/interior-restaurante.jpg';
import I11 from '../assets/empty-drugstore-with-bottles-packages-full-with-medicaments-retail-shop-shelves-with-pharmaceutical-products-pharmacy-space-filled-with-medical-drugs-pills-vitamins-boxes.jpg';
import I12 from '../assets/322787126.jpg';
import I13 from '../assets/interior-shot-cafe-with-chairs-near-bar-with-wooden-tables.jpg';

import vivienda from '@/assets/Slider-God nuevo 1.png';
import juegos from '@/assets/Slider-God nuevo 2.png';
import anios from '@/assets/60_anios_logo.webp';
import { About } from "@/components/about/About";
import { Gallery } from "@/components/gallery/Gallery";
import { Modelo } from "@/components/modelo/Modelo";



export default function Home() {
  return (
    <main className="">
      <Hero />

      <section className="mt-40 h-screen">
        <About />
      </section>

      <section>
        <Gallery />
      </section>


      <div className="mt-60">
        <Modelo />
      </div>




      <div className="mt-40 container mx-auto">
        <h2 className="font-bold text-7xl text-center">Conoce tu entorno</h2>
        <p className="text-center mt-10 text-2xl">Al sur, el mayor polo de desarrollo de la ciudad de Aguascalientes, frente a Nissan I y a unos pasos del nuevo campus de la UPA.<br /> Av. San Gerardo, 20342 Aguascalientes, Ags.</p>
        
        <div className="mt-10 flex justify-center">
            <a href="#"className="rounded-full border-2 border-blue-600 text-blue-600 px-7 py-2.5 text-2xl font-semibold hover:text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Cómo llegar
            </a>
        </div>

        <div className="mt-10 flex justify-center">
            <div className="h-[400px] w-full">
                <iframe loading="lazy" src="https://sangerardoresidencial.com.mx/mapbox/mapbox.html" className="w-full h-full"></iframe>
            </div>
        </div>
      </div>


      <div className="">
        <div className="text-center">
          <div className="col-span-5 bg-blue-900 p-20">
            <span className="uppercase text-xl tracking-widest font-semibold text-blue-400">Empieza a construir ideas</span>
            <h2 className="font-bold text-7xl text-white mt-6">Contáctanos</h2>

            <div className="max-w-2xl mx-auto mt-5">
              <form className="grid grid-cols-2 gap-8">
                <div>
                  <label htmlFor="nombre" className="block text-lg font-medium text-white">Nombre</label>
                  <input type="text" id="nombre" name="nombre" autoComplete="given-name" required
                        className="mt-1 text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xl py-2 px-6 border-gray-300 rounded-md"/>
                </div>
                <div>
                  <label htmlFor="apellidos" className="block text-lg font-medium text-white">Apellidos</label>
                  <input type="text" id="apellidos" name="apellidos" autoComplete="family-name" required
                        className="mt-1 text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xl py-2 px-6 border-gray-300 rounded-md"/>
                </div>
                <div>
                  <label htmlFor="correo" className="block text-lg font-medium text-white">Correo electrónico</label>
                  <input type="email" id="correo" name="correo" autoComplete="email" required
                        className="mt-1 text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xl py-2 px-6 border-gray-300 rounded-md"/>
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-lg font-medium text-white">Teléfono</label>
                  <input type="tel" id="telefono" name="telefono" autoComplete="tel" required
                        className="mt-1 text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm text-xl py-2 px-6 border-gray-300 rounded-md"/>
                </div>
                <div className="col-span-2 flex items-center">
                  <input id="aviso_privacidad" name="aviso_privacidad" type="checkbox" required
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
                  <label htmlFor="aviso_privacidad" className="ml-2 block text-sm text-white">
                    He leído y acepto el aviso de privacidad
                  </label>
                </div>
                <div className="col-span-2">
                  <button type="submit"
                          className="w-full flex justify-center bg-blue-600 border border-transparent rounded-full py-2 px-7 items-center font-medium text-xl text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Enviar Datos
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </main>
  );
}
