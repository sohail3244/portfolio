"use client";
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaStar,
  FaAward,
  FaUsers,
  FaHeart,
  FaChevronDown,
  FaChevronUp,
  FaArrowRight,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function TeamPage() {
  const [expandedMember, setExpandedMember] = useState(null);

  const toggleMember = (id) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Lead Developer",
      image: "/team/member1.jpg", // Replace with actual image path
      initials: "AJ",
      experience: "8+ years",
      skills: ["React", "Next.js", "Node.js", "TypeScript", "AWS"],
      bio: "Full-stack developer passionate about building scalable web applications. Led multiple projects from concept to deployment.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "alex@example.com",
        website: "https://alexjohnson.dev",
      },
      projects: 45,
      clients: 30,
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "UI/UX Designer",
      image: "/team/member2.jpg",
      initials: "SW",
      experience: "6+ years",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"],
      bio: "Creative designer focused on creating intuitive and beautiful user experiences. Specializes in design systems and accessibility.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "sarah@example.com",
        website: "https://sarahwilliams.design",
      },
      projects: 38,
      clients: 25,
    },
    {
      id: 3,
      name: "Mike Chen",
      role: "Backend Developer",
      image: "/team/member3.jpg",
      initials: "MC",
      experience: "7+ years",
      skills: ["Python", "Django", "PostgreSQL", "Docker", "Microservices"],
      bio: "Backend specialist with expertise in building robust APIs and database architectures. Passionate about performance optimization.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mike@example.com",
      },
      projects: 52,
      clients: 40,
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "Project Manager",
      image: "/team/member4.jpg",
      initials: "ED",
      experience: "9+ years",
      skills: ["Agile", "Scrum", "Jira", "Risk Management", "Team Leadership"],
      bio: "Experienced project manager ensuring timely delivery and clear communication. Agile certified with a track record of successful projects.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "emily@example.com",
      },
      projects: 60,
      clients: 50,
    },
    {
      id: 5,
      name: "David Kim",
      role: "Mobile Developer",
      image: "/team/member5.jpg",
      initials: "DK",
      experience: "5+ years",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      bio: "Mobile development expert creating cross-platform applications with native-like performance. Focused on user-centric mobile experiences.",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "david@example.com",
        website: "https://davidkim.dev",
      },
      projects: 32,
      clients: 20,
    },
    {
      id: 6,
      name: "Lisa Anderson",
      role: "Content Strategist",
      image: "/team/member6.jpg",
      initials: "LA",
      experience: "4+ years",
      skills: ["Content Writing", "SEO", "Social Media", "Branding", "Copywriting"],
      bio: "Creative content strategist helping brands tell their story effectively. Specializes in SEO-optimized content and brand voice development.",
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "lisa@example.com",
        website: "https://lisaanderson.com",
      },
      projects: 28,
      clients: 22,
    },
  ];

  const stats = [
    { icon: FaUsers, label: "Team Members", value: "6+" },
    { icon: FaStar, label: "Projects Completed", value: "250+" },
    { icon: FaHeart, label: "Happy Clients", value: "180+" },
    { icon: FaAward, label: "Years Experience", value: "8+" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-black text-white text-xs rounded-full font-semibold mb-6">
            OUR TEAM
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet the Amazing People
            <br />
            Behind Our Success
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            We&apos;re a diverse team of passionate developers, designers, and
            strategists dedicated to delivering exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-gray-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Member Image/Avatar */}
                <div className="relative p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-black rounded-2xl flex items-center justify-center mx-auto text-white text-2xl font-bold">
                    {member.initials}
                  </div>
                  {/* Online Status Indicator */}
                  <div className="absolute top-6 right-6 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>

                {/* Member Info */}
                <div className="px-6 pb-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{member.role}</p>
                  <p className="text-xs text-gray-500 mb-4">
                    {member.experience} experience
                  </p>

                  {/* Stats */}
                  <div className="flex justify-center gap-6 mb-4 text-sm">
                    <div>
                      <span className="font-bold text-gray-900">
                        {member.projects}+
                      </span>
                      <p className="text-xs text-gray-500">Projects</p>
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">
                        {member.clients}+
                      </span>
                      <p className="text-xs text-gray-500">Clients</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mb-4">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <FaGithub className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <FaLinkedin className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <FaTwitter className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <HiMail className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                    {member.social.website && (
                      <a
                        href={member.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                      >
                        <FaGlobe className="w-4 h-4 text-gray-700" />
                      </a>
                    )}
                  </div>

                  {/* Expand Button */}
                  <button
                    onClick={() => toggleMember(member.id)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium text-gray-700"
                  >
                    {expandedMember === member.id ? (
                      <>
                        Show Less
                        <FaChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        View Profile
                        <FaChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* Expanded Content */}
                  {expandedMember === member.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 text-left animate-fadeIn">
                      <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                      
                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Skills & Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Hire Button */}
                      <button className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-semibold">
                        Hire {member.name.split(" ")[0]}
                        <FaArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}