'use client';

import Image from 'next/image';
import { Squircle } from "@squircle-js/react";
import { Users, Globe, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: <Users size={64} strokeWidth={1.5} />,
    title: 'International Cooperation',
    desc: 'Paragon Corp collaborates with leading international suppliers and service centers'
  },
  {
    icon: <Globe size={64} strokeWidth={1.5} />,
    title: 'Extensive Supply Geography',
    desc: 'We deliver worldwide, ensuring parts availability anywhere'
  },
  {
    icon: <BadgeCheck size={64} strokeWidth={1.5} />,
    title: 'Reliability and Quality',
    desc: 'Our partners are proven suppliers who guarantee high-quality products and services'
  }
];

export default function Geography() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-20 py-32 overflow-hidden">
      
      
      <h2 className="text-h1 text-center mb-20">Supply Geography</h2>

      
      <div className="relative w-full aspect-[1200/500] min-h-[450px]">
        <Squircle 
          cornerRadius={50} 
          cornerSmoothing={1} 
          className="relative w-full h-full overflow-hidden border border-white/10 shadow-2xl"
        >
          
          <Image 
            src="/geography-bg.png" 
            alt="Sky background" 
            fill 
            className="object-cover"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-[#060305] via-transparent to-transparent" />

          
          <div className="absolute inset-0 z-10 grid grid-cols-1 md:grid-cols-3 items-center px-10 md:px-20 gap-12">
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center text-white group">
                
                <div className="mb-8 text-white transition-transform group-hover:scale-110 duration-300">
                  {item.icon}
                </div>
                
                <h3 className="font-sans font-bold text-[20px] mb-4 leading-tight">
                  {item.title}
                </h3>
                
                <p className="font-sans text-[16px] text-white/80 leading-relaxed max-w-[280px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Squircle>
      </div>

      
      <div className="bg-glow-layer" />
    </section>
  );
}