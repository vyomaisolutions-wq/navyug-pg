import React from "react";
import Hero from "@/components/Hero/Hero";
import QuickLinks from "@/components/QuickLinks/QuickLinks";
import AboutSection from "@/components/About/AboutSection";
import CourseShowcase from "@/components/Courses/CourseShowcase";
import Facilities from "@/components/Facilities/Facilities";
import DirectorMessage from "@/components/DirectorMessage/DirectorMessage";
import Statistics from "@/components/Statistics/Statistics";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import News from "@/components/News/News";
import CTA from "@/components/CTA/CTA";
import { getPageSEO } from "@/utils/seo";

export async function generateMetadata() {
  return await getPageSEO("home");
}

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      {/* 1. Hero banner slideshow */}
      <Hero />

      {/* 2. Degree Courses Showcase (BA, BSc, BCA, MA) */}
      <CourseShowcase />

      {/* 3. About Section collage/intro */}
      <AboutSection />

      {/* 4. Quick Portals Links */}
      <QuickLinks />

      {/* 5. Director / Leadership Message */}
      <DirectorMessage />

      {/* 6. Campus Facilities showcase */}
      <Facilities />

      {/* 7. Statistics Counter cards */}
      <Statistics />

      {/* 8. Community Testimonials slider */}
      <Testimonials />

      {/* 9. Photo Gallery masonry grid */}
      <Gallery />

      {/* 10. Latest Updates & News */}
      <News />

      {/* 11. Admission Call To Action */}
      <CTA />
    </main>
  );
}