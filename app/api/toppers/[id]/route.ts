import { NextResponse } from "next/server";
import { getAdminFromRequest } from "@/utils/auth";

const STATIC_MODE_ERROR = { error: "Site is running in static mode. Database writes are disabled." };

export async function PUT(
  request: Request,
  { params: _params }: { params: Promise<{ id: string }> }
) {
  const admin = await getAdminFromRequest(request);
  if (!admin) return NextResponse.json({ error: "Unauthorized access. Please log in as admin." }, { status: 401 });
  return NextResponse.json(STATIC_MODE_ERROR, { status: 503 });
}

export async function DELETE(
  request: Request,
  { params: _params }: { params: Promise<{ id: string }> }
) {
  const admin = await getAdminFromRequest(request);
  if (!admin) return NextResponse.json({ error: "Unauthorized access. Please log in as admin." }, { status: 401 });
  return NextResponse.json(STATIC_MODE_ERROR, { status: 503 });
}
