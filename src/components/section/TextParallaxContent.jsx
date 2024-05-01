'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const IMG_PADDING = 12;

export const TextParallaxContent = ({ mediaUrl, subheading, heading, heading2, isVideo, children }) => {
    return (
        <div>
            <div className="relative h-[150vh]">
            {isVideo ? (
                <StickyVideo videoUrl={mediaUrl} />
            ) : (
                <StickyImage imgUrl={mediaUrl} />
            )}
            <OverlayCopy heading={heading} heading2={heading2} subheading={subheading} />
            </div>
            {children}
        </div>
    );
}

const StickyImage = ({ imgUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "end start"],
    });
  
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
    return (
      <motion.div
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          top: 0,
          scale,
        }}
        ref={targetRef}
        className="sticky z-0 overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-neutral-950/70"
          style={{
            opacity,
          }}
        />
      </motion.div>
    );
  };
  
  
  const StickyVideo = ({ videoUrl }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "end start"],
    });
  
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  
    return (
      <motion.div
        ref={targetRef}
        className="sticky z-0 overflow-hidden"
        style={{
          top: IMG_PADDING,
          height: "100vh",
          scale,
        }}
      >
        <motion.video
          autoPlay
          loop
          muted
          src={videoUrl}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            opacity,
          }}
        />
  
        <motion.div
          className="absolute inset-0 bg-neutral-950/70"
          style={{
            opacity,
          }}
        />
      </motion.div>
    );
  };
  
  const OverlayCopy = ({ subheading, heading, heading2 }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);
  
    return (
      <motion.div
        style={{
          y,
          opacity,
        }}
        ref={targetRef}
        className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
      >
        <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl font-semibold">
          {subheading}
        </p>
        <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        <p className="text-center text-4xl font-bold md:text-7xl">{heading2}</p>
      </motion.div>
    );
  };
  
  const ExampleContent = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <div className="col-span-1 md:col-span-4">
        {/* <TextRotation /> */}
        {/* <p id="text" className="h-36 text-xl">Familias viviendo en el residencial</p> */}
        {/* <CircleWithMovingText /> */}
      </div>
      {/* <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        75
      </h2> */}
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Si buscas un lugar para vivir que refleje tu estilo de vida, Godai es tu futuro hogar.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          Este proyecto residencial te ofrece una experiencia de vida ideal para disfrutar la comodidad en cada uno de sus modernos espacios; además de la alta plusvalía que ofrece la zona diamante de IRAPUATO.
          ¡Plusvalía que crece día con día!
        </p>
        <button className="w-full rounded bg-blue-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
          Conócenos
        </button>
      </div>
    </div>
  );
