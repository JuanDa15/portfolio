import type { IProject } from "../types"

export async function getAllProjects() {
  const resp = await fetch('http://localhost:4321/data/projects.json')
  const data = await resp.json()
  return data as IProject[]
}

export async function getProjectById(id: string) {
  const projects = await getAllProjects();
  const project = projects.find(p => p.id === Number(id))
  return project
}