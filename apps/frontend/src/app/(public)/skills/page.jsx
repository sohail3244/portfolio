"use client";
import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaFigma,
  FaGitAlt,
  FaMobileAlt,
  FaVuejs,
  FaAngular,
  FaSketch,
  FaJenkins,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiFirebase,
  SiRedux,
  SiDjango,
  SiKubernetes,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { BsPencilSquare } from "react-icons/bs";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Skills" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "design", label: "Design" },
    { id: "tools", label: "Tools & DevOps" },
  ];

  const skills = [
    // Frontend Skills
    {
      name: "React",
      icon: FaReact,
      category: "frontend",
      level: 95,
      color: "#61DAFB",
      experience: "5+ years",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      category: "frontend",
      level: 90,
      color: "#000000",
      experience: "4+ years",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      category: "frontend",
      level: 88,
      color: "#3178C6",
      experience: "4+ years",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      category: "frontend",
      level: 95,
      color: "#F7DF1E",
      experience: "6+ years",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      category: "frontend",
      level: 92,
      color: "#06B6D4",
      experience: "3+ years",
    },
    {
      name: "Redux",
      icon: SiRedux,
      category: "frontend",
      level: 85,
      color: "#764ABC",
      experience: "4+ years",
    },
    {
      name: "Vue.js",
      icon: FaVuejs,
      category: "frontend",
      level: 75,
      color: "#4FC08D",
      experience: "2+ years",
    },
    {
      name: "Angular",
      icon: FaAngular,
      category: "frontend",
      level: 70,
      color: "#DD0031",
      experience: "2+ years",
    },
    {
      name: "React Native",
      icon: TbBrandReactNative,
      category: "frontend",
      level: 82,
      color: "#61DAFB",
      experience: "3+ years",
    },

    // Backend Skills
    {
      name: "Node.js",
      icon: FaNodeJs,
      category: "backend",
      level: 90,
      color: "#339933",
      experience: "5+ years",
    },
    {
      name: "Python",
      icon: FaPython,
      category: "backend",
      level: 85,
      color: "#3776AB",
      experience: "4+ years",
    },
    {
      name: "Django",
      icon: SiDjango,
      category: "backend",
      level: 80,
      color: "#092E20",
      experience: "3+ years",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      category: "backend",
      level: 88,
      color: "#47A248",
      experience: "4+ years",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      category: "backend",
      level: 85,
      color: "#4169E1",
      experience: "4+ years",
    },
    {
      name: "GraphQL",
      icon: SiGraphql,
      category: "backend",
      level: 78,
      color: "#E10098",
      experience: "3+ years",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      category: "backend",
      level: 82,
      color: "#FFCA28",
      experience: "3+ years",
    },

    // Design Skills
    {
      name: "Figma",
      icon: FaFigma,
      category: "design",
      level: 85,
      color: "#F24E1E",
      experience: "3+ years",
    },
    {
      name: "Adobe XD",
      icon: BsPencilSquare,
      category: "design",
      level: 75,
      color: "#FF61F6",
      experience: "2+ years",
    },
    {
      name: "Sketch",
      icon: FaSketch,
      category: "design",
      level: 70,
      color: "#F7B500",
      experience: "2+ years",
    },
    {
      name: "Mobile Design",
      icon: FaMobileAlt,
      category: "design",
      level: 80,
      color: "#000000",
      experience: "3+ years",
    },

    // Tools & DevOps
    {
      name: "Git",
      icon: FaGitAlt,
      category: "tools",
      level: 92,
      color: "#F05032",
      experience: "6+ years",
    },
    {
      name: "Docker",
      icon: FaDocker,
      category: "tools",
      level: 85,
      color: "#2496ED",
      experience: "4+ years",
    },
    {
      name: "AWS",
      icon: FaAws,
      category: "tools",
      level: 80,
      color: "#FF9900",
      experience: "3+ years",
    },
    {
      name: "Azure",
      icon: VscAzure,
      category: "tools",
      level: 72,
      color: "#0078D4",
      experience: "2+ years",
    },
    {
      name: "Kubernetes",
      icon: SiKubernetes,
      category: "tools",
      level: 70,
      color: "#326CE5",
      experience: "2+ years",
    },
    {
      name: "Jenkins",
      icon: FaJenkins,
      category: "tools",
      level: 75,
      color: "#D24939",
      experience: "3+ years",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const softSkills = [
    { name: "Problem Solving", level: 95 },
    { name: "Communication", level: 90 },
    { name: "Team Leadership", level: 85 },
    { name: "Time Management", level: 88 },
    { name: "Agile Methodology", level: 92 },
    { name: "Client Relations", level: 87 },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-black text-white text-xs rounded-full font-semibold mb-6">
            MY SKILLS
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Technologies & Expertise
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and
            technologies I work with to bring ideas to life.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b border-gray-200 sticky top-0 z-10 backdrop-blur-sm bg-white/90">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-black text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${skill.color}15` }}
                    >
                      <skill.icon style={{ color: skill.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-gray-500">
                        {skill.experience}
                      </p>
                    </div>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredSkills.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No skills found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soft Skills
            </h2>
            <p className="text-gray-600">
              Beyond technical expertise, here are the soft skills that make me
              an effective team member.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-sm font-bold text-gray-700">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-black h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skill Journey
            </h2>
            <p className="text-gray-600">
              How my expertise has evolved over the years.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2" />

            <div className="space-y-8">
              {[
                {
                  year: "2024",
                  title: "Expanded DevOps & Cloud",
                  description:
                    "Dived deep into Kubernetes, Azure, and advanced AWS services. Automated CI/CD pipelines and infrastructure.",
                  skills: ["Kubernetes", "Azure", "Terraform"],
                },
                {
                  year: "2023",
                  title: "Full-Stack Mastery",
                  description:
                    "Mastered full-stack development with Next.js, TypeScript, and microservices architecture.",
                  skills: ["Next.js", "TypeScript", "Microservices"],
                },
                {
                  year: "2022",
                  title: "Backend & Database Focus",
                  description:
                    "Specialized in backend technologies, API design, and database management systems.",
                  skills: ["Node.js", "PostgreSQL", "GraphQL"],
                },
                {
                  year: "2021",
                  title: "Frontend Development",
                  description:
                    "Focused on modern frontend frameworks and responsive design principles.",
                  skills: ["React", "Vue.js", "Tailwind CSS"],
                },
                {
                  year: "2020",
                  title: "Career Beginning",
                  description:
                    "Started journey in web development with fundamentals and core technologies.",
                  skills: ["HTML/CSS", "JavaScript", "Git"],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black rounded-full border-4 border-white transform -translate-x-1/2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all">
                      <span className="inline-block px-3 py-1 bg-black text-white text-xs rounded-full font-semibold mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                        {item.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-300 mb-8">
            Have a project that matches my skills? I&apos;d love to hear about
            it and discuss how I can help bring your vision to life.
          </p>
          <button className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 hover:-translate-y-1 transform transition-all duration-200">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}