"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { NewsItem, newsData } from "@/data/news";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../Common/Container";
import Heading from "../Common/Heading";
import Button from "../Common/Button";
import AnimatedSection from "../Common/AnimatedSection";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function News() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [newsList, setNewsList] = useState<NewsItem[]>(newsData);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/posts");
        if (res.ok) {
          const data = await res.json();
          if (data.posts && Array.isArray(data.posts) && data.posts.length > 0) {
            const mapped = data.posts.map((p: any) => ({
              id: p._id || p.id,
              title: p.title,
              summary: p.summary,
              content: p.content,
              category: p.category,
              date: p.date,
              image: p.image || "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop",
              author: p.author || "School Desk",
            }));
            setNewsList(mapped);
          }
        }
      } catch (err) {
        console.error("Failed to fetch news posts from API:", err);
      }
    };
    fetchPosts();
  }, []);

  const getCategoryColor = (cat: string) => {
    return "bg-[#F3F6FF] text-[#1111E8] border-[#E4E7EC]";
  };

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <Container>
        {/* Title Header with Controls */}
        <AnimatedSection variant="fade-up" className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <Heading
            title="College Announcements & Updates"
            subtitle="News & Articles"
            className="mb-0 text-center sm:text-left"
            hideLine
          />

          <div className="flex items-center gap-3 shrink-0">
            {/* Custom Navigation Controls */}
            <div className="flex items-center gap-2.5">
              <button
                ref={prevRef}
                aria-label="Previous Article"
                className="w-10 h-10 rounded-2xl bg-white border-2 border-[#E4E7EC] text-[#1111E8] shadow-sm hover:bg-[#1111E8] hover:text-white hover:border-[#1111E8] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group"
              >
                <ChevronLeft className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button
                ref={nextRef}
                aria-label="Next Article"
                className="w-10 h-10 rounded-2xl bg-white border-2 border-[#E4E7EC] text-[#1111E8] shadow-md hover:bg-[#1111E8] hover:text-white hover:border-[#1111E8] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group"
              >
                <ChevronRight className="w-5 h-5 transform group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <Button
              href="/news"
              variant="outline"
              size="sm"
              className="hidden sm:inline-flex group items-center gap-2 py-1 px-3.5 text-xs font-bold rounded-full border-2 border-[#1111E8] text-[#1111E8] hover:bg-[#1111E8] hover:text-white"
            >
              <span>All Updates</span>
              <FaArrowRight className="w-3 h-3 transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Button>
          </div>
        </AnimatedSection>

        {/* Automatic Swiper Slider */}
        <AnimatedSection variant="scale" className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={28}
            slidesPerView={1}
            loop={newsList.length > 2}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
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
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 28,
              },
            }}
            className="pb-14 px-1"
          >
            {newsList.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <article className="group bg-white rounded-3xl overflow-hidden border-2 border-[#E4E7EC] hover:border-[#1111E8] shadow-lg hover:shadow-2xl hover:shadow-[#1111E8]/10 transition-all duration-500 ease-out transform hover:-translate-y-2.5 hover:scale-[1.015] active:scale-[0.985] h-full flex flex-col justify-between select-none">
                  
                  {/* Image & Date Badge */}
                  <Link href={`/news/${item.id}`} className="relative h-52 w-full overflow-hidden bg-[#F3F6FF] shrink-0 block">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08089E]/40 via-transparent to-transparent" />
                    
                    {/* Category Pill floating */}
                    <span
                      className={`absolute top-4 left-4 px-3 py-1 rounded-xl text-xs font-bold uppercase tracking-wider border ${getCategoryColor(
                        item.category
                      )} backdrop-blur-md bg-white/90 z-10`}
                    >
                      {item.category}
                    </span>
                  </Link>

                  {/* Content Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Meta info */}
                      <div className="flex items-center gap-4 text-[#667085] text-xs mb-3 font-semibold">
                        <span className="flex items-center gap-1.5">
                          <FaCalendarAlt className="text-[#1111E8]" />
                          {item.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaUser className="text-[#1111E8]" />
                          {item.author}
                        </span>
                      </div>

                      {/* Title */}
                      <Link href={`/news/${item.id}`}>
                        <h3 className="text-lg font-extrabold text-[#20242A] leading-snug mb-3 group-hover:text-[#1111E8] transition-colors duration-200 line-clamp-2">
                          {item.title}
                        </h3>
                      </Link>

                      {/* Summary */}
                      <p className="text-[#667085] text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 text-justify">
                        {item.summary}
                      </p>
                    </div>

                    {/* Read Article Button with Border */}
                    <Link
                      href={`/news/${item.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border-2 border-[#1111E8] text-[#1111E8] hover:bg-[#1111E8] hover:text-white transition-all duration-300 font-bold text-xs sm:text-sm shadow-sm group/btn"
                    >
                      <span>Read Full Update</span>
                      <FaArrowRight className="w-3 h-3 transform translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>

                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>

        {/* Mobile secondary link button */}
        <div className="text-center mt-6 sm:hidden">
          <Button href="/news" variant="outline" className="w-full">
            View All Updates
          </Button>
        </div>
      </Container>
    </section>
  );
}
