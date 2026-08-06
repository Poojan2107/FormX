import { redirect } from "next/navigation";

/** News detail not published — Practice hub holds brochure-true content */
export default function NewsDetailPage() {
  redirect("/knowledge-center");
}
