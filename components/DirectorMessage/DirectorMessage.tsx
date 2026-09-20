"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaTimes } from "react-icons/fa";
import Container from "../Common/Container";
import Button from "../Common/Button";
import AnimatedSection from "../Common/AnimatedSection";

export default function DirectorMessage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-[#1111E8]/5 blur-3xl pointer-events-none" />

      <Container>
        <AnimatedSection variant="fade-up">
          <div className="bg-gradient-to-br from-[#08089E] via-[#08089E] to-[#1111E8] rounded-3xl overflow-hidden shadow-2xl relative border border-white/20">

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#F20D0D]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

              {/* Photo Column */}
              <div className="lg:col-span-4 relative min-h-[350px] lg:min-h-auto bg-[#08089E] flex items-center justify-center p-6">
                <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFF200]/50">
                  <Image
                    src="/director.webp"
                    alt="Late Prof. Anil Kumar Dubey (Ex-Professor BHU)"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top filter brightness-95"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#08089E] via-[#08089E]/90 to-transparent p-4 text-center">
                    <span className="text-[#FFF200] font-extrabold text-md block">Dr. Sangeeta Dubey</span>
                    <span className="text-[#F3F6FF] text-sm block font-medium mt-0.5">Director</span>
                  </div>
                </div>
              </div>

              {/* Message Column */}
              <div className="lg:col-span-8 p-8 sm:p-12 lg:p-14 flex flex-col justify-between text-white relative z-10">
                <div>
                  <FaQuoteLeft className="text-[#FFF200]/30 w-12 h-12 mb-6" />

                  <span className="text-[#FFF200] font-bold text-xs uppercase tracking-widest block mb-2">
                    Director&apos;s Message &amp; Vision
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-6 text-white">
                    &ldquo;Education is the Light that Transforms Lives and Shapes Society&rdquo;
                  </h3>

                  <p className="text-[#F3F6FF]/90 leading-relaxed mb-6 italic text-sm sm:text-base text-justify">
                    &ldquo;Navyug P.G. College was established with a sacred commitment to deliver high-quality, affordable higher education to students in Madhupur, Jaunpur. Our vision is to empower young minds with conceptual clarity, moral discipline, and career skills across Arts, Science, Computer Applications, and Postgraduate studies.&rdquo;
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-6 border-t border-white/15">
                  <div>
                    <h4 className="font-extrabold text-lg tracking-wide text-[#FFF200]">
                      Dr. Sangeeta Dubey
                    </h4>
                    <p className="text-[#F3F6FF]/90 text-sm font-semibold mt-0.5">
                      Director • M.A. (Ancient History), M.A. (Hindi), B.Ed., Ph.D.
                    </p>
                  </div>

                  <Button
                    onClick={toggleModal}
                    variant="outline"
                    className="text-[#FFF200] border-[#FFF200]/50 hover:border-[#FFF200] hover:bg-[#FFF200] hover:text-[#08089E] transition-all duration-300 font-bold"
                  >
                    Read Full Address
                  </Button>
                </div>

              </div>

            </div>

          </div>
        </AnimatedSection>
      </Container>

      {/* Expanded message modal drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="fixed inset-0 bg-[#08089E]/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              {/* Modal Body */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-3xl w-full max-h-[85vh] flex flex-col border border-[#E4E7EC]"
              >
                {/* Header */}
                <div className="px-6 py-4 bg-[#08089E] text-white flex justify-between items-center border-b border-[#FFF200]/30">
                  <h3 className="font-bold text-lg text-[#FFF200]">Director&apos;s Message &amp; Vision</h3>
                  <button
                    onClick={toggleModal}
                    className="p-1 rounded-lg hover:bg-white/10 text-white transition-colors duration-200 cursor-pointer"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8 overflow-y-auto flex-grow flex flex-col gap-6 text-[#20242A] leading-relaxed text-sm sm:text-base text-justify">
                  <div className="flex items-center gap-4 border-b border-[#E4E7EC] pb-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-[#F3F6FF] shrink-0 border-2 border-[#FFF200]">
                      <Image
                        src="/director.webp"
                        alt="Director Portrait"
                        fill
                        sizes="56px"
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#20242A]">Dr. Sangeeta Dwivedi</h4>
                      <p className="text-xs text-[#1111E8] font-bold">Director • M.A. (Ancient History), M.A. (Hindi), B.Ed., Ph.D.</p>
                    </div>
                  </div>

                  <p className="font-semibold text-[#20242A]">
                    Respected Students, Parents, and Citizens of Jaunpur,
                  </p>
                  <p>
                    Navyug P.G. College, Madhupur, Jaunpur was founded on the belief that access to quality higher education is the most powerful catalyst for socio-economic transformation in rural and semi-urban India.
                  </p>
                  <p>
                    Affiliated with Veer Bahadur Singh Purvanchal University, Navyug P.G. College strives to deliver rigorous academic grounding across BA, BSc, BCA, and MA degree faculties.
                  </p>
                  <p>
                    Our experienced faculty members work tirelessly to provide individualized student support, modern computer applications training, well-equipped science laboratories, e-learning resources, and National Service Scheme (NSS) youth engagement.
                  </p>
                  <p>
                    We remain committed to providing 100% scholarship guidance and fee concessions for deserving candidates from economically weaker families, ensuring no bright student is left behind.
                  </p>
                  <p className="font-semibold text-[#20242A] border-t border-[#E4E7EC] pt-4">
                    With Warmest Wishes for Your Future Success, <br />
                    <span className="text-[#F20D0D] font-extrabold text-lg block mt-2">Navyug P.G. College Management</span>
                    <span className="text-xs text-[#667085] block uppercase tracking-widest font-normal">Madhupur, Jaunpur, Uttar Pradesh, India</span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
