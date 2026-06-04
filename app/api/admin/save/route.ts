import { writeFileSync, readFileSync } from "fs";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";

const CONTENT_FILE = join(process.cwd(), "public", "admin-content.json");
const PASSWORD = process.env.ADMIN_PASSWORD || "ductape2026";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password, data } = body;

    // Verify password
    if (password !== PASSWORD) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Save to file
    writeFileSync(CONTENT_FILE, JSON.stringify(data, null, 2), "utf-8");

    return NextResponse.json({ success: true, message: "Changes saved!" });
  } catch (error) {
    console.error("Error saving content:", error);
    return NextResponse.json(
      { error: "Failed to save changes" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (!require("fs").existsSync(CONTENT_FILE)) {
      return NextResponse.json({});
    }
    const content = readFileSync(CONTENT_FILE, "utf-8");
    return NextResponse.json(JSON.parse(content));
  } catch (error) {
    return NextResponse.json({});
  }
}
