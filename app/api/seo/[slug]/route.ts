import { NextResponse } from "next/server";
import { DEFAULT_PAGE_SEO } from "@/utils/seo";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const slugLower = slug.toLowerCase();
  const fallback = DEFAULT_PAGE_SEO[slugLower] || DEFAULT_PAGE_SEO.home;

  return NextResponse.json({
    seo: {
      pageSlug: slugLower,
      pageName: fallback.pageName,
      title: fallback.title,
      description: fallback.description,
      keywords: fallback.keywords,
      updatedAt: null,
    },
  });
}
