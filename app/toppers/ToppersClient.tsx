"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { toppersData } from "@/data/toppers";
import { Trophy, Medal, GraduationCap, Star, Award, Shield, CheckCircle } from "lucide-react";
import Container from "@/components/Common/Container";
import AnimatedSection from "@/components/Common/AnimatedSection";

export default function ToppersClient() {
  const years = React.useMemo(() => toppersData.map((d) => d.year), []);
  const [selectedYear, setSelectedYear] = useState<string>("2026");

  const { currentStudents, currentSubjects } = React.useMemo(() => {
    const fallbackGroup = toppersData.find((d) => d.year === selectedYear) || toppersData[0];
    return {
      currentStudents: fallbackGroup?.students || [],
      currentSubjects: fallbackGroup?.subjects || [],
    };
  }, [selectedYear]);

  return (
    <main className="pt-36 sm:pt-40 lg:pt-44 pb-24 min-h-screen bg-brand-bg relative overflow-hidden">
      <Container>
        {/* Page Header */}
        <AnimatedSection variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1111E8] font-extrabold text-sm tracking-widest uppercase mb-3 block">
              Wall of Fame & Merit Records
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#20242A] mb-6 tracking-tight uppercase">
              University Toppers Gallery
            </h1>
            <p className="text-[#667085] text-sm sm:text-base leading-relaxed text-center">
              Celebrating our students&apos; stellar distinction performance in Veer Bahadur Singh Purvanchal University examinations across BA, BSc, BCA, and MA degree faculties.
            </p>
          </div>
        </AnimatedSection>

        {/* Year Filter Tabs */}
        {years.length > 0 && (
          <AnimatedSection variant="fade-up" className="mb-14">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`px-7 py-3 rounded-full text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 cursor-pointer shrink-0 shadow-sm ${
                    selectedYear === year
                      ? "bg-[#08089E] text-[#FFF200] shadow-xl border-2 border-[#FFF200]"
                      : "bg-white text-[#20242A] hover:bg-[#F3F6FF] border-2 border-[#E4E7EC]"
                  }`}
                >
                  Academic Session {year}
                </button>
              ))}
            </div>
          </AnimatedSection>
        )}

        {/* Toppers Cards Grid */}
        <div className="mb-20">
          <AnimatedSection variant="fade-up">
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-2xl bg-[#1111E8]/10 border border-[#1111E8]/20 flex items-center justify-center text-[#1111E8] shrink-0 shadow-sm">
                <Trophy className="w-5 h-5 text-[#1111E8]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#20242A] tracking-tight text-center">
                Purvanchal University Merit Toppers - {selectedYear}
              </h2>
            </div>
          </AnimatedSection>

          {currentStudents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <AnimatePresence mode="wait">
                {currentStudents.map((student, idx) => (
                  <motion.div
                    key={student.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="group bg-white rounded-3xl overflow-hidden border border-[#E4E7EC] shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative"
                  >
                    {/* Rank Badge */}
                    <div className="absolute top-4 left-4 z-10 bg-[#08089E] text-[#FFF200] font-black text-xs px-3.5 py-1.5 rounded-xl shadow-md border border-[#FFF200]/40 flex items-center gap-1.5 uppercase tracking-wider">
                      <Star className="w-3.5 h-3.5 fill-[#FFF200] text-[#FFF200]" />
                      <span>Rank {student.rank}</span>
                    </div>

                    {/* Photo Container */}
                    <div className="relative h-64 w-full bg-[#F3F6FF] overflow-hidden shrink-0">
                      <Image
                        src={student.photo}
                        alt={student.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 object-center"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08089E]/75 via-transparent to-transparent" />
                    </div>

                    {/* Details */}
                    <div className="p-6 text-center flex-grow flex flex-col justify-between gap-4">
                      <div>
                        <h4 className="font-black text-[#20242A] text-lg leading-tight group-hover:text-[#1111E8] transition-colors">
                          {student.name}
                        </h4>
                        <span className="text-xs text-[#1111E8] font-extrabold block mt-1 uppercase tracking-wider">
                          {student.board}
                        </span>
                      </div>

                      <div className="border border-[#E4E7EC] pt-4 flex justify-between items-center bg-[#F3F6FF] rounded-2xl p-4 mt-2">
                        <div className="text-left">
                          <span className="text-[10px] text-[#667085] font-bold uppercase block tracking-wider">
                            Marks Rate
                          </span>
                          <span className="text-xl font-black text-[#08089E] block leading-none">
                            {student.percentage}%
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-[#667085] font-bold uppercase block tracking-wider">
                            Scope
                          </span>
                          <span className="text-xs font-extrabold text-[#08089E] block bg-white border border-[#E4E7EC] px-2.5 py-1 rounded-lg">
                            {student.rankType}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-14 bg-white rounded-3xl border border-[#E4E7EC]">
              <p className="text-[#667085] text-sm font-semibold">No rank toppers listed for {selectedYear} yet.</p>
            </div>
          )}
        </div>

        {/* Subject Toppers */}
        {currentSubjects.length > 0 && (
          <div className="mb-20">
            <AnimatedSection variant="fade-up">
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className="w-10 h-10 rounded-2xl bg-[#1111E8]/10 border border-[#1111E8]/20 flex items-center justify-center text-[#1111E8] shrink-0 shadow-sm">
                  <Award className="w-5 h-5 text-[#1111E8]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#20242A] tracking-tight text-center">
                  Subject Distinction Toppers - {selectedYear}
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="wait">
                {currentSubjects.map((sub, idx) => (
                  <motion.div
                    key={`${sub.subject}-${sub.studentName}-${idx}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="bg-white rounded-2xl p-5 border border-[#E4E7EC] shadow-sm flex justify-between items-center gap-4 group"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-12 h-12 bg-[#F3F6FF] rounded-2xl flex items-center justify-center text-[#1111E8] group-hover:bg-[#08089E] group-hover:text-[#FFF200] transition-colors duration-300 shrink-0 border border-[#E4E7EC]">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-black text-[#20242A] text-base sm:text-lg leading-tight truncate">
                          {sub.subject}
                        </h4>
                        <span className="text-xs text-[#667085] block mt-1 font-medium truncate">
                          Topper: <span className="font-bold text-[#20242A]">{sub.studentName}</span> ({sub.board})
                        </span>
                      </div>
                    </div>

                    <div className="bg-[#F3F6FF] text-[#08089E] rounded-xl px-3.5 py-2.5 text-center min-w-[70px] shrink-0 border border-[#E4E7EC]">
                      <span className="text-[10px] text-[#667085] font-bold block uppercase tracking-wider leading-none mb-1">Score</span>
                      <span className="text-xl font-black leading-none">{sub.marks}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Callout Box */}
        <AnimatedSection variant="fade-up" className="mt-20">
          <div className="bg-gradient-to-br from-[#08089E] to-[#1111E8] rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 text-white text-center relative border border-[#FFF200]/30">
            <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
              <Shield className="text-[#FFF200] w-14 h-14 mb-6 animate-pulse" />
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-[#FFF200] mb-4">
                Navyug P.G. College Legacy
              </h3>
              <p className="text-[#F3F6FF] text-sm sm:text-base leading-relaxed mb-8 text-center">
                Dedicated professors, modern science and BCA laboratories, and 100% scholarship support continue to inspire academic excellence at Madhupur, Jaunpur.
              </p>
              <div className="flex gap-6 items-center text-xs font-bold text-[#FFF200] uppercase tracking-widest border-t border-white/10 pt-6 w-full justify-center flex-wrap">
                <span className="flex items-center gap-2">
                  <CheckCircle className="text-[#FFF200] w-4 h-4" />
                  <span>Purvanchal University Exam Toppers</span>
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle className="text-[#FFF200] w-4 h-4" />
                  <span>Madhupur, Jaunpur</span>
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </main>
  );
}
