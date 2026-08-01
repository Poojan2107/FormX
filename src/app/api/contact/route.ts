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
    const name = str(body?.name);
    const email = str(body?.email);
    const message = str(body?.message);
    const phone = str(body?.phone);
    const company = str(body?.company);
    const services = Array.isArray(body?.services) ? body.services : [];

    if (body?.website) {
      return NextResponse.json({ ok: true });
    }

    if (name.length < 2 || !isEmail(email) || message.length < 10) {
      return NextResponse.json(
        { ok: false, error: "Invalid payload" },
        { status: 400 },
      );
    }

    await sendEmail({
      replyTo: email,
      subject: `[FormX Contact] ${name}`,
      title: "New project enquiry",
      rows: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Phone", value: phone || "—" },
        { label: "Company", value: company || "—" },
        { label: "Services interested", value: services.length ? services.join(", ") : "—" },
        { label: "Message", value: message.slice(0, 500) },
      ],
    });

    return NextResponse.json({ ok: true, message: "Enquiry received successfully" });
  } catch {
    return NextResponse.json({ ok: false, error: "Internal server error" }, { status: 500 });
  }
}
