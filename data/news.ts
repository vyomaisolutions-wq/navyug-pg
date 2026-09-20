export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: "Admissions Open" | "Board Results" | "Competitions" | "Achievements";
  date: string;
  image: string;
  author: string;
}

export const newsData: NewsItem[] = [
  {
    id: "news-1",
    title: "Admissions Open for Academic Session 2026–27",
    summary: "Admission forms are available for BA, BSc, BCA, and MA degree courses at Navyug P.G. College, Madhupur, Jaunpur.",
    content: "Navyug P.G. College, Madhupur, Jaunpur (Affiliated to Veer Bahadur Singh Purvanchal University) is pleased to announce that admissions are open for the academic session 2026-27. We offer BA (Bachelor of Arts), BSc (Bachelor of Science), BCA (Bachelor of Computer Applications), and MA (Master of Arts) courses. Special scholarship facilities, free Wi-Fi campus, and state-of-the-art computer & science laboratories are available for all students.",
    category: "Admissions Open",
    date: "May 20, 2026",
    image: "/poster_navyug.jpg",
    author: "Admissions Desk",
  },
  {
    id: "news-2",
    title: "Outstanding University Examination Results",
    summary: "Navyug P.G. College achieves stellar pass percentage in Purvanchal University BA, BSc, BCA, and MA annual examinations.",
    content: "Navyug P.G. College has once again demonstrated top academic results in the Veer Bahadur Singh Purvanchal University annual and semester examinations. Multiple candidates in BCA, BSc, and MA achieved first-class distinction marks. The management and faculty congratulate all successful graduates.",
    category: "Board Results",
    date: "June 25, 2026",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
    author: "Academic Council",
  },
  {
    id: "news-3",
    title: "University Gold Medal & Top Merit Rankers Honored",
    summary: "Navyug P.G. College students secure top ranks in Jaunpur district Purvanchal University merit lists.",
    content: "In a momentous achievement for Navyug P.G. College, Madhupur, Jaunpur, our postgraduate and undergraduate students secured top ranks in the Purvanchal University merit list. A grand felicitation ceremony was conducted on campus, rewarding toppers with academic scholarships.",
    category: "Achievements",
    date: "June 26, 2026",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
    author: "Director's Desk",
  },
  {
    id: "news-4",
    title: "National Service Scheme (NSS) Special Camp Organized",
    summary: "NSS unit of Navyug P.G. College conducts community welfare, health awareness, and tree plantation drive in Madhupur.",
    content: "The National Service Scheme (NSS) unit of Navyug P.G. College organized a 7-day social service and youth empowerment camp in Madhupur, Jaunpur. Student volunteers participated in environmental conservation, literacy drives, and digital awareness workshops.",
    category: "Competitions",
    date: "May 14, 2026",
    image: "https://images.unsplash.com/photo-1592656094267-764a45068526?q=80&w=600&auto=format&fit=crop",
    author: "NSS Officer",
  },
  {
    id: "news-5",
    title: "AI & Computer Literacy Workshop in BCA Department",
    summary: "Hands-on seminar on Artificial Intelligence, Software Engineering, and Digital Technologies hosted for BCA students.",
    content: "The Department of Computer Applications (BCA) at Navyug P.G. College conducted an intensive technical workshop on AI, web development, and database systems. External experts provided guidance on industry skill acquisition and IT career avenues.",
    category: "Competitions",
    date: "April 22, 2026",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=600&auto=format&fit=crop",
    author: "Computer Dept",
  },
  {
    id: "news-6",
    title: "100% Scholarship Support & Fee Concession Scheme",
    summary: "Navyug P.G. College offers economic aid and merit-based tuition waivers for deserving candidates.",
    content: "To support students from economically weaker backgrounds, Navyug P.G. College provides fee concessions, special government scholarship guidance, and merit awards for toppers taking admission in BA, BSc, BCA, and MA courses.",
    category: "Admissions Open",
    date: "May 01, 2026",
    image: "/hero_navyug.jpg",
    author: "Admissions Office",
  }
];
