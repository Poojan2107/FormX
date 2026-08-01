import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";
import { isContactValid } from "@/lib/formValidation";
import { clientIp, rateLimited } from "@/lib/rateLimit";

function str(v: unknown) {
  return typeof v === "string" ? v.trim() : "";
}

export async function POST(request: Request) {
  try {
    if (rateLimited(clientIp(request))) {
      return NextResponse.json(
        { ok: false, error: "Too many requests" },
        { status: 429 },
      );
    }
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

    if (!isContactValid({ name, email, message })) {
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
