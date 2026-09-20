"use client";

import React from "react";
import Container from "../Common/Container";
import Heading from "../Common/Heading";
import AnimatedSection from "../Common/AnimatedSection";
import { BookOpen, Laptop, Beaker, GraduationCap, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CourseShowcase() {
  const courses = [
    {
      code: "B.A.",
      title: "Bachelor of Arts",
      icon: BookOpen,
      subjects: ["Hindi", "English", "Sanskrit", "Sociology", "Ancient History", "Political Science", "Economics", "Home Science", "Geography"],
      duration: "3 Years (6 Semesters)",
    },
    {
      code: "B.Sc.",
      title: "Bachelor of Science",
      icon: Beaker,
      subjects: ["Physics", "Chemistry", "Mathematics", "Botany", "Zoology"],
      duration: "3 Years (6 Semesters)",
    },
    {
      code: "B.C.A.",
      title: "Bachelor of Computer Applications",
      icon: Laptop,
      subjects: ["Artificial Intelligence", "Computer Applications", "Programming Skills", "Software & IT Concepts", "Digital Technology", "Career Oriented"],
      duration: "3 Years (6 Semesters)",
      highlight: "High Demand IT Degree",
    },
    {
      code: "M.A.",
      title: "Master of Arts",
      icon: GraduationCap,
      subjects: ["Hindi", "Sociology", "Political Science", "Ancient History", "Home Science", "Sanskrit"],
      duration: "2 Years (4 Semesters)",
    },
  ];

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#1111E8]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#FFF200]/10 blur-3xl pointer-events-none" />

      <Container>
        <AnimatedSection variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-4 py-1.5 rounded-full bg-[#08089E] border border-[#FFF200]/40 text-[#FFF200] font-extrabold text-xs uppercase tracking-widest inline-flex items-center gap-1.5 mb-4 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FFF200] animate-pulse" />
              <span>Degree Faculties &amp; Curricula</span>
            </span>
            <Heading
              title="OUR COURSES FOR A BETTER TOMORROW"
              subtitle="Academic Excellence & Skill Development"
              className="mb-4"
            />
            <p className="text-[#667085] text-sm sm:text-base leading-relaxed">
              Affiliated to Veer Bahadur Singh Purvanchal University. We offer comprehensive undergraduate &amp; postgraduate degree programs.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <AnimatedSection key={course.code} variant="fade-up" delay={idx * 0.1} className="h-full flex flex-col">
                <div className="group relative bg-white rounded-3xl border-2 border-[#E4E7EC] hover:border-[#1111E8] shadow-lg hover:shadow-[0_20px_50px_rgba(17,17,232,0.18)] hover:-translate-y-2 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full cursor-pointer">
                  
                  {/* Top Accent Line - Flush at top edge fitting top rounded corners */}
                  <div className="w-full h-2.5 bg-gradient-to-r from-[#08089E] via-[#1111E8] to-[#FFF200] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" />
                  </div>

                  {/* Ambient Glow */}
                  <div className="absolute -right-12 -bottom-12 w-36 h-36 bg-[#1111E8]/5 rounded-full blur-2xl group-hover:bg-[#1111E8]/15 group-hover:scale-125 transition-all duration-700 pointer-events-none" />

                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between relative z-10">
                    <div>
                      {/* Course Header */}
                      <div className="flex items-start justify-between gap-4 mb-6 pb-5 border-b border-[#E4E7EC]">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-[#08089E] group-hover:bg-[#1111E8] text-[#FFF200] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 border border-[#FFF200]/30">
                            <Icon className="w-7 h-7 text-[#FFF200]" />
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-2xl sm:text-3xl font-black text-[#20242A] group-hover:text-[#1111E8] transition-colors">{course.code}</h3>
                              {course.highlight && (
                                <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-[#F20D0D] text-white uppercase tracking-wider shadow-sm animate-pulse">
                                  {course.highlight}
                                </span>
                              )}
                            </div>
                            <p className="text-xs sm:text-sm font-extrabold text-[#667085] mt-0.5">{course.title}</p>
                          </div>
                        </div>
                        <span className="text-xs font-black px-3.5 py-1.5 bg-[#F3F6FF] text-[#1111E8] rounded-full border border-[#E4E7EC] shrink-0 shadow-sm">
                          {course.duration}
                        </span>
                      </div>

                      {/* Subjects offered */}
                      <div className="mb-6">
                        <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-[#08089E] mb-3">
                          Subjects / Modules Offered:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {course.subjects.map((sub) => (
                            <span
                              key={sub}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F3F6FF] text-[#20242A] text-xs font-bold border border-[#E4E7EC] hover:bg-[#08089E] hover:text-white hover:border-[#08089E] group/sub transition-all duration-200 cursor-pointer shadow-sm"
                            >
                              <CheckCircle className="w-3.5 h-3.5 text-[#1111E8] group-hover/sub:text-[#FFF200] transition-colors shrink-0" />
                              <span>{sub}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Apply footer */}
                    <div className="pt-4 border-t border-[#E4E7EC] flex items-center justify-between mt-4">
                      <span className="text-xs font-extrabold text-[#667085] uppercase tracking-wider">Admissions Open 2026-27</span>
                      <Link
                        href="/admissions"
                        className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1111E8] hover:bg-[#08089E] text-white font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4 text-[#FFF200] group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
