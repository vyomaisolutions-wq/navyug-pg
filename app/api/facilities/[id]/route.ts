import { NextResponse } from "next/server";
import { facilitiesData } from "@/data/facilities";
import { getAdminFromRequest } from "@/utils/auth";

const STATIC_MODE_ERROR = { error: "Site is running in static mode. Database writes are disabled." };

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const item = facilitiesData.find((f: any) => f._id === id || f.id === id);
  if (item) return NextResponse.json({ facility: item });
  return NextResponse.json({ error: "Facility not found" }, { status: 404 });
}

export async function PUT(
  request: Request,
  { params: _params }: { params: Promise<{ id: string }> }
) {
  const admin = await getAdminFromRequest(request);
  if (!admin) return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  return NextResponse.json(STATIC_MODE_ERROR, { status: 503 });
}

export async function DELETE(
  request: Request,
  { params: _params }: { params: Promise<{ id: string }> }
) {
  const admin = await getAdminFromRequest(request);
  if (!admin) return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  return NextResponse.json(STATIC_MODE_ERROR, { status: 503 });
}
