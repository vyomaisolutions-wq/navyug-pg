import { NextResponse } from "next/server";
import { getAdminFromRequest } from "@/utils/auth";

export async function GET(request: Request) {
  try {
    const decoded = await getAdminFromRequest(request);

    if (!decoded) {
      return NextResponse.json({ error: "Unauthorized. Please log in." }, { status: 401 });
    }

    const userPayload = {
      _id: decoded.id || "admin-default-id",
      id: decoded.id || "admin-default-id",
      name: decoded.name || "Super Administrator",
      email: decoded.email || "nym.jnp@gmail.com",
      mobile: decoded.mobile || "+91 7617755655",
    };

    return NextResponse.json({ user: userPayload });
  } catch (error: any) {
    console.error("Get Profile Error:", error);
    return NextResponse.json({ error: error.message || "Something went wrong" }, { status: 500 });
  }
}
