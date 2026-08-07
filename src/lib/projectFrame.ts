import type { Project } from "@/data/projects";

export function projectFrameFit(_project?: Project): "contain" | "cover" {
  return "cover";
}

export function projectObjectPosition(project: Project): string {
  return project.assets.orientation === "portrait" ? "center top" : "center center";
}
