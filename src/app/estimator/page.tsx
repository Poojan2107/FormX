import { redirect } from "next/navigation";

/** Estimator held off public IA — services covers scope */
export default function EstimatorPage() {
  redirect("/services");
}
