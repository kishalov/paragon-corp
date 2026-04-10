'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Squircle } from "@squircle-js/react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AppButton } from './ui/AppButton';

const services = [
  { title: 'Comprehensive Solutions', desc: '' },
  { title: 'Quick Turnaround Times', desc: '' },
  { title: 'Certified Quality', desc: '' },
  { title: 'Global Shipping', desc: '' },
  { title: 'Expertise in Hard-to-Find Parts', desc: '' },
  { title: 'Competitive Pricing', desc: '' },
];

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start', 
    slidesToScroll: 1,
    loop: false 
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-20 py-32 overflow-hidden">
      
      <div className="bg-glow-layer" />

      <div className="relative z-10">
        <h2 className="text-h1 text-center mb-20 text-white">Paragon Corp Services</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-16px)] min-w-0">
                  <Squircle 
                    cornerRadius={50} 
                    cornerSmoothing={1} 
                    className="bg-[#246050]/70 h-[520px] p-10 flex flex-col items-center text-center justify-between"
                  >
                    <div className="flex flex-col gap-6">
                      <h3 className="text-[32px] font-bold leading-tight font-serif text-white">
                        {service.title}
                      </h3>
                      <p className="text-[18px] font-sans text-white leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    <div className="relative group cursor-pointer">                    
                      <AppButton text="Call Me" className="hidden sm:flex" />
                    </div>
                  </Squircle>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={scrollPrev} 
            disabled={!canScrollPrev}
            className={`cursor-pointer absolute top-1/2 -left-4 md:-left-16 -translate-y-1/2 z-30 text-[#246050] transition-all duration-300 ${
              !canScrollPrev ? 'opacity-0 pointer-events-none' : 'hover:scale-110 active:scale-90'
            }`}
          >
            <ChevronLeft size={60} strokeWidth={1} />
          </button>

          <button 
            onClick={scrollNext} 
            disabled={!canScrollNext}
            className={`cursor-pointer absolute top-1/2 -right-4 md:-right-16 -translate-y-1/2 z-30 text-[#246050] transition-all duration-300 ${
              !canScrollNext ? 'opacity-0 pointer-events-none' : 'hover:scale-110 active:scale-90'
            }`}
          >
            <ChevronRight size={60} strokeWidth={1} />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2.5 transition-all duration-500 rounded-full ${
                i === selectedIndex 
                  ? 'bg-[#246050] w-8' 
                  : 'bg-[#246050] w-2.5 hover:bg-[#246050]/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}