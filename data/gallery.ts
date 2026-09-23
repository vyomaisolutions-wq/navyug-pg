export interface GalleryItem {
  id: string;
  title: string;
  category: "campus" | "classroom" | "sports" | "events" | "labs";
  src: string;
  alt: string;
}

export const galleryData: GalleryItem[] = [
  // Campus Life & Architecture
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
    title: "College Campus Quadrangle & Academic Block",
    category: "campus",
    src: "/hero1.jpg",
    alt: "Navyug P.G. College Main Academic Block and Quadrangle",
  },
  {
    id: "g4",
    title: "Lush Green Campus Grounds & Pathways",
    category: "campus",
    src: "/hero2.jpg",
    alt: "Serene Green Campus Grounds at Navyug P.G. College",
  },
  {
    id: "g5",
    title: "Main Administrative & Faculty Wing",
    category: "campus",
    src: "/hero3.jpg",
    alt: "Administrative and Faculty Wing at Navyug P.G. College",
  },

  // Classrooms & Study Halls
  {
    id: "g6",
    title: "Interactive Degree Lecture Session",
    category: "classroom",
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800&auto=format&fit=crop",
    alt: "Degree college classroom lecture session",
  },
  {
    id: "g7",
    title: "Central College Library & Reading Lounge",
    category: "classroom",
    src: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
    alt: "Students studying inside the Navyug P.G. College library",
  },
  {
    id: "g8",
    title: "Smart Multimedia Seminar Hall",
    category: "classroom",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    alt: "Smart digital seminar hall with presentation projector",
  },
  {
    id: "g9",
    title: "Faculty & Student Academic Guidance Hub",
    category: "classroom",
    src: "/about.webp",
    alt: "Faculty members counseling students in academic office",
  },

  // Laboratories (Science & BCA IT)
  {
    id: "g10",
    title: "Modern Physics & Chemistry Practical Lab",
    category: "labs",
    src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",
    alt: "Students performing physics & chemistry practical experiments",
  },
  {
    id: "g11",
    title: "Hi-Tech BCA Computer & AI Laboratory",
    category: "labs",
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop",
    alt: "BCA students programming in modern computer laboratory",
  },
  {
    id: "g12",
    title: "Zoology & Botany Research Lab",
    category: "labs",
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    alt: "Biological science research specimens and microscopy laboratory",
  },
  {
    id: "g13",
    title: "Electronics & Digital Computing Setup",
    category: "labs",
    src: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop",
    alt: "Hardware and digital electronics instrumentation practicals",
  },

  // Sports & Athletics
  {
    id: "g14",
    title: "Inter-College Volleyball Championship",
    category: "sports",
    src: "https://images.unsplash.com/photo-1592656094267-764a45068526?q=80&w=800&auto=format&fit=crop",
    alt: "Students participating in volleyball tournament",
  },
  {
    id: "g15",
    title: "Cricket Ground & Practice Nets",
    category: "sports",
    src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop",
    alt: "College cricket team practice session on outdoor ground",
  },
  {
    id: "g16",
    title: "Annual Track & Athletics Tournament",
    category: "sports",
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    alt: "Athletics sprint and sports meet on college grounds",
  },
  {
    id: "g17",
    title: "Indoor Badminton & Fitness Activities",
    category: "sports",
    src: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=800&auto=format&fit=crop",
    alt: "Badminton games and recreation facility for students",
  },

  // Events & Celebrations
  {
    id: "g18",
    title: "NSS Youth Camp & Social Welfare Drive",
    category: "events",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    alt: "NSS volunteers social awareness drive at Navyug P.G. College",
  },
  {
    id: "g19",
    title: "Annual Convocation & Degree Distribution",
    category: "events",
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
    alt: "Graduation ceremony and merit toppers felicitation",
  },
  {
    id: "g20",
    title: "Annual Cultural Day & Stage Performances",
    category: "events",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    alt: "Cultural festival drama and music performances by degree students",
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
