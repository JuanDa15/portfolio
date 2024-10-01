import type { IProject } from "../types"
import projectsData from 'public/data/projects.json';

export async function getAllProjects(locale: string = 'es') {
  const data: Record<string, any> = projectsData;
  return data[locale] as IProject[]
}

export async function getProjectById(id: string, locale: string = 'es') {
  const projects = await getAllProjects(locale);
  const project = projects.find(p => p.id === Number(id))
  return project
}