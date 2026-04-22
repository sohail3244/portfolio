"use client";

import { Hand } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-white flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Top Intro Line */}
      <div className="flex items-center gap-2 text-gray-600 text-lg mb-6">
        <Hand className="w-5 h-5" />
        <p>Hi, my name is Sohail and I am a freelance</p>
      </div>

      {/* Big Heading */}
      <div className="relative leading-none">
        <h1 className="text-[80px] md:text-[140px] font-extrabold text-black tracking-tight">
          webdeveloper
        </h1>
      </div>

      {/* Center Image */}
      <div className="-mt-10 mb-8">
        <Image
          src="/profile.png"
          alt="profile"
          width={320}
          height={320}
          className="object-contain"
        />
      </div>
      {/* Buttons */}
      <div className="flex gap-4 flex-wrap justify-center">
        <button className="bg-black text-white px-6 py-3 rounded-md hover:opacity-90 transition">
          You need a designer
        </button>

        <button className="border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition">
          You need a photographer
        </button>
      </div>
    </div>
  );
}
