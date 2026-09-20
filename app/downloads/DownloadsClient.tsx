"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FileText, Download, Check, AlertCircle, FileSpreadsheet, Calendar, BookOpen, Layers, ClipboardList } from "lucide-react";
import Container from "@/components/Common/Container";
import AnimatedSection from "@/components/Common/AnimatedSection";

interface DownloadItem {
  id: string;
  name: string;
  category: string;
  fileSize: string;
  fileType: string;
  description: string;
  iconName: string;
}

function DownloadsContent() {
  const searchParams = useSearchParams();
  const docParam = searchParams.get("doc");

  const downloads: DownloadItem[] = [
    {
      id: "admission-form",
      name: "Admission Form 2026-27",
      category: "Admissions",
      fileSize: "1.2 MB",
      fileType: "PDF",
      description: "Official registration sheet for admissions to BA, BSc, BCA, and MA degree streams.",
      iconName: "ClipboardList",
    },
    {
      id: "fee-structure",
      name: "Fee Structure & Scholarship Guide",
      category: "Admissions",
      fileSize: "850 KB",
      fileType: "PDF",
      description: "Detailed description of tuition, examination, lab fees, and 100% scholarship guidelines.",
      iconName: "FileSpreadsheet",
    },
    {
      id: "prospectus",
      name: "College Prospectus",
      category: "General",
      fileSize: "4.5 MB",
      fileType: "PDF",
      description: "Comprehensive guide outlining Navyug P.G. College history, founder tribute, codes, and facilities.",
      iconName: "Layers",
    },
    {
      id: "academic-calendar",
      name: "Purvanchal University Exam Calendar",
      category: "Academic",
      fileSize: "620 KB",
      fileType: "PDF",
      description: "List of semester terms, university examination dates, holidays, and NSS camps.",
      iconName: "Calendar",
    },
    {
      id: "syllabus",
      name: "Degree Syllabus (BA, BSc, BCA, MA)",
      category: "Academic",
      fileSize: "2.1 MB",
      fileType: "PDF",
      description: "Faculty-wise Purvanchal University curriculum and course module outlines.",
      iconName: "BookOpen",
    },
    {
      id: "books-list",
      name: "Prescribed Reference Books List",
      category: "Academic",
      fileSize: "410 KB",
      fileType: "PDF",
      description: "List of recommended textbooks, lab manuals, and e-learning resources.",
      iconName: "FileText",
    },
  ];

  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [completedId, setCompletedId] = useState<string | null>(null);

  const getDocIcon = (iconName: string) => {
    const props = { className: "w-7 h-7 text-[#1111E8] shrink-0" };
    switch (iconName) {
      case "ClipboardList":
        return <ClipboardList {...props} />;
      case "FileSpreadsheet":
        return <FileSpreadsheet {...props} />;
      case "Layers":
        return <Layers {...props} />;
      case "Calendar":
        return <Calendar {...props} />;
      case "BookOpen":
        return <BookOpen {...props} />;
      default:
        return <FileText {...props} />;
    }
  };

  const handleDownload = (item: DownloadItem) => {
    if (downloadingId) return;
    setDownloadingId(item.id);

    setTimeout(() => {
      const element = document.createElement("a");
      const file = new Blob([
        `Navyug P.G. College, Madhupur, Jaunpur\n---------------------------\nDocument: ${item.name}\nCategory: ${item.category}\nFile Size: ${item.fileSize}\n\nNote: Download packet generated successfully.`,
      ], { type: "text/plain" });

      element.href = URL.createObjectURL(file);
      element.download = `${item.id}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      setDownloadingId(null);
      setCompletedId(item.id);

      setTimeout(() => {
        setCompletedId(null);
      }, 3000);
    }, 1200);
  };

  return (
    <Container>
      {/* Page Header */}
      <AnimatedSection variant="fade-up">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1111E8] font-extrabold text-sm tracking-widest uppercase mb-3 block">
            Student Resource Portal
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#20242A] mb-6 tracking-tight uppercase">
            Downloads & Prospectus Packets
          </h1>
          {/* <p className="text-[#667085] text-sm sm:text-base leading-relaxed text-center">
            Navyug P.G. College, Madhupur, Jaunpur • Affiliated to Veer Bahadur Singh Purvanchal University.
          </p> */}
        </div>
      </AnimatedSection>

      {/* Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {downloads.map((item, idx) => {
          const isDownloading = downloadingId === item.id;
          const isCompleted = completedId === item.id;
          const isHighlighted = docParam === item.id;

          return (
            <AnimatedSection
              key={item.id}
              variant="fade-up"
              delay={idx * 0.05}
              className="h-full"
            >
              <div
                className={`bg-white rounded-3xl p-6 sm:p-7 border-2 hover:shadow-2xl hover:border-[#FFF200] transition-all duration-300 flex flex-col justify-between h-full group overflow-hidden relative ${isHighlighted
                    ? "border-[#FFF200] ring-4 ring-[#FFF200]/20 shadow-xl bg-[#F3F6FF]"
                    : "border-[#E4E7EC] shadow-md"
                  }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-[#F3F6FF] border border-[#E4E7EC] rounded-2xl flex items-center justify-center shrink-0">
                      {getDocIcon(item.iconName)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="px-3 py-1 rounded-xl bg-[#F3F6FF] text-[#667085] text-[10px] font-extrabold uppercase tracking-wider border border-[#E4E7EC]">
                        {item.fileType}
                      </span>
                      <span className="px-3 py-1 rounded-xl bg-[#F3F6FF] text-[#667085] text-[10px] font-extrabold uppercase tracking-wider border border-[#E4E7EC]">
                        {item.fileSize}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-black text-[#20242A] text-lg mb-1 group-hover:text-[#1111E8] transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[#1111E8] font-extrabold text-[11px] uppercase tracking-wider block mb-3">
                    {item.category}
                  </span>
                  <p className="text-[#667085] text-xs sm:text-sm leading-relaxed mb-6 text-justify">
                    {item.description}
                  </p>
                </div>

                <button
                  onClick={() => handleDownload(item)}
                  disabled={isDownloading || isCompleted}
                  className={`w-full py-3.5 px-4 rounded-2xl font-extrabold text-xs sm:text-sm tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer uppercase border ${isCompleted
                      ? "bg-[#1111E8] text-white border-[#1111E8] shadow-md"
                      : isDownloading
                        ? "bg-[#F3F6FF] text-[#667085] border-[#E4E7EC] cursor-wait"
                        : "bg-[#F20D0D] text-white hover:bg-[#F20D0D]/90 border-[#F20D0D] shadow-sm"
                    }`}
                >
                  {isCompleted ? (
                    <>
                      <Check className="w-4 h-4 text-[#FFF200]" />
                      <span>Downloaded Packet!</span>
                    </>
                  ) : isDownloading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#667085]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 text-[#FFF200]" />
                      <span>Download Resource</span>
                    </>
                  )}
                </button>

              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Office Help Notice */}
      <AnimatedSection variant="fade-up" className="mt-20">
        <div className="bg-[#F3F6FF] rounded-3xl p-6 sm:p-8 border border-[#E4E7EC] flex flex-col sm:flex-row items-center sm:items-start gap-4 max-w-3xl mx-auto shadow-md">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#1111E8] shrink-0 border border-[#E4E7EC]">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-extrabold text-[#20242A] mb-1.5 text-center sm:text-left">Physical Prospectus & Application Packets</h4>
            <p className="text-[#667085] text-sm leading-relaxed text-center sm:text-left text-justify">
              Parents and students can also collect physical prospectus copies directly from the college admission office in Madhupur, Jaunpur during working hours (Monday – Saturday: 9:00 AM – 4:30 PM).
            </p>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
}

export default function DownloadsClient() {
  return (
    <main className="pt-36 sm:pt-40 lg:pt-44 pb-24 min-h-screen bg-brand-bg relative overflow-hidden">
      <Suspense fallback={<div className="text-center text-slate-400 py-20">Loading downloads portal...</div>}>
        <DownloadsContent />
      </Suspense>
    </main>
  );
}
