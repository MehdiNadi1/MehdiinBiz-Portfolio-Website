"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { MonitorPlay, Cpu, Layers, MapPin } from "lucide-react";

export default function Services() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-32 bg-[#0D0D0D] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[#FACC15] font-inter text-xs font-bold uppercase tracking-[0.3em] mb-4 block">— EXPERTISE —</span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold">What I Build For You</h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          
          <motion.div variants={item}>
            <Card className="h-full flex flex-col gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15]">
                <MonitorPlay size={28} />
              </div>
              <div>
                <h3 className="text-xl font-syne font-bold text-[#F5F5F5] mb-3">Web Design &amp; Development</h3>
                <p className="text-[#888888] font-inter font-light leading-relaxed">
                  Custom &amp; clean, responsive websites built for speed, SEO, and conversions. From landing pages to full business sites.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full flex flex-col gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15]">
                <Cpu size={28} />
              </div>
              <div>
                <h3 className="text-xl font-syne font-bold text-[#F5F5F5] mb-3">AI Automation Studio</h3>
                <p className="text-[#888888] font-inter font-light leading-relaxed">
                  Smart automation systems, AI chatbots &amp; AI receptionist, and workflow tools that save your business time and money.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full flex flex-col gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15]">
                <Layers size={28} />
              </div>
              <div>
                <h3 className="text-xl font-syne font-bold text-[#F5F5F5] mb-3">Brand &amp; Digital Identity</h3>
                <p className="text-[#888888] font-inter font-light leading-relaxed">
                  Logo design, brand kits, and social media visuals that make your business unforgettable.
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="h-full flex flex-col gap-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FACC15]/10 flex items-center justify-center text-[#FACC15]">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-syne font-bold text-[#F5F5F5] mb-3">SEO &amp; Local Marketing</h3>
                <p className="text-[#888888] font-inter font-light leading-relaxed">
                  Get found on Google. Local SEO strategies tailored for Moroccan and international markets.
                </p>
              </div>
            </Card>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
