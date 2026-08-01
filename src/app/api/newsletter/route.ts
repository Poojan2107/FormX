import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

function isEmail(v: unknown) {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (body?.website) {
      return NextResponse.json({ ok: true });
    }

    if (!isEmail(email)) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    await sendEmail({
      subject: `[FormX Newsletter] ${email}`,
      title: "New newsletter subscriber",
      rows: [{ label: "Email", value: email }],
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
