import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body?.email) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }
    console.info("[FormX newsletter]", body.email);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
