'use client';

import React, { useState } from "react";
import useMeasure from "react-use-measure";
import {
  useDragControls,
  useMotionValue,
  useAnimate,
  motion,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import second from '@/assets/SALA COMEDOR.jpg'
import baja from '@/assets/PLANTA 1 AIRE.png'
import alta from '@/assets/PLANTA 2 AIRE.png'

export const DragCloseDrawerExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <button
        onClick={() => setOpen(true)}
        className="text-white text-center focus:outline-none"
      >
        Descubre el Modelo
      </button>

      <DragCloseDrawer open={open} setOpen={setOpen}>
        <div className="mx-auto max-w-5xl space-y-28">
            <div className="grid grid-cols-3 gap-10">
                <div>
                    <h2 className="text-4xl font-bold">
                        Aire
                    </h2>
                    <span className="text-blue-900 uppercase">Modelo</span>
                    <div className="mt-12">
                        <p>Superficie construida: 140 m2.</p>
                        <p>Máximo aprovechamiento en la distribución de espacios.</p>
                    </div>
                    <div className="mt-12">
                        <Link href={'#'} className='px-8 py-2 border-2 border-blue-900 text-blue-900'>
                            Solicitar Informes
                        </Link>
                    </div>
                </div>
                <div className="col-span-2 h-[500px]">
                    <Image src={second} alt="" className="w-full h-full object-cover"/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
                <div>
                    <div className="">
                        <h2 className="text-4xl font-bold">Cada rincón diseñado <br /> PARA TI Y TU HOGAR</h2>
                        <span className="text-blue-900 uppercase">Plano de Planta</span>
                    </div>
                    <div className="flex gap-8 mt-10">
                        <Image src={baja} alt="" className="w-full h-full object-cover"/>
                        <Image src={alta} alt="" className="w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="mt-40">
                    <div>
                        <Link href={'#'} className="py-2 px-4 bg-slate-100">Planta Alta</Link>
                        <Link href={'#'} className="py-2 px-4">Planta Baja</Link>
                    </div>
                    <div className="bg-slate-100 h-96"></div>
                </div>
            </div>

            <div>
                <h2 className="text-4xl font-bold">Conoce la casa muestra</h2>
                <span className="text-blue-900 uppercase">Recorrido virtual</span>
                <div className="mt-12">                
                    <iframe src="https://my.matterport.com/show/?m=cp3bbkSjoRG" width="100%" height="700px" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
                </div>
            </div>
        </div>
      </DragCloseDrawer>
    </div>
  );
};

const DragCloseDrawer = ({ open, setOpen, children }) => {
  const [scope, animate] = useAnimate();
  const [drawerRef, { height }] = useMeasure();

  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = async () => {
    animate(scope.current, {
      opacity: [1, 0],
    });

    const yStart = typeof y.get() === "number" ? y.get() : 0;

    await animate("#drawer", {
      y: [yStart, height],
    });

    setOpen(false);
  };

  return (
    <>
      {open && (
        <motion.div
          ref={scope}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-neutral-950/70"
        >
          <motion.div
            id="drawer"
            ref={drawerRef}
            onClick={(e) => e.stopPropagation()}
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              ease: "easeInOut",
            }}
            className="absolute bottom-0 h-[75vh] w-full overflow-hidden rounded-t-3xl bg-white"
            style={{ y }}
            drag="y"
            dragControls={controls}
            onDragEnd={() => {
              if (y.get() >= 100) {
                handleClose();
              }
            }}
            dragListener={false}
            dragConstraints={{
              top: 0,
              bottom: 0,
            }}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex justify-center bg-white p-4">
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className="h-2 w-14 cursor-grab touch-none rounded-full bg-neutral-700 active:cursor-grabbing"
              ></button>
            </div>
            <div className="relative z-0 h-full overflow-y-scroll p-4 pt-12">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};