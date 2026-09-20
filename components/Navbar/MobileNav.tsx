"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { navItems, contactDetails, NavItem } from "@/data/navigation";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Sparkles, ChevronRight } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const top7NavItems = navItems.slice(0, 7);

  const backdropVariants: Variants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const drawerVariants: Variants = {
    closed: { x: "100%", transition: { type: "tween", duration: 0.3 } },
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  const linkContainerVariants: Variants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.08,
      },
    },
  };

  const linkItemVariants: Variants = {
    closed: { opacity: 0, y: 15 },
    open: { opacity: 1, y: 0 },
  };

  const isItemActive = (item: NavItem) => {
    if (item.href === "/") {
      return pathname === "/";
    }
    if (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))) {
      return true;
    }
    if (item.subItems) {
      return item.subItems.some((sub) => {
        const cleanHref = sub.href.split("?")[0].split("#")[0];
        return pathname === sub.href || (cleanHref !== "/" && pathname.startsWith(cleanHref));
      });
    }
    return false;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={backdropVariants}
            onClick={onClose}
            className="fixed inset-0 bg-[#08089E]/80 backdrop-blur-md z-45"
          />

          {/* Mobile Drawer */}
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={drawerVariants}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-[#08089E] text-white z-48 border-l border-[#FFF200]/30 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="flex flex-col gap-6 mt-12">
              {/* Header Title */}
              <div className="pb-4 border-b border-white/10">
                <span className="text-[#FFF200] font-bold text-xs uppercase tracking-widest block mb-1">
                  Navyug P.G. College
                </span>
                <span className="text-white font-black text-xl tracking-wide uppercase bg-gradient-to-r from-white via-[#F3F6FF] to-[#FFF200] bg-clip-text text-transparent">
                  Madhupur, Jaunpur, U.P.
                </span>
              </div>

              {/* Top 7 Nav Items */}
              <motion.div
                variants={linkContainerVariants}
                initial="closed"
                animate="open"
                className="flex flex-col gap-3"
              >
                {top7NavItems.map((item) => {
                  const active = isItemActive(item);

                  if (item.subItems) {
                    return (
                      <motion.div key={item.label} variants={linkItemVariants} className="flex flex-col gap-2 bg-[#1111E8]/50 rounded-2xl p-3 border border-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-[#FFF200] font-extrabold text-xs uppercase tracking-wider px-2">
                            {item.label}
                          </span>
                        </div>
                        <div className="flex flex-col gap-1.5 pl-2">
                          {item.subItems.map((sub) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={onClose}
                                className={`text-sm font-bold tracking-wide flex items-center justify-between px-3 py-2 rounded-xl transition-all duration-200 ${
                                  isSubActive
                                    ? "text-[#FFF200] bg-[#FFF200]/20 border-2 border-[#FFF200] rounded-xl font-extrabold shadow-[0_0_12px_rgba(255,242,0,0.3)]"
                                    : "text-[#F3F6FF] hover:text-[#FFF200] hover:bg-white/5"
                                }`}
                              >
                                <span>{sub.label}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-white/50" />
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div key={item.label} variants={linkItemVariants}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`text-base font-bold tracking-wide flex items-center justify-between px-4 py-3 rounded-full transition-all duration-200 ${
                          active
                            ? "text-[#FFF200] border-2 border-[#FFF200] bg-[#FFF200]/20 shadow-[0_0_18px_rgba(255,242,0,0.35)] font-extrabold"
                            : "text-[#F3F6FF] hover:text-[#FFF200] bg-[#1111E8]/40 border border-white/10 hover:border-[#FFF200]/40"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {active && (
                            <span className="w-2 h-2 rounded-full bg-[#FFF200] shadow-[0_0_8px_#FFF200] animate-pulse" />
                          )}
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 ${active ? "text-[#FFF200]" : "text-white/50"}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Bottom Contact & Admissions CTA */}
            <div className="flex flex-col gap-6 mt-8 pt-6 border-t border-white/10">
              <Link
                href="/admissions"
                onClick={onClose}
                className="flex items-center justify-center gap-2 bg-[#F20D0D] hover:bg-[#C40A0A] text-white font-black py-3 px-6 rounded-full shadow-[0_0_20px_rgba(242,13,13,0.4)] text-sm uppercase tracking-wider"
              >
                <Sparkles className="w-4 h-4 text-[#FFF200]" />
                <span>Admission Open 2026-27</span>
              </Link>

              <div className="flex flex-col gap-3 text-xs text-[#F3F6FF]/80">
                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 hover:text-[#FFF200] transition-colors"
                >
                  <FaPhoneAlt className="text-[#FFF200] w-3.5 h-3.5 shrink-0" />
                  <span>{contactDetails.phone}</span>
                </a>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-center gap-3 hover:text-[#FFF200] transition-colors"
                >
                  <FaEnvelope className="text-[#FFF200] w-3.5 h-3.5 shrink-0" />
                  <span>{contactDetails.email}</span>
                </a>
                <a
                  href={contactDetails.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#FFF200] transition-colors"
                >
                  <FaMapMarkerAlt className="text-[#FFF200] w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span className="leading-relaxed text-[#F3F6FF]/80">{contactDetails.address}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

