const RESEND_URL = "https://api.resend.com/emails";

const DEFAULT_TO = "inquiry@formxconsultants.com";

export function esc(v: string): string {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function resolveTo(): string {
  return process.env.CONTACT_EMAIL || DEFAULT_TO;
}

function resolveFrom(): string {
  return process.env.RESEND_FROM_EMAIL || "FormX Consultants <onboarding@resend.dev>";
}

function shell(title: string, rows: { label: string; value: string }[]): string {
  const rowsHtml = rows
    .map(
      (r) =>
        `<tr><td style="padding:6px 0;font-weight:600;color:#3a3a3a;white-space:nowrap;vertical-align:top;padding-right:16px">${esc(r.label)}</td><td style="padding:6px 0;color:#151515;white-space:pre-wrap">${esc(r.value)}</td></tr>`,
    )
    .join("");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4"><tr><td style="padding:32px 16px">
  <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="margin:0 auto;background:#ffffff;border-top:4px solid #de3024">
    <tr><td style="padding:24px 32px;border-bottom:1px solid #ececec"><span style="font-size:18px;font-weight:700;letter-spacing:0.06em;color:#151515">FORM<span style="color:#de3024">X</span></span></td></tr>
    <tr><td style="padding:28px 32px 12px"><h1 style="margin:0 0 8px;font-size:20px;color:#151515">${esc(title)}</h1></td></tr>
    <tr><td style="padding:0 32px 24px"><table role="presentation" cellpadding="0" cellspacing="0" width="100%">${rowsHtml}</table></td></tr>
    <tr><td style="padding:16px 32px;background:#1a1a1a;color:#9ca3af;font-size:12px">FormX Consultants · formxconsultants.com</td></tr>
  </table></td></tr></table>`;
}

export async function sendEmail({
  to = resolveTo(),
  replyTo,
  subject,
  title,
  rows,
}: {
  to?: string;
  replyTo?: string;
  subject: string;
  title: string;
  rows: { label: string; value: string }[];
}) {
  const text = `${title}\n\n${rows.map((r) => `${r.label}: ${r.value}`).join("\n")}\n\n— FormX Consultants`;
  const html = shell(title, rows);

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.info(`[FormX email (unconfigured) → ${to}] ${subject}\n${text}`);
    return { ok: true as const, delivered: false as const };
  }

  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: resolveFrom(),
      to: [to],
      reply_to: replyTo ? [replyTo] : [to],
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error(`[FormX email failed] ${res.status} ${detail}`);
    throw new Error(`Email delivery failed (${res.status})`);
  }
  return { ok: true as const, delivered: true as const };
}
