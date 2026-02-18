export const dynamic = "force-dynamic"

import { getProjects } from "@/lib/db/dashboard-queries"
import ProjectsClient from "./projects-client"

export default async function ProjectsPage() {
  const projects = await getProjects()

  return <ProjectsClient projects={projects} />
}
