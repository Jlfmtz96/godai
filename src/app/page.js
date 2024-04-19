import Image from "next/image";
import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/footer/Footer";

import { About } from "@/components/about/About";
import { Gallery } from "@/components/gallery/Gallery";
import { Modelo } from "@/components/modelo/Modelo";

import { MapView } from "@/components/map/MapView";
import { Map } from "@/components/map/Map";
import { Contact } from "@/components/contact/Contact";


export default function Home() {
  return (
    <main className="">
      <Hero />

      <section className="mt-40 h-screen">
        <About />
      </section>

      <section className="mt-40">
        <Gallery />
      </section>


      <div className="mt-40">
        <Modelo />
      </div>

      <div className="mt-40">
        <Map />
      </div>


      <div className="mt-40">
        <Contact />
      </div>

      <Footer />

    </main>
  );
}
