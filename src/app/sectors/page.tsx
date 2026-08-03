import { redirect } from "next/navigation";

/** Founder: Sectors removed from primary navigation — send visitors to services */
export default function SectorsPage() {
  redirect("/services");
}
