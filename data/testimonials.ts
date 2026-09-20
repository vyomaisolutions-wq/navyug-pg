export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Ramesh Kumar Sharma",
    role: "Parent (BCA Graduate)",
    text: "Navyug P.G. College provides outstanding higher education. The computer labs, AI curriculum, and qualified faculty in Madhupur have given my son a clear career path with full scholarship support.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Priyanjali Singh",
    role: "Alumna (MA Sociology Batch 2024)",
    text: "Studying at Navyug P.G. College, Madhupur, Jaunpur was an enriching experience. The guidance of senior professors helped me secure distinction marks in Purvanchal University examinations.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Dr. Alok Verma",
    role: "Academician & Educationist",
    text: "Navyug P.G. College stands out for its commitment to 16 years of academic excellence, affordable fee structure, and student-focused environment in Jaunpur district.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Amit Dwivedi",
    role: "Parent (BSc Physics Student)",
    text: "The science laboratories and peaceful, disciplined environment at Navyug P.G. College are exceptional. The management ensures individual student progress and regular classes.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Vikramaditya Dubey",
    role: "Alumnus (BCA Graduate)",
    text: "The conceptual clarity, computer labs, and digital technology courses at Navyug P.G. College laid the groundwork for my career in software development. Proud to be an alumnus!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
];
