import { Briefcase, Landmark, CalendarRange, Clock, BookOpen, Newspaper } from "lucide-react";

export interface QuickLinkItem {
  id: string;
  title: string;
  description: string;
  href: string;
  iconName: string;
  colorClass: string;
}

export const quickLinksData: QuickLinkItem[] = [
  {
    id: "careers",
    title: "Careers",
    description: "Join our dedicated teaching faculty and supportive administrative staff to shape young minds.",
    href: "/contact?subject=Careers",
    iconName: "Briefcase",
    colorClass: "from-[#1111E8]/10 to-[#08089E]/10 hover:border-[#1111E8]/30 text-[#1111E8]",
  },
  {
    id: "virtual-tour",
    title: "Virtual Tour",
    description: "Take an immersive digital journey through our classroom rows, laboratories, and green sports ground.",
    href: "/gallery",
    iconName: "Landmark",
    colorClass: "from-[#FFF200]/20 to-[#1111E8]/10 hover:border-[#FFF200]/50 text-[#08089E]",
  },
  {
    id: "recent-events",
    title: "Recent Events",
    description: "Look back at our annual board rewards, Republic Day highlights, and sports gala programs.",
    href: "/news?category=Achievement",
    iconName: "CalendarRange",
    colorClass: "from-[#1111E8]/10 to-[#F3F6FF] hover:border-[#1111E8]/30 text-[#1111E8]",
  },
  {
    id: "upcoming-events",
    title: "Upcoming Events",
    description: "Stay informed about school re-openings, parent-teacher reviews, and holiday timetables.",
    href: "/news?category=Announcement",
    iconName: "Clock",
    colorClass: "from-[#F20D0D]/10 to-[#F20D0D]/20 hover:border-[#F20D0D]/30 text-[#F20D0D]",
  },
  {
    id: "blog",
    title: "Our Blog",
    description: "Read educational ideas, parenting guidance, study techniques, and pupil writeups.",
    href: "/news",
    iconName: "BookOpen",
    colorClass: "from-[#08089E]/10 to-[#1111E8]/10 hover:border-[#08089E]/30 text-[#08089E]",
  },
  {
    id: "news",
    title: "School News",
    description: "Read formal circulars, exam dates sheets, schedule notices, and official announcements.",
    href: "/news",
    iconName: "Newspaper",
    colorClass: "from-[#1111E8]/10 to-[#FFF200]/20 hover:border-[#1111E8]/30 text-[#1111E8]",
  },
];
