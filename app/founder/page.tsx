import type { Metadata } from "next";
import FounderClient from "./FounderClient";

export const metadata: Metadata = {
  title: "Founder's Vision & Legacy | Late Prof. Dr. Anil Kumar Dubey",
  description:
    "Learn about Late Prof. (Dr.) Anil Kumar Dubey, Founder of Navyug P.G. College, Madhupur, Jaunpur. Ex-Professor BHU Varanasi and Ex-Member UPHESC.",
};

export default function FounderPage() {
  return <FounderClient />;
}
