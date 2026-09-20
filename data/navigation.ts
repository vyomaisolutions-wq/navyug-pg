import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

export interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    subItems: [
      { label: "About Us", href: "/about" },
      { label: "Founder", href: "/founder" },
      { label: "Facilities", href: "/facilities" },
      { label: "Downloads", href: "/downloads" }
    ]
  },
  {
    label: "Courses",
    href: "/academics",
  },
  {
    label: "Admissions",
    href: "/admissions",
    subItems: [
      { label: "Admission Process", href: "/admissions#process" },
      { label: "Online Registration", href: "/admissions#register" },
      { label: "Admission Form", href: "/downloads?doc=admission-form" },
      { label: "Fee Structure 26-27", href: "/downloads?doc=fee-structure" }
    ]
  },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const contactDetails = {
  phone: "+91 7617755655",
  helplines: [
    "+91 76177 55655",
    "+91 92649 21559",
    "+91 78003 02326"
  ],
  email: "nym.jnp@gmail.com",
  address: "Madhupur, Jaunpur, Uttar Pradesh, India",
  collegeCode: "",
  affiliation: "Veer Bahadur Singh Purvanchal University",
  website: "WWW.NYMJNP.ORG",
  director: "Dr. Sangeeta Dubey",
  directorQualifications: "M.A. (Ancient History), M.A. (Hindi), B.Ed., Ph.D. (Director)",
  directorPhone: "+91 76177 55655",
  googleMapsLink: "https://www.google.com/maps/place/Navyug+P.G+College,+Madhupur,+Mogra+Badshahpur,+Jaunpur/@25.7240583,82.2716138,17z/data=!3m1!4b1!4m6!3m5!1s0x4b6f2aed9bdb243d:0x36d8c08159fb0493!8m2!3d25.7240583!4d82.2716138!16s%2Fg%2F11zgs9rdvv!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D",
  timings: "Mon - Sat: 9:00 AM - 4:30 PM",
};

export const socialLinks = [
  { icon: "Facebook", href: "https://www.facebook.com/share/19SQr6ncBZ/?mibextid=wwXIfr", label: "Facebook" },
  { icon: "WhatsApp", href: "https://wa.me/message/PETA23FQRFMMI1", label: "WhatsApp" },
  { icon: "Instagram", href: "https://www.instagram.com/navyug_mahavidyalaya?stkn=MXJwZ2M2cjI1cXFxMg==", label: "Instagram" },
  { icon: "Youtube", href: "https://www.youtube.com/@NavyugMahavidyalaya", label: "YouTube" },
];
