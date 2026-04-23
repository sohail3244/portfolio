"use client";

import { Hand, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Mouse positions
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth cursor movement (Spring effect)
  const springConfig = { stiffness: 250, damping: 30 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const shutterTransition = {
    duration: 2.2,
    ease: [0.65, 0, 0.35, 1],
    delay: 0.3,
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <main 
      ref={containerRef}
      className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden cursor-none"
    >
      {/* --- SHUTTER ANIMATION --- */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: "-100%", y: "-100%" }}
        transition={shutterTransition}
        className="fixed inset-0 z-[100] bg-black"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: "100%", y: "100%" }}
        transition={shutterTransition}
        className="fixed inset-0 z-[100] bg-black"
        style={{ clipPath: "polygon(100% 100%, 100% 0, 0 100%)" }}
      />

      {/* --- CUSTOM CURSOR (Circle with Arrow) --- */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 rounded-full border border-black flex items-center justify-center pointer-events-none z-[60] bg-white mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
      >
        <ArrowUpRight className="w-6 h-6 text-black" />
      </motion.div>

      {/* --- CONTENT --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-col items-center w-full"
      >
        <div className="flex items-center gap-2 text-gray-600 text-lg mb-4 z-10">
          <Hand className="w-5 h-5 text-yellow-500" />
          <p>Hi, my name is Sohail and I am a freelance</p>
        </div>

        {/* HERO SECTION (Hover Area) */}
        <div 
          className="relative flex flex-col items-center justify-center w-full max-w-7xl h-[60vh]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* BACKGROUND TEXT (Solid) */}
          <div className="flex flex-col items-center pointer-events-none">
             <h1 className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-black">
                webdeveloper
             </h1>
             <h1 className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter text-black">
                & Designer
             </h1>
          </div>

          {/* --- PROFILE IMAGE (With Hover Animation) --- */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none pt-20"
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -20 : 0 }} // Upar slide hone ke liye negative Y axis par move karein
            transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
          >
            <Image
              src="/profile.png" 
              alt="profile"
              width={450}
              height={450}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* FOREGROUND TEXT (完全 Transparent - Revealed by ClipPath) */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none"
            style={{
              clipPath: `circle(48px at ${smoothX}px ${smoothY}px)`, // Adjust radius as needed
            }}
          >
             <h1 
                className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter"
                style={{ WebkitTextStroke: "1px black", color: "transparent" }}
             >
                webdeveloper
             </h1>
             <h1 
                className="text-[12vw] leading-[0.8] font-black uppercase tracking-tighter"
                style={{ WebkitTextStroke: "1px black", color: "transparent" }}
             >
                & Designer
             </h1>
          </motion.div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-20 z-30">
          <button className="bg-black text-white px-10 py-4 rounded-full font-medium shadow-xl hover:scale-105 transition-transform">
            You need a developer
          </button>
          <button className="border-2 border-black px-10 py-4 rounded-full font-medium hover:bg-black hover:text-white transition-all">
            Contact Me
          </button>
        </div>

        <p className="mt-8 text-gray-400 font-medium">based in India.</p>
      </motion.div>
    </main>
  );
}