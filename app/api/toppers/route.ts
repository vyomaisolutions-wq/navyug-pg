import { NextResponse } from "next/server";
import { toppersData } from "@/data/toppers";
import { getAdminFromRequest } from "@/utils/auth";

export async function GET() {
  const flattened = toppersData.flatMap((y) =>
    y.students.map((s) => ({
      _id: s.id,
      name: s.name,
      year: y.year,
      board: s.board,
      rank: s.rank,
      rankType: s.rankType,
      percentage: s.percentage,
      photo: s.photo,
      category: "Rank Holder",
    }))
  );
  return NextResponse.json({ toppers: flattened });
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
