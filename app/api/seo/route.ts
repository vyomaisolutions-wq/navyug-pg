import { NextResponse } from "next/server";
import { DEFAULT_PAGE_SEO } from "@/utils/seo";
import { getAdminFromRequest } from "@/utils/auth";

export async function GET() {
  const result: Record<string, any> = {};
  for (const slug of Object.keys(DEFAULT_PAGE_SEO)) {
    const defaultItem = DEFAULT_PAGE_SEO[slug];
    result[slug] = {
      pageSlug: slug,
      pageName: defaultItem.pageName,
      title: defaultItem.title,
      description: defaultItem.description,
      keywords: defaultItem.keywords,
      updatedAt: null,
    };
  }
  return NextResponse.json({ seo: result });
}

export async function PUT(request: Request) {
  const admin = await getAdminFromRequest(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access. Please log in as admin." }, { status: 401 });
  }
  return NextResponse.json(
    { error: "Site is running in static mode. Database writes are disabled." },
    { status: 503 }
  );
}
