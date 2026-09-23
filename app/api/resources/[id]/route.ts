import { NextResponse } from "next/server";
import { getAdminFromRequest } from "@/utils/auth";

export async function DELETE(
  request: Request,
  { params: _params }: { params: Promise<{ id: string }> }
) {
  const admin = await getAdminFromRequest(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }
  return NextResponse.json(
    { error: "Site is running in static mode. Database writes are disabled." },
    { status: 503 }
  );
}
