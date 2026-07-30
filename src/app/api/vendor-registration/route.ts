import { NextResponse } from "next/server";

function isEmail(v: unknown) {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const company = String(body?.company || "").trim();
    const contact = String(body?.contact || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const category = String(body?.category || "").trim();
    const city = String(body?.city || "").trim();
    const note = String(body?.note || "").trim();

    if (company.length < 2 || contact.length < 2 || !isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid registration payload" },
        { status: 400 },
      );
    }

    console.info("[FormX vendor registration]", {
      company,
      contact,
      email,
      phone,
      category,
      city,
      note: note.slice(0, 300),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "Vendor registration received",
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
