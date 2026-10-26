'use client';

import React, { ReactNode, useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Squircle } from "@squircle-js/react";
import { motion, AnimatePresence } from 'framer-motion';
import { AppButton } from './AppButton';
import emailjs from '@emailjs/browser';

interface ContactPopupProps {
  children?: ReactNode;
}

export function ContactPopup({ children }: ContactPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setIsSuccess(false); // Сбрасываем статус при открытии
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSending(true);

    try {
      await emailjs.sendForm(
        'paragon_email_service',
        'website_footer_request',
        formRef.current,
        '8PqiZkmb2Y9quu5o2' 
      );
      
      setIsSuccess(true);
      setTimeout(() => setIsOpen(false), 2000); // Закрываем через 2 сек после успеха
    } catch (error) {
      console.error('Email error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSending(false);
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[500px] z-[10000]"
          >
            <Squircle 
              cornerRadius={40} 
              cornerSmoothing={1} 
              className="bg-[#060305] border border-white/10 p-8 md:p-12 overflow-hidden shadow-2xl"
            >
              <div 
                className="absolute -top-20 -right-20 w-40 h-40 pointer-events-none opacity-20"
                style={{
                  background: 'radial-gradient(circle, #00A47B 0%, rgba(6, 3, 5, 0) 100%)',
                  filter: 'blur(40px)',
                }}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-white uppercase font-sans">
                    {isSuccess ? 'Sent!' : 'Get in touch'}
                  </h2>
                  <button onClick={toggleModal} className="text-white/40 hover:text-white p-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="py-10 text-center text-white font-sans text-xl"
                  >
                    We will call you back soon!
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    className="flex flex-col gap-6"
                    onSubmit={sendEmail}
                  >
                    {/* Company Name / Email Address */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[12px] text-white/40 uppercase tracking-[0.2em] ml-1 font-sans">
                          Company Name
                        </label>
                        <Squircle cornerRadius={10} cornerSmoothing={1} className="bg-white/5 border border-white/10 p-1 focus-within:border-[#00A47B] transition-colors">
                          <input
                            name="company_name"
                            type="text"
                            required
                            placeholder="Company Name"
                            autoComplete="organization"
                            className="w-full bg-transparent px-6 py-4 outline-none font-sans text-white placeholder:text-white/30"
                          />
                        </Squircle>
                      </div>
                  
                      <div className="flex flex-col gap-2">
                        <label className="text-[12px] text-white/40 uppercase tracking-[0.2em] ml-1 font-sans">
                          Email Address
                        </label>
                        <Squircle cornerRadius={10} cornerSmoothing={1} className="bg-white/5 border border-white/10 p-1 focus-within:border-[#00A47B] transition-colors">
                          <input
                            name="user_email"
                            type="email"
                            required
                            placeholder="Email Address"
                            autoComplete="email"
                            className="w-full bg-transparent px-6 py-4 outline-none font-sans text-white placeholder:text-white/30"
                          />
                        </Squircle>
                      </div>
                    </div>
                  
                    {/* Phone Number */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] text-white/40 uppercase tracking-[0.2em] ml-1 font-sans">
                        Phone Number
                      </label>
                      <Squircle cornerRadius={10} cornerSmoothing={1} className="bg-white/5 border border-white/10 p-1 focus-within:border-[#00A47B] transition-colors">
                        <input
                          name="user_phone"
                          type="tel"
                          required
                          placeholder="Phone Number"
                          autoComplete="tel"
                          className="w-full bg-transparent px-6 py-4 outline-none font-sans text-white placeholder:text-white/30"
                        />
                      </Squircle>
                    </div>
                  
                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[12px] text-white/40 uppercase tracking-[0.2em] ml-1 font-sans">
                        Message
                      </label>
                      <Squircle cornerRadius={10} cornerSmoothing={1} className="bg-white/5 border border-white/10 p-1 focus-within:border-[#00A47B] transition-colors">
                        <textarea
                          name="message"
                          required
                          placeholder="Type your message..."
                          rows={7}
                          className="w-full bg-transparent px-6 py-4 outline-none font-sans text-white placeholder:text-white/30 resize-y"
                        />
                      </Squircle>
                    </div>
                  
                    {/* Privacy Policy */}
                    <label className="flex items-start gap-3 text-white/60 font-sans text-[14px] cursor-pointer">
                      <input
                        name="privacy_accepted"
                        type="checkbox"
                        required
                        className="mt-1 accent-[#00A47B]"
                      />
                      <span>
                        By submitting the form, I accept the{' '}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-white transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Privacy Policy.
                        </a>
                      </span>
                    </label>
                  
                    {/* Original Button */}
                    <div className="mt-4 flex w-full md:w-auto self-start">
                      <AppButton
                        text={isSending ? "Sending..." : "Send Request"}
                        disabled={isSending}
                      />
                    </div>
                  </form>
                )}
              </div>
            </Squircle>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div onClick={toggleModal} className="w-fit cursor-pointer">
        {children || <AppButton text="Get in Touch" />}
      </div>
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}