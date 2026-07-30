import { NextResponse } from "next/server";

function isEmail(v: unknown) {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const message = String(body?.message || "").trim();
    const phone = String(body?.phone || "").trim();
    const company = String(body?.company || "").trim();
    const services = Array.isArray(body?.services) ? body.services : [];

    if (name.length < 2 || !isEmail(email) || message.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Invalid payload" },
        { status: 400 },
      );
    }

    console.info("[FormX contact enquiry]", {
      name,
      email,
      company,
      phone,
      services,
      message: message.slice(0, 500),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, message: "Enquiry received successfully" });
  } catch {
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}
