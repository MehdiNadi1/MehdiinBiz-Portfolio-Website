"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#FACC15]/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        <div className="flex flex-col max-w-sm">
          <a href="#" className="relative h-12 w-12 md:h-14 md:w-14 mb-4">
            <Image 
              src="/logo.png" 
              alt="Mehdi In Biz Logo" 
              fill 
              className="object-contain" 
            />
          </a>
          <p className="text-[#888888] font-inter font-light">
            Building the web, one pixel at a time. Designing digital growth engines for modern businesses.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <a href="#about" className="text-sm font-medium text-[#888888] hover:text-[#FACC15] transition-colors">About</a>
          <a href="#services" className="text-sm font-medium text-[#888888] hover:text-[#FACC15] transition-colors">Services</a>
          <a href="#work" className="text-sm font-medium text-[#888888] hover:text-[#FACC15] transition-colors">Work</a>
          <a href="#contact" className="text-sm font-medium text-[#888888] hover:text-[#FACC15] transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#888888] hover:bg-[#FACC15] hover:text-[#F5F5F5] transition-colors">
            <MessageSquare size={18} />
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-white/5 text-center md:text-left text-[#888888] text-sm">
        <p>© {new Date().getFullYear()} Mehdi Nadi. All rights reserved.</p>
      </div>
    </footer>
  );
}
