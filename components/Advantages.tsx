'use client';

import Image from 'next/image';
import { Squircle } from "@squircle-js/react";
import { Clock } from 'lucide-react';

export default function Advantages() {
  return (
    
    <section className="bg-[#1A4238] w-full overflow-hidden">
      
      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-20 py-32 flex flex-col items-center">

    
        <h2 className="text-h1 text-center mb-24 relative z-10 text-white">
          Advantages of Working with Paragon Corp
        </h2>

    
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
    
          <Squircle cornerRadius={50} cornerSmoothing={1} className="relative aspect-[3/4] overflow-hidden group">
            <Image 
              src="/adv-left.png" 
              alt="Global Network" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent p-10 text-center">
              <h3 className="font-sans font-bold text-[22px] text-white mb-4">Global Supplier Network</h3>
              <p className="font-sans text-[18px] text-white/80 leading-snug">
                We partner with suppliers worldwide to ensure fast delivery
              </p>
            </div>
          </Squircle>

    
          <div className="relative aspect-[3/4] flex items-center justify-center">
            <div className="absolute inset-0 bg-[#0A0A0A] rounded-[140px] shadow-2xl z-0" />
              <Squircle cornerRadius={50} cornerSmoothing={1} className="w-full h-full overflow-hidden relative">
                <Image 
                  src="/adv-center.png" 
                  alt="Sky view" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center p-8">
                  <Clock className="text-white mb-6" size={80} strokeWidth={1.5} />
                  <h3 className="font-sans font-bold text-[22px] text-white mb-4">24/7 Operation</h3>
                  <p className="font-sans text-[18px] text-white/80 leading-snug max-w-[250px]">
                    Our services are available 24/7 to ensure seamless flights
                  </p>
                </div>
              </Squircle>
          </div>

          
          <Squircle 
            cornerRadius={50} 
            cornerSmoothing={1} 
            className="relative aspect-[3/4] bg-[#4FA0C7] flex flex-col items-center justify-center text-center p-12 overflow-hidden"
          >
            <div className="relative w-full h-1/2 mb-6">
              <Image 
                src="/adv-right-plane.png" 
                alt="Documentation" 
                fill 
                className="object-contain"
              />
            </div>
            <h3 className="font-sans font-bold text-[22px] text-white mb-4">
              Documentation and Certification Control:
            </h3>
            <p className="font-sans text-[18px] text-white/90 leading-snug">
              We monitor compliance with all necessary documents and certifications for your safety
            </p>
          </Squircle>

        </div>
      </div>
    </section>
  );
}