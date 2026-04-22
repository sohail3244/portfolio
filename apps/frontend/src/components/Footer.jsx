import { Hand } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white px-10 py-12 flex flex-col md:flex-row items-center justify-between font-sans border-t border-white/10">
      {/* Left: Branding/Credits */}
      <div className="text-lg font-medium tracking-tight mb-6 md:mb-0">
        <span className="flex items-center gap-2">
          Sohail <Hand className="w-4 h-4" />
        </span>
      </div>

      {/* Right: Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-lg font-medium">
        <a href="#design" className="hover:text-gray-400 transition-colors">
          Design
        </a>
        <a href="#photos" className="hover:text-gray-400 transition-colors">
          Photos
        </a>
        <a href="#terms" className="hover:text-gray-400 transition-colors">
          Terms of use
        </a>
      </nav>
    </footer>
  );
}
