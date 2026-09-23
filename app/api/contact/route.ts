import { NextResponse } from "next/server";
import { getAdminFromRequest } from "@/utils/auth";

export async function GET(request: Request) {
  const admin = await getAdminFromRequest(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }
  return NextResponse.json({ contacts: [] });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone number, and message are required." },
        { status: 400 }
      );
    }

    // Static mode: acknowledge submission without saving
    return NextResponse.json(
      { message: "Contact inquiry submitted successfully!", contact: { _id: "local-c-" + Date.now(), ...body } },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("POST Contact Error:", error);
    return NextResponse.json({ error: error.message || "Failed to submit contact inquiry" }, { status: 500 });
  }
}
