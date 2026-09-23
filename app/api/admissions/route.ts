import { NextResponse } from "next/server";
import { getAdminFromRequest } from "@/utils/auth";

export async function GET(request: Request) {
  const admin = await getAdminFromRequest(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }
  return NextResponse.json({ admissions: [] });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { studentName, phone, targetClass } = body;

    if (!studentName || !phone || !targetClass) {
      return NextResponse.json(
        { error: "Student name, phone number, and target class are required." },
        { status: 400 }
      );
    }

    // Static mode: acknowledge submission without saving
    return NextResponse.json(
      { message: "Admission application submitted successfully!", admission: { _id: "local-adm-" + Date.now(), ...body } },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST Admission Error:", error);
    return NextResponse.json({ error: error.message || "Failed to submit admission application" }, { status: 500 });
  }
}
