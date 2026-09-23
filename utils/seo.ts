import { Metadata } from "next";

export interface DefaultSEOItem {
  pageSlug: string;
  pageName: string;
  title: string;
  description: string;
  keywords: string;
}

export const DEFAULT_PAGE_SEO: Record<string, DefaultSEOItem> = {
  home: {
    pageSlug: "home",
    pageName: "Home Page",
    title: "Navyug P.G. College | Madhupur, Jaunpur, Uttar Pradesh",
    description: "Navyug P.G. College (नवयुग स्नातकोत्तर महाविद्यालय), Madhupur, Jaunpur. Affiliated to Veer Bahadur Singh Purvanchal University. Offering BA, BSc, BCA, and MA degree courses with 16 years of academic trust and excellence.",
    keywords: "Navyug P.G. College, Navyug Degree College Jaunpur, Madhupur Jaunpur College, Purvanchal University Affiliated, BA BSc BCA MA College, Best Degree College Jaunpur",
  },
  about: {
    pageSlug: "about",
    pageName: "About Us Page",
    title: "About Us | Navyug P.G. College, Madhupur, Jaunpur",
    description: "Learn about Navyug P.G. College history, leadership of Director Dr. Sangeeta Dubey, vision, mission, and 16+ years of educational excellence in Madhupur, Jaunpur, UP.",
    keywords: "About Navyug P.G. College, College History, Director Dr Sangeeta Dubey, Purvanchal University, Madhupur Jaunpur",
  },
  academics: {
    pageSlug: "academics",
    pageName: "Academics Page",
    title: "Degree Programs & Academics | Navyug P.G. College",
    description: "Explore undergraduate (BA, BSc, BCA) and postgraduate (MA) courses, semester examinations, curriculum, and modern lab facilities at Navyug P.G. College.",
    keywords: "BA Course Jaunpur, BSc Degree Madhupur, BCA Computer Applications, MA Post Graduation, Purvanchal University Syllabus",
  },
  facilities: {
    pageSlug: "facilities",
    pageName: "Campus Facilities Page",
    title: "Campus Infrastructure & Facilities | Navyug P.G. College",
    description: "Discover our hi-tech computer & AI labs, advanced physics and chemistry labs, rich college library, sports grounds, and free Wi-Fi enabled campus.",
    keywords: "College Facilities, Computer Lab BCA, Science Laboratories, College Library Jaunpur, Wi-Fi Campus, Sports Ground",
  },
  news: {
    pageSlug: "news",
    pageName: "News & Articles Page",
    title: "Notices, Circulars & Announcements | Navyug P.G. College",
    description: "Stay updated with latest Purvanchal University examination timetables, admission circulars, NSS youth camps, and student achievements.",
    keywords: "College Notices, Purvanchal University Exam Schedule, Admission Circulars, NSS Camp, Jaunpur College News",
  },
  admissions: {
    pageSlug: "admissions",
    pageName: "Admissions Page",
    title: "Admissions 2026-27 & Registration | Navyug P.G. College",
    description: "Apply online for admission to BA, BSc, BCA, and MA courses for academic session 2026-27. View admission criteria, required documents, and 100% scholarship support.",
    keywords: "Degree Admission 2026-27, Navyug PG College Registration, BCA Admission Jaunpur, BSc BA Admission, College Scholarship Scheme",
  },
  toppers: {
    pageSlug: "toppers",
    pageName: "Toppers Gallery Page",
    title: "University Toppers & Wall of Fame | Navyug P.G. College",
    description: "Celebrating our top ranking students in Veer Bahadur Singh Purvanchal University examinations across BCA, BSc, BA, and MA faculties.",
    keywords: "Purvanchal University Toppers, Merit Rankers Jaunpur, Academic Excellence, Top Students Wall of Fame",
  },
  downloads: {
    pageSlug: "downloads",
    pageName: "Downloads Page",
    title: "Downloads & Official Prospectus | Navyug P.G. College",
    description: "Download official admission application forms, fee structure breakdown, academic syllabus, and college prospectus.",
    keywords: "Download Admission Form, College Prospectus PDF, Fee Structure Download, Purvanchal University Syllabus",
  },
  contact: {
    pageSlug: "contact",
    pageName: "Contact Us Page",
    title: "Contact Us & Campus Location | Navyug P.G. College",
    description: "Contact the admissions helpline, administrative office, or visit our campus in Madhupur, Jaunpur, Uttar Pradesh.",
    keywords: "Contact Navyug PG College, Admission Helpline 7617755655, Madhupur Jaunpur Location, Campus Map",
  },
  gallery: {
    pageSlug: "gallery",
    pageName: "Photo Gallery Page",
    title: "Campus Snapshots & Photo Gallery | Navyug P.G. College",
    description: "View snapshots of campus life, classrooms, computer & science laboratories, sports tournaments, and annual events at Navyug P.G. College.",
    keywords: "Campus Photos, College Gallery Jaunpur, Snapshots of Campus Life, Science Lab Pictures, Classroom Photos",
  },
};

export async function getPageSEO(slug: string): Promise<Metadata> {
  const fallback = DEFAULT_PAGE_SEO[slug] || DEFAULT_PAGE_SEO.home;
  const keywordsArr = fallback.keywords.split(",").map((k) => k.trim());

  return {
    title: fallback.title,
    description: fallback.description,
    keywords: keywordsArr.length > 0 ? keywordsArr : undefined,
    openGraph: {
      title: fallback.title,
      description: fallback.description,
      type: "website",
      siteName: "Navyug P.G. College",
      images: [
        {
          url: "/hero_navyug.jpg",
          width: 1200,
          height: 630,
          alt: fallback.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fallback.title,
      description: fallback.description,
      images: ["/hero_navyug.jpg"],
    },
  };
}
