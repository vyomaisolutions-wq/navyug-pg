export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export const facilitiesData: Facility[] = [
  {
    id: "library",
    title: "Rich & Well-Equipped Library",
    description: "Extensive collection of undergraduate & postgraduate textbooks, academic journals, reference guides, competitive exam books, and quiet reading halls.",
    iconName: "BookOpen",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "science-lab",
    title: "Advanced Science Laboratories",
    description: "State-of-the-art practical laboratories for Physics, Chemistry, Zoology, and Botany equipped with modern apparatus and safety standards.",
    iconName: "Beaker",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "computer-lab",
    title: "Hi-Tech Computer & AI Lab",
    description: "Modern computer laboratory featuring latest software environments, programming tools for BCA & IT concepts, and high-speed internet.",
    iconName: "Laptop",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "wifi-campus",
    title: "Free Wi-Fi Enabled Campus",
    description: "High-speed campus-wide wireless internet access enabling students and faculty to conduct research and access digital learning resources.",
    iconName: "Wifi",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "sports-nss",
    title: "Sports Grounds & NSS Unit",
    description: "Outdoor sports grounds for volleyball, cricket, athletics, along with an active National Service Scheme (NSS) unit for community leadership.",
    iconName: "Trophy",
    image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "scholarship-help",
    title: "Scholarship & Guidance Cell",
    description: "Dedicated cell assisting students with government scholarship applications, fee concessions for economically weaker sections, and merit rewards.",
    iconName: "Award",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "disciplined-env",
    title: "Peaceful & Disciplined Campus",
    description: "Safe, green, and disciplined academic environment in Madhupur, Jaunpur, fostering focused learning and personal growth.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "career-guidance",
    title: "Career & Competitive Exam Support",
    description: "Special guidance for competitive examinations, higher education entrance tests, and personality development workshops.",
    iconName: "Compass",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
  },
];
