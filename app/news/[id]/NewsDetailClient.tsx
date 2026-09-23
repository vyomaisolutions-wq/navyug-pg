"use client";

import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsItem, newsData } from "@/data/news";
import { FaCalendarAlt, FaUser, FaArrowLeft, FaShareAlt, FaCheck, FaNewspaper, FaChevronRight } from "react-icons/fa";
import Container from "@/components/Common/Container";
import AnimatedSection from "@/components/Common/AnimatedSection";

export default function NewsDetailClient({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const [post, setPost] = useState<NewsItem | null>(null);
  const [otherPosts, setOtherPosts] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const found = newsData.find((n) => n.id === id) || newsData[0] || null;
    setPost(found);
    setOtherPosts(newsData.filter((n) => n.id !== id).slice(0, 10));
    setLoading(false);
  }, [id]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Admissions Open":
        return "bg-[#F20D0D]/10 text-[#F20D0D] border-[#F20D0D]/30";
      case "Board Results":
        return "bg-[#FFF200]/20 text-[#08089E] border-[#FFF200]/50";
      case "Competitions":
        return "bg-[#1111E8]/10 text-[#1111E8] border-[#1111E8]/30";
      case "Achievements":
        return "bg-[#08089E]/10 text-[#08089E] border-[#08089E]/30";
      default:
        return "bg-[#F3F6FF] text-[#20242A] border-[#E4E7EC]";
    }
  };

  if (loading) {
    return (
      <main className="pt-40 sm:pt-44 lg:pt-48 pb-24 min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#1111E8] border-t-transparent rounded-full animate-spin" />
          <p className="text-[#667085] text-sm font-semibold tracking-wider uppercase">Loading Announcement Details...</p>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="pt-40 sm:pt-44 lg:pt-48 pb-24 min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8 bg-white rounded-3xl border border-[#E4E7EC] shadow-2xl">
          <FaNewspaper className="w-16 h-16 text-[#667085] mx-auto mb-4" />
          <h2 className="text-2xl font-black text-[#20242A] mb-2">Announcement Not Found</h2>
          <p className="text-[#667085] text-sm mb-6">The article you are looking for may have been updated.</p>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#08089E] text-[#FFF200] font-extrabold text-sm border border-[#FFF200]/40 hover:bg-[#1111E8] transition-all duration-300 shadow-lg"
          >
            <FaArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All Notices</span>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-36 sm:pt-40 lg:pt-44 pb-24 min-h-screen bg-brand-bg relative overflow-hidden">
      <Container>
        {/* Navigation Toolbar */}
        <AnimatedSection variant="fade-up" className="mb-8 flex justify-between items-center flex-wrap gap-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#20242A] font-bold text-xs sm:text-sm border border-[#E4E7EC] hover:bg-[#08089E] hover:text-white transition-all duration-300 shadow-sm"
          >
            <FaArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Updates</span>
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#20242A] font-bold text-xs sm:text-sm border border-[#E4E7EC] hover:bg-[#F3F6FF] hover:text-[#1111E8] transition-all duration-300 shadow-sm cursor-pointer"
          >
            {copied ? <FaCheck className="w-3.5 h-3.5 text-[#1111E8]" /> : <FaShareAlt className="w-3.5 h-3.5 text-[#1111E8]" />}
            <span>{copied ? "Link Copied!" : "Share Article"}</span>
          </button>
        </AnimatedSection>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Article Content Column */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <AnimatedSection variant="fade-up">
              <article className="bg-white rounded-3xl overflow-hidden border border-[#E4E7EC] shadow-lg p-6 sm:p-10">
                
                {/* Meta Category & Date Pill */}
                <div className="flex items-center flex-wrap gap-4 mb-6">
                  <span className={`px-3.5 py-1 rounded-xl text-xs font-extrabold uppercase tracking-wider border ${getCategoryColor(post.category)} shadow-sm`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-[#667085] text-xs font-semibold">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-[#1111E8]" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaUser className="text-[#1111E8]" />
                      {post.author}
                    </span>
                  </div>
                </div>

                {/* Main Article Header Title */}
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#20242A] leading-tight mb-6 tracking-tight">
                  {post.title}
                </h1>

                {/* Executive Summary Box */}
                {post.summary && (
                  <div className="p-5 sm:p-6 bg-[#F3F6FF] border-l-4 border-[#1111E8] rounded-r-2xl mb-8 border-y border-r border-[#E4E7EC]">
                    <p className="text-[#20242A] text-sm sm:text-base font-semibold italic leading-relaxed text-justify">
                      &ldquo;{post.summary}&rdquo;
                    </p>
                  </div>
                )}

                {/* Banner Featured Image */}
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-8 shadow-md border border-[#E4E7EC] bg-[#F3F6FF]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    priority
                    className="object-cover"
                  />
                </div>

                {/* Article Content Paragraphs */}
                <div className="prose max-w-none text-[#20242A] text-sm sm:text-base leading-relaxed flex flex-col gap-6 text-justify">
                  {post.content.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="text-[#20242A] leading-relaxed font-normal text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Footer Tagline */}
                <div className="mt-12 pt-6 border-t border-[#E4E7EC] flex flex-wrap justify-between items-center text-xs text-[#667085] font-semibold gap-2">
                  <span>Published by Navyug P.G. College</span>
                  <span>Madhupur, Jaunpur, Uttar Pradesh</span>
                </div>

              </article>
            </AnimatedSection>
          </div>

          {/* Sidebar Column: 10 Recent Updates */}
          <div className="lg:col-span-4 flex flex-col gap-6 sticky top-36">
            <AnimatedSection variant="fade-left">
              <div className="bg-white rounded-3xl p-6 border border-[#E4E7EC] shadow-md">
                <div className="flex items-center justify-between border-b border-[#E4E7EC] pb-4 mb-6">
                  <h3 className="text-lg font-black text-[#20242A] flex items-center gap-2">
                    <FaNewspaper className="text-[#1111E8] w-4.5 h-4.5" />
                    <span>Other Announcements</span>
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F3F6FF] text-[#08089E] font-extrabold text-xs border border-[#E4E7EC]">
                    {otherPosts.length} Recent
                  </span>
                </div>

                {otherPosts.length > 0 ? (
                  <div className="flex flex-col gap-4 max-h-[700px] overflow-y-auto pr-1">
                    {otherPosts.map((item) => (
                      <Link
                        key={item.id}
                        href={`/news/${item.id}`}
                        className="group flex items-center gap-3.5 p-3 rounded-2xl bg-[#F3F6FF] hover:bg-white border border-[#E4E7EC] transition-all duration-300"
                      >
                        <div className="relative h-16 w-20 rounded-xl overflow-hidden bg-white shrink-0 border border-[#E4E7EC]">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="100px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex-grow min-w-0">
                          <span className={`px-2 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider border inline-block mb-1 ${getCategoryColor(item.category)}`}>
                            {item.category}
                          </span>
                          <h4 className="text-[#20242A] font-extrabold text-xs leading-snug group-hover:text-[#1111E8] transition-colors line-clamp-2">
                            {item.title}
                          </h4>
                          <span className="text-[#667085] text-[10px] font-semibold block mt-1">
                            {item.date}
                          </span>
                        </div>

                        <FaChevronRight className="w-3 h-3 text-[#667085] group-hover:text-[#1111E8] group-hover:translate-x-1 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-[#667085] text-xs italic">No other articles found.</p>
                )}
              </div>
            </AnimatedSection>
          </div>

        </div>
      </Container>
    </main>
  );
}
