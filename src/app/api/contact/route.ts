import { NextResponse } from "next/server";

/** Handover: wire to Resend / SMTP / CRM. Currently accepts and acknowledges. */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.email && !body?.message) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }
    // Future: await resend.emails.send(...)
    console.info("[FormX contact]", {
      name: body.name,
      email: body.email,
      company: body.company,
      phone: body.phone,
      message: body.message?.slice?.(0, 200),
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
