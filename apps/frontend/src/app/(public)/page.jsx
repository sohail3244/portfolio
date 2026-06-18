"use client";

import { Hand } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
  // Scroll Lock Logic
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  const shutterTransition = {
    duration: 2.2,
    ease: [0.65, 0, 0.35, 1],
    delay: 0.3,
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center overflow-hidden relative">

      {/* --- SHUTTER IMAGE (Right Side) --- */}
      <motion.div 
  initial={{ opacity: 1, y: 0 }}
  animate={{ opacity: 0, y: 120 }} // 👇 neeche move
  transition={{ duration: 0.8, delay: 1.1 }} 
  className="fixed bottom-6 right-6 md:right-12 z-110 pointer-events-none"
>
  <motion.div className="relative w-20 h-20">
    <Image
      src="/logo.png"
      alt="Shutter Brand"
      fill
      className="object-contain"
      priority
    />
  </motion.div>
</motion.div>

      {/* --- SHUTTER ANIMATION --- */}
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: "-100%", y: "-100%" }}
        transition={shutterTransition}
        className="fixed inset-0 z-100 bg-black"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
      <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ x: "100%", y: "100%" }}
        transition={shutterTransition}
        className="fixed inset-0 z-100 bg-black"
        style={{ clipPath: "polygon(100% 100%, 100% 0, 0 100%)" }}
      />

      {/* --- MAIN CONTENT --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-col items-center justify-between h-[85vh] py-10 px-4 text-center max-w-5xl"
      >
        {/* TOP SECTION */}
        <div className="space-y-2 mb-10">
          <div className="flex items-center justify-center gap-2 text-gray-600 text-sm md:text-lg">
            <Hand className="w-5 h-5 text-yellow-500" />
            <p>Hi, my name is Sohail and I am a freelance</p>
          </div>
          <h1 className="text-[15vw] md:text-[10vw] leading-none font-black uppercase tracking-tighter text-black">
            Developer
          </h1>
        </div>

        <div className="relative flex-1 w-full max-h-[40vh] min-h-60">
          <Image
            src="/WhatsApp_Image_2026-06-18_at_1.04.09_PM-removebg-preview1.png"
            alt="profile"
            fill
            className="object-contain object-bottom"
            priority
          />
        </div>

        {/* BOTTOM SECTION - Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 mb-6">
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium shadow hover:scale-105 transition">
            You need a developer
          </button>
          <button className="border-2 border-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition">
            Contact Me
          </button>
        </div>
      </motion.div>
    </div>
  );
}