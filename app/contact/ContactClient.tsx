"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import Container from "@/components/Common/Container";
import AnimatedSection from "@/components/Common/AnimatedSection";
import Button from "@/components/Common/Button";
import { contactDetails } from "@/data/navigation";

function ContactFormAndDetails() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get("subject") || "General Inquiry";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      setErrorMessage("Please fill in your name, mobile number, and message query.");
      return;
    }

    setSubmitting(true);
    setErrorMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (err: any) {
      setErrorMessage("An error occurred while submitting.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Direct Contacts info */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <AnimatedSection variant="fade-right" className="h-full">
            <div className="group relative bg-white rounded-3xl border-2 border-[#E4E7EC] hover:border-[#1111E8] shadow-2xl hover:shadow-[0_20px_50px_rgba(17,17,232,0.18)] transition-all duration-500 overflow-hidden flex flex-col justify-between h-full">
              {/* Top Accent Strip fitting top rounded corners */}
              <div className="w-full h-3 bg-gradient-to-r from-[#08089E] via-[#1111E8] to-[#FFF200] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" />
              </div>

              {/* Ambient Background Glow */}
              <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-[#1111E8]/5 rounded-full blur-3xl group-hover:bg-[#1111E8]/15 transition-all duration-700 pointer-events-none" />

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#E4E7EC] mb-6">
                    <div>
                      <span className="text-[11px] font-black text-[#1111E8] uppercase tracking-widest block mb-1">
                        Direct Assistance Cell
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#20242A] uppercase tracking-wide group-hover:text-[#1111E8] transition-colors">
                        Contact Information
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Campus Address */}
                    <a
                      href={contactDetails.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/item p-4 rounded-2xl bg-[#F3F6FF] hover:bg-[#08089E] border border-[#E4E7EC] hover:border-[#08089E] shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-[#20242A] hover:text-white cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white group-hover/item:bg-[#1111E8] text-[#1111E8] group-hover/item:text-[#FFF200] flex items-center justify-center shrink-0 shadow-sm border border-[#E4E7EC] transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3 mt-0.5">
                        <FaMapMarkerAlt className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[#667085] group-hover/item:text-[#FFF200] text-[11px] font-extrabold uppercase tracking-wider block mb-0.5 transition-colors">
                          Official Campus Address
                        </span>
                        <span className="font-black text-sm leading-relaxed block">
                          {contactDetails.address}
                        </span>
                      </div>
                    </a>

                    {/* Admission Helpline */}
                    <div className="group/item p-4 rounded-2xl bg-[#F3F6FF] hover:bg-[#08089E] border border-[#E4E7EC] hover:border-[#08089E] shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-[#20242A] hover:text-white">
                      <div className="w-11 h-11 rounded-xl bg-white group-hover/item:bg-[#1111E8] text-[#1111E8] group-hover/item:text-[#FFF200] flex items-center justify-center shrink-0 shadow-sm border border-[#E4E7EC] transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3 mt-0.5">
                        <FaPhoneAlt className="w-5 h-5" />
                      </div>
                      <div className="w-full">
                        <span className="text-[#667085] group-hover/item:text-[#FFF200] text-[11px] font-extrabold uppercase tracking-wider block mb-1 transition-colors">
                          Admission Helplines
                        </span>
                        <div className="flex flex-col gap-1.5">
                          {contactDetails.helplines.map((num) => (
                            <a
                              key={num}
                              href={`tel:${num.replace(/\s+/g, "")}`}
                              className="font-black text-sm hover:text-[#FFF200] transition-colors block"
                            >
                              {num}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Email Address */}
                    <a
                      href={`mailto:${contactDetails.email}`}
                      className="group/item p-4 rounded-2xl bg-[#F3F6FF] hover:bg-[#08089E] border border-[#E4E7EC] hover:border-[#08089E] shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-[#20242A] hover:text-white cursor-pointer"
                    >
                      <div className="w-11 h-11 rounded-xl bg-white group-hover/item:bg-[#1111E8] text-[#1111E8] group-hover/item:text-[#FFF200] flex items-center justify-center shrink-0 shadow-sm border border-[#E4E7EC] transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3 mt-0.5">
                        <FaEnvelope className="w-5 h-5" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="text-[#667085] group-hover/item:text-[#FFF200] text-[11px] font-extrabold uppercase tracking-wider block mb-0.5 transition-colors">
                          Official Email
                        </span>
                        <span className="font-black text-sm leading-snug break-all block">
                          {contactDetails.email}
                        </span>
                      </div>
                    </a>

                    {/* Office Hours */}
                    <div className="group/item p-4 rounded-2xl bg-[#F3F6FF] hover:bg-[#08089E] border border-[#E4E7EC] hover:border-[#08089E] shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-[#20242A] hover:text-white">
                      <div className="w-11 h-11 rounded-xl bg-white group-hover/item:bg-[#1111E8] text-[#1111E8] group-hover/item:text-[#FFF200] flex items-center justify-center shrink-0 shadow-sm border border-[#E4E7EC] transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3 mt-0.5">
                        <FaClock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[#667085] group-hover/item:text-[#FFF200] text-[11px] font-extrabold uppercase tracking-wider block mb-0.5 transition-colors">
                          Office Working Hours
                        </span>
                        <span className="font-black text-sm leading-snug block">
                          {contactDetails.timings}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <AnimatedSection variant="fade-left" className="h-full">
            <div className="group relative bg-white rounded-3xl border-2 border-[#E4E7EC] hover:border-[#1111E8] shadow-2xl hover:shadow-[0_20px_50px_rgba(17,17,232,0.18)] transition-all duration-500 overflow-hidden flex flex-col justify-between h-full">
              {/* Top Accent Strip fitting top rounded corners */}
              <div className="w-full h-3 bg-gradient-to-r from-[#08089E] via-[#1111E8] to-[#FFF200] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" />
              </div>

              {/* Ambient Background Glow */}
              <div className="absolute -left-16 -top-16 w-48 h-48 bg-[#FFF200]/15 rounded-full blur-3xl group-hover:bg-[#FFF200]/25 transition-all duration-700 pointer-events-none" />

              <div className="p-6 sm:p-10 flex-1 flex flex-col justify-between relative z-10">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#20242A] group-hover:text-[#1111E8] transition-colors mb-2">Send an Inquiry Message</h3>
                  <p className="text-[#667085] text-xs sm:text-sm mb-8 leading-relaxed">
                    Have queries about degree programs, university examinations, or scholarship eligibility? Send us a message and our administrative cell will assist you.
                  </p>

                  {submitted ? (
                    <div className="bg-[#F3F6FF] rounded-2xl border-2 border-[#1111E8] p-8 text-center flex flex-col items-center gap-4 shadow-lg animate-fade-in">
                      <FaCheckCircle className="text-[#1111E8] w-14 h-14 animate-bounce" />
                      <div>
                        <h4 className="text-[#20242A] font-black text-xl mb-1">Message Sent Successfully!</h4>
                        <p className="text-[#667085] text-sm leading-relaxed max-w-md mx-auto">
                          Thank you for reaching out to Navyug P.G. College, Madhupur, Jaunpur. We have received your query and our office will contact you shortly.
                        </p>
                      </div>
                      <Button
                        onClick={() => setSubmitted(false)}
                        variant="accent"
                        className="mt-2 bg-[#1111E8] hover:bg-[#08089E] text-white font-black px-6 py-2.5 rounded-xl border-none shadow-md"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      {errorMessage && (
                        <div className="p-4 bg-rose-50 text-rose-600 border border-rose-200 rounded-xl text-sm font-bold">
                          {errorMessage}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="name" className="text-xs font-black uppercase tracking-wider text-[#20242A]">
                            Full Name <span className="text-[#F20D0D]">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-[#F3F6FF] focus:bg-white text-[#20242A] border-2 border-[#E4E7EC] focus:border-[#1111E8] focus:ring-4 focus:ring-[#1111E8]/10 rounded-xl px-4 py-3 text-sm focus:outline-none font-extrabold transition-all duration-200"
                            placeholder="Ex: Amit Singh"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="phone" className="text-xs font-black uppercase tracking-wider text-[#20242A]">
                            Mobile Phone Number <span className="text-[#F20D0D]">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-[#F3F6FF] focus:bg-white text-[#20242A] border-2 border-[#E4E7EC] focus:border-[#1111E8] focus:ring-4 focus:ring-[#1111E8]/10 rounded-xl px-4 py-3 text-sm focus:outline-none font-extrabold transition-all duration-200"
                            placeholder="Ex: 7617755655"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="text-xs font-black uppercase tracking-wider text-[#20242A]">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-[#F3F6FF] focus:bg-white text-[#20242A] border-2 border-[#E4E7EC] focus:border-[#1111E8] focus:ring-4 focus:ring-[#1111E8]/10 rounded-xl px-4 py-3 text-sm focus:outline-none font-extrabold transition-all duration-200"
                            placeholder="Ex: applicant@example.com"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label htmlFor="subject" className="text-xs font-black uppercase tracking-wider text-[#20242A]">
                            Subject / Concern <span className="text-[#F20D0D]">*</span>
                          </label>
                          <select
                            id="subject"
                            name="subject"
                            required
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="bg-[#F3F6FF] focus:bg-white text-[#20242A] border-2 border-[#E4E7EC] focus:border-[#1111E8] focus:ring-4 focus:ring-[#1111E8]/10 rounded-xl px-4 py-3 text-sm focus:outline-none font-extrabold transition-all duration-200 cursor-pointer"
                          >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Admissions Open">Degree Admissions (BA, BSc, BCA, MA)</option>
                            <option value="Scholarship Support">Scholarships &amp; Fee Concessions</option>
                            <option value="Purvanchal University Exam">University Exam Notices</option>
                            <option value="Facilities/Labs">Computer &amp; Science Labs</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-xs font-black uppercase tracking-wider text-[#20242A]">
                          Message Details <span className="text-[#F20D0D]">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="bg-[#F3F6FF] focus:bg-white text-[#20242A] border-2 border-[#E4E7EC] focus:border-[#1111E8] focus:ring-4 focus:ring-[#1111E8]/10 rounded-xl px-4 py-3 text-sm focus:outline-none font-extrabold transition-all duration-200 resize-none"
                          placeholder="Write details of your query..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={submitting}
                        variant="accent"
                        className="w-full bg-[#F20D0D] hover:bg-[#08089E] text-white font-black border-none flex items-center justify-center gap-2.5 mt-2 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl uppercase tracking-wider text-xs sm:text-sm cursor-pointer disabled:opacity-50 group/btn"
                      >
                        <FaPaperPlane className="w-4 h-4 text-[#FFF200] group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" />
                        <span>{submitting ? "Sending..." : "Send Message"}</span>
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Full-Width Map Location Card Below */}
      <AnimatedSection variant="fade-up" className="w-full">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#E4E7EC] hover:border-[#1111E8] transition-all duration-300 relative h-96 sm:h-[450px] bg-[#08089E] group">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.9859239845897!2d82.2716138!3d25.7240583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b6f2aed9bdb243d%3A0x36d8c08159fb0493!2sNavyug%20P.G%20College%2C%20Madhupur%2C%20Mogra%20Badshahpur%2C%20Jaunpur!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0 opacity-95"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Navyug P.G. College Location Map"
          />

          <a
            href={contactDetails.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            title="Click to view Navyug P.G. College on Google Maps"
            className="absolute inset-0 flex flex-col items-center justify-center bg-[#08089E]/10 hover:bg-[#08089E]/30 transition-all duration-300 z-10 cursor-pointer group/pin"
          >
            <div className="relative flex flex-col items-center">
              <span className="absolute -top-1 w-12 h-12 rounded-full bg-[#F20D0D]/40 animate-ping" />

              <div className="relative z-10 w-12 h-12 rounded-full bg-[#F20D0D] text-white flex items-center justify-center shadow-2xl border-2 border-white group-hover/pin:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="w-6 h-6 text-white" />
              </div>

              <div className="opacity-0 group-hover/pin:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/pin:translate-y-0 mt-3 bg-[#08089E] text-white text-xs sm:text-sm font-black px-5 py-2.5 rounded-xl shadow-2xl backdrop-blur-md border border-[#FFF200]/40 flex items-center gap-2.5 whitespace-nowrap pointer-events-none">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFF200] animate-pulse" />
                <span>Navyug P.G. College • Madhupur, Jaunpur, UP</span>
              </div>
            </div>
          </a>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default function ContactClient() {
  return (
    <main className="pt-36 sm:pt-40 lg:pt-44 pb-24 min-h-screen bg-brand-bg relative overflow-hidden">
      <Container>
        <AnimatedSection variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1111E8] font-extrabold text-sm tracking-widest uppercase mb-3 block">
              Reach Out To Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#20242A] mb-6 tracking-tight uppercase">
              Contact Us
            </h1>
          </div>
        </AnimatedSection>

        <React.Suspense fallback={<div className="text-center text-[#667085] py-10">Loading contact details...</div>}>
          <ContactFormAndDetails />
        </React.Suspense>
      </Container>
    </main>
  );
}
