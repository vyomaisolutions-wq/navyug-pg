export interface GalleryItem {
  id: string;
  title: string;
  category: "campus" | "classroom" | "sports" | "events" | "labs";
  src: string;
  alt: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "g1",
    title: "Navyug P.G. College Main Entrance & Gate",
    category: "campus",
    src: "/hero_navyug.jpg",
    alt: "Navyug P.G. College Madhupur Jaunpur Entrance Arch",
  },
  {
    id: "g2",
    title: "Admission Banner & Academic Building",
    category: "campus",
    src: "/poster_navyug.jpg",
    alt: "Navyug P.G. College Campus Building and Poster",
  },
  {
    id: "g3",
    title: "Modern Science Lab Practical",
    category: "labs",
    src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",
    alt: "Students performing physics & chemistry practical experiments",
  },
  {
    id: "g4",
    title: "Interactive Lecture Class",
    category: "classroom",
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
    alt: "Degree college classroom lecture session",
  },
  {
    id: "g5",
    title: "Sports Playground & Volleyball Match",
    category: "sports",
    src: "https://images.unsplash.com/photo-1592656094267-764a45068526?q=80&w=800&auto=format&fit=crop",
    alt: "Students participating in sports tournament",
  },
  {
    id: "g6",
    title: "Hi-Tech Computer & AI Laboratory",
    category: "labs",
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop",
    alt: "BCA students programming in computer lab",
  },
  {
    id: "g7",
    title: "Central College Library",
    category: "classroom",
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
    alt: "Students studying inside the Navyug P.G. College library",
  },
  {
    id: "g8",
    title: "NSS Youth Camp & Social Drive",
    category: "events",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    alt: "NSS volunteers event at Navyug P.G. College",
  },
];

export type GalleryCategory = "all" | "campus" | "classroom" | "sports" | "events" | "labs";
export const categoriesList: { value: GalleryCategory; label: string }[] = [
  { value: "all", label: "All Photos" },
  { value: "campus", label: "Campus" },
  { value: "classroom", label: "Classrooms" },
  { value: "sports", label: "Sports" },
  { value: "events", label: "Events" },
  { value: "labs", label: "Labs" },
];
