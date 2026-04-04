"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

const projects = [
  {
    title: "AI Agency SaaS",
    category: "AI Automation",
    description: "A premium AI-driven business intelligence platform with advanced data visualization.",
    image: "/projects/project1.png",
    link: "#"
  },
  {
    title: "Luxury E-commerce",
    category: "Shopify Development",
    description: "A high-end fashion destination with custom checkout and a minimalist aesthetic.",
    image: "/projects/project2.png",
    link: "#"
  },
  {
    title: "Marrakesh Estate",
    category: "Real Estate Portal",
    description: "Discover exclusive villas in Marrakesh with a cinematic property viewing experience.",
    image: "/projects/project3.png",
    link: "#"
  },
  {
    title: "Vibe Fitness App",
    category: "Mobile Design",
    description: "A high-energy wellness platform designed for peak performance and engagement.",
    image: "/projects/project4.png",
    link: "#"
  },
  {
    title: "Artisanal Coffee",
    category: "Branding + Web",
    description: "Warm, inviting digital presence for a boutique coffee roastery in the heart of the city.",
    image: "/projects/project5.png",
    link: "#"
  },
  {
    title: "Fintech Dashboard",
    category: "SaaS Design",
    description: "Complex financial data made simple with a sleek, high-trust dashboard interface.",
    image: "/projects/project6.png",
    link: "#"
  }
];

export default function Projects() {
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
    <section id="work" className="py-32 bg-[#0D0D0D] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center md:items-start md:text-left"
        >
          <span className="text-[#FACC15] font-inter text-xs font-bold uppercase tracking-[0.3em] mb-4 block">— PORTFOLIO —</span>
          <h2 className="text-4xl md:text-5xl font-syne font-bold">Selected Work</h2>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="h-full flex flex-col overflow-hidden p-0 group border-white/5 hover:border-[#FACC15]/30 transition-all duration-500">
                <div className="h-64 bg-[#1A1A1A] relative flex items-center justify-center overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent z-10" />
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="inline-block px-3 py-1 bg-[#FACC15]/20 text-[#FACC15] text-[10px] font-bold uppercase tracking-widest rounded-full backdrop-blur-md border border-[#FACC15]/30">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1 bg-[#0D0D0D]">
                  <h3 className="text-xl font-syne font-bold text-[#F5F5F5] mb-3">{project.title}</h3>
                  <p className="text-[#888888] font-inter font-light text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <div>
                    <Button variant="ghost" className="p-0 hover:bg-transparent h-auto text-[#888888] hover:text-[#FACC15] text-sm">View Project →</Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

