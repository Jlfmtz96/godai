'use client'

import Image from "next/image"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
 

export const Gallery = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <GalleryItem key={index} src={image} index={index} />
      ))}
    </div>
  )
}

const GalleryItem = ({ src, index }) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.5, // Change as needed
    });

      // Agrega una barra inclinada antes de la ruta si es relativa
    const imageUrl = src.startsWith('/') ? src : `/${src}`;
  
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="gallery-item"
      >
        <Image src={imageUrl} width={1410} height={920} alt={`Image ${index + 1}`} />
      </motion.div>
    );
  };