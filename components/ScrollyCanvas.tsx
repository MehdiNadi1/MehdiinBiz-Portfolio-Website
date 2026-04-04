"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 96;

function getFramePath(index: number) {
  const strIndex = index.toString().padStart(2, "0");
  return `/sequence/frame_${strIndex}_delay-0.083s.webp`;
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    let loaded = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
        if (loaded === FRAME_COUNT) {
          setImages(imgs);
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        // Fallback for missing frames so it doesn't hang forever
        loaded++;
        setLoadedCount(loaded);
        if (loaded === FRAME_COUNT) {
          setImages(imgs);
          setIsLoaded(true);
        }
      };
      imgs.push(img);
    }
  }, []);

  const drawFrame = useCallback((frameIndex: number, imgs = images) => {
    if (!canvasRef.current || !imgs[frameIndex]) return;
    const canvas = canvasRef.current;
    
    // Initialize standard context with specific constraints
    const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
    if (!ctx) return;

    requestAnimationFrame(() => {
      const img = imgs[frameIndex];
      // Note: we've already done ctx.scale(dpr,dpr) via resize
      // so the drawing coordinates are in standard CSS pixels
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;

      const ir = img.width / img.height;
      const cr = cw / ch;

      let drawWidth, drawHeight, offsetX, offsetY;

      if (ir > cr) {
        // Image is wider than canvas
        drawHeight = ch;
        drawWidth = img.width * (ch / img.height);
        offsetX = (cw - drawWidth) / 2;
        offsetY = 0;
      } else {
        // Image is taller or equal
        drawWidth = cw;
        drawHeight = img.height * (cw / img.width);
        offsetX = 0;
        offsetY = (ch - drawHeight) / 2;
      }

      ctx.fillStyle = "#0D0D0D";
      ctx.fillRect(0, 0, cw, ch);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    });
  }, [images]);

  // Handle Resize & DPR
  useEffect(() => {
    if (!isLoaded || !canvasRef.current || images.length === 0) return;

    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const parent = canvas.parentElement;
      const rect = parent ? parent.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
      
      const currentFrame = Math.round(scrollYProgress.get() * (FRAME_COUNT - 1));
      drawFrame(currentFrame);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, scrollYProgress, drawFrame, images.length]);

  // Handle Scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded || images.length === 0) return;
    const currentFrame = Math.round(latest * (FRAME_COUNT - 1));
    drawFrame(currentFrame);
  });

  return (
    <>
      {!isLoaded && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0D0D0D] text-[#FACC15]">
          <div className="text-4xl font-syne font-bold mb-4">
            {Math.round((loadedCount / FRAME_COUNT) * 100)}%
          </div>
          <div className="w-64 h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#FACC15] transition-all duration-300 ease-out" 
              style={{ width: `${Math.round((loadedCount / FRAME_COUNT) * 100)}%` }} 
            />
          </div>
          <p className="mt-4 text-[#888888] font-inter text-sm uppercase tracking-widest text-glow">Loading Experience</p>
        </div>
      )}
      <section 
        ref={containerRef} 
        className="relative h-[500vh] w-full bg-[#0D0D0D]"
        style={{ visibility: isLoaded ? "visible" : "hidden" }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas ref={canvasRef} className="absolute inset-0 block" />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </section>
    </>
  );
}
