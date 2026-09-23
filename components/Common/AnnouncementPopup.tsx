"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface PopupSettings {
  popupEnabled: boolean;
  popupImage: string;
  popupButtonLink: string;
}

export default function AnnouncementPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup ONLY on the home page ("/") once per browser session
    if (pathname !== "/") {
      return;
    }

    try {
      const dismissed = typeof window !== "undefined" && sessionStorage.getItem("navyug_popup_dismissed");
      if (!dismissed) {
        // Show smoothly after a slight 800ms entrance
        const timer = setTimeout(() => setIsOpen(true), 800);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      setIsOpen(true);
    }
  }, [pathname]);

  const handleClose = () => {
    setIsOpen(false);
    try {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("navyug_popup_dismissed", "true");
      }
    } catch (e) {}
  };

  if (pathname !== "/") {
    return null;
  }

  const posterSrc = "/poster_navyug.jpg";
  const targetLink = "/admissions";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-hidden select-none">
          {/* Subtle Dark Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#08089E]/70 backdrop-blur-sm cursor-pointer"
          />

          {/* Pure Image Poster Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-auto max-w-[92vw] sm:max-w-xl md:max-w-2xl max-h-[85vh] rounded-2xl sm:rounded-3xl overflow-visible shadow-[0_0_50px_rgba(8,8,158,0.7),0_0_25px_rgba(255,242,0,0.3)] border-2 border-[#FFF200]/60 z-10 my-auto bg-[#08089E] flex items-center justify-center"
          >
            {/* Corner Close Button X */}
            <button
              onClick={handleClose}
              className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#08089E] border-2 border-[#FFF200] text-white hover:bg-[#F20D0D] hover:border-[#F20D0D] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xl hover:scale-110"
              aria-label="Close Popup"
            >
              <FaTimes className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Poster Image */}
            <Link href={targetLink} onClick={handleClose} className="block w-full max-h-[85vh] rounded-2xl sm:rounded-3xl overflow-hidden">
              <Image
                src={posterSrc}
                alt="Announcement Poster"
                width={800}
                height={1000}
                className="w-full max-h-[85vh] object-contain mx-auto block hover:scale-[1.01] transition-transform duration-500 rounded-2xl sm:rounded-3xl h-auto"
                unoptimized
              />
            </Link>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
