'use client';

import Image from 'next/image';
import { Squircle } from "@squircle-js/react";
import { AppButton } from './ui/AppButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-6 pb-20 overflow-hidden">
      <div className="bg-glow-layer" />

      
      <header className="bg-white p-2 rounded-3xl relative z-50 w-[calc(100%-2rem)] max-w-[1440px] md:p-4 flex justify-between items-center transition-all">
        <div className="flex-shrink-0">
          <Image 
            src="/logo.svg" 
            alt="Paragon Corp" 
            width={180} 
            height={50} 
            className="w-[140px] md:w-[180px] h-auto"
            priority 
          />
        </div>
        
        <nav className="hidden lg:flex gap-10">
          {['About Us', 'What We Do', 'Quality Assurance', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="relative w-fit transition-colors group py-2 block text-black hover:text-[#246050] font-medium"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#246050] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
        </nav>

        <AppButton text="Call Me" className="hidden sm:flex" />
      </header>

      <div className="relative z-10 flex flex-col items-center w-full mt-12 md:mt-20 px-6">
        <h1 className="text-h1 text-center mb-10 md:mb-16 max-w-[90vw]">
          Your fearless partner for<br />
          uninterrupted flights.
        </h1>

        
        <div className="relative w-full max-w-[1070px] aspect-[4/3] md:aspect-[1070/320] flex items-center justify-center">
          
          
          <Squircle cornerRadius={40} cornerSmoothing={1} className="relative w-full h-full overflow-hidden border border-white/10">
            <Image src="/sky-bg.png" alt="Sky" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-main via-transparent to-transparent opacity-80" />
          </Squircle>

          
          <div className="absolute w-[130%] md:w-[140%] h-[130%] md:h-[140%] z-20 pointer-events-none top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 md:-translate-y-1/3">
              <div className="relative w-full h-full">
                <Image 
                    src="/plane.png" 
                    alt="Plane" 
                    fill 
                    className="object-contain" 
                    priority 
                />
              </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 max-w-[840px] text-center flex flex-col items-center">
          <p className="mb-8 md:mb-12 text-white text-sm md:text-base leading-relaxed">
            Welcome to the world of Aerodeals, where we ensure your flights run smoothly through expert management of aviation parts.
          </p>
          <AppButton text="Get in Touch" />
        </div>
      </div>
    </section>
  );
}