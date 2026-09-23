import { NextResponse } from "next/server";
import { galleryData } from "@/data/gallery";
import { getAdminFromRequest } from "@/utils/auth";

const STATIC_MODE_ERROR = { error: "Site is running in static mode. Database writes are disabled." };

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const item = galleryData.find((g: any) => g._id === id || g.id === id);
  if (item) return NextResponse.json({ item });
  return NextResponse.json({ error: "Gallery item not found" }, { status: 404 });
}

export async function PUT(
  request: Request,
  { params: _params }: { params: Promise<{ id: string }> }
) {
  const decoded = await getAdminFromRequest(request);
  if (!decoded) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  return NextResponse.json(STATIC_MODE_ERROR, { status: 503 });
}

export async function DELETE(
  request: Request,
  { params: _params }: { params: Promise<{ id: string }> }
) {
  const decoded = await getAdminFromRequest(request);
  if (!decoded) return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  return NextResponse.json(STATIC_MODE_ERROR, { status: 503 });
}
