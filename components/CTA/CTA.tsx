"use client";

import React from "react";
import Container from "../Common/Container";
import Button from "../Common/Button";
import AnimatedSection from "../Common/AnimatedSection";
import { Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <Container>
        <AnimatedSection variant="scale">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#08089E] via-[#08089E] to-[#1111E8] overflow-hidden shadow-2xl py-10 px-6 sm:py-12 sm:px-10 md:py-14 md:px-12 text-center text-white border border-[#FFF200]/40">
            
            {/* Background elements */}
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#F20D0D]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#FFF200]/10 blur-3xl pointer-events-none" />
            
            <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
              {/* Floating accent badge */}
              <span className="px-4 py-1.5 rounded-full bg-[#FFF200]/15 backdrop-blur-md border border-[#FFF200]/40 text-[#FFF200] font-extrabold text-xs uppercase tracking-widest mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FFF200]" />
                <span>Admission Open • Academic Session 2026-27</span>
              </span>

              {/* Title */}
              <h2 className="text-2xl sm:text-4xl md:text-4xl font-black tracking-tight leading-tight uppercase mb-4 text-white">
                Begin Your Academic Journey at <br />
                <span className="text-[#FFF200]">
                  Navyug P.G. College
                </span>
              </h2>

              {/* Description */}
              <p className="text-[#F3F6FF] text-sm sm:text-base leading-relaxed mb-8 max-w-2xl text-center font-medium">
                Enroll now for BA, BSc, BCA, and MA degree courses at Navyug P.G. College, Madhupur, Jaunpur. Affiliated to Veer Bahadur Singh Purvanchal University.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full sm:w-auto">
                <Button
                  href="/admissions"
                  variant="accent"
                  size="md"
                  className="bg-[#F20D0D] hover:bg-[#C40A0A] text-white font-extrabold border-none w-full sm:w-auto shadow-xl shadow-[#F20D0D]/30 rounded-full py-3 px-8 text-sm uppercase tracking-wider"
                >
                  Apply Online 2026-27
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="md"
                  className="text-[#FFF200] border-[#FFF200]/60 hover:border-[#FFF200] hover:bg-[#FFF200] hover:text-[#08089E] w-full sm:w-auto rounded-full py-3 px-8 text-sm font-bold uppercase tracking-wider"
                >
                  Contact Helpdesk
                </Button>
              </div>
            </div>

          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
