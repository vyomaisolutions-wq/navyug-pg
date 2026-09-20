"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  BookOpen,
  CheckCircle,
  MapPin,
  School,
  Medal,
  Trophy,
  Quote,
  GraduationCap,
  Sparkles,
  Laptop,
  CheckCircle2,
  ShieldCheck,
  Compass,
  Target,
  ArrowRight,
  ShieldAlert,
  Users,
  FileCheck,
  PhoneCall
} from "lucide-react";
import Container from "@/components/Common/Container";
import Heading from "@/components/Common/Heading";
import AnimatedSection from "@/components/Common/AnimatedSection";

export default function AboutClient() {
  const pillarCards = [
    {
      title: "Our Mission",
      subtitle: "Academic Purpose",
      icon: Target,
      desc: "To provide quality higher education that is accessible, affordable, and aligned with modern academic and technological standards. We strive to nurture critical thinking, scientific curiosity, moral integrity, and social responsibility in our graduates.",
      highlights: [
        "NEP 2020 Aligned Semester Degree Curriculum",
        "Affordable Structured College Fee Pattern",
        "100% UP Govt Scholarship Portal Support"
      ]
    },
    {
      title: "Our Vision",
      subtitle: "Future Outlook",
      icon: Compass,
      desc: "To be recognized as a premier postgraduate educational institution in eastern Uttar Pradesh, producing confident professionals, scientists, computer experts, and responsible citizens equipped to lead positive change in society.",
      highlights: [
        "Advanced Postgraduate (M.A.) Specializations",
        "Hi-Tech Science Labs & Computer Terminals",
        "Career Guidance & Competitive Exam Orientation"
      ]
    },
    {
      title: "Core Academic Values",
      subtitle: "Institutional Legacy",
      icon: ShieldCheck,
      desc: "Rooted in the inspiring vision of founder Late Prof. Anil Kumar Dubey (Ex-Professor BHU), Navyug P.G. College upholds uncompromising academic discipline, ethical scholarship, and equal educational opportunity for all.",
      highlights: [
        "Disciplined Academic Environment",
        "Ethics, Integrity & Cultural Heritage",
        "Ex-BHU Founder Educational Philosophy"
      ]
    },
    {
      title: "Holistic Student Growth",
      subtitle: "Beyond Classroom",
      icon: Sparkles,
      desc: "Empowering rural and semi-urban youth through co-curricular development, sports tournaments, personality development workshops, and active NSS community welfare campaigns.",
      highlights: [
        "Active NSS Youth Leadership Unit",
        "Sports, Cultural & Academic Seminars",
        "Library & Digital E-Resource Access"
      ]
    }
  ];

  const antiRaggingCards = [
    {
      title: "Strict Government & Legal Compliance",
      subtitle: "Legal Mandate",
      icon: ShieldAlert,
      desc: "Navyug P.G. College enforces a strict 100% ragging-free policy in accordance with Supreme Court of India directives, Government Regulations, and V.B.S. Purvanchal University rules.",
      highlights: [
        "Zero-Tolerance Campus Environment",
        "Strict Disciplinary Action & Prosecution",
        "Safe Academic Atmosphere for Freshers"
      ]
    },
    {
      title: "Anti-Ragging Squad & Committee",
      subtitle: "Campus Monitoring",
      icon: Users,
      desc: "An active Anti-Ragging Committee comprising senior faculty, administration, and student representatives conducts continuous campus vigilance, surprise inspections, and hall monitoring.",
      highlights: [
        "Surprise Faculty Inspections",
        "Anonymous Complaint Boxes on Campus",
        "Immediate Grievance Redressal Cell"
      ]
    },
    {
      title: "Mandatory Student Affidavit",
      subtitle: "Admission Declaration",
      icon: FileCheck,
      desc: "Every newly admitted undergraduate and postgraduate student, along with their parents, must submit an official anti-ragging undertaking online at the time of university admission.",
      highlights: [
        "Online Anti-Ragging Portal Affidavit",
        "Mandatory Parent & Student Declaration",
        "100% Enrollment Compliance"
      ]
    },
    {
      title: "24/7 Helpline & Grievance Support",
      subtitle: "Instant Assistance",
      icon: PhoneCall,
      desc: "Dedicated 24/7 helpline support for immediate assistance. College Helpline: +91 76177 55655 | National Anti-Ragging Toll-Free Helpline: 1800-180-5522 (helpline@antiragging.in).",
      highlights: [
        "National Toll-Free: 1800-180-5522",
        "College Helpline: +91 7617755655",
        "100% Confidential Identity Protection"
      ]
    }
  ];

  return (
    <main className="pt-32 sm:pt-36 lg:pt-40 pb-24 min-h-screen bg-brand-bg relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-red-950/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[600px] h-[600px] rounded-full bg-blue-950/5 blur-3xl pointer-events-none" />

      <Container>
        {/* Page Header */}
        <AnimatedSection variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#1111E8] font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-3 block">
              Learn Our Legacy
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#20242A] mb-5 tracking-tight uppercase">
              About Navyug P.G. College
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#1111E8] via-[#08089E] to-[#FFF200] rounded-full mx-auto mb-6" />
          </div>
        </AnimatedSection>

        {/* 2-Column Split: General Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <AnimatedSection variant="fade-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-[#F3F6FF] group">
                <Image
                  src="/about.webp"
                  alt="Navyug P.G. College Campus Entrance Arch"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#FFF200] rounded-3xl -z-1" />
            </AnimatedSection>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <AnimatedSection variant="fade-left">
              <Heading
                title="16 Years of Educational Excellence"
                subtitle="Who We Are"
                className="mb-4"
              />
              <div className="text-[#20242A] leading-relaxed space-y-4 text-justify text-sm sm:text-base">
                <p>
                  Established with a profound vision for intellectual empowerment, <strong>Navyug P.G. College (नवयुग स्नातकोत्तर महाविद्यालय)</strong> in Madhupur, Jaunpur, Uttar Pradesh is affiliated with <strong>Veer Bahadur Singh Purvanchal University</strong>.
                </p>
                <p>
                  Rooted in the inspiring vision of founder <strong>Late Prof. Anil Kumar Dubey (Ex-Professor BHU)</strong>, Navyug P.G. College has built a reputation for academic discipline, quality teaching, and dedicated mentorship.
                </p>
                <p className="font-semibold text-[#20242A]">
                  Offered Degree Programs &amp; Faculties:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E4E7EC] shadow-sm">
                    <GraduationCap className="w-5 h-5 text-[#1111E8] shrink-0" />
                    <span className="text-xs font-bold text-[#20242A]">B.A. (Bachelor of Arts)</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E4E7EC] shadow-sm">
                    <BookOpen className="w-5 h-5 text-[#1111E8] shrink-0" />
                    <span className="text-xs font-bold text-[#20242A]">B.Sc. (Bachelor of Science)</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E4E7EC] shadow-sm">
                    <Laptop className="w-5 h-5 text-[#1111E8] shrink-0" />
                    <span className="text-xs font-bold text-[#20242A]">B.C.A. (Computer Applications)</span>
                  </li>
                  <li className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E4E7EC] shadow-sm">
                    <School className="w-5 h-5 text-[#08089E] shrink-0" />
                    <span className="text-xs font-bold text-[#20242A]">M.A. (Master of Arts)</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Vision, Mission & Core Values Grid */}
        <AnimatedSection variant="fade-up" className="mb-20">
          <Heading
            title="Our Foundational Pillars"
            subtitle="Vision & Values"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {pillarCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.title}
                  className="group relative bg-white rounded-3xl border border-[#E4E7EC] overflow-hidden shadow-md hover:shadow-2xl hover:border-[#1111E8] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between cursor-pointer"
                >
                  {/* Top Accent Strip fitting rounded corners */}
                  <div className="w-full h-2.5 bg-gradient-to-r from-[#08089E] via-[#1111E8] to-[#FFF200]" />

                  {/* Ambient Glow */}
                  <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#1111E8]/5 rounded-full blur-xl group-hover:bg-[#1111E8]/15 transition-all duration-500 pointer-events-none" />

                  <div className="p-5 sm:p-6 flex flex-col gap-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#08089E] group-hover:bg-[#1111E8] text-[#FFF200] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-[#FFF200]" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#F3F6FF] text-[#1111E8] text-[11px] font-black uppercase tracking-wider border border-[#E4E7EC]">
                        {card.subtitle}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-[#20242A] group-hover:text-[#1111E8] transition-colors mb-2">
                        {card.title}
                      </h3>
                      <p className="text-[#667085] text-xs sm:text-sm leading-relaxed text-justify mb-4">
                        {card.desc}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#E4E7EC]">
                        {card.highlights.map((h, idx) => (
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

        {/* Anti-Ragging Policy & Student Discipline Cell (Replaces Why Choose Section) */}
        <AnimatedSection variant="fade-up" className="mb-20">
          <Heading
            title="Zero-Tolerance Anti-Ragging Policy"
            subtitle="Campus Discipline & Safety"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {antiRaggingCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.title}
                  className="group relative bg-white rounded-3xl border border-[#E4E7EC] overflow-hidden shadow-md hover:shadow-2xl hover:border-[#1111E8] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  {/* Top Accent Line - Flush at top edge fitting top rounded corners */}
                  <div className="w-full h-2.5 bg-gradient-to-r from-[#08089E] via-[#1111E8] to-[#FFF200]" />

                  {/* Ambient Glow */}
                  <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#1111E8]/5 rounded-full blur-xl group-hover:bg-[#1111E8]/15 transition-all duration-500 pointer-events-none" />

                  <div className="p-5 sm:p-6 flex flex-col gap-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#08089E] group-hover:bg-[#1111E8] text-[#FFF200] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-[#FFF200]" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#F3F6FF] text-[#1111E8] text-[11px] font-black uppercase tracking-wider border border-[#E4E7EC]">
                        {card.subtitle}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-[#20242A] text-lg group-hover:text-[#1111E8] transition-colors mb-2">
                        {card.title}
                      </h4>
                      <p className="text-[#667085] text-xs sm:text-sm leading-relaxed text-justify mb-4">
                        {card.desc}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-[#E4E7EC]">
                        {card.highlights.map((h, idx) => (
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

          {/* Anti-Ragging Reassurance Callout Banner */}
          <div className="mt-8 bg-gradient-to-r from-[#08089E] to-[#1111E8] rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-[#FFF200]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF200] text-[#08089E] flex items-center justify-center shrink-0 shadow-md">
                <ShieldAlert className="w-8 h-8 text-[#08089E]" />
              </div>
              <div>
                <h4 className="font-black text-[#FFF200] text-lg uppercase tracking-wide">
                  Ragging is a Punishable Offense by Law
                </h4>
                <p className="text-[#F3F6FF] text-xs sm:text-sm leading-relaxed max-w-2xl">
                  Navyug P.G. College guarantees a completely safe, friendly, and respectful environment for every student. Any incident of ragging will result in immediate suspension, expulsion, and legal police proceedings.
                </p>
              </div>
            </div>

            <a
              href="tel:+917617755655"
              className="px-6 py-3 rounded-full bg-[#F20D0D] hover:bg-[#C40A0A] text-white font-black text-xs uppercase tracking-wider transition-all shrink-0 shadow-lg border border-[#F20D0D] flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#FFF200]" />
              <span>Report Grievance: 7617755655</span>
            </a>
          </div>
        </AnimatedSection>

        {/* Academic Achievements */}
        <AnimatedSection variant="fade-up" className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Heading
                title="Academic Excellence & Merit Records"
                subtitle="University Distinctions"
              />
              <div className="text-[#20242A] leading-relaxed space-y-4 text-justify text-sm sm:text-base">
                <p>
                  Navyug P.G. College has consistently maintained stellar academic performance in the annual and semester examinations of <strong>Veer Bahadur Singh Purvanchal University, Jaunpur</strong>.
                </p>
                <p>
                  Our students across BA, BSc, BCA, and MA degree faculties regularly secure first-class distinction marks and university merit ranks. The college provides full assistance for government scholarship schemes, ensuring financial constraints never stop a deserving student.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#08089E] text-white rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden border border-[#FFF200]/40">
              <h4 className="font-black text-[#FFF200] text-lg mb-6 flex items-center gap-2.5 uppercase tracking-wide">
                <Trophy className="text-[#FFF200] w-6 h-6" />
                <span>University Highlights</span>
              </h4>
              <ul className="flex flex-col gap-4 text-xs sm:text-sm text-[#F3F6FF] font-semibold">
                <li className="flex items-start gap-3">
                  <Medal className="text-[#FFF200] w-5 h-5 shrink-0 mt-0.5" />
                  <span>Veer Bahadur Singh Purvanchal University</span>
                </li>
                <li className="flex items-start gap-3">
                  <Medal className="text-[#FFF200] w-5 h-5 shrink-0 mt-0.5" />
                  <span>100% Scholarship Support &amp; Fee Concessions Available</span>
                </li>
                <li className="flex items-start gap-3">
                  <Medal className="text-[#FFF200] w-5 h-5 shrink-0 mt-0.5" />
                  <span>Free Wi-Fi Enabled Campus &amp; Hi-Tech Computer Lab</span>
                </li>
                <li className="flex items-start gap-3">
                  <Medal className="text-[#FFF200] w-5 h-5 shrink-0 mt-0.5" />
                  <span>Active National Service Scheme (NSS) Youth Unit</span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Leadership Profile */}
        <AnimatedSection variant="fade-up" className="mb-12">
          <Heading
            title="Leadership & Vision"
            subtitle="Director Guidance"
            center
          />
          <div className="bg-gradient-to-br from-[#08089E] via-[#08089E] to-[#1111E8] rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 md:p-14 text-white grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-10 border border-[#FFF200]/40">

            <div className="lg:col-span-4 relative flex flex-col items-center">
              <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-4 border-[#FFF200] bg-[#08089E] mb-4 shadow-2xl">
                <Image
                  src="/director.webp"
                  alt="Dr. Sangeeta Dubey (Director)"
                  fill
                  sizes="208px"
                  className="object-cover object-top"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#FFF200] tracking-wide text-center">
                Dr. Sangeeta Dubey
              </h3>
              <p className="text-[#F3F6FF] text-[11px] uppercase tracking-widest font-bold text-center mt-1">
                Director • M.A. (Ancient History), M.A. (Hindi), B.Ed., Ph.D.
              </p>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-4 leading-relaxed text-[#F3F6FF] text-sm sm:text-base text-justify">
              <div className="flex items-center gap-2">
                <Quote className="text-[#FFF200]/70 w-8 h-8 rotate-180 shrink-0" />
                <span className="text-[#FFF200] font-bold text-xs uppercase tracking-widest block">
                  Director Statement
                </span>
              </div>
              <p className="text-[#F3F6FF] italic font-medium">
                &ldquo;Navyug P.G. College stands as a beacon of learning in Madhupur, Jaunpur. Our commitment to high academic standards, ethical discipline, and holistic growth continues to shape thousands of young scholars.&rdquo;
              </p>
              <p className="font-semibold text-white mt-4 border-t border-white/10 pt-4">
                Official Contact: <br />
                <span className="text-[#FFF200] font-extrabold text-base block mt-1">Madhupur, Jaunpur, Uttar Pradesh, India</span>
                <span className="text-xs text-[#F3F6FF]/80 block font-normal">Phone: +91 7617755655 • Email: nym.jnp@gmail.com</span>
              </p>
            </div>

          </div>
        </AnimatedSection>

      </Container>
    </main>
  );
}
