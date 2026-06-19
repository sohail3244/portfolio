"use client";
import React, { useState, useEffect } from "react";
import { X, Check, Loader2, Send } from "lucide-react";

export default function ContactForm({ isModal = false, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

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
      console.log("Form Data:", formData);
      setSubmitStatus("success");
      setIsSubmitting(false);
      setShowPopup(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Auto hide popup after 4 seconds
      setTimeout(() => {
        setShowPopup(false);
        
        // Close modal after popup hides if onSuccess prop exists
        if (onSuccess && isModal) {
          setTimeout(() => {
            onSuccess();
            setSubmitStatus(null);
          }, 500);
        } else {
          setSubmitStatus(null);
        }
      }, 4000);
    }, 1500);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    if (onSuccess && isModal) {
      setTimeout(() => {
        onSuccess();
        setSubmitStatus(null);
      }, 300);
    } else {
      setSubmitStatus(null);
    }
  };

  return (
    <>
      <div className={isModal ? "" : "py-12 md:py-20 px-4 bg-gray-50"}>
        <div className={isModal ? "" : "max-w-2xl mx-auto"}>
          {/* Header - Only show if not in modal */}
          {!isModal && (
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                Have a question or want to work together? Fill out the form below
                and I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name Field */}
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

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Email *
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

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={isModal ? 4 : 5}
                placeholder="Tell me about your project or question..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-200 text-gray-900 placeholder-gray-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 hover:-translate-y-1 transform transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 ${
                isModal ? "text-base" : "md:w-auto"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </span>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          {/* Popup Backdrop */}
          <div 
            className="absolute inset-0 bg-opacity-50 backdrop-blur-sm"
            onClick={handleClosePopup}
          />
          
          {/* Popup Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full transform animate-popup z-10">
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close popup"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-10 h-10 text-green-600" />
              </div>
            </div>

            {/* Popup Text */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Thank You! 🎉
              </h3>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. I&apos;ll get back to you as soon as possible.
              </p>
              
              {/* Action Button */}
              <button
                onClick={handleClosePopup}
                className="px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}