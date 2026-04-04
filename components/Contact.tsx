"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0D0D0D] relative border-t border-white/5 overflow-hidden">
      {/* Radial gradient glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FACC15] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FACC15] font-inter text-xs font-bold uppercase tracking-[0.3em] mb-4 block">— START A PROJECT —</span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold mb-6 leading-tight">Let's Build Something Great</h2>
          <p className="text-[#888888] font-light text-lg mb-12 leading-relaxed max-w-md">
            Got a project in mind? Whether it's a new website, a redesign, or setting up AI automation, I'd love to hear about it.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/13472053599">
              <Button size="lg" className="w-full sm:w-auto">Message on WhatsApp</Button>
            </a>
            <a href="mailto:mehdi@example.com">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto h-full border border-white/10 hover:border-white/20 hover:bg-white/5">Send an Email</Button>
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-3xl p-8 border border-white/5 shadow-2xl"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#F5F5F5] font-medium text-sm">Name</label>
                <Input placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#F5F5F5] font-medium text-sm">Email</label>
                <Input type="email" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-[#F5F5F5] font-medium text-sm">Message</label>
              <Textarea placeholder="Tell me about your project needs..." />
            </div>

            <Button type="submit" size="lg" className="mt-2 w-full">Send Message</Button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
