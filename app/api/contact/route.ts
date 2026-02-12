import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();

  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
    receivedAt: new Date().toISOString(),
  };

  console.log("[contact-inquiry]", payload);

  return NextResponse.redirect(new URL("/contact?sent=1", request.url));
}
