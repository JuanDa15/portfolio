import type { IProject } from "../types"

export async function getAllProjects(locale: string = 'es') {
  const resp = await fetch('http://localhost:4321/data/projects.json')
  const data = await resp.json()
  return data[locale] as IProject[]
}

export async function getProjectById(id: string, locale: string = 'es') {
  const projects = await getAllProjects(locale);
  const project = projects.find(p => p.id === Number(id))
  return project
}