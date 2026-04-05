"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Section 1: 0% - 15%
  const s1Opacity = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  // Section 2: 20% - 38%
  const s2Opacity = useTransform(scrollYProgress, [0.15, 0.2, 0.33, 0.38], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.15, 0.2, 0.33, 0.38], [50, 0, 0, -50]);

  // Section 3: 45% - 62%
  const s3Opacity = useTransform(scrollYProgress, [0.38, 0.45, 0.57, 0.62], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.38, 0.45, 0.57, 0.62], [50, 0, 0, -50]);

  // Section 4: 68% - 82%
  const s4Opacity = useTransform(scrollYProgress, [0.62, 0.68, 0.77, 0.82], [0, 1, 1, 0]);
  const s4Y = useTransform(scrollYProgress, [0.62, 0.68, 0.77, 0.82], [50, 0, 0, -50]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <div className="w-full h-full max-w-7xl mx-auto px-6 lg:px-12 relative">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: s1Opacity, y: s1Y }} 
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <span className="text-[#FACC15] font-inter text-xs font-bold uppercase tracking-[0.3em] mb-4">— WELCOME —</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-syne font-extrabold text-[#F5F5F5] mb-6">Mehdi Nadi.</h1>
          <p className="text-xl md:text-2xl font-inter text-[#888888] font-light max-w-2xl">
            Web Developer · Designer · AI Automation
          </p>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute bottom-12 opacity-80 flex flex-col items-center gap-4"
          >
            <span className="text-[#888888] text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-[#FACC15] to-transparent" />
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: s2Opacity, y: s2Y }}
          className="absolute inset-y-0 left-6 lg:left-12 right-0 flex flex-col justify-center max-w-xl"
        >
          <span className="text-[#FACC15] font-inter text-xs font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md">— WHAT I DO —</span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-[#F5F5F5] mb-6 leading-tight drop-shadow-lg">
            I build digital experiences that convert.
          </h2>
          <p className="text-lg md:text-xl font-inter text-[#F5F5F5] bg-[#000000a0] p-6 rounded-2xl border border-[#FACC15]/20 backdrop-blur-md font-light leading-relaxed shadow-[0_0_30px_rgba(250,204,21,0.1)]">
            From <span className="text-[#FACC15] font-semibold drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]">pixel-perfect design</span> to <span className="text-[#FACC15] font-semibold drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]">automated AI systems</span>, I help businesses grow online — <span className="italic font-bold text-[#FACC15] drop-shadow-[0_0_12px_rgba(250,204,21,1)]">fast.</span>
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: s3Opacity, y: s3Y }}
          className="absolute inset-y-0 right-6 lg:right-12 left-0 flex flex-col items-end justify-center text-right ml-auto max-w-xl"
        >
          <span className="text-[#FACC15] font-inter text-xs font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md">— THE APPROACH —</span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-[#F5F5F5] mb-6 leading-tight drop-shadow-lg">
            Design meets engineering.
          </h2>
          <p className="text-lg md:text-xl font-inter text-[#F5F5F5] bg-[#000000a0] p-4 rounded-xl border border-white/5 backdrop-blur-md font-light leading-relaxed">
            Every site I build is a performance machine — beautiful, fast, and built to rank.
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div 
          style={{ opacity: s4Opacity, y: s4Y }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-2xl mx-auto"
        >
          <span className="text-[#FACC15] font-inter text-xs font-bold uppercase tracking-[0.3em] mb-4 drop-shadow-md">— MOROCCO —</span>
          <h2 className="text-4xl md:text-6xl font-syne font-bold text-[#F5F5F5] mb-6 leading-tight drop-shadow-lg">
            Local roots. Global standards.
          </h2>
          <p className="text-lg md:text-xl font-inter text-[#F5F5F5] bg-[#000000a0] p-4 rounded-xl border border-white/5 backdrop-blur-md font-light leading-relaxed">
            Working with clients across Morocco and beyond to deliver world-class digital products.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
