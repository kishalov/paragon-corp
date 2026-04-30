'use client';

import Image from 'next/image';
import { Squircle } from "@squircle-js/react";
import { motion, Variants } from 'framer-motion';
import { AppButton } from './ui/AppButton';
import { ContactPopup } from './ui/PopupForm';

const NAV_LINKS = [
  { name: 'About Us', href: '#about' },
  { name: 'What We Do', href: '#services' },
  { name: 'Quality Assurance', href: '#quality' },
  { name: 'Contact', href: '#contact' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
};

export default function Hero() {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    // Если используешь scroll-behavior: smooth в CSS, достаточно просто этого:
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center pt-6 pb-20 overflow-hidden">

      <div className="bg-glow-layer" />


<motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-2 rounded-3xl relative z-50 w-[calc(100%-2rem)] max-w-[1440px] md:p-4 flex justify-between items-center shadow-lg"
      >
        <div className="flex-shrink-0">
          <Image src="/logo.svg" alt="Logo" width={180} height={50} className="w-[140px] md:w-[180px]" priority />
        </div>
        
        <nav className="hidden lg:flex gap-10">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)} // Добавляем обработчик
              className="relative w-fit transition-colors group py-2 block text-black hover:text-[#246050] font-medium"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#246050] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        <ContactPopup>
          <AppButton text="Get in Touch" className="hidden sm:flex" />
        </ContactPopup>
      </motion.header>

      <motion.div 
        className="relative z-10 flex flex-col items-center w-full mt-12 md:mt-20 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
      
        <motion.h1 
          variants={itemVariants}
          className="text-h1 text-center mb-10 md:mb-16 max-w-[90vw] text-white"
        >
          Your fearless partner for<br />
          uninterrupted flights.
        </motion.h1>

        <div className="relative w-full max-w-[1070px] aspect-[4/3] md:aspect-[1070/320] flex items-center justify-center">
          
          <motion.div 
            variants={itemVariants}
            className="w-full h-full"
          >
            <Squircle cornerRadius={40} cornerSmoothing={1} className="relative w-full h-full overflow-hidden border border-white/10">
              <Image 
                src="/sky-bg.png" 
                alt="Sky" 
                fill 
                className="object-cover" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060305] via-transparent to-transparent opacity-80" />
            </Squircle>
          </motion.div>

          <motion.div 
            className="absolute w-[130%] md:w-[140%] h-[130%] md:h-[140%] z-20 pointer-events-none top-0 left-1/2"
            initial={{ x: "-40%", y: "-10%", opacity: 0, scale: 0.9 }}
            animate={{ 
              x: "-50%", 
              y: ["-25%", "-28%", "-25%"],
              opacity: 1, 
              scale: 1 
            }}
            transition={{ 
              x: { duration: 1.5, ease: "easeOut" },
              opacity: { duration: 1 },
              scale: { duration: 1.5 },
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              } 
            }}
          >
            <div className="relative w-full h-full">
              <Image 
                src="/plane.png" 
                alt="Plane" 
                fill 
                className="object-contain" 
                priority 
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-12 md:mt-16 max-w-[840px] text-center flex flex-col items-center"
        >
          <p className="mb-8 md:mb-12 text-white text-sm md:text-base leading-relaxed opacity-80">
            Welcome to the world of Aerodeals, where we ensure your flights run smoothly through expert management of aviation parts.
          </p>
          <ContactPopup>

          <AppButton text="Get in Touch" />
          </ContactPopup>
        </motion.div>
      </motion.div>
    </section>
  );
}