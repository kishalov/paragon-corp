'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Squircle } from "@squircle-js/react";
import { AppButton } from './ui/AppButton';
import emailjs from '@emailjs/browser';

export default function ContactFooter() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        'website_popup_form',
        'website_request',
        formRef.current,
        '8PqiZkmb2Y9quu5o2'  
      );
      
      setIsSuccess(true);
      formRef.current.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Email error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer className="relative w-full max-w-[1440px] mx-auto px-6 md:px-20 pt-20 md:pt-32 pb-12 overflow-hidden bg-[#060305]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 md:mb-40 relative z-10">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-h1 mb-8 md:mb-12 max-w-[400px]">Get in touch</h2>
          <div className="flex flex-col gap-4 font-sans text-[18px] md:text-[20px] text-white/60">
            <a href="mailto:sales@paragoncorp.ae" className="hover:text-white transition-colors">sales@paragoncorp.ae</a>
          </div>
        </div>

        <div className="relative">
          {isSuccess ? (
            <div className="flex flex-col items-center lg:items-start justify-center h-full">
              <h3 className="text-white text-[24px] font-sans mb-4">Success!</h3>
              <p className="text-white/60 font-sans">Thank you, we will call you back soon.</p>
            </div>
          ) : (
            <form ref={formRef} className="flex flex-col gap-6" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] text-white/40 uppercase tracking-[0.2em] ml-1 font-sans">Name</label>
                  <Squircle cornerRadius={10} cornerSmoothing={1} className="bg-white/5 border border-white/10 p-1 focus-within:border-[#00A47B] transition-colors">
                    <input 
                      name="user_name" 
                      required
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full bg-transparent px-6 py-4 outline-none font-sans text-white placeholder:text-white/30" 
                    />
                  </Squircle>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] text-white/40 uppercase tracking-[0.2em] ml-1 font-sans">Phone</label>
                  <Squircle cornerRadius={10} cornerSmoothing={1} className="bg-white/5 border border-white/10 p-1 focus-within:border-[#00A47B] transition-colors">
                    <input 
                      name="user_phone"
                      required
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full bg-transparent px-6 py-4 outline-none font-sans text-white placeholder:text-white/30" 
                    />
                  </Squircle>
                </div>
              </div>

              <div className="mt-4 flex w-full md:w-auto self-start">
                <AppButton 
                  text={isSending ? "Sending..." : "Send Request"} 
                  disabled={isSending} 
                />
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="relative z-10 pt-12 border-t border-white/10 flex flex-col items-center lg:grid lg:grid-cols-3 lg:items-end gap-10">
        <div className="relative w-[180px] h-[50px]">
          <Image src="/logo.svg" alt="Paragon Corp" fill className="object-contain lg:object-left" />
        </div>

        <div className="text-center font-sans text-[12px] text-white/30 lg:pb-2 order-3 lg:order-2">
          Paragon Corp. All rights reserved. 2023
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-x-8 gap-y-4 font-sans text-[14px] text-white/60 text-center lg:text-right order-2 lg:order-3">
          <a href="#" className="hover:text-[#2FFFCB] transition-colors">What We Do</a>
          <a href="#" className="hover:text-[#2FFFCB] transition-colors">About Us</a>
          <a href="#" className="hover:text-[#2FFFCB] transition-colors">Quality Assurance</a>
          <a href="#" className="hover:text-[#2FFFCB] transition-colors">Contact</a>
          <a href="#" className="hover:text-[#2FFFCB] transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-[#2FFFCB] transition-colors">Terms & Conditions</a>
        </div>
      </div>

      <div className="bg-glow-layer opacity-20 -bottom-1/2 left-1/2 -translate-x-1/2" />
    </footer>
  );
}