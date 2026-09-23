import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Site is running in static mode. Seed is not available." });
}

export async function POST() {
  return NextResponse.json({ message: "Site is running in static mode. Seed is not available." });
}
