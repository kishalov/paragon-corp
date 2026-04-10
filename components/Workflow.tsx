'use client';

import Image from 'next/image';
import { Squircle } from "@squircle-js/react";

const steps = [
  { id: '01', text: 'We supply high-quality aviation spare parts for commercial and private aircraft, offering certified components for airframes, engines, avionics, and landing gear.' },
  { id: '02', text: 'We provide comprehensive aviation repair and exchange services to support airlines, MROs, and aircraft operators, ensuring the highest standards of safety, quality, and efficiency.' },
  { id: '03', text: 'We recognize that AOG situations require immediate action to minimize downtime. Our 24/7 AOG parts support ensures your aircraft returns to service quickly, helping you avoid costly delays.' },
];

export default function Workflow() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-20 py-20 md:py-32 flex flex-col items-center overflow-hidden">
      
    
      <div className="bg-glow-layer" />

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        
        <div className="flex flex-col gap-10 md:gap-16 order-2 lg:order-1">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-start gap-4 md:gap-6 max-w-[460px]">
              <div className="relative">
                <Squircle 
                  cornerRadius={12} 
                  cornerSmoothing={1} 
                  className="relative w-[60px] md:w-[70px] h-[36px] md:h-[40px] bg-[#246050] flex items-center justify-center text-white font-sans font-bold text-[16px] md:text-[18px]"
                >
                  {step.id}
                </Squircle>
              </div>
              <p className="text-sm md:text-base text-white/90 leading-relaxed md:leading-snug">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        
        <div className="relative w-full h-[450px] md:h-[600px] order-1 lg:order-2">
          
          
          <div className="absolute top-0 right-[5%] md:right-20 w-[160px] md:w-[240px] h-[240px] md:h-[360px] z-10">
            <Squircle cornerRadius={30} cornerSmoothing={1} className="w-full h-full overflow-hidden border border-white/10">
              <Image 
                src="/flow-2.png" 
                alt="Jet in sky" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 160px, 240px" 
              />
            </Squircle>
          </div>


          <div className="absolute top-1/2 left-0 md:left-10 -translate-y-1/2 w-[180px] md:w-[280px] h-[280px] md:h-[420px] z-20">
            <Squircle cornerRadius={30} cornerSmoothing={1} className="w-full h-full overflow-hidden border border-white/20 shadow-2xl">
              <Image 
                src="/flow-1.png" 
                alt="Jet engine" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 180px, 280px" 
              />
            </Squircle>
          </div>

          
          <div className="absolute bottom-0 right-0 w-[140px] md:w-[220px] h-[220px] md:h-[340px] z-5">
            <Squircle cornerRadius={30} cornerSmoothing={1} className="w-full h-full overflow-hidden border border-white/5 opacity-80 md:opacity-100">
              <Image 
                src="/flow-3.png" 
                alt="Jet on runway" 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 140px, 220px" 
              />
            </Squircle>
          </div>

        </div>
      </div>
    </section>
  );
}