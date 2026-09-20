"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { navItems, contactDetails, socialLinks } from "@/data/navigation";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";
import Container from "../Common/Container";

const getSocialIcon = (iconName: string) => {
  switch (iconName) {
    case "Facebook":
      return <FaFacebookF className="w-4 h-4" />;
    case "WhatsApp":
    case "Whatsapp":
      return <FaWhatsapp className="w-4 h-4" />;
    case "Instagram":
      return <FaInstagram className="w-4 h-4" />;
    case "Youtube":
      return <FaYoutube className="w-4 h-4" />;
    default:
      return null;
  }
};

export default function Footer() {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#08089E] text-[#F3F6FF] pt-12 pb-8 border-t border-white/10 select-none font-sans relative overflow-hidden">
      {/* Subtle visual ambient glows matching site aesthetics */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#1111E8]/30 blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#FFF200]/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Top Contact Bar Header (3 Columns with Electric Blue Circular Icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 pb-10 border-b border-white/15 items-start">
          {/* Write to us */}
          <a
            href={`mailto:${contactDetails.email}`}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#1111E8] text-[#FFF200] border border-white/20 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:bg-[#FFF200] group-hover:text-[#08089E] transition-all duration-300">
              <FaEnvelope className="w-5 h-5" />
            </div>
            <div>
              <span className="text-white font-bold text-sm block">Write to us</span>
              <span className="text-[#F3F6FF]/80 text-xs sm:text-sm group-hover:text-[#FFF200] transition-colors">
                {contactDetails.email}
              </span>
            </div>
          </a>

          {/* Call Us */}
          <a
            href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#1111E8] text-[#FFF200] border border-white/20 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:bg-[#FFF200] group-hover:text-[#08089E] transition-all duration-300">
              <FaPhoneAlt className="w-5 h-5" />
            </div>
            <div>
              <span className="text-white font-bold text-sm block">Call Us (IN)</span>
              <span className="text-[#F3F6FF]/80 text-xs sm:text-sm group-hover:text-[#FFF200] transition-colors">
                {contactDetails.phone}
              </span>
            </div>
          </a>

          {/* Our Office */}
          <a
            href={contactDetails.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#1111E8] text-[#FFF200] border border-white/20 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 group-hover:bg-[#FFF200] group-hover:text-[#08089E] transition-all duration-300 mt-0.5">
              <FaMapMarkerAlt className="w-5 h-5" />
            </div>
            <div>
              <span className="text-white font-bold text-sm block">Our Office</span>
              <span className="text-[#F3F6FF]/80 text-xs sm:text-sm leading-relaxed block group-hover:text-[#FFF200] transition-colors">
                {contactDetails.address}
              </span>
            </div>
          </a>
        </div>

        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/15">

          {/* Column 1: Logo & Social Links */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1 shadow-md shrink-0">
                <Image
                  src="/logo.webp"
                  alt="Navyug P.G. College Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-black text-lg uppercase tracking-wider group-hover:text-[#FFF200] transition-colors">
                  Navyug P.G. College
                </span>
                <span className="text-[#FFF200] font-bold text-xs uppercase tracking-widest leading-none">
                  Madhupur, Jaunpur
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm leading-relaxed text-[#F3F6FF]/80 text-justify max-w-sm">
              Navyug P.G. College, Madhupur, Jaunpur, Uttar Pradesh is affiliated with Veer Bahadur Singh Purvanchal University. Providing quality higher education in BA, BSc, BCA, and MA.
            </p>

            {/* Electric Blue Circular Social Media Icons */}
            <div className="flex items-center gap-3 mt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1111E8] hover:bg-[#FFF200] text-[#FFF200] hover:text-[#08089E] border border-white/20 flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110"
                  aria-label={social.label}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-white font-bold text-base tracking-wide">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#F3F6FF]/80">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#FFF200] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses & Programs */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <h4 className="text-white font-bold text-base tracking-wide">
              Courses &amp; Degrees
            </h4>
            <ul className="flex flex-col gap-3 text-xs sm:text-sm text-[#F3F6FF]/80">
              <li>
                <Link href="/academics" className="hover:text-[#FFF200] transition-colors">
                  Faculty of Arts (B.A. Degree)
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#FFF200] transition-colors">
                  Faculty of Science (B.Sc. Degree)
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#FFF200] transition-colors">
                  Computer Application (B.C.A.)
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-[#FFF200] transition-colors">
                  Post Graduation (M.A. Degree)
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#FFF200] transition-colors">
                  Computer &amp; Science Labs
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-[#FFF200] transition-colors">
                  NSS Unit &amp; Central Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Stay Connected */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <h4 className="text-white font-bold text-base tracking-wide">
              Stay Connected
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-[#F3F6FF]/80">
              <a
                href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                className="hover:text-[#FFF200] transition-colors block"
              >
                {contactDetails.phone}
              </a>
              <a
                href={`mailto:${contactDetails.email}`}
                className="hover:text-[#FFF200] transition-colors block break-all"
              >
                {contactDetails.email}
              </a>
            </div>

            {/* Notice newsletter form */}
            <div className="mt-2 flex flex-col gap-2">
              {subscribed ? (
                <span className="text-xs text-[#FFF200] font-bold">
                  ✓ Successfully Subscribed!
                </span>
              ) : (
                <form onSubmit={handleSubscribe} className="flex h-9">
                  <input
                    type="email"
                    required
                    placeholder="Enter email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#1111E8]/40 text-white border border-white/20 rounded-l-lg px-3 text-xs w-full focus:outline-none focus:border-[#FFF200] placeholder:text-[#F3F6FF]/50"
                  />
                  <button
                    type="submit"
                    className="bg-[#1111E8] hover:bg-[#FFF200] text-[#FFF200] hover:text-[#08089E] border border-l-0 border-white/20 px-3.5 rounded-r-lg font-bold transition-all duration-300 cursor-pointer flex items-center justify-center shrink-0 group/btn"
                    aria-label="Subscribe email button"
                  >
                    <FaPaperPlane className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#F3F6FF]/80 text-center sm:text-left">
          <span>
            Copyright © 2026 Navyug P.G. College | All Rights Reserved | Designed by{" "}
            <a
              href="https://vyomaisolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFF200] hover:underline font-extrabold transition-colors"
            >
              VyomAI Solutions Pvt Ltd Pvt. Ltd.
            </a>
          </span>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-[#FFF200] transition-colors">Contact Us</Link>
          </div>
        </div>

      </Container>
    </footer>
  );
}
