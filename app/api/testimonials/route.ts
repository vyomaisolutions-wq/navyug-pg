import { NextResponse } from "next/server";
import { testimonialsData } from "@/data/testimonials";
import { getAdminFromRequest } from "@/utils/auth";

export async function GET() {
  return NextResponse.json({ testimonials: testimonialsData });
}

export async function POST(request: Request) {
  const admin = await getAdminFromRequest(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized. Please log in as admin." }, { status: 401 });
  }
  return NextResponse.json(
    { error: "Site is running in static mode. Database writes are disabled." },
    { status: 503 }
  );
}
