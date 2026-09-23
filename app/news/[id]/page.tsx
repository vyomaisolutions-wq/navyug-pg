import React from "react";
import NewsDetailClient from "./NewsDetailClient";
import { newsData } from "@/data/news";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = newsData.find((p) => p.id === id);

  if (post) {
    return {
      title: `${post.title} | Navyug P.G. College`,
      description: post.summary || "Official news bulletin from Navyug P.G. College, Madhupur, Jaunpur.",
      openGraph: {
        title: `${post.title} | Navyug P.G. College`,
        description: post.summary,
        images: post.image ? [{ url: post.image }] : [],
      },
    };
  }

  return {
    title: "News & Announcement Details | Navyug P.G. College",
    description: "Official news bulletin and announcement details from Navyug P.G. College, Madhupur, Jaunpur.",
  };
}

export default function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <NewsDetailClient params={params} />;
}
