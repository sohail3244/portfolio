"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-10 py-4 md:py-6 bg-white font-sans relative">
      {/* Left: Logo Section */}
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Sohail Logo"
            width={140}
            height={40}
            className="w-24 md:w-30 h-auto"
            priority
          />
        </Link>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden flex flex-col space-y-1.5 p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-6 xl:space-x-12">
        <nav className="flex space-x-6 xl:space-x-10 text-gray-800 font-medium">
          <Link
            href="/team"
            className="px-3 xl:px-4 py-2 rounded-md text-gray-800 font-medium hover:text-black hover:-translate-y-1 transform transition duration-200 text-sm xl:text-base"
          >
            Team
          </Link>
          <Link
            href="/projects"
            className="px-3 xl:px-4 py-2 rounded-md text-gray-800 font-medium hover:text-black hover:-translate-y-1 transform transition duration-200 text-sm xl:text-base"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="px-3 xl:px-4 py-2 rounded-md text-gray-800 font-medium hover:text-black hover:-translate-y-1 transform transition duration-200 text-sm xl:text-base"
          >
            Skills
          </Link>
          <Link
            href="/contact"
            className="px-3 xl:px-4 py-2 rounded-md text-gray-800 font-medium hover:text-black hover:-translate-y-1 transform transition duration-200 text-sm xl:text-base"
          >
            Contact
          </Link>
        </nav>

        <button className="px-4 xl:px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-sm xl:text-base whitespace-nowrap">
          hello@sohail.in
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-t">
          <nav className="flex flex-col py-4">
            <Link
              href="/team"
              className="px-6 py-3 text-gray-800 font-medium hover:bg-gray-50 hover:text-black transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 text-gray-800 font-medium hover:bg-gray-50 hover:text-black transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/skills"
              className="px-6 py-3 text-gray-800 font-medium hover:bg-gray-50 hover:text-black transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#lookbook"
              className="px-6 py-3 text-gray-800 font-medium hover:bg-gray-50 hover:text-black transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="px-6 py-3">
              <button className="w-full px-6 py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition duration-200">
                hello@sohail.in
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}