import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-6 bg-white font-sans">
      {/* Left: Logo Section */}
      <div className="flex items-center">
        <div className="relative">
          {/* Mocking the icon above the B */}
          <div className="flex -space-x-1 -mb-1 ml-1">
            <div className="w-3 h-3 border-2 border-orange-400 rounded-full"></div>
            <div className="w-3 h-3 border-2 border-orange-400 rounded-full"></div>
          </div>
          <h1 className="text-4xl font-black tracking-tighter text-black flex items-baseline">
            Soh
            <span className="relative">
              ai
              <span className="absolute -top-1 left-0 right-0 flex justify-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </span>
            </span>
            l<span className="text-pink-500 text-5xl leading-none">.</span>
          </h1>
        </div>
      </div>

      {/* Right: Navigation and Actions */}
      <div className="flex items-center space-x-12">
        <nav className="flex space-x-10 text-gray-800 font-medium">
          <Link href="/about-us" className="hover:text-black">
            About Us
          </Link>
          <a href="#photos" className="hover:text-black">
            Photos
          </a>
          <a href="#lookbook" className="hover:text-black">
            Look book
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Contact Button */}
          <a
            href="mailto:hello@sohail.in"
            className="bg-[#121212] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            hello@sohail.in
          </a>
        </div>
      </div>
    </header>
  );
}
