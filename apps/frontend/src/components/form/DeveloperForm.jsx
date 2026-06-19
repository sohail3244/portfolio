"use client";
import React, { useState } from "react";
import { Loader2, Send, Check, Zap, Shield, MessageCircle } from "lucide-react";

export default function DeveloperForm({ isModal = false, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypes = [
    "Web Application",
    "Mobile App",
    "E-commerce Site",
    "Portfolio Website",
    "Landing Page",
    "Custom Software",
    "UI/UX Design",
    "Other",
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000+",
    "Not Sure",
  ];

  const timelineOptions = [
    "Immediate (ASAP)",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Developer Form Data:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      });

      // Auto close modal after success if onSuccess prop exists
      if (onSuccess && isModal) {
        setTimeout(() => {
          onSuccess();
          setSubmitStatus(null);
        }, 2000);
      } else {
        // Reset success message after 3 seconds
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    }, 1500);
  };

  return (
    <div className={isModal ? "" : "py-12 md:py-20 px-4 bg-white"}>
      <div className={isModal ? "" : "max-w-3xl mx-auto"}>
        {/* Header - Only show if not in modal */}
        {!isModal && (
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 bg-black text-white text-xs rounded-full font-semibold mb-4">
              HIRE A DEVELOPER
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need a Developer?
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Tell me about your project and I&apos;ll help bring your ideas to
              life. Fill out the form below and let&apos;s start building
              something amazing together.
            </p>
          </div>
        )}

       

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Inc. (optional)"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-200 text-gray-900 placeholder-gray-400"
            />
          </div>

          {/* Project Type */}
          <div>
            <label
              htmlFor="projectType"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-200 text-gray-900 bg-white"
            >
              <option value="">Select project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Budget & Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Budget */}
            <div>
              <label
                htmlFor="budget"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Budget Range *
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-200 text-gray-900 bg-white"
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {/* Timeline */}
            <div>
              <label
                htmlFor="timeline"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Expected Timeline *
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-200 text-gray-900 bg-white"
              >
                <option value="">Select timeline</option>
                {timelineOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Project Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={isModal ? 4 : 6}
              placeholder="Describe your project, goals, features, and any specific requirements..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-200 text-gray-900 placeholder-gray-400 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-8 py-4 bg-black text-white rounded-lg font-bold hover:bg-gray-800 hover:-translate-y-1 transform transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 text-base`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                Submitting...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Send className="mr-2 h-5 w-5" />
                Submit Project Request
              </span>
            )}
          </button>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-4 rounded-lg animate-fade-in">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">
                  Project request submitted successfully!
                </span>
              </div>
              <p className="mt-2 text-sm ml-7">
                I&apos;ll review your project details and get back to you within 24-48 hours.
              </p>
            </div>
          )}
        </form>

        {/* Why Work With Me - Only show if not in modal */}
        {!isModal && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Fast Delivery</h3>
              <p className="text-sm text-gray-600">
                Quick turnaround without compromising quality
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Clean Code</h3>
              <p className="text-sm text-gray-600">
                Well-structured, maintainable code
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-gray-700" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Clear Communication</h3>
              <p className="text-sm text-gray-600">
                Regular updates and transparent process
              </p>
            </div>
          </div>
        )}
      </div>

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
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}