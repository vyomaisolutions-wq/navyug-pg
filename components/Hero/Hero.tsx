"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Button from "../Common/Button";
import Container from "../Common/Container";
import { GraduationCap, Award, BookOpen, Sparkles } from "lucide-react";

const heroImages = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen py-28 sm:py-36 md:py-40 overflow-hidden flex items-center justify-center bg-slate-500">
      {/* Background Slider with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIdx}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.4, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentIdx]}
              alt="Navyug P.G. College Campus Hero Banner"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay gradients for enhanced contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-800/75 to-800/60 z-1" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-transparent to-slate-800/30 z-1" />
      </div>

      {/* Hero Content Overlay */}
      <Container className="relative z-10 text-center flex flex-col items-center my-auto pt-4">
        <motion.div
          variants={textContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto flex flex-col items-center px-3"
        >
          {/* Top Affiliation Badge */}
          <motion.div
            variants={textItemVariants}
            className="mb-4 sm:mb-6 px-4 py-1.5 rounded-full bg-[#08089E]/90 border border-[#FFF200]/50 backdrop-blur-md inline-flex items-center gap-2 shadow-[0_0_15px_rgba(255,242,0,0.25)]"
          >
            <Sparkles className="w-4 h-4 text-[#FFF200] animate-pulse shrink-0" />
            <span className="text-[#FFF200] font-extrabold text-[11px] sm:text-xs md:text-sm tracking-widest uppercase">
              Affiliated to Veer Bahadur Singh Purvanchal University
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={textItemVariants}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase select-none mb-3 drop-shadow-md"
          >
            NAVYUG P.G. COLLEGE
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={textItemVariants}
            className="text-[#F3F6FF] text-sm sm:text-lg md:text-xl font-medium tracking-wide max-w-3xl leading-relaxed italic mb-8"
          >
            16 Years of Trust, Excellence &amp; Transforming Lives — Shaping Today&apos;s Students to Become Tomorrow&apos;s Leaders
          </motion.p>

          {/* Featured Courses Badges */}
          <motion.div
            variants={textItemVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-8"
          >
            <div className="bg-[#08089E]/85 backdrop-blur-md border border-[#FFF200]/30 rounded-2xl p-3 flex items-center justify-center gap-2 hover:border-[#FFF200] transition-all">
              <GraduationCap className="w-5 h-5 text-[#FFF200] shrink-0" />
              <div className="text-left">
                <span className="text-xs text-[#E4E7EC]/80 block font-semibold leading-none">Undergraduate</span>
                <span className="text-white font-extrabold text-sm sm:text-base leading-tight">B.A. Course</span>
              </div>
            </div>

            <div className="bg-[#08089E]/85 backdrop-blur-md border border-[#FFF200]/30 rounded-2xl p-3 flex items-center justify-center gap-2 hover:border-[#FFF200] transition-all">
              <BookOpen className="w-5 h-5 text-[#FFF200] shrink-0" />
              <div className="text-left">
                <span className="text-xs text-[#E4E7EC]/80 block font-semibold leading-none">Undergraduate</span>
                <span className="text-white font-extrabold text-sm sm:text-base leading-tight">B.Sc. Course</span>
              </div>
            </div>

            <div className="bg-[#08089E]/85 backdrop-blur-md border border-[#FFF200]/30 rounded-2xl p-3 flex items-center justify-center gap-2 hover:border-[#FFF200] transition-all">
              <Award className="w-5 h-5 text-[#FFF200] shrink-0" />
              <div className="text-left">
                <span className="text-xs text-[#E4E7EC]/80 block font-semibold leading-none">IT &amp; Computer</span>
                <span className="text-white font-extrabold text-sm sm:text-base leading-tight">B.C.A. Degree</span>
              </div>
            </div>

            <div className="bg-[#08089E]/85 backdrop-blur-md border border-[#FFF200]/30 rounded-2xl p-3 flex items-center justify-center gap-2 hover:border-[#FFF200] transition-all">
              <GraduationCap className="w-5 h-5 text-[#FFF200] shrink-0" />
              <div className="text-left">
                <span className="text-xs text-[#E4E7EC]/80 block font-semibold leading-none">Postgraduate</span>
                <span className="text-white font-extrabold text-sm sm:text-base leading-tight">M.A. Degree</span>
              </div>
            </div>
          </motion.div>

          {/* Call To Actions */}
          <motion.div
            variants={textItemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button
              href="/admissions"
              variant="accent"
              size="lg"
              className="bg-[#F20D0D] hover:bg-[#C40A0A] text-white font-black text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-[0_0_25px_rgba(242,13,13,0.5)] border border-[#F20D0D] w-full sm:w-auto"
            >
              Admission Open 2026-27
            </Button>
            <Button
              href="/academics"
              variant="outline"
              size="lg"
              className="text-[#FFF200] border-[#FFF200] hover:bg-[#FFF200] hover:text-[#08089E] font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full w-full sm:w-auto backdrop-blur-md"
            >
              Explore Courses
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Slider Indicators */}
      <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center">
        <div className="flex items-center gap-2 bg-[#08089E]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIdx(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentIdx === idx ? "w-8 bg-[#FFF200]" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
