"use client";

import { Hand } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const shutterTransition = {
    duration: 2.2,
    ease: [0.65, 0, 0.35, 1],
    delay: 0.3,
  };

  return (
    <div className="w-full min-h-screen  overflow-hidden bg-white flex flex-col items-center justify-center">

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

      {/* --- CONTENT --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-col items-center justify-center h-full px-4 text-center gap-4 max-w-5xl"
      >

        {/* TOP TEXT */}
        <div className="flex items-center gap-2 text-gray-600 text-sm md:text-lg mt-1">
          <Hand className="w-5 h-5 text-yellow-500" />
          <p>Hi, my name is Sohail and I am a freelance</p>
        </div>

        {/* TITLE */}
        <h1 className="text-[10vw] md:text-[8vw] leading-[0.8] font-black uppercase tracking-tighter text-black">
          Developer
        </h1>

        {/* IMAGE */}
        <div className="my-4">
          <Image
            src="/profile.png"
            alt="profile"
            width={250}
            height={250}
            className="object-contain mx-auto max-h-[30vh] ml-"
            priority
          />
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium shadow hover:scale-105 transition">
            You need a developer
          </button>
          <button className="border-2 border-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition">
            Contact Me
          </button>
        </div>

      </motion.div>
    </div>
  );
}