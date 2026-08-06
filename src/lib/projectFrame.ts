import type { Project } from "@/data/projects";

/** Brochure-honest fit: landscape/contain first; portrait towers cover from top. */
export function projectFrameFit(project: Project): "contain" | "cover" {
  const portrait = project.assets.orientation === "portrait";
  if (portrait) return "cover";
  return project.assets.frame ?? "contain";
}

export function projectObjectPosition(project: Project): string {
  return project.assets.orientation === "portrait" ? "center top" : "center center";
}
