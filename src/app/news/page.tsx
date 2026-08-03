import { redirect } from "next/navigation";

/** News feed not published yet — Insights hub holds practice content */
export default function NewsPage() {
  redirect("/knowledge-center");
}
