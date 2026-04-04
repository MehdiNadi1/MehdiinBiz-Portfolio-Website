"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Mehdi transformed our online presence, our leads doubled in 2 months.",
      name: "Ahmed K.",
      title: "HVAC Business Owner"
    },
    {
      quote: "Professional, fast, and creative. Best investment we made this year.",
      name: "Sara M.",
      title: "Coffee Shop Owner"
    },
    {
      quote: "The AI automation system he built saves us 10 hours a week.",
      name: "Youssef B.",
      title: "Agency Director"
    }
  ];

  return (
    <section className="py-32 bg-[#0D0D0D] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[#FACC15] font-inter text-xs font-bold uppercase tracking-[0.3em] mb-4 block">— TESTIMONIALS —</span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold">What Clients Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col p-8">
                <Quote className="text-[#FACC15] mb-6 opacity-80" size={32} />
                <p className="text-[#F5F5F5] font-inter font-light text-lg leading-relaxed italic mb-8 flex-1">
                  "{testi.quote}"
                </p>
                <div>
                  <h4 className="font-syne font-bold text-[#F5F5F5]">{testi.name}</h4>
                  <p className="text-[#888888] text-sm">{testi.title}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
