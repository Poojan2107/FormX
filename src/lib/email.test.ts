// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { esc, sendEmail } from "./email";

const fetchMock = vi.fn();

beforeEach(() => {
  fetchMock.mockReset();
  vi.stubGlobal("fetch", fetchMock);
  delete process.env.RESEND_API_KEY;
  delete process.env.CONTACT_EMAIL;
  delete process.env.RESEND_FROM_EMAIL;
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("esc", () => {
  it("escapes HTML entities safely", () => {
    expect(esc(`<b>"x" & 'y'</b>`)).toBe("&lt;b&gt;&quot;x&quot; &amp; &#39;y&#39;&lt;/b&gt;");
  });
});

describe("sendEmail", () => {
  it("logs and resolves ok without a key (dev fallback)", async () => {
    const result = await sendEmail({
      subject: "Test",
      title: "Test title",
      rows: [{ label: "Name", value: "Jane" }],
    });
    expect(result).toEqual({ ok: true, delivered: false });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("posts to Resend with auth and reply_to when configured", async () => {
    process.env.RESEND_API_KEY = "test-key";
    fetchMock.mockResolvedValue(new Response("{}", { status: 200 }));

    const result = await sendEmail({
      replyTo: "sender@example.com",
      subject: "Hello",
      title: "Hi",
      rows: [{ label: "Name", value: "Jane" }],
    });

    expect(result.delivered).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, opts] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.resend.com/emails");
    expect(opts.method).toBe("POST");
    expect(opts.headers.Authorization).toBe("Bearer test-key");
    const payload = JSON.parse(opts.body);
    expect(payload.to).toEqual(["inquiry@formxconsultants.com"]);
    expect(payload.reply_to).toEqual(["sender@example.com"]);
    expect(payload.subject).toBe("Hello");
    expect(payload.text).toContain("Name: Jane");
  });

  it("honors CONTACT_EMAIL as the delivery inbox", async () => {
    process.env.RESEND_API_KEY = "test-key";
    process.env.CONTACT_EMAIL = "ops@formxconsultants.com";
    fetchMock.mockResolvedValue(new Response("{}", { status: 200 }));

    await sendEmail({ subject: "s", title: "t", rows: [] });
    const payload = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(payload.to).toEqual(["ops@formxconsultants.com"]);
  });

  it("throws when Resend returns an error status", async () => {
    process.env.RESEND_API_KEY = "test-key";
    fetchMock.mockResolvedValue(new Response("nope", { status: 401 }));

    await expect(sendEmail({ subject: "s", title: "t", rows: [] })).rejects.toThrow(
      "Email delivery failed (401)",
    );
  });
});
