import { redirect } from "next/navigation";

/** Founder: Sectors removed — keep slug routes from 404ing old links */
type Props = { params: Promise<{ slug: string }> };

export default async function SectorDetailRedirect({ params }: Props) {
  await params;
  redirect("/services");
}
