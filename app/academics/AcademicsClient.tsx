"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  BookOpen, 
  Award, 
  CheckCircle, 
  GraduationCap, 
  Calendar, 
  Clock, 
  Book, 
  School, 
  Shield, 
  Users, 
  Trophy,
  Laptop,
  Beaker,
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle2,
  Briefcase,
  FileCheck,
  ChevronRight,
  HelpCircle
} from "lucide-react";
import Container from "@/components/Common/Container";
import Heading from "@/components/Common/Heading";
import AnimatedSection from "@/components/Common/AnimatedSection";
import Button from "@/components/Common/Button";

interface CourseDetail {
  id: string;
  code: string;
  name: string;
  shortName: string;
  category: "ug" | "pg" | "it" | "co-curricular";
  level: string;
  duration: string;
  examPattern: string;
  affiliation: string;
  badge: string;
  description: string;
  eligibility: string;
  highlights: string[];
  subjects: string[];
  careerPathways: string[];
  labsAndFacilities: string[];
}

const coursesData: CourseDetail[] = [
  {
    id: "ba",
    code: "UG-BA",
    name: "B.A. (Bachelor of Arts)",
    shortName: "Bachelor of Arts",
    category: "ug",
    level: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    examPattern: "Semester Examination System",
    affiliation: "Veer Bahadur Singh Purvanchal University, Jaunpur",
    badge: "Popular Degree Choice",
    description: "The Bachelor of Arts (B.A.) program at Navyug P.G. College is a comprehensive 3-year undergraduate degree designed to develop critical thinking, analytical reasoning, and deep knowledge across humanities, social sciences, and languages. Curated as per NEP university guidelines, this degree provides a strong foundation for competitive examinations including UPPSC, Civil Services, SSC, and Teaching careers.",
    eligibility: "Passed 10+2 (Intermediate) or equivalent examination from any recognized Board (UP Board, CBSE, ICSE, etc.) in any stream.",
    highlights: [
      "Experienced & Dedicated Arts Lecturers",
      "Tailored Subject Combinations for Competitive Exams",
      "Rich Central Library with Quiet Reading Halls",
      "Regular Class Routine & Model Test Series",
      "Full Scholarship Guidance for Reserved & EWS Candidates"
    ],
    subjects: [
      "Hindi Literature",
      "English Literature",
      "Sanskrit",
      "Sociology",
      "Ancient History",
      "Political Science",
      "Economics",
      "Home Science",
      "Geography"
    ],
    careerPathways: [
      "Civil Services (IAS / PCS / UPPSC)",
      "School & College Teaching (TGT, PGT, B.Ed, D.El.Ed)",
      "Public Relations & Media",
      "Social Welfare & NGO Sector",
      "Banking & SSC Competitive Examinations",
      "Master of Arts (M.A.) Higher Studies"
    ],
    labsAndFacilities: [
      "Geography Map & Surveying Laboratory",
      "Home Science Practical Workstation",
      "Language & Communication Development",
      "Competitive Exam Study Corner in Library"
    ]
  },
  {
    id: "bsc",
    code: "UG-BSC",
    name: "B.Sc. (Bachelor of Science)",
    shortName: "Bachelor of Science",
    category: "ug",
    level: "Undergraduate Science Degree",
    duration: "3 Years (6 Semesters)",
    examPattern: "Semester System & Practical Examinations",
    affiliation: "Veer Bahadur Singh Purvanchal University, Jaunpur",
    badge: "Advanced Science Labs",
    description: "The Bachelor of Science (B.Sc.) degree program offers a rigorous, hands-on scientific education in Physical, Chemical, and Biological sciences. Students engage in theoretical learning alongside practical laboratory experimentation, preparing them for scientific research, data analysis, technology, and postgraduate scientific studies.",
    eligibility: "Passed 10+2 (Intermediate Science) with PCM (Physics, Chemistry, Maths) or ZBC (Zoology, Botany, Chemistry) from any recognized Board.",
    highlights: [
      "State-of-the-Art Physics, Chemistry, Botany & Zoology Labs",
      "Individual Practical Equipment for Hands-on Learning",
      "Highly Qualified & Ph.D. Scientific Lecturers",
      "Annual Science Exhibition & Practical Workshops",
      "Continuous Practical Assessment & Lab Work"
    ],
    subjects: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Botany",
      "Zoology"
    ],
    careerPathways: [
      "Research & Development Scientist",
      "Pharmaceutical & Chemical Industries",
      "IT & Data Analytics",
      "M.Sc., M.C.A., or B.Ed. Higher Degrees",
      "Scientific Officer in Govt Organisations",
      "Environmental & Forensic Consultancy"
    ],
    labsAndFacilities: [
      "Modern Optics & Electronics Physics Lab",
      "Fully Equipped Chemistry Organic/Inorganic Lab",
      "Advanced Botany Specimen & Microscope Lab",
      "Zoology Dissection & Anatomy Display Unit"
    ]
  },
  {
    id: "bca",
    code: "UG-BCA",
    name: "B.C.A. (Bachelor of Computer Applications)",
    shortName: "Computer Applications",
    category: "it",
    level: "Professional IT & Software Degree",
    duration: "3 Years (6 Semesters)",
    examPattern: "Semester System + Practical Coding & Project",
    affiliation: "Veer Bahadur Singh Purvanchal University, Jaunpur",
    badge: "Hi-Tech IT & AI Lab",
    description: "The B.C.A. program is a professional, job-ready computer science degree designed to equip students with core software engineering, programming skills, artificial intelligence principles, web technologies, and database architecture. Perfect for aspiring software developers, web engineers, and IT specialists in today's digital economy.",
    eligibility: "Passed 10+2 (Intermediate) in any stream with Mathematics or Computer Science / Information Technology at 10+2 level.",
    highlights: [
      "Air-Conditioned Computer Lab with High-Speed Wi-Fi",
      "Artificial Intelligence & Modern IT Concepts",
      "Hands-On Coding in C, C++, Java, Python, and JavaScript",
      "Web Development & Real-World Software Projects",
      "1:1 Computer Access During Practical Hours"
    ],
    subjects: [
      "Artificial Intelligence (AI)",
      "Programming (C, C++, Java, Python)",
      "Web Application Development",
      "Database Management Systems (SQL)",
      "Data Structures & Algorithms",
      "Software Engineering & Testing",
      "Computer Networks & OS"
    ],
    careerPathways: [
      "Full Stack Web / Software Developer",
      "System & Database Administrator",
      "AI & Data Science Assistant",
      "Cybersecurity & IT Support Engineer",
      "Master of Computer Applications (M.C.A.)",
      "Tech Startup Entrepreneur"
    ],
    labsAndFacilities: [
      "High-Performance Computer Workstations",
      "High-Speed Campus Optic-Fiber Internet",
      "Programming Sandbox & Software Tools",
      "Digital Presentation & Seminar Hall"
    ]
  },
  {
    id: "ma",
    code: "PG-MA",
    name: "M.A. (Master of Arts)",
    shortName: "Master of Arts",
    category: "pg",
    level: "Postgraduate Master's Degree",
    duration: "2 Years (4 Semesters)",
    examPattern: "Semester System & Dissertation Guidance",
    affiliation: "Veer Bahadur Singh Purvanchal University, Jaunpur",
    badge: "Higher Specialization",
    description: "The M.A. postgraduate degree program offers advanced academic specialization, critical research methodologies, and in-depth scholarship across core humanities streams. It equips postgraduate scholars for university lectureships, NET/SET qualification, administrative leadership, and Ph.D. doctoral research.",
    eligibility: "Graduation Degree (B.A. or equivalent degree) from any recognized University with minimum qualifying marks.",
    highlights: [
      "Advanced Post-Graduate Specialization",
      "NET / SET Examination Guidance",
      "Dissertation Work & Academic Seminar Presentation",
      "Senior University Professors & Subject Experts",
      "High University Rank & Merit Distinction Records"
    ],
    subjects: [
      "Hindi Literature",
      "Sociology",
      "Political Science",
      "Ancient History",
      "Home Science",
      "Sanskrit"
    ],
    careerPathways: [
      "Assistant Professor / University Lecturer (NET / SET)",
      "Higher Education & Ph.D. Research Scholar",
      "Administrative Officer & Civil Servant",
      "Policy Analyst & Social Researcher",
      "Senior Secondary PGT Teacher"
    ],
    labsAndFacilities: [
      "PG Research Reference Section in Library",
      "Seminar & Academic Symposium Room",
      "Digital Access to Academic Journals",
      "Faculty Guidance & Mentorship Desk"
    ]
  },
  {
    id: "nss",
    code: "EXT-NSS",
    name: "National Service Scheme (NSS)",
    shortName: "NSS Youth Wing",
    category: "co-curricular",
    level: "Youth Leadership & Extension Wing",
    duration: "2 Years Active Volunteering",
    examPattern: "Continuous Participation & 7-Day Special Camp",
    affiliation: "Ministry of Youth Affairs & Sports / VBSPU",
    badge: "Govt Certificate",
    description: "The National Service Scheme (NSS) at Navyug P.G. College is an energetic co-curricular youth movement. Student volunteers participate in community welfare, health awareness drives, blood donation camps, environmental conservation, and personality development programs under the motto 'Not Me, But You'.",
    eligibility: "Enrolled regular undergraduate or postgraduate student of Navyug P.G. College.",
    highlights: [
      "Official NSS Volunteer 'A' & 'B' Grade Certificates",
      "7-Day Annual Residential Community Welfare Camp",
      "Bonus Weightage Points for University Admissions & Job Exams",
      "Leadership Development & Public Speaking Training",
      "State & National Level Youth Festival Opportunities"
    ],
    subjects: [
      "Environmental Protection & Tree Plantation",
      "Community Health & Hygiene Awareness",
      "Literacy & Digital Awareness Campaigns",
      "National Integration & Cultural Heritage",
      "Disaster Relief & First Aid Management"
    ],
    careerPathways: [
      "Weightage Bonus Marks in Higher Admission & Govt Jobs",
      "Social Sector Leadership & NGO Management",
      "Community Development Officer",
      "Youth Wing Co-ordinator"
    ],
    labsAndFacilities: [
      "Dedicated NSS Student Activity Office",
      "Community Outreach Equipment & Kits",
      "First Aid & Welfare Event Facilities"
    ]
  }
];

function CoursesContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const detailSectionRef = useRef<HTMLDivElement>(null);

  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeCourseId, setActiveCourseId] = useState<string>(coursesData[0].id);
  const [activeTab, setActiveTab] = useState<"overview" | "subjects" | "eligibility" | "career">("overview");

  useEffect(() => {
    if (tabParam) {
      const match = coursesData.find(c => c.id === tabParam);
      if (match) {
        setActiveCourseId(match.id);
      }
    }
  }, [tabParam]);

  const filteredCourses = coursesData.filter(course => {
    if (selectedFilter === "all") return true;
    return course.category === selectedFilter;
  });

  const activeCourse = coursesData.find(c => c.id === activeCourseId) || coursesData[0];

  const handleSelectCourse = (id: string) => {
    setActiveCourseId(id);
    setActiveTab("overview");
    if (detailSectionRef.current) {
      detailSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getCourseIcon = (id: string) => {
    switch (id) {
      case "ba":
        return <BookOpen className="w-5 h-5 text-[#FFF200]" />;
      case "bsc":
        return <Beaker className="w-5 h-5 text-[#FFF200]" />;
      case "bca":
        return <Laptop className="w-5 h-5 text-[#FFF200]" />;
      case "ma":
        return <GraduationCap className="w-5 h-5 text-[#FFF200]" />;
      case "nss":
        return <Trophy className="w-5 h-5 text-[#FFF200]" />;
      default:
        return <School className="w-5 h-5 text-[#FFF200]" />;
    }
  };

  return (
    <Container>
      {/* Hero Heading */}
      <AnimatedSection variant="fade-up">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#08089E] border border-[#FFF200]/40 text-[#FFF200] font-extrabold text-xs tracking-widest uppercase mb-4 shadow-md">
            <Sparkles className="w-4 h-4 animate-pulse text-[#FFF200]" />
            <span>Affiliated to V.B.S. Purvanchal University</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#20242A] mb-5 tracking-tight uppercase">
            Courses &amp; Degree Programs
          </h1>
          <p className="text-[#667085] text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center">
            Discover our wide range of undergraduate, postgraduate, IT, and youth leadership programs designed for academic excellence in Madhupur, Jaunpur. Click any course to view full details!
          </p>
        </div>
      </AnimatedSection>

      {/* Category Filter Pills */}
      <AnimatedSection variant="fade-up">
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {[
            { id: "all", label: "All Courses" },
            { id: "ug", label: "Undergraduate (UG)" },
            { id: "pg", label: "Postgraduate (PG)" },
            { id: "it", label: "Professional IT & BCA" },
            { id: "co-curricular", label: "Youth & NSS Wing" },
          ].map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer border ${
                selectedFilter === filter.id
                  ? "bg-[#08089E] text-[#FFF200] border-[#FFF200] shadow-[0_0_20px_rgba(8,8,158,0.4)] scale-105"
                  : "bg-white text-[#20242A] hover:bg-[#F3F6FF] hover:text-[#08089E] border-[#E4E7EC]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </AnimatedSection>

      {/* Course Cards Grid - Uniform Height & Width with Creative Hover */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-20">
        {filteredCourses.map((course) => {
          const isSelected = activeCourseId === course.id;
          return (
            <AnimatedSection key={course.id} variant="fade-up" className="h-full flex flex-col">
              <div
                onClick={() => handleSelectCourse(course.id)}
                className={`group relative bg-white rounded-3xl border overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-between h-full min-h-[420px] hover:-translate-y-2 ${
                  isSelected
                    ? "border-2 border-[#1111E8] shadow-[0_20px_45px_rgba(17,17,232,0.2)] bg-gradient-to-b from-white via-white to-[#F3F6FF]"
                    : "border-[#E4E7EC] shadow-md hover:shadow-2xl hover:border-[#1111E8]/50"
                }`}
              >
                {/* Background ambient glow on hover */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#1111E8]/5 rounded-full blur-2xl group-hover:bg-[#1111E8]/15 transition-all duration-500 pointer-events-none" />

                {/* Top Accent Line - Flush at top edge fitting top rounded corners */}
                <div
                  className={`w-full h-2.5 transition-all duration-300 ${
                    isSelected
                      ? "bg-gradient-to-r from-[#1111E8] via-[#08089E] to-[#FFF200]"
                      : "bg-[#08089E] group-hover:bg-gradient-to-r group-hover:from-[#08089E] group-hover:to-[#F20D0D]"
                  }`}
                />

                <div className="p-5 sm:p-6 pt-3.5 flex-1 flex flex-col justify-between relative z-10">
                  {/* Zone 1: Badges & Header */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3.5 h-7">
                      <span className="px-3 py-1 rounded-full bg-[#08089E] text-[#FFF200] text-[11px] font-extrabold uppercase tracking-wider shadow-sm shrink-0">
                        {course.badge}
                      </span>
                      <span className="text-[11px] font-extrabold text-[#1111E8] bg-[#F3F6FF] px-2.5 py-1 rounded-md border border-[#E4E7EC] shrink-0">
                        {course.duration}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-3 mb-3 min-h-[54px]">
                      <div>
                        <span className="text-[11px] font-bold text-[#667085] uppercase tracking-wider block">
                          {course.code} • {course.level}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-[#20242A] group-hover:text-[#1111E8] transition-colors mt-0.5 line-clamp-1">
                          {course.name}
                        </h3>
                      </div>
                      <div className="w-11 h-11 rounded-2xl bg-[#08089E] group-hover:bg-[#1111E8] text-[#FFF200] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        {getCourseIcon(course.id)}
                      </div>
                    </div>
                  </div>

                  {/* Zone 2: Description & Subject Pills */}
                  <div className="flex-1 flex flex-col justify-center my-2">
                    <p className="text-[#667085] text-xs sm:text-sm leading-relaxed mb-3.5 line-clamp-3 h-[58px]">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 h-[50px] overflow-hidden content-start">
                      {course.subjects.slice(0, 4).map((sub) => (
                        <span
                          key={sub}
                          className="px-2.5 py-1 rounded-lg bg-[#F3F6FF] text-[#08089E] text-[11px] font-bold border border-[#E4E7EC] group-hover:border-[#1111E8]/30 transition-colors truncate max-w-[140px]"
                        >
                          {sub}
                        </span>
                      ))}
                      {course.subjects.length > 4 && (
                        <span className="px-2.5 py-1 rounded-lg bg-[#E4E7EC] text-[#20242A] text-[11px] font-bold shrink-0">
                          +{course.subjects.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Zone 3: Bottom Action CTA Button */}
                  <div className="pt-3.5 border-t border-[#E4E7EC] flex items-center justify-between mt-3 shrink-0">
                    <span className={`text-xs font-black uppercase tracking-wider flex items-center gap-1.5 ${
                      isSelected ? "text-[#1111E8]" : "text-[#20242A] group-hover:text-[#1111E8]"
                    }`}>
                      {isSelected ? "Currently Viewing Details" : "View Course Details"}
                      <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1.5 ${isSelected ? "text-[#1111E8]" : "text-[#20242A] group-hover:text-[#1111E8]"}`} />
                    </span>
                    
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1111E8] shadow-[0_0_8px_#1111E8] animate-ping" />
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Deep Dive Course Details View (Anchor Target) */}
      <div ref={detailSectionRef} className="scroll-mt-36">
        <AnimatedSection variant="fade-up">
          <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-2xl mb-20 relative overflow-hidden">
            {/* Top Accent Line - Flush at top edge fitting top rounded corners */}
            <div className="w-full h-3 bg-gradient-to-r from-[#08089E] via-[#1111E8] to-[#FFF200]" />

            <div className="p-5 sm:p-8">
              {/* Course Header Banner */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E4E7EC]">
              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-[#08089E] text-[#FFF200] font-black text-xs uppercase tracking-wider">
                    {activeCourse.code}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F3F6FF] text-[#1111E8] font-bold text-xs border border-[#E4E7EC]">
                    {activeCourse.level}
                  </span>
                  <span className="text-xs font-bold text-[#667085]">
                    {activeCourse.affiliation}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#20242A] tracking-tight">
                  {activeCourse.name}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  href="/admissions"
                  variant="accent"
                  size="md"
                  className="bg-[#F20D0D] hover:bg-[#C40A0A] text-white font-black text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-[0_0_20px_rgba(242,13,13,0.4)] border-none flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#FFF200]" />
                  <span>Apply Online Now</span>
                </Button>
                <a
                  href="tel:+917617755655"
                  className="px-5 py-3 rounded-full bg-[#08089E] hover:bg-[#1111E8] text-[#FFF200] font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-md"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#FFF200]" />
                  <span>Helpline: 7617755655</span>
                </a>
              </div>
            </div>

            {/* Detail Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 my-8 border-b border-[#E4E7EC] pb-4">
              {[
                { id: "overview", label: "Overview & Scope", icon: BookOpen },
                { id: "subjects", label: "Subjects & Syllabus", icon: Book },
                { id: "eligibility", label: "Eligibility & Details", icon: FileCheck },
                { id: "career", label: "Career & Facilities", icon: Briefcase },
              ].map((tab) => {
                const Icon = tab.icon;
                const isTabActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center gap-2 cursor-pointer border ${
                      isTabActive
                        ? "bg-[#08089E] text-[#FFF200] border-[#FFF200] shadow-md"
                        : "bg-[#F3F6FF] text-[#20242A] hover:bg-white hover:text-[#08089E] border-[#E4E7EC]"
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isTabActive ? "text-[#FFF200]" : "text-[#1111E8]"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab 1: Overview & Scope */}
            {activeTab === "overview" && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h4 className="text-lg font-black text-[#20242A] mb-3 uppercase tracking-wide flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#1111E8]" />
                    <span>Course Description & Objective</span>
                  </h4>
                  <p className="text-[#667085] leading-relaxed text-sm sm:text-base text-justify">
                    {activeCourse.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Highlights */}
                  <div className="bg-[#F3F6FF] rounded-2xl p-6 border border-[#E4E7EC]">
                    <h5 className="font-extrabold text-[#20242A] text-base mb-4 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#1111E8]" />
                      <span>Key Program Highlights</span>
                    </h5>
                    <ul className="space-y-3">
                      {activeCourse.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[#20242A]">
                          <span className="w-2 h-2 rounded-full bg-[#1111E8] mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-gradient-to-br from-[#08089E] to-[#1111E8] rounded-2xl p-6 text-white border border-[#FFF200]/30 shadow-xl flex flex-col justify-between">
                    <div>
                      <span className="text-[#FFF200] font-extrabold text-xs uppercase tracking-widest block mb-2">
                        University Academic Pattern
                      </span>
                      <h5 className="font-extrabold text-xl text-white mb-2">
                        {activeCourse.duration}
                      </h5>
                      <p className="text-white/80 text-xs leading-relaxed mb-4">
                        Conducted strictly according to Veer Bahadur Singh Purvanchal University examination regulations &amp; National Education Policy (NEP) guidelines.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs font-bold text-[#FFF200]">
                      <span>Examination Mode:</span>
                      <span className="bg-white/10 px-3 py-1 rounded-full text-white">{activeCourse.examPattern}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: Subjects & Syllabus */}
            {activeTab === "subjects" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-black text-[#20242A] uppercase tracking-wide flex items-center gap-2">
                    <Book className="w-5 h-5 text-[#1111E8]" />
                    <span>Offered Subjects &amp; Core Curriculum</span>
                  </h4>
                  <span className="text-xs font-bold text-[#667085]">
                    {activeCourse.subjects.length} Specialization Modules
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {activeCourse.subjects.map((subject, idx) => (
                    <div
                      key={subject}
                      className="p-4 rounded-2xl bg-[#F3F6FF] border border-[#E4E7EC] flex items-center gap-3 hover:border-[#1111E8] transition-all"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#08089E] text-[#FFF200] font-black text-xs flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </div>
                      <span className="font-extrabold text-sm text-[#20242A]">
                        {subject}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>
                    Note: Students can choose their preferred subject combinations at the time of admission in accordance with VBSPU University rules.
                  </span>
                </div>
              </div>
            )}

            {/* Tab 3: Eligibility & Details */}
            {activeTab === "eligibility" && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-[#F3F6FF] rounded-2xl p-6 border border-[#E4E7EC]">
                  <h4 className="text-base font-black text-[#20242A] mb-2 uppercase tracking-wide flex items-center gap-2">
                    <FileCheck className="w-5 h-5 text-[#1111E8]" />
                    <span>Eligibility Criteria</span>
                  </h4>
                  <p className="text-[#20242A] text-sm sm:text-base font-medium leading-relaxed">
                    {activeCourse.eligibility}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Required Documents */}
                  <div className="bg-white rounded-2xl p-6 border border-[#E4E7EC] shadow-sm">
                    <h5 className="font-extrabold text-[#20242A] text-sm uppercase tracking-wider mb-4 text-[#1111E8]">
                      Required Admission Documents
                    </h5>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-[#20242A] font-semibold">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1111E8]" />
                        <span>10th &amp; 12th Original Marksheets &amp; Photocopies</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1111E8]" />
                        <span>Transfer Certificate (TC) &amp; Migration Certificate</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1111E8]" />
                        <span>Passport Size Colored Photographs (6 Copies)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#1111E8]" />
                        <span>Aadhar Card Photocopy &amp; Caste/Income Certificate (If applicable)</span>
                      </li>
                    </ul>
                  </div>

                  {/* Financial & Scholarship */}
                  <div className="bg-white rounded-2xl p-6 border border-[#E4E7EC] shadow-sm">
                    <h5 className="font-extrabold text-[#20242A] text-sm uppercase tracking-wider mb-4 text-[#1111E8]">
                      Scholarship &amp; Fee Concession
                    </h5>
                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-4">
                      100% assistance is provided to eligible SC, ST, OBC, General EWS, and Minorities for UP Government Scholarship Portal registration.
                    </p>
                    <div className="p-3 rounded-xl bg-[#08089E] text-[#FFF200] font-extrabold text-xs text-center uppercase tracking-wider">
                      Government Scholarship Registered College
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Career & Facilities */}
            {activeTab === "career" && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h4 className="text-lg font-black text-[#20242A] mb-4 uppercase tracking-wide flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[#1111E8]" />
                    <span>Career Scope &amp; Opportunities</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCourse.careerPathways.map((career) => (
                      <div
                        key={career}
                        className="p-3.5 rounded-xl bg-[#F3F6FF] border border-[#E4E7EC] text-[#20242A] font-extrabold text-xs sm:text-sm flex items-center gap-3"
                      >
                        <ArrowRight className="w-4 h-4 text-[#1111E8] shrink-0" />
                        <span>{career}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-black text-[#20242A] mb-4 uppercase tracking-wide flex items-center gap-2">
                    <School className="w-5 h-5 text-[#1111E8]" />
                    <span>Special Campus Facilities for this Course</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCourse.labsAndFacilities.map((fac) => (
                      <div
                        key={fac}
                        className="p-3.5 rounded-xl bg-white border border-[#E4E7EC] text-[#20242A] font-semibold text-xs sm:text-sm flex items-center gap-3 shadow-sm"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#08089E] shrink-0" />
                        <span>{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Degree Comparison Matrix */}
      <AnimatedSection variant="fade-up">
        <Heading
          title="Degree Programs Summary Matrix"
          subtitle="At a Glance"
          center
        />
        <div className="mt-8 mb-20 overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-3xl overflow-hidden shadow-lg border border-[#E4E7EC]">
            <thead>
              <tr className="bg-[#08089E] text-white text-xs sm:text-sm uppercase tracking-wider">
                <th className="p-4 sm:p-5 font-black">Course</th>
                <th className="p-4 sm:p-5 font-black">Level</th>
                <th className="p-4 sm:p-5 font-black">Duration</th>
                <th className="p-4 sm:p-5 font-black">Eligibility</th>
                <th className="p-4 sm:p-5 font-black">Key Focus</th>
                <th className="p-4 sm:p-5 font-black text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E7EC] text-xs sm:text-sm text-[#20242A] font-semibold">
              {coursesData.map((course) => (
                <tr key={course.id} className="hover:bg-[#F3F6FF] transition-colors">
                  <td className="p-4 sm:p-5 font-black text-[#1111E8]">
                    {course.name}
                  </td>
                  <td className="p-4 sm:p-5">{course.level}</td>
                  <td className="p-4 sm:p-5 font-bold">{course.duration}</td>
                  <td className="p-4 sm:p-5 max-w-xs">{course.eligibility}</td>
                  <td className="p-4 sm:p-5">{course.badge}</td>
                  <td className="p-4 sm:p-5 text-center">
                    <button
                      onClick={() => handleSelectCourse(course.id)}
                      className="px-4 py-2 rounded-full bg-[#08089E] hover:bg-[#1111E8] text-[#FFF200] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>

      {/* College Schedule & Operational Standards Cards (Creative, Animated & Reduced Padding) */}
      <AnimatedSection variant="fade-up">
        <Heading
          title="College Academic Schedule & Guidelines"
          subtitle="Operational Excellence"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          
          {/* Card 1: Campus Timings */}
          <div className="group relative bg-white rounded-3xl border border-[#E4E7EC] overflow-hidden shadow-md hover:shadow-2xl hover:border-[#1111E8] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between cursor-pointer">
            {/* Top Accent Strip fitting rounded corners */}
            <div className="w-full h-2.5 bg-gradient-to-r from-[#08089E] via-[#1111E8] to-[#FFF200]" />
            
            {/* Background Glow */}
            <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#1111E8]/5 rounded-full blur-xl group-hover:bg-[#1111E8]/15 transition-all duration-500 pointer-events-none" />

            <div className="p-5 sm:p-6 flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#08089E] group-hover:bg-[#1111E8] text-[#FFF200] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Clock className="w-6 h-6 text-[#FFF200]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F3F6FF] text-[#1111E8] text-[11px] font-black uppercase tracking-wider border border-[#E4E7EC]">
                  Mon - Sat
                </span>
              </div>

              <div>
                <h4 className="font-black text-[#20242A] group-hover:text-[#1111E8] text-lg transition-colors mb-1.5">
                  Campus Timings
                </h4>
                <p className="text-[#667085] text-xs sm:text-sm leading-relaxed text-justify">
                  Lecture classes run Monday to Saturday. Office desks operate from 9:00 AM to 4:30 PM for student admissions, scholarship forms, and university inquiries.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E4E7EC] flex items-center justify-between text-xs font-black text-[#08089E] group-hover:text-[#1111E8]">
                <span>9:00 AM - 4:30 PM Desk</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 2: Semester & Practical Exams */}
          <div className="group relative bg-white rounded-3xl border border-[#E4E7EC] overflow-hidden shadow-md hover:shadow-2xl hover:border-[#1111E8] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between cursor-pointer">
            {/* Top Accent Strip fitting rounded corners */}
            <div className="w-full h-2.5 bg-gradient-to-r from-[#08089E] via-[#1111E8] to-[#FFF200]" />

            {/* Background Glow */}
            <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#1111E8]/5 rounded-full blur-xl group-hover:bg-[#1111E8]/15 transition-all duration-500 pointer-events-none" />

            <div className="p-5 sm:p-6 flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#08089E] group-hover:bg-[#1111E8] text-[#FFF200] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  <Calendar className="w-6 h-6 text-[#FFF200]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F3F6FF] text-[#1111E8] text-[11px] font-black uppercase tracking-wider border border-[#E4E7EC]">
                  VBSPU Pattern
                </span>
              </div>

              <div>
                <h4 className="font-black text-[#20242A] group-hover:text-[#1111E8] text-lg transition-colors mb-1.5">
                  Semester &amp; Practical Exams
                </h4>
                <p className="text-[#667085] text-xs sm:text-sm leading-relaxed text-justify">
                  Continuous internal assessments, mid-semester evaluations, and practical lab exams are conducted strictly as per V.B.S. Purvanchal University schedules.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E4E7EC] flex items-center justify-between text-xs font-black text-[#08089E] group-hover:text-[#1111E8]">
                <span>University Evaluation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card 3: Scholarship Assistance */}
          <div className="group relative bg-white rounded-3xl border border-[#E4E7EC] overflow-hidden shadow-md hover:shadow-2xl hover:border-[#1111E8] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between cursor-pointer">
            {/* Top Accent Strip fitting rounded corners */}
            <div className="w-full h-2.5 bg-gradient-to-r from-[#08089E] via-[#1111E8] to-[#FFF200]" />

            {/* Background Glow */}
            <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#1111E8]/5 rounded-full blur-xl group-hover:bg-[#1111E8]/15 transition-all duration-500 pointer-events-none" />

            <div className="p-5 sm:p-6 flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#08089E] group-hover:bg-[#1111E8] text-[#FFF200] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Award className="w-6 h-6 text-[#FFF200]" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#F3F6FF] text-[#1111E8] text-[11px] font-black uppercase tracking-wider border border-[#E4E7EC]">
                  100% UP Portal
                </span>
              </div>

              <div>
                <h4 className="font-black text-[#20242A] group-hover:text-[#1111E8] text-lg transition-colors mb-1.5">
                  Scholarship Assistance
                </h4>
                <p className="text-[#667085] text-xs sm:text-sm leading-relaxed text-justify">
                  Complete support for UP State scholarship portal online registration, fee waivers for eligible students, and university academic merit awards.
                </p>
              </div>

              <div className="pt-3 border-t border-[#E4E7EC] flex items-center justify-between text-xs font-black text-[#08089E] group-hover:text-[#1111E8]">
                <span>State Portal Support</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>

        </div>
      </AnimatedSection>
    </Container>
  );
}

export default function AcademicsClient() {
  return (
    <main className="pt-32 sm:pt-36 lg:pt-40 pb-24 min-h-screen bg-brand-bg relative overflow-hidden">
      <Suspense fallback={<div className="text-center text-slate-400 py-20">Loading courses details...</div>}>
        <CoursesContent />
      </Suspense>
    </main>
  );
}
