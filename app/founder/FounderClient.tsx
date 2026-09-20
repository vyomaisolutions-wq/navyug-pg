"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Sparkles,
  Quote,
  Building2,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  Compass,
  Target,
  ArrowRight,
  School,
  Medal,
  Library
} from "lucide-react";
import Container from "@/components/Common/Container";
import Heading from "@/components/Common/Heading";
import AnimatedSection from "@/components/Common/AnimatedSection";
import Button from "@/components/Common/Button";

export default function FounderClient() {
  const credentials = [
    {
      title: "Professor, Banaras Hindu University (BHU)",
      subtitle: "BHU Varanasi",
      icon: School,
      desc: "Served as distinguished Professor in the Center of Advance Study, Dept. of Ancient Indian History, Culture & Archaeology (A.I.H.C. & Archaeology) at Banaras Hindu University, Varanasi.",
      highlights: [
        "Center of Advance Study Specialist",
        "Renowned Historian & Academic Scholar",
        "Guided Generations of BHU Researchers"
      ]
    },
    {
      title: "Ex. Member, UPHESC",
      subtitle: "Higher Education Leader",
      icon: Award,
      desc: "Appointed as Member of the Uttar Pradesh Higher Education Services Commission (UPHESC), shaping higher education policies and faculty selections across UP universities.",
      highlights: [
        "UP Higher Education Services Commission",
        "State Educational Policy & Standards",
        "Selection Panel for University Professorships"
      ]
    },
    {
      title: "Founder, Navyug P.G. College",
      subtitle: "Institution Builder",
      icon: Building2,
      desc: "Established Navyug P.G. College in Madhupur, Jaunpur, bringing top-tier university degree education, disciplined scholarship, and empowerment to rural & semi-urban youth.",
      highlights: [
        "Affiliated to V.B.S. Purvanchal University",
        "Multi-Faculty Degree College (BA, BSc, BCA, MA)",
        "16 Years of Sustained Educational Growth"
      ]
    }
  ];

  const philosophyPillars = [
    {
      title: "Value-Based Higher Education",
      desc: "Rooted in classical Indian heritage, intellectual rigor, and character building.",
      icon: ShieldCheck
    },
    {
      title: "Empowering Rural Youth",
      desc: "Bringing world-class university education to students of Madhupur, Jaunpur and surrounding regions.",
      icon: Compass
    },
    {
      title: "Academic Discipline & Excellence",
      desc: "Uncompromising scholarly standards, regular classes, and strong competitive exam foundations.",
      icon: Target
    },
    {
      title: "Nation-Building Leadership",
      desc: "Nurturing socially responsible graduates equipped for civil services, teaching, research, and IT careers.",
      icon: Sparkles
    }
  ];

  return (
    <main className="pt-32 sm:pt-36 lg:pt-40 pb-24 min-h-screen bg-brand-bg relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#1111E8]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-[#FFF200]/10 blur-3xl pointer-events-none" />

      <Container>
        {/* Page Header */}
        <AnimatedSection variant="fade-up">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#08089E] border border-[#FFF200]/40 text-[#FFF200] font-extrabold text-xs tracking-widest uppercase mb-4 shadow-md">
              <Sparkles className="w-4 h-4 animate-pulse text-[#FFF200]" />
              <span>FOUNDER &amp; VISIONARY EDUCATIONALIST</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#20242A] mb-4 tracking-tight uppercase">
              Late Prof. (Dr.) Anil Kumar Dubey
            </h1>
            <p className="text-[#1111E8] font-bold text-base sm:text-lg mb-4">
              Ex-Professor, Banaras Hindu University (BHU) • Ex-Member UPHESC
            </p>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#1111E8] via-[#08089E] to-[#FFF200] rounded-full mx-auto mb-6" />
            <p className="text-[#667085] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center">
              Honoring the visionary founder of Navyug P.G. College whose dedication to academic excellence, social empowerment, and educational discipline continues to inspire thousands of scholars.
            </p>
          </div>
        </AnimatedSection>

        {/* Founder Story & Equal Height Portrait Image Row (Content Left, Image Right) */}
        <AnimatedSection variant="fade-up" className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Content Left Side */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E4E7EC] shadow-xl flex flex-col justify-between h-full">
              <div>
                <Heading
                  title="A Visionary Academician &amp; Institution Builder"
                  subtitle="Founder's Story"
                  className="mb-4"
                />
                <div className="text-[#20242A] leading-relaxed space-y-4 text-justify text-sm sm:text-base">
                  <p>
                    <strong>Late Prof. (Dr.) Anil Kumar Dubey (नवयुग महाविद्यालय संस्थापक)</strong> was an eminent academician, historical scholar, and former member of the <strong>Uttar Pradesh Higher Education Services Commission (UPHESC)</strong>. As a senior Professor in the Center of Advance Study, Department of Ancient Indian History, Culture &amp; Archaeology at <strong>Banaras Hindu University (BHU), Varanasi</strong>, he dedicated his life to scholarship and educational leadership.
                  </p>
                  <p>
                    Believing that quality higher education is the single most powerful tool for rural transformation, Prof. Dubey established <strong>Navyug P.G. College</strong> in Madhupur, Jaunpur. His objective was to ensure that students from rural regions receive the same high academic standards, library facilities, and discipline found in premier national universities.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#08089E] text-white shadow-lg border border-[#FFF200]/30 mt-6">
                <p className="font-extrabold text-[#FFF200] text-sm sm:text-base leading-relaxed">
                  &ldquo;Education is not merely about degrees, but about fostering wisdom, moral character, and lifelong leadership.&rdquo;
                </p>
                <span className="text-xs text-[#F3F6FF]/90 font-semibold block mt-1 uppercase tracking-wider">
                  — Late Prof. (Dr.) Anil Kumar Dubey • Guiding Principle
                </span>
              </div>
            </div>

            {/* Image Right Side (Same Height) */}
            <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden shadow-xl border border-[#E4E7EC] bg-[#F3F6FF] group">
              <Image
                src="/founder.webp"
                alt="Late Prof. (Dr.) Anil Kumar Dubey - Founder, Navyug P.G. College"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08089E]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[#FFF200] font-black text-xs uppercase tracking-widest block">
                  Founder &amp; Visionary
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Late Prof. (Dr.) Anil Kumar Dubey
                </h3>
                <p className="text-xs text-[#F3F6FF]/90 font-semibold mt-0.5">
                  Ex-Professor, BHU Varanasi • Ex-Member UPHESC
                </p>
              </div>
            </div>

          </div>
        </AnimatedSection>

        {/* Full-Width Creative Card Below for Founder's Official Details */}
        <AnimatedSection variant="fade-up" className="mb-20">
          <div className="group relative bg-white rounded-3xl border-2 border-[#E4E7EC] hover:border-[#1111E8] shadow-2xl hover:shadow-[0_25px_60px_rgba(17,17,232,0.20)] transition-all duration-500 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#1111E8]/10 rounded-full blur-3xl group-hover:bg-[#1111E8]/20 transition-all duration-700 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#FFF200]/15 rounded-full blur-3xl group-hover:bg-[#FFF200]/25 transition-all duration-700 pointer-events-none" />

            {/* Top Animated Accent Strip */}
            <div className="w-full h-3.5 bg-gradient-to-r from-[#08089E] via-[#1111E8] to-[#FFF200] relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-pulse" />
            </div>

            <div className="p-6 sm:p-10 lg:p-12 relative z-10">
              {/* Header Title with Animated BHU Emblem Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E4E7EC] gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08089E] text-[#FFF200] text-[11px] font-extrabold uppercase tracking-widest mb-2 shadow-sm border border-[#FFF200]/30">
                    <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#FFF200]" />
                    <span>Official Academic Designation &amp; Credentials</span>
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-[#20242A] group-hover:text-[#1111E8] transition-colors mt-1">
                    Dr. Anil Kumar Dubey
                  </h3>
                  <span className="text-xs sm:text-sm font-extrabold text-[#1111E8] uppercase tracking-wider block mt-1">
                    Senior Professor • Banaras Hindu University (BHU), Varanasi
                  </span>
                </div>

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#08089E] to-[#1111E8] text-[#FFF200] flex flex-col items-center justify-center font-black text-sm text-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-[#FFF200]/50 shrink-0">
                  <span className="text-base tracking-wider">BHU</span>
                  <span className="text-[9px] font-extrabold text-[#FFF200]/80 uppercase tracking-widest">VARANASI</span>
                </div>
              </div>

              {/* Creative Cards Grid (Academic Dept & State Commission) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Academic Dept Card */}
                <div className="group/box relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#F3F6FF] via-white to-[#F3F6FF] border-2 border-[#E4E7EC] hover:border-[#1111E8] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#08089E] group-hover/box:bg-[#1111E8] transition-colors" />
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#08089E] group-hover/box:bg-[#1111E8] text-[#FFF200] flex items-center justify-center shadow-md group-hover/box:scale-110 group-hover/box:rotate-3 transition-all duration-300">
                        <GraduationCap className="w-5 h-5 text-[#FFF200]" />
                      </div>
                      <span className="font-extrabold text-[#08089E] text-xs uppercase tracking-wider block">
                        Academic Department
                      </span>
                    </div>
                    <p className="font-bold text-[#20242A] leading-relaxed text-sm sm:text-base pl-1">
                      Center of Advance Study <br />
                      Department of Ancient Indian History, Culture &amp; Archaeology <br />
                      <span className="text-[#1111E8] font-extrabold">BANARAS HINDU UNIVERSITY, VARANASI</span>
                    </p>
                  </div>
                </div>

                {/* State Commission Card */}
                <div className="group/box relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#F3F6FF] via-white to-[#F3F6FF] border-2 border-[#E4E7EC] hover:border-[#1111E8] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#08089E] group-hover/box:bg-[#1111E8] transition-colors" />
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#08089E] group-hover/box:bg-[#1111E8] text-[#FFF200] flex items-center justify-center shadow-md group-hover/box:scale-110 group-hover/box:rotate-3 transition-all duration-300">
                        <Award className="w-5 h-5 text-[#FFF200]" />
                      </div>
                      <span className="font-extrabold text-[#08089E] text-xs uppercase tracking-wider block">
                        State Commission Distinction
                      </span>
                    </div>
                    <p className="font-bold text-[#20242A] leading-relaxed text-sm sm:text-base pl-1">
                      Ex-Member, Uttar Pradesh Higher Education Services Commission (UPHESC) <br />
                      <span className="text-[#1111E8] font-extrabold">Government of Uttar Pradesh</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Contact Information Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a
                  href="mailto:akdubey.bhu@gmail.com"
                  className="group/item p-4 rounded-2xl bg-[#F3F6FF] hover:bg-[#08089E] border-2 border-[#E4E7EC] hover:border-[#08089E] shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3.5 text-xs sm:text-sm font-bold text-[#20242A] hover:text-white"
                >
                  <div className="w-10 h-10 rounded-xl bg-white group-hover/item:bg-[#1111E8] text-[#1111E8] group-hover/item:text-[#FFF200] flex items-center justify-center shrink-0 shadow-sm border border-[#E4E7EC] transition-all group-hover/item:scale-110">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="truncate">akdubey.bhu@gmail.com</span>
                </a>

                <a
                  href="tel:+919415130318"
                  className="group/item p-4 rounded-2xl bg-[#F3F6FF] hover:bg-[#08089E] border-2 border-[#E4E7EC] hover:border-[#08089E] shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3.5 text-xs sm:text-sm font-bold text-[#20242A] hover:text-white"
                >
                  <div className="w-10 h-10 rounded-xl bg-white group-hover/item:bg-[#1111E8] text-[#1111E8] group-hover/item:text-[#FFF200] flex items-center justify-center shrink-0 shadow-sm border border-[#E4E7EC] transition-all group-hover/item:scale-110">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="truncate">Ph: 0542-6702136 | +91 9415130318</span>
                </a>

                <div className="group/item p-4 rounded-2xl bg-[#F3F6FF] hover:bg-[#08089E] border-2 border-[#E4E7EC] hover:border-[#08089E] shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-3.5 text-xs sm:text-sm font-bold text-[#20242A] hover:text-white">
                  <div className="w-10 h-10 rounded-xl bg-white group-hover/item:bg-[#1111E8] text-[#1111E8] group-hover/item:text-[#FFF200] flex items-center justify-center shrink-0 shadow-sm border border-[#E4E7EC] transition-all group-hover/item:scale-110 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="leading-snug">Shanti Vimala Apartment, Rohit Nagar, Nariya, Varanasi - 221005</span>
                </div>
              </div>

            </div>
          </div>
        </AnimatedSection>

        {/* 3 Core Academic Credentials Cards */}
        <AnimatedSection variant="fade-up" className="mb-20">
          <Heading
            title="Academic Leadership & Distinctions"
            subtitle="Distinguished Legacy"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 items-stretch">
            {credentials.map((cred) => {
              const IconComponent = cred.icon;
              return (
                <div
                  key={cred.title}
                  className="group relative bg-white rounded-3xl border border-[#E4E7EC] overflow-hidden shadow-md hover:shadow-2xl hover:border-[#1111E8] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between h-full cursor-pointer"
                >
                  {/* Top Accent Strip fitting rounded corners */}
                  <div className="w-full h-2.5 bg-gradient-to-r from-[#08089E] via-[#1111E8] to-[#FFF200]" />

                  {/* Ambient Glow */}
                  <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#1111E8]/5 rounded-full blur-xl group-hover:bg-[#1111E8]/15 transition-all duration-500 pointer-events-none" />

                  <div className="p-5 sm:p-6 pt-4 flex-1 flex flex-col justify-between gap-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#08089E] group-hover:bg-[#1111E8] text-[#FFF200] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-[#FFF200]" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#F3F6FF] text-[#1111E8] text-[11px] font-black uppercase tracking-wider border border-[#E4E7EC]">
                        {cred.subtitle}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-black text-[#20242A] group-hover:text-[#1111E8] text-lg transition-colors mb-2">
                        {cred.title}
                      </h4>
                      <p className="text-[#667085] text-xs sm:text-sm leading-relaxed text-justify mb-4">
                        {cred.desc}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#E4E7EC]">
                        {cred.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-bold text-[#20242A]">
                            <CheckCircle2 className="w-4 h-4 text-[#1111E8] shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Foundational Philosophy 4 Pillars */}
        <AnimatedSection variant="fade-up" className="mb-20">
          <Heading
            title="Founder's Educational Philosophy"
            subtitle="Pillars of Vision"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 items-stretch">
            {philosophyPillars.map((p) => {
              const IconComponent = p.icon;
              return (
                <div
                  key={p.title}
                  className="group relative bg-white rounded-3xl border border-[#E4E7EC] overflow-hidden shadow-md hover:shadow-2xl hover:border-[#1111E8] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] cursor-pointer"
                >
                  {/* Top Accent Strip fitting top rounded corners */}
                  <div className="w-full h-2.5 bg-gradient-to-r from-[#08089E] via-[#1111E8] to-[#FFF200]" />
                  <div className="p-5 sm:p-6 pt-4 flex-1 flex flex-col justify-between relative z-10">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#08089E] group-hover:bg-[#1111E8] text-[#FFF200] flex items-center justify-center shadow-md mb-3 group-hover:scale-110 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-[#FFF200]" />
                      </div>
                      <h4 className="font-extrabold text-[#20242A] text-base group-hover:text-[#1111E8] transition-colors mb-2">
                        {p.title}
                      </h4>
                      <p className="text-[#667085] text-xs sm:text-sm leading-relaxed text-justify">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Tribute Quote Banner from Director Dr. Sangeeta Dubey */}
        <AnimatedSection variant="fade-up" className="mb-8">
          <div className="bg-gradient-to-br from-[#08089E] via-[#08089E] to-[#1111E8] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 md:p-14 text-white border border-[#FFF200]/40 flex flex-col items-center text-center">
            <Quote className="text-[#FFF200]/80 w-12 h-12 rotate-180 mb-4 animate-bounce" />
            <span className="text-[#FFF200] font-black text-xs uppercase tracking-widest block mb-2">
              A Living Tribute
            </span>
            <blockquote className="text-lg sm:text-2xl font-bold italic text-white max-w-4xl leading-relaxed mb-6">
              &ldquo;Our founder Late Prof. (Dr.) Anil Kumar Dubey&apos;s vision remains our eternal inspiration. Every academic achievement, every degree conferred, and every student empowered at Navyug P.G. College carries forward his noble dedication to education.&rdquo;
            </blockquote>
            <div className="flex flex-col items-center">
              <span className="font-black text-[#FFF200] text-base sm:text-lg">Dr. Sangeeta Dubey</span>
              <span className="text-xs text-[#F3F6FF]/90 font-semibold uppercase tracking-wider">
                Director • Navyug P.G. College, Madhupur, Jaunpur
              </span>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </main>
  );
}
