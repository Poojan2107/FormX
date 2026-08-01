const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export function rateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const prev = (hits.get(ip) ?? []).filter((t) => t > windowStart);

  if (prev.length >= MAX_REQUESTS) {
    hits.set(ip, prev);
    return true;
  }

  prev.push(now);
  hits.set(ip, prev);

  if (hits.size > 1000) {
    for (const [key, stamps] of hits) {
      if (!stamps.some((t) => t > windowStart)) hits.delete(key);
    }
  }

  return false;
}
