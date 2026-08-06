import { redirect } from "next/navigation";

/** Vendor registration not in public IA — partners page is the brochure record */
export default function VendorRegistrationPage() {
  redirect("/clients");
}
