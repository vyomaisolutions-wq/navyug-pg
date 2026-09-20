import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollProgress from "@/components/Common/ScrollProgress";
import ScrollToTop from "@/components/Common/ScrollToTop";
import AnnouncementPopup from "@/components/Common/AnnouncementPopup";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://www.nymjnp.org"),
  title: {
    default: "Navyug P.G. College | Madhupur, Jaunpur, Uttar Pradesh",
    template: "%s | Navyug P.G. College",
  },
  description: "Navyug P.G. College, Madhupur, Jaunpur, Uttar Pradesh. Affiliated to Veer Bahadur Singh Purvanchal University. Offering BA, BSc, BCA, and MA degree courses with 16 years of academic excellence.",
  keywords: [
    "Navyug P.G. College",
    "Navyug Mahavidyalaya Madhupur",
    "Navyug Degree College Jaunpur",
    "Degree College in Jaunpur",
    "Purvanchal University Affiliated College",
    "BCA College Jaunpur",
    "BA BSc MA College Madhupur Jaunpur",
    "Navyug PG College Admission 2026-27",
  ],
  authors: [{ name: "Navyug P.G. College" }],
  creator: "Navyug Admin Desk",
  publisher: "Navyug P.G. College",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Navyug P.G. College | Madhupur, Jaunpur",
    description: "Affiliated to Veer Bahadur Singh Purvanchal University. BA, BSc, BCA, MA Degree Courses.",
    url: "https://www.nymjnp.org",
    siteName: "Navyug P.G. College",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero_navyug.jpg",
        width: 1200,
        height: 630,
        alt: "Navyug P.G. College Campus Gate",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text">
        {/* Scroll Progress Bar at very top */}
        <ScrollProgress />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Dynamic page content container */}
        <div className="flex-grow flex flex-col">
          {children}
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Floating Scroll To Top button */}
        <ScrollToTop />

        {/* Dynamic Entrance Announcement Popup */}
        <AnnouncementPopup />
      </body>
    </html>
  );
}
