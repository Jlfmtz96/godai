import Image from "next/image";
import { Hero } from "@/components/hero/Hero";
import { Footer } from "@/components/footer/Footer";

import { About } from "@/components/about/About";
import { Gallery } from "@/components/gallery/Gallery";
import { Modelo } from "@/components/modelo/Modelo";

import { MapView } from "@/components/map/MapView";
import { Map } from "@/components/map/Map";
import { Contact } from "@/components/contact/Contact";
import { Godai } from "@/components/hero/Godai";
import { TextParallaxContent } from "@/components/section/TextParallaxContent";


export default function Home() {
  return (
    <main className="">
      <Hero />

      <TextParallaxContent
          mediaUrl= "./Slider-God-nuevo-3.webp"
          subheading="Aquí encontrarás"
          heading="La casa de tus sueños"
          heading2="En la mejor zona"
          isVideo={false}
        >
        {/* <ExampleContent /> */}
      </TextParallaxContent>
      <section className="mt-40 h-screen">
        <About />
      </section>
      <TextParallaxContent
            mediaUrl ="./2024_03_21_12_07_52_Cache.mp4"
            // mediaUrl="https://www.apple.com/105/media/us/apple-vision-pro/2024/6e1432b2-fe09-4113-a1af-f20987bcfeee/anim/experience-apps/large.mp4"
            subheading="Amenidades"
            heading="Libérate de preocupaciones"
            heading2="En un ambiente de lujo y bienestar."
            isVideo={true}
          >
      </TextParallaxContent>
      <section className="">
        <Gallery />
      </section>

      <div className="w-full h-auto">
          <Image src={"/Tren-de-vivienda-1920x420.webp"} alt="" width={1920} height={420} />
        </div>

      <div className="mt-10">
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
