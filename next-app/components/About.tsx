'use client';

import Image from 'next/image';
import { Squircle } from "@squircle-js/react";

export default function About() {
  return (
    <section id="about" className="relative w-full max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32 bg-[#060305] overflow-hidden">
      
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        
        <div className="relative w-full lg:w-1/2 h-[500px] md:h-[650px] flex items-center justify-center">
          
          
          <div 
            className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] pointer-events-none z-0"
            style={{
              background: 'radial-gradient(circle, #1A4238 0%, rgba(6, 3, 5, 0) 100%)',
              filter: 'blur(60px) md:blur(90px)',
              transform: 'translateZ(0)',
            }}
          />

          
          <div className="absolute top-0 left-0 w-[240px] md:w-[320px] h-[400px] md:h-[540px] z-10">
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
          </div>

          
          <div className="absolute bottom-0 right-0 w-[240px] md:w-[320px] h-[400px] md:h-[540px] z-20">
            <Squircle 
              cornerRadius={40} 
              cornerSmoothing={1} 
              className="w-full h-full overflow-hidden border border-white/20 relative"
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
          </div>
        </div>

    
        <div className="relative z-30 w-full lg:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-[32px] md:text-[56px] font-bold leading-[1.1] text-white mb-6 md:mb-10 text-h1 uppercase">
            Fearless Solutions
          </h2>
          <p className="font-sans text-[18px] md:text-[20px] font-normal leading-[1.6] text-white/80 max-w-[540px] uppercase tracking-wide">
            For Uninterrupted Flights
          </p>
        </div>
      </div>
    </section>
  );
}