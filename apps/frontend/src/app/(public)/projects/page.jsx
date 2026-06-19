'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Code2, Sparkles, User } from 'lucide-react';

// Upgraded Dummy Data with premium image placeholders
const DUMMY_PROJECTS = [
  {
    id: 1,
    title: "Azzunique E-Commerce Platform",
    category: "Full Stack Development",
    description: "A high-end, minimalist luxury e-commerce platform built with Next.js, Tailwind CSS, and optimized data layers with seamless payment integration.",
    tags: ["React", "Next.js", "Tailwind CSS", "Redux", "Stripe"],
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
    liveLink: "#",
    codeLink: "#",
    year: "2024",
    role: "Lead Developer"
  },
  {
    id: 2,
    title: "GoTicket Heritage Booking",
    category: "Web Application",
    description: "A seamless tourist ticket booking system tailored for exploring the historic heritage sites of Jaipur, featuring real-time availability and multilingual support.",
    tags: ["React.js", "Tailwind CSS", "Framer Motion", "REST API"],
    image: "https://images.unsplash.com/photo-1477584308802-e9c37c6a4120?q=80&w=800&auto=format&fit=crop",
    liveLink: "#",
    codeLink: "#",
    year: "2024",
    role: "Full Stack Developer"
  },
  {
    id: 3,
    title: "Healthcare College Portal",
    category: "Portal Architecture",
    description: "A streamlined admission and information system built to optimize modern nursing college registrations with document verification workflow.",
    tags: ["React", "Context API", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    liveLink: "#",
    codeLink: "#",
    year: "2023",
    role: "Frontend Architect"
  },
  {
    id: 4,
    title: "Private Counsel Portfolio",
    category: "Web Design",
    description: "An elegant, typography-focused legal landing page framework crafted for modern private legal practices with advanced SEO optimization.",
    tags: ["React", "Tailwind CSS", "UI/UX Layout", "GSAP"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    liveLink: "#",
    codeLink: "#",
    year: "2023",
    role: "UI Developer"
  }
];

// Statistics for header
const STATS = [
  { label: "Projects Completed", value: "12+" },
  { label: "Happy Clients", value: "8+" },
  { label: "Years Experience", value: "3+" }
];

// Animation Configuration Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 50, 
      damping: 20,
      mass: 0.8
    }
  }
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Card Container */}
      <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-700 ease-out">
        
        {/* Image Section */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10"
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ 
              scale: isHovered ? 1.08 : 1,
              filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)'
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Floating Badges */}
          <div className="absolute top-4 left-4 z-20 flex gap-2">
            <span className="bg-white/95 backdrop-blur-md text-xs font-bold text-gray-700 px-3 py-1.5 rounded-full shadow-sm border border-gray-200/50">
              {project.year}
            </span>
            <span className="bg-black/90 backdrop-blur-md text-xs font-medium text-white px-3 py-1.5 rounded-full shadow-sm">
              {project.role}
            </span>
          </div>

          {/* Quick View Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 right-4 z-20 flex gap-2"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.liveLink}
              className="bg-white shadow-lg p-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            >
              <ExternalLink size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.codeLink}
              className="bg-white shadow-lg p-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            >
              <User size={18} />
            </motion.a>
          </motion.div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8">
          {/* Category */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-black rounded-full" />
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-serif font-black text-gray-900 mb-3 leading-tight group-hover:text-gray-600 transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * idx }}
                className="text-[10px] uppercase tracking-wider bg-gray-50 text-gray-600 font-semibold px-3 py-1.5 rounded-lg border border-gray-200 hover:border-black hover:text-black transition-all duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-6 border-t border-gray-100">
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.liveLink}
              className="flex items-center justify-center gap-2 bg-black text-white py-3.5 rounded-xl text-xs font-bold tracking-wide hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Live Demo
              <ArrowUpRight size={14} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={project.codeLink}
              className="flex items-center justify-center gap-2 bg-transparent text-gray-700 py-3.5 rounded-xl text-xs font-bold tracking-wide border-2 border-gray-200 hover:border-black hover:text-black transition-all duration-300"
            >
              Source Code
              <Code2 size={14} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      
      {/* Decorative Background Elements - Subtle gray gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="relative pt-32 pb-24">
        {/* Header Section */}
        <header className="max-w-7xl mx-auto px-6 mb-20">
          <div className="text-center md:text-left max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6 justify-center md:justify-start"
            >
              <Sparkles className="text-gray-400" size={20} />
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold bg-gray-50 px-4 py-2 rounded-full border border-gray-200">
                Featured Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight text-black mb-6 leading-[0.9]"
            >
              Selected
              <br />
              Projects
              <span className="text-gray-300">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-500 max-w-xl text-lg leading-relaxed font-light"
            >
              A curated collection of digital interfaces balancing structural code architecture with premium, minimalist aesthetics.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 mt-12 max-w-md"
            >
              {STATS.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 hover:border-gray-300 transition-all duration-300">
                  <div className="text-2xl md:text-3xl font-black text-black">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </header>

        {/* Projects Grid */}
        <main className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {DUMMY_PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </main>

        {/* Enhanced CTA Section - Black & White */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 text-center px-6"
        >
          <div className="max-w-2xl mx-auto bg-black rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative patterns */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.3),rgba(0,0,0,0))]" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-black mb-6 leading-tight">
                Have an architectural
                <br />
                challenge in mind?
              </h3>
              <p className="text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
                Let's collaborate to build something extraordinary. From concept to deployment, I bring precision and passion to every pixel.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white text-black px-10 py-4 rounded-full text-sm font-bold tracking-wider uppercase shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all duration-300"
                >
                  Start a Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-gray-600 text-gray-300 px-10 py-4 rounded-full text-sm font-bold tracking-wider uppercase hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  View Resume
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}