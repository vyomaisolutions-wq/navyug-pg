import { NextResponse } from "next/server";
import { getAdminFromRequest } from "@/utils/auth";

const DEFAULT_BANNER_TITLE = "Admissions Open for Session 2026-27";
const DEFAULT_POPUP_TITLE = "Admissions Open for Session 2026-27";
const DEFAULT_POPUP_CONTENT =
  "Welcome to Navyug P.G. College, Madhupur, Jaunpur. Online admission registration forms for session 2026-27 are now open for BA, BSc, BCA, and MA degree courses.";
const DEFAULT_POPUP_BTN_TEXT = "Apply For Admission";
const DEFAULT_POPUP_BTN_LINK = "/admissions";

export async function GET() {
  return NextResponse.json({
    settings: {
      bannerTitle: DEFAULT_BANNER_TITLE,
      bannerEnabled: true,
      popupEnabled: true,
      popupTitle: DEFAULT_POPUP_TITLE,
      popupContent: DEFAULT_POPUP_CONTENT,
      popupImage: "/poster_navyug.jpg",
      popupButtonText: DEFAULT_POPUP_BTN_TEXT,
      popupButtonLink: DEFAULT_POPUP_BTN_LINK,
    },
  });
}

export async function PUT(request: Request) {
  const admin = await getAdminFromRequest(request);
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized access. Please log in as admin." }, { status: 401 });
  }
  return NextResponse.json(
    { error: "Site is running in static mode. Database writes are disabled." },
    { status: 503 }
  );
}
