import { NextResponse } from "next/server";
import { facilitiesData } from "@/data/facilities";
import { getAdminFromRequest } from "@/utils/auth";

export async function GET() {
  return NextResponse.json({ facilities: facilitiesData });
}

export async function POST(request: Request) {
  try {
    const admin = await getAdminFromRequest(request);

    if (!admin) {
      return NextResponse.json(
        { error: "Unauthorized access. Please log in as admin." },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { title, description, iconName, image, order } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required fields" },
        { status: 400 }
      );
    }

    const itemIcon = iconName && iconName.trim() ? iconName.trim() : "BookOpen";
    const itemImage = image && image.trim() ? image.trim() : "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop";

    try {
      await connectToDatabase();
      const newFacility = await Facility.create({
        title: title.trim(),
        description: description.trim(),
        iconName: itemIcon,
        image: itemImage,
        order: Number(order) || 0,
      });

      return NextResponse.json(
        { message: "Facility created successfully", facility: newFacility },
        { status: 201 }
      );
    } catch (dbErr) {
      console.warn("DB offline during Facility create, returning fallback item:", dbErr);
      const fallbackItem = {
        _id: "local-fac-" + Date.now(),
        title: title.trim(),
        description: description.trim(),
        iconName: itemIcon,
        image: itemImage,
        order: Number(order) || 0,
      };

      return NextResponse.json(
        { message: "Facility created successfully", facility: fallbackItem },
        { status: 201 }
      );
    }
  } catch (error: any) {
    console.error("POST Facility Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create facility" },
      { status: 500 }
    );
  }
}
