import { NextResponse } from "next/server";
import { galleryData } from "@/data/gallery";
import { getAdminFromRequest } from "@/utils/auth";

export async function GET() {
  return NextResponse.json({ items: galleryData });
}

export async function POST(request: Request) {
  const decoded = await getAdminFromRequest(request);
  if (!decoded) {
    return NextResponse.json({ error: "Unauthorized. Please log in as admin." }, { status: 401 });
  }
  return NextResponse.json(
    { error: "Site is running in static mode. Database writes are disabled." },
    { status: 503 }
  );
}
