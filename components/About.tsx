'use client';

import React from 'react';
import Image from 'next/image';
import { Squircle } from "@squircle-js/react";
import { motion, Variants } from 'framer-motion';

// Анимация для текстового блока
const textVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

// Анимация для контейнера картинок
const imageContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const singleImageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 1, ease: "easeOut" } 
  }
};

export default function About() {
  return (
    <section 
      id="about" 
      className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32 bg-[#060305] overflow-visible"
    >
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* ЛЕВАЯ ЧАСТЬ: Изображения */}
        <motion.div 
          className="relative w-full lg:w-1/2 h-[500px] md:h-[650px] flex items-center justify-center"
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* СВЕТОВОЙ ШЕЙП с пульсацией */}
          <motion.div 
            className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] pointer-events-none z-0"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            style={{
              background: 'radial-gradient(circle, #1A4238 0%, rgba(6, 3, 5, 0) 100%)',
              filter: 'blur(10px)',
              transform: 'translateZ(0)',
            }}
          />

          {/* КАРТИНКА 1 (Левая верхняя) */}
          <motion.div 
            className="absolute top-0 left-0 w-[240px] md:w-[320px] h-[400px] md:h-[540px] z-10"
            variants={singleImageVariants}
            /* Легкий эффект при наведении */
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Squircle 
              cornerRadius={40} 
              cornerSmoothing={1} 
              className="w-full h-full overflow-hidden border border-white/10 relative"
              style={{ transform: 'translateZ(0)', willChange: 'transform' }}
            >
              <div className="relative w-full h-full">
                <Image 
                  src="/about-1.png" 
                  alt="Aviation 1" 
                  fill 
                  className="object-cover"
                  priority 
                  sizes="(max-width: 768px) 240px, 320px"
                />
              </div>
            </Squircle>
          </motion.div>

          {/* КАРТИНКА 2 (Правая нижняя) */}
          <motion.div 
            className="absolute bottom-0 right-0 w-[240px] md:w-[320px] h-[400px] md:h-[540px] z-20"
            variants={singleImageVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Squircle 
              cornerRadius={40} 
              cornerSmoothing={1} 
              className="w-full h-full overflow-hidden border border-white/20 relative shadow-2xl"
              style={{ transform: 'translateZ(0)', willChange: 'transform' }}
            >
              <div className="relative w-full h-full">
                <Image 
                  src="/about-2.png" 
                  alt="Aviation 2" 
                  fill 
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 240px, 320px"
                />
              </div>
            </Squircle>
          </motion.div>
        </motion.div>

        {/* ПРАВАЯ ЧАСТЬ */}
        <motion.div 
          className="relative z-30 w-full lg:w-1/2 flex flex-col items-start text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.h2 
            variants={textVariants}
            className="text-[32px] md:text-[56px] font-bold leading-[1.1] text-white mb-6 md:mb-10 text-h1 uppercase"
          >
            Fearless Solutions
          </motion.h2>
          <motion.p 
            variants={textVariants}
            className="font-sans text-[18px] md:text-[20px] font-normal leading-[1.6] text-white/80 max-w-[540px] uppercase tracking-wide"
          >
            For Uninterrupted Flights
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}