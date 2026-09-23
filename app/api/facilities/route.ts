import { NextResponse } from "next/server";
import { facilitiesData } from "@/data/facilities";
import { getAdminFromRequest } from "@/utils/auth";

export async function GET() {
  return NextResponse.json({ facilities: facilitiesData });
}

export async function POST(request: Request) {
  const admin = await getAdminFromRequest(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access. Please log in as admin." }, { status: 401 });
  }
  return NextResponse.json(
    { error: "Site is running in static mode. Database writes are disabled." },
    { status: 503 }
  );
}
