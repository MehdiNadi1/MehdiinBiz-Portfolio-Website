"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0D0D0D] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-8">
            The person <span className="underline decoration-[#FACC15] underline-offset-8">behind the screen.</span>
          </h2>
          <p className="text-[#888888] font-light text-lg mb-6 leading-relaxed">
            I'm Mehdi, a web developer, designer, and AI automation specialist based in Marrakesh. I build high-converting websites and smart digital systems for businesses that want to grow. 
          </p>
          <p className="text-[#888888] font-light text-lg leading-relaxed">
            From local coffee shops to service companies — I make sure your digital presence works as hard as you do.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 shadow-2xl flex flex-col justify-center gap-8"
        >
          <div className="flex flex-col">
            <span className="text-[#FACC15] text-5xl font-syne font-bold mb-2">50+</span>
            <span className="text-[#F5F5F5] font-medium">Projects Delivered</span>
          </div>
          <div className="w-full h-px bg-white/10" />
          <div className="flex flex-col">
            <span className="text-[#FACC15] text-5xl font-syne font-bold mb-2">3+</span>
            <span className="text-[#F5F5F5] font-medium">Years Experience</span>
          </div>
          <div className="w-full h-px bg-white/10" />
          <div className="flex flex-col">
            <span className="text-[#FACC15] text-5xl font-syne font-bold mb-2">100%</span>
            <span className="text-[#F5F5F5] font-medium">Client Focus</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
