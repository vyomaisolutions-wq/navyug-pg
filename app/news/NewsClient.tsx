"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsItem, newsData } from "@/data/news";
import { FaCalendarAlt, FaUser, FaSearch, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Container from "@/components/Common/Container";
import AnimatedSection from "@/components/Common/AnimatedSection";

export default function NewsClient() {
  const [newsList, setNewsList] = useState<NewsItem[]>(newsData);
  const [selectedCategory, setSelectedCategory] = useState<string>("Latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/posts");
        if (res.ok) {
          const data = await res.json();
          if (data.posts && Array.isArray(data.posts) && data.posts.length > 0) {
            const mappedNews = data.posts.map((p: any) => ({
              id: p._id || p.id,
              title: p.title,
              summary: p.summary,
              content: p.content,
              category: p.category,
              date: p.date,
              image: p.image || "/poster_navyug.jpg",
              author: p.author || "Navyug Admin Desk",
            }));
            setNewsList(mappedNews);
            return;
          }
        }
        setNewsList(newsData);
      } catch (err) {
        console.warn("Using static news fallback:", err);
        setNewsList(newsData);
      }
    };
    fetchNews();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const categories = ["Latest", "Admissions Open", "Board Results", "Competitions", "Achievements"];

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

  const filteredNews = newsList.filter((item) => {
    const matchesCategory =
      selectedCategory === "Latest" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = filteredNews.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredNews.length);

  return (
    <main className="pt-36 sm:pt-40 lg:pt-44 pb-24 min-h-screen bg-brand-bg relative overflow-hidden">
      <Container>
        {/* Header */}
        <AnimatedSection variant="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#1111E8] font-extrabold text-sm tracking-widest uppercase mb-3 block">
              Official Notices & Announcements
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#20242A] mb-6 tracking-tight uppercase">
              News & Circulars
            </h1>
            <p className="text-[#667085] text-sm sm:text-base leading-relaxed">
              Stay updated with Purvanchal University examination timetables, admission circulars, NSS youth camps, and achievements at Navyug P.G. College, Madhupur, Jaunpur.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter and Search Toolbar */}
        <AnimatedSection variant="fade-up" className="mb-8 flex flex-col items-start justify-start w-full">
          <div className="relative w-full sm:w-80 mb-4">
            <input
              type="text"
              placeholder="Search announcements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-[#20242A] border-2 border-[#E4E7EC] rounded-full py-2.5 px-4 pl-10 text-xs sm:text-sm focus:outline-none focus:border-[#1111E8] font-semibold shadow-sm"
            />
            <FaSearch className="absolute left-3.5 top-3.5 text-[#667085] w-3.5 h-3.5" />
          </div>

          <div className="flex items-center flex-wrap justify-start gap-3 w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#08089E] text-[#FFF200] shadow-md border-2 border-[#FFF200]"
                    : "bg-white text-[#20242A] hover:bg-[#F3F6FF] border-2 border-[#E4E7EC]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Pagination Counter Info */}
        {filteredNews.length > 0 && (
          <div className="mb-6 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#667085]">
            <span>
              Showing <strong className="text-[#20242A]">{startIndex + 1}–{endIndex}</strong> of <strong className="text-[#20242A]">{filteredNews.length}</strong> notices
            </span>
            {totalPages > 1 && (
              <span>
                Page <strong className="text-[#1111E8]">{currentPage}</strong> of <strong className="text-[#1111E8]">{totalPages}</strong>
              </span>
            )}
          </div>
        )}

        {/* News Grid */}
        {paginatedNews.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedNews.map((item, idx) => (
                <AnimatedSection
                  key={item.id}
                  variant="fade-up"
                  delay={idx * 0.05}
                  className="h-full"
                >
                  <article className="group bg-white rounded-3xl overflow-hidden border-2 border-[#E4E7EC] hover:border-[#1111E8] shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                    <Link href={`/news/${item.id}`} className="relative h-56 w-full overflow-hidden bg-[#F3F6FF] shrink-0 block">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08089E]/40 via-transparent to-transparent" />
                      <span
                        className={`absolute top-4 left-4 px-3 py-1 rounded-xl text-xs font-bold uppercase tracking-wider border ${getCategoryColor(
                          item.category
                        )} backdrop-blur-md z-10`}
                      >
                        {item.category}
                      </span>
                    </Link>

                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
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

                        <Link href={`/news/${item.id}`}>
                          <h3 className="text-lg font-black text-[#20242A] leading-snug mb-3 group-hover:text-[#1111E8] transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                        </Link>

                        <p className="text-[#667085] text-sm leading-relaxed mb-6 line-clamp-3 text-justify">
                          {item.summary}
                        </p>
                      </div>

                      <Link
                        href={`/news/${item.id}`}
                        className="flex items-center gap-1.5 text-xs font-black text-[#1111E8] hover:text-[#F20D0D] uppercase tracking-wider cursor-pointer group/btn"
                      >
                        <span>Read Full Announcement</span>
                        <FaArrowRight className="w-3.5 h-3.5 transform translate-x-0 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>

            {totalPages > 1 && (
              <AnimatedSection variant="fade-up" className="flex items-center justify-center gap-2.5 mt-16 pt-8 border-t border-[#E4E7EC]">
                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  disabled={currentPage === 1}
                  className="px-4 py-2.5 rounded-full text-xs font-bold border-2 border-[#E4E7EC] bg-white text-[#20242A] hover:bg-[#08089E] hover:text-white disabled:opacity-40 cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <FaChevronLeft className="w-3 h-3" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-2 mx-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <button
                      key={pageNum}
                      onClick={() => {
                        setCurrentPage(pageNum);
                        window.scrollTo({ top: 300, behavior: "smooth" });
                      }}
                      className={`w-10 h-10 rounded-full text-xs font-extrabold transition-all cursor-pointer ${
                        currentPage === pageNum
                          ? "bg-[#08089E] text-[#FFF200] shadow-md border-2 border-[#FFF200]"
                          : "bg-white text-[#20242A] border-2 border-[#E4E7EC]"
                      }`}
                    >
                      {pageNum}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                    window.scrollTo({ top: 300, behavior: "smooth" });
                  }}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2.5 rounded-full text-xs font-bold border-2 border-[#E4E7EC] bg-white text-[#20242A] hover:bg-[#08089E] hover:text-white disabled:opacity-40 cursor-pointer flex items-center gap-1.5 shadow-sm"
                >
                  <span>Next</span>
                  <FaChevronRight className="w-3 h-3" />
                </button>
              </AnimatedSection>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#E4E7EC] max-w-xl mx-auto">
            <p className="text-[#667085] text-base font-bold mb-2">No announcements found.</p>
          </div>
        )}
      </Container>
    </main>
  );
}
