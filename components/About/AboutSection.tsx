"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, GraduationCap, School, Award, CheckCircle2 } from "lucide-react";
import Container from "../Common/Container";
import Heading from "../Common/Heading";
import Button from "../Common/Button";
import AnimatedSection from "../Common/AnimatedSection";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#1111E8]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#F20D0D]/5 blur-3xl" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Image Collage & Badges */}
          <div className="lg:col-span-6 relative">
            <AnimatedSection variant="fade-right">
              {/* Outer frame borders with wrapper for shadow */}
              <div className="relative rounded-3xl shadow-2xl">
                <div className="relative rounded-3xl overflow-hidden border-4 border-white aspect-[4/3] bg-[#F3F6FF] group">
                  <Image
                    src="/hero1.jpg"
                    alt="Navyug P.G. College Main Campus Entrance"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Visual Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08089E]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Crimson border backdrop */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#1111E8]/20 rounded-3xl -z-1 hidden sm:block" />

              {/* Floating established badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute -top-6 -left-6 bg-gradient-to-br from-[#1111E8] to-[#08089E] text-white rounded-3xl p-5 shadow-xl flex flex-col items-center justify-center border border-white/20 select-none z-10"
              >
                <Award className="w-6 h-6 mb-1 text-[#FFF200]" />
                <span className="text-2xl font-black leading-none">16+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFF200]">Years Legacy</span>
              </motion.div>

              {/* Overlay card */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#E4E7EC] flex items-center gap-4 max-w-sm hidden md:flex">
                <div className="w-12 h-12 bg-[#F3F6FF] rounded-xl flex items-center justify-center text-[#1111E8] shrink-0">
                  <Sparkles className="w-6 h-6 text-[#1111E8]" />
                </div>
                <div>
                  <span className="text-[#667085] text-xs block">Affiliated to</span>
                  <span className="font-extrabold text-[#20242A] text-sm block">Veer Bahadur Singh Purvanchal University</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Text Information */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <AnimatedSection variant="fade-left">
              <Heading
                title="Navyug P.G. College"
                subtitle="About Our Institution"
                className="mb-6"
              />

              <div className="text-[#20242A] space-y-2 leading-relaxed mb-4 text-justify">
                <p>
                  Established with a vision for educational transformation, <strong>Navyug P.G. College (नवयुग स्नातकोत्तर महाविद्यालय)</strong> in Madhupur, Jaunpur, Uttar Pradesh is affiliated with <strong>Veer Bahadur Singh Purvanchal University</strong>.
                </p>
                <p>
                  Guided by the leadership of director <strong>Dr. Sangeeta Dubey</strong>, our institute provides value-based, quality higher education in Arts, Science, Computer Applications, and Postgraduate humanities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  {/* Card 1: Undergraduate Degrees */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F3F6FF] border border-[#E4E7EC] hover:border-[#1111E8] shadow-md hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#1111E8] rounded-xl flex items-center justify-center text-[#FFF200] shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#20242A] text-sm sm:text-base">BA, BSc &amp; BCA</h4>
                      <p className="text-xs text-[#667085] mt-0.5">Undergraduate Degree Programs</p>
                    </div>
                  </div>

                  {/* Card 2: Postgraduate Degree */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F3F6FF] border border-[#E4E7EC] hover:border-[#08089E] shadow-md hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 bg-[#08089E] rounded-xl flex items-center justify-center text-[#FFF200] shrink-0">
                      <School className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#20242A] text-sm sm:text-base">M.A. Degree</h4>
                      <p className="text-xs text-[#667085] mt-0.5">Postgraduate Humanities</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-[#20242A]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1111E8] shrink-0" />
                      <span>100% Scholarship Assistance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1111E8] shrink-0" />
                      <span>Free Wi-Fi Enabled Campus</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1111E8] shrink-0" />
                      <span>Hi-Tech Computer &amp; AI Lab</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1111E8] shrink-0" />
                      <span>Disciplined Learning Environment</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Button
                  href="/about"
                  variant="primary"
                  className="bg-[#1111E8] hover:bg-[#08089E] text-white font-bold px-6 py-3 rounded-full group inline-flex items-center gap-2"
                >
                  <span>Discover College History</span>
                  <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">
                    &rarr;
                  </span>
                </Button>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </Container>
    </section>
  );
}
