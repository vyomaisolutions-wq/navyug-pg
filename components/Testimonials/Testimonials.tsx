"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { testimonialsData, Testimonial as TestimonialType } from "@/data/testimonials";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../Common/Container";
import Heading from "../Common/Heading";
import AnimatedSection from "../Common/AnimatedSection";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [items] = useState<TestimonialType[]>(testimonialsData);

  return (
    <section className="py-10 sm:py-12 bg-[#F3F6FF] border-y border-[#E4E7EC] relative overflow-hidden">
      {/* Ambient Decorative Lighting */}
      <div className="absolute top-5 right-10 w-72 h-72 rounded-full bg-[#1111E8]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 left-10 w-72 h-72 rounded-full bg-[#08089E]/5 blur-3xl pointer-events-none" />

      <Container>
        {/* Title Header with integrated Navigation Controls */}
        <AnimatedSection variant="fade-up">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="text-center sm:text-left">
              <Heading
                title="What Our Community Says"
                subtitle="Testimonials"
              />
            </div>

            {/* Custom Dynamic Navigation Controls */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                ref={prevRef}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-xl bg-white border-2 border-[#E4E7EC] text-[#1111E8] shadow-sm hover:bg-[#1111E8] hover:text-white hover:border-[#1111E8] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group"
              >
                <ChevronLeft className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                ref={nextRef}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-xl bg-white border-2 border-[#E4E7EC] text-[#1111E8] shadow-md hover:bg-[#1111E8] hover:text-white hover:border-[#1111E8] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group"
              >
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Carousel Container */}
        <AnimatedSection variant="scale" className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={items.length > 1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onBeforeInit={(swiper) => {
              if (swiper.params.navigation && typeof swiper.params.navigation !== "boolean") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="py-1 px-0.5"
          >
            {items.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <div className="bg-white rounded-2xl p-5 border-2 border-[#E4E7EC] shadow-[0_8px_24px_rgba(17,17,232,0.06)] hover:shadow-[0_16px_36px_rgba(17,17,232,0.14)] hover:border-[#1111E8]/40 flex flex-col justify-between h-full group hover:-translate-y-1 transition-all duration-300 relative select-none">
                  
                  {/* Top Quote Badge & Rating */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#1111E8]/10 border border-[#1111E8]/20 flex items-center justify-center text-[#1111E8] group-hover:bg-[#1111E8] group-hover:text-white transition-all duration-300">
                      <FaQuoteLeft className="w-4 h-4" />
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-1 bg-[#FFF200]/20 px-2.5 py-1 rounded-full border border-[#FFF200]/50">
                      {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                        <FaStar key={i} className="text-[#1111E8] w-3 h-3" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-[#20242A] text-xs sm:text-sm leading-relaxed mb-4 italic font-medium line-clamp-4 text-justify">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Profile info */}
                  <div className="flex items-center gap-3 mt-auto border-t border-[#E4E7EC] pt-3">
                    <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#F3F6FF] shrink-0 border border-[#E4E7EC] shadow-sm">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="40px"
                        className="object-cover"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-bold text-[#20242A] text-xs sm:text-sm truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#667085] text-[11px] font-medium truncate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>
      </Container>
    </section>
  );
}
