"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { facilitiesData } from "@/data/facilities";
import { BookOpen, Laptop, ShieldCheck, Beaker, Trophy, Music, MonitorPlay, HeartPulse, Droplet, Sparkles, Shield, Bus, Wifi, Award, Compass } from "lucide-react";
import Container from "@/components/Common/Container";
import AnimatedSection from "@/components/Common/AnimatedSection";
import Button from "@/components/Common/Button";

const getFacilityIcon = (iconName: string) => {
  const iconProps = { className: "w-6 h-6 text-[#1111E8] group-hover:text-[#FFF200] transition-colors duration-300" };
  switch (iconName) {
    case "BookOpen":
      return <BookOpen {...iconProps} />;
    case "Beaker":
      return <Beaker {...iconProps} />;
    case "Laptop":
      return <Laptop {...iconProps} />;
    case "Trophy":
      return <Trophy {...iconProps} />;
    case "Wifi":
      return <Wifi {...iconProps} />;
    case "Award":
      return <Award {...iconProps} />;
    case "ShieldCheck":
      return <ShieldCheck {...iconProps} />;
    case "Compass":
      return <Compass {...iconProps} />;
    default:
      return <Shield {...iconProps} />;
  }
};

export default function FacilitiesClient() {
  const [facilities, setFacilities] = useState<any[]>(facilitiesData);

  useEffect(() => {
    async function loadFacilities() {
      try {
        const res = await fetch("/api/facilities");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.facilities) && data.facilities.length > 0) {
            setFacilities(data.facilities);
          }
        }
      } catch (err) {
        console.warn("Using static facilities data fallback:", err);
      }
    }
    loadFacilities();
  }, []);

  return (
    <main className="pt-36 sm:pt-40 lg:pt-44 pb-24 min-h-screen bg-brand-bg relative overflow-hidden">
      <Container>
        {/* Page Header */}
        <AnimatedSection variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1111E8] font-extrabold text-sm tracking-widest uppercase mb-3 block">
              Campus Facilities & Infrastructure
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#20242A] mb-6 tracking-tight uppercase">
              Navyug P.G. College Campus
            </h1>
            {/* <p className="text-[#667085] text-sm sm:text-base leading-relaxed text-center">
              Madhupur, Jaunpur, Uttar Pradesh • Affiliated to Veer Bahadur Singh Purvanchal University.
            </p> */}
          </div>
        </AnimatedSection>

        {/* Detailed Alternating Sections */}
        <div className="flex flex-col gap-20 mb-20">
          {facilities.map((facility: any, idx: number) => {
            const isEven = idx % 2 === 0;

            return (
              <AnimatedSection
                key={facility._id || facility.id || idx}
                variant={isEven ? "fade-right" : "fade-left"}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E4E7EC] bg-[#F3F6FF] group ${!isEven ? "lg:order-2" : ""
                      }`}
                  >
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08089E]/40 via-transparent to-transparent" />
                  </div>

                  {/* Info Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col gap-4 ${!isEven ? "lg:order-1" : ""
                      }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 bg-[#F3F6FF] rounded-xl flex items-center justify-center text-[#1111E8] group-hover:bg-[#08089E] transition-all duration-300 border border-[#E4E7EC]">
                        {getFacilityIcon(facility.iconName)}
                      </div>
                      <h2 className="text-2xl font-black text-[#20242A] tracking-tight">
                        {facility.title}
                      </h2>
                    </div>

                    <p className="text-[#667085] leading-relaxed text-sm sm:text-base text-justify">
                      {facility.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-[#20242A] mt-2">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1111E8]" />
                        <span>University Approved Standard</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1111E8]" />
                        <span>Hi-Tech Equipment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1111E8]" />
                        <span>Qualified Supervisors</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#1111E8]" />
                        <span>Clean & Disciplined Environment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Safety & Quality Standards block */}
        <AnimatedSection variant="fade-up">
          <div className="bg-gradient-to-br from-[#08089E] to-[#1111E8] rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 text-white text-center relative border border-[#FFF200]/30">
            <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
              <Shield className="text-[#FFF200] w-14 h-14 mb-6 animate-pulse" />
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-[#FFF200] mb-4">
                Our Campus & Student Welfare Promise
              </h3>
              <p className="text-[#F3F6FF] text-sm sm:text-base leading-relaxed mb-8 text-center">
                Navyug P.G. College guarantees a safe, Wi-Fi enabled, green, and disciplined environment for all students pursuing undergraduate & postgraduate degrees in Madhupur, Jaunpur.
              </p>
              <Button href="/admissions" variant="secondary" className="bg-[#F20D0D] hover:bg-[#F20D0D]/90 text-white font-black px-8 py-3 rounded-full border-none">
                Apply for Admission 2026-27
              </Button>
            </div>
          </div>
        </AnimatedSection>

      </Container>
    </main>
  );
}
