"use client";

import React, { useEffect, useState } from "react";
import { contactDetails, socialLinks } from "@/data/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import Container from "../Common/Container";
import Link from "next/link";

const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "Facebook":
      return <FaFacebookF className="w-3 h-3" />;
    case "WhatsApp":
    case "Whatsapp":
      return <FaWhatsapp className="w-3.5 h-3.5" />;
    case "Twitter":
      return <FaTwitter className="w-3 h-3" />;
    case "Instagram":
      return <FaInstagram className="w-3 h-3" />;
    case "Youtube":
      return <FaYoutube className="w-3 h-3" />;
    default:
      return null;
  }
};

export default function TopBar() {
  const [bannerTitle] = useState("Affiliated to Veer Bahadur Singh Purvanchal University");

  return (
    <div className="bg-[#08089E] text-[#F3F6FF] border-b border-[#FFF200]/30 py-2 text-xs hidden sm:block relative z-40 select-none">
      <Container className="flex justify-between items-center">
        {/* Contact info */}
        <div className="flex items-center gap-4">
          <Link
            href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-2 hover:text-[#FFF200] transition-colors duration-200 group"
          >
            <FaPhoneAlt className="w-3 h-3 text-[#FFF200] group-hover:scale-110 transition-transform" />
            <span className="font-semibold tracking-wide">{contactDetails.phone}</span>
          </Link>
          <div className="h-3 w-[1px] bg-white/20" />
          <Link
            href={`mailto:${contactDetails.email}`}
            className="flex items-center gap-2 hover:text-[#FFF200] transition-colors duration-200 group"
          >
            <FaEnvelope className="w-3.5 h-3.5 text-[#FFF200] group-hover:scale-110 transition-transform" />
            <span className="font-medium tracking-wide">{contactDetails.email}</span>
          </Link>
          <div className="h-3 w-[1px] bg-white/20 hidden lg:block" />
          <div className="hidden lg:flex items-center gap-2 text-white/80">
            <FaClock className="w-3.5 h-3.5 text-[#FFF200]/90" />
            <span>{contactDetails.timings}</span>
          </div>
        </div>

        {/* Center Ticker / Badge */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-0.5 rounded-full bg-[#FFF200]/15 border border-[#FFF200]/40 text-[#FFF200] text-[11px] font-bold tracking-wide shadow-[0_0_12px_rgba(255,242,0,0.2)]">
          <HiSparkles className="w-3.5 h-3.5 text-[#FFF200] animate-pulse" />
          <span>{bannerTitle}</span>
        </div>

        {/* Location badge */}
        <div className="flex items-center gap-2 text-[#F3F6FF] font-medium">
          <span className="inline-block w-2 h-2 rounded-full bg-[#F20D0D] animate-ping" />
          <span className="text-[#FFF200] font-bold">Madhupur, Jaunpur, U.P.</span>
        </div>
      </Container>
    </div>
  );
}
