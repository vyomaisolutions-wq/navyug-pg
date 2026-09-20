"use client";

import React, { useState } from "react";
import { CheckCircle, ClipboardList, BookOpen, AlertCircle, Send, FileText, Download, Calendar, Layers, Table } from "lucide-react";
import Container from "@/components/Common/Container";
import Heading from "@/components/Common/Heading";
import AnimatedSection from "@/components/Common/AnimatedSection";
import Button from "@/components/Common/Button";

export default function AdmissionsClient() {
  const steps = [
    {
      step: "01",
      title: "Online / Offline Registration",
      description: "Submit the online registration inquiry below or visit the campus office in Madhupur, Jaunpur to procure the prospectus.",
    },
    {
      step: "02",
      title: "Document Submission",
      description: "Submit required certificates (Marksheet, Aadhar Card, Transfer Certificate, Passport Photos, Category Certificate if applicable).",
    },
    {
      step: "03",
      title: "Merit & Eligibility Check",
      description: "Application review as per Veer Bahadur Singh Purvanchal University guidelines for BA, BSc, BCA, and MA degree faculties.",
    },
    {
      step: "04",
      title: "Fee Payment & Admission Approval",
      description: "Complete fee payment and receive enrollment confirmation & roll number for regular classes.",
    },
  ];

  const requiredDocuments = [
    "Prior Class 10th / 12th / Graduation Marksheet & Passing Certificate",
    "Original Transfer Certificate (TC) / Migration Certificate",
    "Aadhar Card copy of Student",
    "Recent 4 Passport-sized Photographs",
    "Category Certificate (SC/ST/OBC/EWS) if applicable for scholarship",
    "Income Certificate copy for fee concession / government scholarship portal",
  ];

  // Mock static downloadable resources
  const resources = [
    {
      _id: "res-1",
      title: "Navyug P.G. College Admission Brochure 2026-27",
      category: "PROSPECTUS",
      fileSize: "2.4 MB",
      description: "Official college prospectus containing course structures for BA, BSc, BCA, and MA.",
      fileUrl: "#",
    },
    {
      _id: "res-2",
      title: "Undergraduate & Postgraduate Fee Structure 2026-27",
      category: "FEE CHART",
      fileSize: "1.1 MB",
      description: "Detailed tuition fee breakdown and scholarship concession guidelines.",
      fileUrl: "#",
    },
    {
      _id: "res-3",
      title: "Purvanchal University Course Syllabus Guidelines",
      category: "ACADEMICS",
      fileSize: "3.5 MB",
      description: "Semester exam pattern and core subjects for BA, BSc, BCA, and MA degree streams.",
      fileUrl: "#",
    }
  ];

  // Inquiry form states
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    targetDegree: "BCA (Bachelor of Computer Applications)",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.phone || !formData.targetDegree) {
      setErrorMessage("Please fill in student name, phone number, and target degree course.");
      return;
    }

    setSubmitting(true);
    setErrorMessage("");

    try {
      // Static fallback simulation
      await new Promise((resolve) => setTimeout(resolve, 600));

      setFormSubmitted(true);
      setFormData({
        studentName: "",
        parentName: "",
        email: "",
        phone: "",
        targetDegree: "BCA (Bachelor of Computer Applications)",
        message: "",
      });
    } catch (err: any) {
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pt-36 sm:pt-40 lg:pt-44 pb-20 min-h-screen bg-brand-bg select-none">
      <Container>
        {/* Page Header */}
        <AnimatedSection variant="fade-up" className="mb-16">
          <Heading
            title="Admission Procedure & Registration 2026-27"
            subtitle="Navyug P.G. College Admissions"
            center
          />
          <p className="text-center text-slate-600 max-w-2xl mx-auto -mt-4 text-sm sm:text-base leading-relaxed">
            Welcome to Navyug P.G. College, Madhupur, Jaunpur. Admissions are open for BA, BSc, BCA, and MA degree courses affiliated to Veer Bahadur Singh Purvanchal University.
          </p>
        </AnimatedSection>

        {/* Process Timeline Steps */}
        <div className="mb-24" id="process">
          <AnimatedSection variant="fade-up">
            <Heading
              title="Four-Step Admission Journey"
              subtitle="Process Roadmap"
              center
            />
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <AnimatedSection
                key={item.step}
                variant="fade-up"
                delay={idx * 0.05}
                className="h-full animate-delay-200"
              >
                <div className="bg-white rounded-3xl p-8 border border-[#E4E7EC] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative h-full flex flex-col justify-between group overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1111E8] via-[#08089E] to-[#FFF200] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <div>
                    <span className="text-5xl font-black text-[#1111E8]/20 group-hover:text-[#1111E8]/40 transition-colors block mb-4">
                      {item.step}
                    </span>
                    <h3 className="font-extrabold text-[#20242A] text-lg mb-2.5 group-hover:text-[#1111E8] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#667085] text-xs sm:text-sm leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Downloadable Resources & Admission Packets */}
        <div className="mb-24" id="forms">
          <AnimatedSection variant="fade-up">
            <Heading
              title="Official Prospectus & Downloadable Documents"
              subtitle="Admission Resources"
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((res, idx) => (
              <AnimatedSection
                key={res._id}
                variant="fade-up"
                delay={idx * 0.05}
              >
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E4E7EC] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group overflow-hidden relative">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#F3F6FF] border border-[#1111E8]/20 flex items-center justify-center shrink-0">
                        <FileText className="w-6 h-6 text-[#1111E8]" />
                      </div>
                      <span className="bg-[#F3F6FF] text-[#20242A] text-[10px] font-extrabold px-3 py-1 rounded-xl uppercase tracking-wider">
                        {res.fileSize}
                      </span>
                    </div>

                    <h4 className="text-[#20242A] font-black text-lg mb-1">
                      {res.title}
                    </h4>

                    <div className="text-[#1111E8] font-extrabold text-[11px] uppercase tracking-wider mb-3">
                      {res.category}
                    </div>

                    <p className="text-[#667085] text-xs sm:text-sm leading-relaxed mb-6 text-justify">
                      {res.description}
                    </p>
                  </div>

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Document packet requested. Downloading brochure...");
                    }}
                    className="w-full py-3 px-4 bg-[#1111E8] hover:bg-[#08089E] text-white rounded-2xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-sm cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF Brochure</span>
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* 2-Column Split: Checklists vs Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Requirements & Guidelines */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <AnimatedSection variant="fade-right" className="bg-white rounded-3xl p-8 border border-[#E4E7EC] shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1111E8]" />
              
              <h3 className="text-xl font-extrabold text-[#20242A] mb-6 flex items-center gap-2.5">
                <ClipboardList className="text-[#1111E8] w-6 h-6" />
                <span>Required Documentation</span>
              </h3>
              
              <ul className="flex flex-col gap-4 text-sm text-[#20242A] font-semibold">
                {requiredDocuments.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <CheckCircle className="text-[#1111E8] w-5 h-5 shrink-0 mt-0.5" />
                    <span className="leading-snug">{doc}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection variant="fade-right" className="bg-gradient-to-br from-[#08089E] via-[#08089E] to-[#1111E8] rounded-3xl p-8 text-white shadow-xl border border-[#FFF200]/40">
              <h3 className="text-xl font-black text-[#FFF200] mb-4 flex items-center gap-2.5">
                <FileText className="text-[#FFF200] w-6 h-6" />
                <span>Scholarship &amp; Fee Policy</span>
              </h3>
              <p className="text-[#F3F6FF] text-sm leading-relaxed mb-4 text-justify">
                Navyug P.G. College provides 100% scholarship support, fee concessions for economically weaker students, and merit awards for toppers joining BA, BSc, BCA, and MA courses.
              </p>
              <div className="flex gap-2 items-center bg-white/10 p-3 rounded-xl text-xs text-[#FFF200]">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>Visit the college desk in Madhupur, Jaunpur or contact 7617755655 for exact fee charts.</span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7" id="register">
            <AnimatedSection variant="fade-left">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E4E7EC] shadow-lg relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#1111E8] via-[#08089E] to-[#FFF200]" />
                
                <h3 className="text-2xl font-black text-[#20242A] mb-2">Online Admission Inquiry 2026-27</h3>
                <p className="text-[#667085] text-xs sm:text-sm mb-8 leading-relaxed">
                  Fill in your details below. Our admissions desk at Navyug P.G. College will guide you on course eligibility and enrollment.
                </p>

                {formSubmitted ? (
                  <div className="bg-[#F3F6FF] rounded-2xl border border-[#1111E8]/30 p-8 text-center flex flex-col items-center gap-4">
                    <CheckCircle className="text-[#1111E8] w-12 h-12" />
                    <div>
                      <h4 className="text-[#20242A] font-black text-lg mb-1">Inquiry Submitted Successfully!</h4>
                      <p className="text-[#667085] text-sm leading-relaxed">
                        Thank you for your interest in Navyug P.G. College, Madhupur, Jaunpur. Our admissions coordinator will contact you shortly on the mobile number provided.
                      </p>
                    </div>
                    <Button
                      onClick={() => setFormSubmitted(false)}
                      variant="outline"
                      className="mt-2 text-[#1111E8] border-[#1111E8] hover:bg-[#1111E8] hover:text-white"
                    >
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {errorMessage && (
                      <div className="p-4 bg-rose-50 text-rose-600 border border-rose-200 rounded-xl text-sm font-medium">
                        {errorMessage}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="studentName" className="text-xs font-bold uppercase tracking-wider text-[#20242A]">
                          Applicant Student Name <span className="text-[#F20D0D]">*</span>
                        </label>
                        <input
                          type="text"
                          id="studentName"
                          name="studentName"
                          required
                          value={formData.studentName}
                          onChange={handleInputChange}
                          className="bg-[#F3F6FF] text-[#20242A] border border-[#E4E7EC] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1111E8] transition font-semibold"
                          placeholder="Ex: Abhishek Dubey"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="parentName" className="text-xs font-bold uppercase tracking-wider text-[#20242A]">
                          Father / Guardian Name
                        </label>
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleInputChange}
                          className="bg-[#F3F6FF] text-[#20242A] border border-[#E4E7EC] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1111E8] transition font-semibold"
                          placeholder="Ex: Ramesh Dubey"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#20242A]">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-[#F3F6FF] text-[#20242A] border border-[#E4E7EC] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1111E8] transition font-semibold"
                          placeholder="student@example.com"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-[#20242A]">
                          Mobile Contact Number <span className="text-[#F20D0D]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-[#F3F6FF] text-[#20242A] border border-[#E4E7EC] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1111E8] transition font-semibold"
                          placeholder="Ex: 7617755655"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="targetDegree" className="text-xs font-bold uppercase tracking-wider text-[#20242A]">
                        Select Target Degree Course <span className="text-[#F20D0D]">*</span>
                      </label>
                      <select
                        id="targetDegree"
                        name="targetDegree"
                        value={formData.targetDegree}
                        onChange={handleInputChange}
                        className="bg-[#F3F6FF] text-[#20242A] border border-[#E4E7EC] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1111E8] transition cursor-pointer font-bold"
                      >
                        <option value="B.A. (Bachelor of Arts)">B.A. (Bachelor of Arts)</option>
                        <option value="B.Sc. (Bachelor of Science)">B.Sc. (Bachelor of Science)</option>
                        <option value="B.C.A. (Bachelor of Computer Applications)">B.C.A. (Bachelor of Computer Applications)</option>
                        <option value="M.A. (Master of Arts)">M.A. (Master of Arts)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#20242A]">
                        Additional Query / Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="bg-[#F3F6FF] text-[#20242A] border border-[#E4E7EC] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1111E8] transition resize-none font-semibold"
                        placeholder="Ex: I want to know about BCA fees and scholarship requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      variant="accent"
                      className="bg-[#F20D0D] hover:bg-[#C40A0A] text-white font-black flex items-center justify-center gap-2 mt-4 py-3 rounded-xl transition-all shadow-md disabled:opacity-50 uppercase tracking-wider text-xs sm:text-sm cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? "Submitting..." : "Submit Admission Inquiry"}</span>
                    </Button>
                  </form>
                )}

              </div>
            </AnimatedSection>
          </div>

        </div>
      </Container>
    </main>
  );
}
