"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0D0D0D]/90 backdrop-blur-md py-4 border-b border-white/10 shadow-lg" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          
          {/* LOGO (Left) */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="relative block h-10 w-10 md:h-12 md:w-12">
              <Image 
                src="/logo.png" 
                alt="Mehdi In Biz Logo" 
                fill 
                className="object-contain" 
                priority
              />
            </a>
          </div>
          
          {/* NAVIGATION LINKS (Center - Desktop Only) */}
          <div className="max-lg:hidden flex flex-1 items-center justify-center gap-6 lg:gap-10">
            <a href="#about" className="text-sm font-semibold tracking-wide text-[#F5F5F5] hover:text-[#FACC15] transition-colors">About</a>
            <a href="#services" className="text-sm font-semibold tracking-wide text-[#F5F5F5] hover:text-[#FACC15] transition-colors">Services</a>
            <a href="#work" className="text-sm font-semibold tracking-wide text-[#F5F5F5] hover:text-[#FACC15] transition-colors">Work</a>
            <a href="#contact" className="text-sm font-semibold tracking-wide text-[#F5F5F5] hover:text-[#FACC15] transition-colors">Contact</a>
          </div>

          {/* ACTIONS (Right - Desktop Only) */}
          <div className="max-lg:hidden flex items-center justify-end gap-5 flex-shrink-0">
            <a href="tel:+13472053599" className="text-sm font-semibold text-[#F5F5F5] hover:text-[#FACC15] transition-colors flex items-center gap-2">
              <span className="text-[#FACC15]">Call us</span>
              <span className="hidden lg:inline">+1 (347) 205-3599</span>
            </a>

            <a href="https://wa.me/13472053599">
              <Button variant="outline" size="sm" className="border-[#FACC15] text-[#FACC15] hover:bg-[#FACC15]/10 font-bold tracking-wide">
                Let's Talk
              </Button>
            </a>
          </div>

          {/* MOBILE MENU BUTTON (Mobile Only) */}
          <div className="lg:hidden flex items-center">
            <button 
              className="text-[#F5F5F5] hover:text-[#FACC15] transition-colors p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0D0D0D] flex flex-col items-center justify-center gap-8 pt-20"
          >
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-syne font-bold text-[#F5F5F5]">About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-syne font-bold text-[#F5F5F5]">Services</a>
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-syne font-bold text-[#F5F5F5]">Work</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-2xl font-syne font-bold text-[#F5F5F5]">Contact</a>
            
            <a href="tel:+13472053599" onClick={() => setMobileMenuOpen(false)} className="text-xl font-medium text-[#F5F5F5] hover:text-[#FACC15] transition-colors flex items-center gap-2">
              <span className="text-[#FACC15]">Call us</span>
              <span>+1 (347) 205-3599</span>
            </a>

            <a href="https://wa.me/13472053599" onClick={() => setMobileMenuOpen(false)} className="mt-4">
              <Button>Let's Talk</Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
