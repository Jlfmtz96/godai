'use client'

import Image from "next/image"
import { easeIn, easeInOut, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";
 

export const Gallery = () => {
  return (
    <div>
      <div className="text-center relative">
          <h1 className="font-bold text-9xl text-blue-900 opacity-20 uppercase">Amenidades</h1>
          <span className="font-bold text-blue-900 text-5xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-nowrap">Aquí tus nuevos días</span>
      </div>
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div> */}
      <HorizontalScrollCarousel />
      {/* <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div> */}
    </div>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"], easeInOut);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[820px] w-[1410px] overflow-hidden bg-neutral-200 rounded-2xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-bold uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

const cards = [
  {
    url: "/images/1.png",
    title: "Acceso controlado",
    id: 1,
  },
  {
    url: "/images/4.jpg",
    title: "Alberca",
    id: 2,
  },
  {
    url: "/images/Casa-club.webp",
    title: "Casa Club",
    id: 3,
  },
  {
    url: "/images/gym.webp",
    title: "Gimnasio",
    id: 4,
  },
  {
    url: "/images/juegos-inf.webp",
    title: "Juegos",
    id: 5,
  },
  {
    url: "/images/3.png",
    title: "Áreas verdes",
    id: 6,
  },
  {
    url: "/images/alberca.webp",
    title: "Godai",
    id: 7,
  },
];
