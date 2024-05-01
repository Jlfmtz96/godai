'use client'

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const banner = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };
  
  const letterAni = {
    initial: { y: 400 },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
  };
  
  export const Godai = () => {
      const [playAnimation, setPlayAnimation] = useState(false);
  
      useEffect(() => {
        // Simulamos un retraso antes de iniciar la animación
        const timeout = setTimeout(() => {
          setPlayAnimation(true);
        }, 2000);
    
        // Limpiamos el timeout en el desmontaje del componente para evitar fugas de memoria
        return () => clearTimeout(timeout);
      }, []);
    
      return (
        <motion.div className='godai-text' variants={banner} animate={playAnimation && "animate"}>
          <AnimatedLetters title={"Godai Godai Godai Godai Godai Godai Godai Godai Godai"} />
        </motion.div>
      );
    };
    
  const AnimatedLetters = ({ title }) => (
    <motion.span className='row-title'>
      {[...title].map((letter, index) => (
        <motion.span key={index} className='row-letter' variants={letterAni}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
