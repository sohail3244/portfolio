import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-6 bg-white font-sans">
      {/* Left: Logo Section */}
      <div className="flex items-center">
        <Link href="/">
        <Image
          src="/logo.png" // 👈 public folder me image rakho
          alt="Sohail Logo"
          width={140}
          height={40}
          className="w-30"
          priority
        />
        </Link>
      </div>

      {/* Right: Navigation and Actions */}
      <div className="flex items-center space-x-12">
        <nav className="flex space-x-10 text-gray-800 font-medium">
          <Link
            href="/team"
            className="px-4 py-2 rounded-md   text-gray-800 font-medium hover:text-black hover:-translate-y-1 transform transition duration-200 "
          >
            Team
          </Link>
          <Link
            href="/projects"
            className="px-4 py-2 rounded-md   text-gray-800 font-medium hover:text-black hover:-translate-y-1 transform transition duration-200 "
          >
            Projects
          </Link>
          <Link
            href="#photos"
            className="px-4 py-2 rounded-md   text-gray-800 font-medium hover:text-black hover:-translate-y-1 transform transition duration-200 "
          >
            Skills
          </Link>
          <Link
            href="#lookbook"
            className="px-4 py-2 rounded-md   text-gray-800 font-medium hover:text-black hover:-translate-y-1 transform transition duration-200 "
          >
            Contact
          </Link>
        </nav>

        <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
          hello@sohail.in
        </button>
      </div>
    </header>
  );
}
