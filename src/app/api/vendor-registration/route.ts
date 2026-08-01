import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

function isEmail(v: unknown) {
  return typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function str(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const company = str(body?.company);
    const contact = str(body?.contact);
    const email = str(body?.email);
    const phone = str(body?.phone);
    const category = str(body?.category);
    const city = str(body?.city);
    const note = str(body?.note);

    if (body?.website) {
      return NextResponse.json({ ok: true });
    }

    if (company.length < 2 || contact.length < 2 || !isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid registration payload" },
        { status: 400 },
      );
    }

    await sendEmail({
      replyTo: email,
      subject: `[FormX Vendor] ${company}`,
      title: "New vendor registration",
      rows: [
        { label: "Company", value: company },
        { label: "Contact person", value: contact },
        { label: "Email", value: email },
        { label: "Phone", value: phone || "—" },
        { label: "Category", value: category || "—" },
        { label: "City / Base", value: city || "—" },
        { label: "Capability note", value: note ? note.slice(0, 300) : "—" },
      ],
    });

    return NextResponse.json({
      ok: true,
      message: "Vendor registration received",
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
