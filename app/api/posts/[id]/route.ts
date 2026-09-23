import { NextResponse } from "next/server";
import { newsData } from "@/data/news";
import { getAdminFromRequest } from "@/utils/auth";

const STATIC_MODE_ERROR = { error: "Site is running in static mode. Database writes are disabled." };

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const post = newsData.find((p: any) => p._id === id || p.id === id);
  if (post) return NextResponse.json({ post });
  return NextResponse.json({ error: "Post not found" }, { status: 404 });
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
